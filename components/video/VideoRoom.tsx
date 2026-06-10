"use client";

import { useEffect, useRef, useState } from "react";
import DailyIframe, { DailyCall } from "@daily-co/daily-js";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, PhoneOff, Monitor } from "lucide-react";

interface VideoRoomProps {
  roomUrl: string;
  participantName: string;
  onLeave: () => void;
}

export function VideoRoom({ roomUrl, participantName, onLeave }: VideoRoomProps) {
  const callFrameRef = useRef<DailyCall | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [callState, setCallState] = useState<string>("loading");

  useEffect(() => {
    if (!containerRef.current) return;

    // Create Daily call frame
    const callFrame = DailyIframe.createFrame(containerRef.current, {
      showLeaveButton: false,
      showFullscreenButton: true,
      iframeStyle: {
        width: "100%",
        height: "100%",
        border: "0",
        borderRadius: "8px",
      },
    });

    callFrameRef.current = callFrame;

    // Join the call
    callFrame
      .join({
        url: roomUrl,
        userName: participantName,
      })
      .then(() => {
        setCallState("joined");
      })
      .catch((error) => {
        console.error("Failed to join call:", error);
        setCallState("error");
      });

    // Event listeners
    callFrame.on("left-meeting", () => {
      setCallState("left");
      onLeave();
    });

    callFrame.on("error", (error) => {
      console.error("Call error:", error);
      setCallState("error");
    });

    // Cleanup
    return () => {
      if (callFrame) {
        callFrame.destroy();
      }
    };
  }, [roomUrl, participantName, onLeave]);

  const toggleAudio = () => {
    if (callFrameRef.current) {
      callFrameRef.current.setLocalAudio(!isAudioMuted);
      setIsAudioMuted(!isAudioMuted);
    }
  };

  const toggleVideo = () => {
    if (callFrameRef.current) {
      callFrameRef.current.setLocalVideo(!isVideoOff);
      setIsVideoOff(!isVideoOff);
    }
  };

  const toggleScreenShare = async () => {
    if (callFrameRef.current) {
      if (isScreenSharing) {
        await callFrameRef.current.stopScreenShare();
        setIsScreenSharing(false);
      } else {
        await callFrameRef.current.startScreenShare();
        setIsScreenSharing(true);
      }
    }
  };

  const leaveCall = () => {
    if (callFrameRef.current) {
      callFrameRef.current.leave();
    }
  };

  if (callState === "error") {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">Failed to join video call</p>
          <Button onClick={onLeave}>Return</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Video Container */}
      <div ref={containerRef} className="flex-1 bg-gray-900 rounded-lg overflow-hidden" />

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 p-6 bg-white border-t border-gray-200">
        <Button
          variant={isAudioMuted ? "default" : "outline"}
          size="icon"
          onClick={toggleAudio}
          className="h-12 w-12"
          aria-label={isAudioMuted ? "Unmute" : "Mute"}
        >
          {isAudioMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>

        <Button
          variant={isVideoOff ? "default" : "outline"}
          size="icon"
          onClick={toggleVideo}
          className="h-12 w-12"
          aria-label={isVideoOff ? "Turn on camera" : "Turn off camera"}
        >
          {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
        </Button>

        <Button
          variant={isScreenSharing ? "default" : "outline"}
          size="icon"
          onClick={toggleScreenShare}
          className="h-12 w-12"
          aria-label={isScreenSharing ? "Stop sharing" : "Share screen"}
        >
          <Monitor className="h-5 w-5" />
        </Button>

        <Button
          variant="default"
          size="icon"
          onClick={leaveCall}
          className="h-12 w-12 bg-red-600 hover:bg-red-700"
          aria-label="Leave call"
        >
          <PhoneOff className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
