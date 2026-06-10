export interface CreateRoomParams {
  appointmentId: string;
  scheduledTime: Date;
}

export async function createDailyRoom(params: CreateRoomParams): Promise<{ roomUrl: string; roomName: string }> {
  const { appointmentId, scheduledTime } = params;

  // For now, return a placeholder since Daily.co requires API key
  // When you add your Daily.co API key, this will create actual rooms
  
  if (!process.env.DAILY_API_KEY || process.env.DAILY_API_KEY === 'placeholder') {
    // Return a mock room URL for development
    const roomName = `auticare-${appointmentId.slice(0, 8)}`;
    return {
      roomUrl: `https://auticare.daily.co/${roomName}`,
      roomName,
    };
  }

  try {
    // Create room with Daily.co API
    const response = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DAILY_API_KEY}`,
      },
      body: JSON.stringify({
        name: `auticare-${appointmentId.slice(0, 8)}`,
        privacy: 'private',
        properties: {
          start_video_off: false,
          start_audio_off: false,
          enable_chat: true,
          enable_screenshare: true,
          enable_recording: 'cloud',
          exp: Math.floor(scheduledTime.getTime() / 1000) + (2 * 60 * 60), // Expires 2 hours after scheduled time
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Daily.co API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      roomUrl: data.url,
      roomName: data.name,
    };
  } catch (error) {
    console.error('Failed to create Daily.co room:', error);
    // Fallback to mock URL
    const roomName = `auticare-${appointmentId.slice(0, 8)}`;
    return {
      roomUrl: `https://auticare.daily.co/${roomName}`,
      roomName,
    };
  }
}

export async function deleteRoom(roomName: string): Promise<void> {
  if (!process.env.DAILY_API_KEY || process.env.DAILY_API_KEY === 'placeholder') {
    console.log(`Mock: Would delete room ${roomName}`);
    return;
  }

  try {
    const response = await fetch(`https://api.daily.co/v1/rooms/${roomName}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${process.env.DAILY_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete room: ${response.statusText}`);
    }

    console.log(`Room ${roomName} deleted successfully`);
  } catch (error) {
    console.error('Failed to delete Daily.co room:', error);
  }
}
