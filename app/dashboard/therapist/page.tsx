'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { createClient } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Plus, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface Patient {
  id: string;
  full_name: string;
  therapy_type: string;
  last_session?: string;
  profiles: {
    full_name: string;
    avatar_url?: string;
  }[];
  sessions?: {
    session_date: string;
  }[];
}

interface Session {
  id: string;
  session_date: string;
  duration_minutes: number;
  session_notes?: string;
  status: string;
  patients: {
    profiles: {
      full_name: string;
    };
  };
}

export default function TherapistDashboard() {
  const { user } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<Session[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [sessionForm, setSessionForm] = useState({
    duration: '60',
    notes: '',
    score: '0',
    milestone: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    if (!user) return;

    // Get therapist ID
    const { data: therapistData } = await supabase
      .from('therapists')
      .select('id')
      .eq('user_id', user.id)
      .single();

    if (!therapistData) return;

    // Load assigned patients
    const { data: patientsData } = await supabase
      .from('patients')
      .select(`
        id,
        therapy_type,
        profiles (
          full_name,
          avatar_url
        ),
        sessions (
          session_date
        )
      `)
      .eq('assigned_therapist_id', therapistData.id)
      .order('created_at', { ascending: false });

    if (patientsData) {
      const formattedPatients = patientsData.map(patient => ({
        ...patient,
        full_name: patient.profiles[0].full_name,
        last_session: patient.sessions?.[0]?.session_date,
      }));
      setPatients(formattedPatients);
    }

    // Load upcoming sessions
    const { data: sessionsData } = await supabase
      .from('sessions')
      .select(`
        *,
        patients (
          profiles (
            full_name
          )
        )
      `)
      .eq('therapist_id', therapistData.id)
      .eq('status', 'scheduled')
      .gte('session_date', new Date().toISOString())
      .order('session_date', { ascending: true });

    if (sessionsData) setUpcomingSessions(sessionsData);
  };

  const handleLogSession = async () => {
    if (!selectedPatient || !user) return;

    try {
      // Get therapist ID
      const { data: therapistData } = await supabase
        .from('therapists')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!therapistData) return;

      // Create session
      const { data: sessionData, error: sessionError } = await supabase
        .from('sessions')
        .insert({
          patient_id: selectedPatient,
          therapist_id: therapistData.id,
          session_date: new Date().toISOString(),
          duration_minutes: parseInt(sessionForm.duration),
          session_notes: sessionForm.notes,
          session_type: 'general', // You might want to make this dynamic
          status: 'completed',
        })
        .select()
        .single();

      if (sessionError) throw sessionError;

      // Create progress tracking entry
      if (sessionForm.score && sessionForm.milestone) {
        const { error: progressError } = await supabase
          .from('progress_tracking')
          .insert({
            patient_id: selectedPatient,
            therapist_id: therapistData.id,
            session_id: sessionData.id,
            milestone: sessionForm.milestone,
            score: parseInt(sessionForm.score),
            notes: sessionForm.notes,
          });

        if (progressError) throw progressError;
      }

      toast.success('Session logged successfully!');
      setIsDialogOpen(false);
      setSessionForm({ duration: '60', notes: '', score: '0', milestone: '' });
      loadDashboardData();
    } catch (error: any) {
      toast.error('Failed to log session: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Therapist Dashboard</h1>
          <p className="text-gray-600">Manage your patients and sessions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Patients List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-[#1D9E75]" />
                  My Patients ({patients.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {patients.length > 0 ? (
                  <div className="space-y-4">
                    {patients.map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={patient.profiles[0].avatar_url} />
                            <AvatarFallback>
                              {patient.full_name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{patient.full_name}</p>
                            <p className="text-sm text-gray-600 capitalize">{patient.therapy_type} Therapy</p>
                            {patient.last_session && (
                              <p className="text-xs text-gray-500">
                                Last session: {new Date(patient.last_session).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Progress
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => setSelectedPatient(patient.id)}
                            className="bg-[#1D9E75] hover:bg-[#168a63]"
                          >
                            Log Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No patients assigned yet</p>
                )}
              </CardContent>
            </Card>

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
                            with {session.patients.profiles.full_name} • {session.duration_minutes} minutes
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
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-[#1D9E75] hover:bg-[#168a63]">
                      <Plus className="mr-2 h-4 w-4" />
                      Log New Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Log Session</DialogTitle>
                      <DialogDescription>
                        Record a completed therapy session and update progress.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="patient">Patient</Label>
                        <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select patient" />
                          </SelectTrigger>
                          <SelectContent>
                            {patients.map((patient) => (
                              <SelectItem key={patient.id} value={patient.id}>
                                {patient.full_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="duration">Duration (minutes)</Label>
                        <Input
                          id="duration"
                          type="number"
                          value={sessionForm.duration}
                          onChange={(e) => setSessionForm({ ...sessionForm, duration: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="milestone">Milestone Achieved</Label>
                        <Input
                          id="milestone"
                          value={sessionForm.milestone}
                          onChange={(e) => setSessionForm({ ...sessionForm, milestone: e.target.value })}
                          placeholder="e.g., Improved communication skills"
                        />
                      </div>

                      <div>
                        <Label htmlFor="score">Progress Score (0-100)</Label>
                        <Input
                          id="score"
                          type="number"
                          min="0"
                          max="100"
                          value={sessionForm.score}
                          onChange={(e) => setSessionForm({ ...sessionForm, score: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">Session Notes</Label>
                        <Textarea
                          id="notes"
                          value={sessionForm.notes}
                          onChange={(e) => setSessionForm({ ...sessionForm, notes: e.target.value })}
                          placeholder="Describe what happened in the session..."
                        />
                      </div>

                      <Button onClick={handleLogSession} className="w-full bg-[#1D9E75] hover:bg-[#168a63]">
                        Log Session
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-[#1D9E75]" />
                  This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Sessions Completed</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Progress</span>
                  <span className="font-bold">+8.5 pts</span>
                </div>
                <div className="flex justify-between">
                  <span>Patient Satisfaction</span>
                  <span className="font-bold">95%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}