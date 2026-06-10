'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { createClient } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, MessageCircle, User } from 'lucide-react';

interface Profile {
  full_name: string;
  email: string;
  avatar_url?: string;
}

interface Session {
  id: string;
  session_date: string;
  duration_minutes: number;
  session_notes?: string;
  status: string;
  therapists: {
    full_name: string;
  };
}

interface ProgressData {
  recorded_at: string;
  score: number;
  milestone: string;
}

export default function PatientDashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [upcomingSessions, setUpcomingSessions] = useState<Session[]>([]);
  const [recentSessions, setRecentSessions] = useState<Session[]>([]);
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [therapist, setTherapist] = useState<{ full_name: string; specialty: string } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    if (!user) return;

    // Load profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (profileData) setProfile(profileData);

    // Load upcoming sessions
    const { data: upcomingData } = await supabase
      .from('sessions')
      .select(`
        *,
        therapists (
          full_name
        )
      `)
      .eq('patient_id', (
        await supabase
          .from('patients')
          .select('id')
          .eq('user_id', user.id)
          .single()
      ).data?.id)
      .eq('status', 'scheduled')
      .gte('session_date', new Date().toISOString())
      .order('session_date', { ascending: true })
      .limit(3);

    if (upcomingData) setUpcomingSessions(upcomingData);

    // Load recent sessions
    const { data: recentData } = await supabase
      .from('sessions')
      .select(`
        *,
        therapists (
          full_name
        )
      `)
      .eq('patient_id', (
        await supabase
          .from('patients')
          .select('id')
          .eq('user_id', user.id)
          .single()
      ).data?.id)
      .eq('status', 'completed')
      .order('session_date', { ascending: false })
      .limit(3);

    if (recentData) setRecentSessions(recentData);

    // Load progress data
    const { data: progress } = await supabase
      .from('progress_tracking')
      .select('recorded_at, score, milestone')
      .eq('patient_id', (
        await supabase
          .from('patients')
          .select('id')
          .eq('user_id', user.id)
          .single()
      ).data?.id)
      .order('recorded_at', { ascending: true });

    if (progress) setProgressData(progress);

    // Load assigned therapist
    const { data: patientData } = await supabase
      .from('patients')
      .select(`
        assigned_therapist_id,
        therapists (
          user_id,
          profiles!inner (
            full_name
          ),
          specialty
        )
      `)
      .eq('user_id', user.id)
      .single();

    if (patientData?.therapists) {
      setTherapist({
        full_name: patientData.therapists[0].profiles[0].full_name,
        specialty: patientData.therapists[0].specialty,
      });
    }
  };

  if (!profile) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={profile.avatar_url} />
              <AvatarFallback>
                {profile.full_name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {profile.full_name}
              </h1>
              <p className="text-gray-600">Patient Dashboard</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-[#1D9E75]" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">
                            {new Date(session.session_date).toLocaleDateString()} at{' '}
                            {new Date(session.session_date).toLocaleTimeString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            with {session.therapists.full_name} • {session.duration_minutes} minutes
                          </p>
                        </div>
                        <Badge variant="secondary">{session.status}</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming sessions scheduled</p>
                )}
              </CardContent>
            </Card>

            {/* Progress Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-[#1D9E75]" />
                  Progress Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                {progressData.length > 0 ? (
                  <div className="space-y-4">
                    {progressData.slice(-5).map((progress, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{progress.milestone}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(progress.recorded_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#1D9E75]">{progress.score}/100</p>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#1D9E75] h-2 rounded-full"
                              style={{ width: `${progress.score}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No progress data available yet</p>
                )}
              </CardContent>
            </Card>

            {/* Recent Session Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Session Notes</CardTitle>
              </CardHeader>
              <CardContent>
                {recentSessions.length > 0 ? (
                  <div className="space-y-4">
                    {recentSessions.map((session) => (
                      <div key={session.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium">
                            {new Date(session.session_date).toLocaleDateString()}
                          </p>
                          <Badge variant="outline">{session.therapists.full_name}</Badge>
                        </div>
                        <p className="text-gray-700">{session.session_notes || 'No notes available'}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No recent sessions</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Assigned Therapist */}
            {therapist && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5 text-[#1D9E75]" />
                    Your Therapist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-4">
                      <AvatarFallback>
                        {therapist.full_name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-medium">{therapist.full_name}</h3>
                    <p className="text-sm text-gray-600 capitalize">{therapist.specialty} Specialist</p>
                    <Button className="mt-4 w-full bg-[#1D9E75] hover:bg-[#168a63]">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Full Progress
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}