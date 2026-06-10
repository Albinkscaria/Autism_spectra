"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { VideoRoom } from "@/components/video/VideoRoom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConsultationPage({
  params,
}: {
  params: Promise<{ reference: string }>;
}) {
  const { reference } = use(params);
  const router = useRouter();
  const [hasJoined, setHasJoined] = useState(false);

  const { data: appointment, isLoading } = trpc.appointment.getByReference.useQuery({
    reference,
  });

  const handleLeave = () => {
    router.push(`/booking/confirmation?ref=${reference}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Loading consultation...</p>
      </div>
    );
  }

  if (!appointment) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Consultation not found.</p>
      </div>
    );
  }

  if (!appointment.videoRoomUrl) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Video Consultation Not Available</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-gray-700 mb-4">
              This appointment is not configured for video consultation.
            </p>
            <Button onClick={() => router.push("/")}>Return to Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const appointmentTime = new Date(appointment.scheduledAt);
  const now = new Date();
  const timeDiff = appointmentTime.getTime() - now.getTime();
  const minutesUntil = Math.floor(timeDiff / (1000 * 60));

  // Allow joining 5 minutes before scheduled time
  const canJoin = minutesUntil <= 5;

  if (!hasJoined) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Video Consultation Waiting Room</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Appointment Details</h3>
              <p className="text-base text-gray-900">
                {appointment.doctor.user.fullName} - {appointment.doctor.specialty}
              </p>
              <p className="text-base text-gray-600">
                {appointmentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-base text-gray-600">
                {appointmentTime.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>

            {canJoin ? (
              <div>
                <p className="text-base text-gray-700 mb-4">
                  You can now join the video consultation.
                </p>
                <Button onClick={() => setHasJoined(true)} size="lg" className="w-full">
                  Join Video Call
                </Button>
              </div>
            ) : (
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
                <p className="text-base text-gray-700">
                  You can join the call 5 minutes before your scheduled time.
                </p>
                <p className="text-base text-gray-600 mt-2">
                  Time until you can join: {minutesUntil} minutes
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Before You Join
              </h3>
              <ul className="space-y-2 text-base text-gray-700">
                <li>• Make sure you're in a quiet, well-lit space</li>
                <li>• Test your camera and microphone</li>
                <li>• Have any questions or concerns ready</li>
                <li>• Keep your booking reference handy: {appointment.bookingReference}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-4">
        <VideoRoom
          roomUrl={appointment.videoRoomUrl}
          participantName={appointment.guestName}
          onLeave={handleLeave}
        />
      </div>
    </div>
  );
}
