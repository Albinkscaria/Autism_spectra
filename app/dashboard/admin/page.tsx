'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { createClient } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Users, UserCheck, Calendar, TrendingUp, Search } from 'lucide-react';
import { toast } from 'sonner';

interface UserStats {
  totalPatients: number;
  totalTherapists: number;
  totalSessions: number;
  completedSessions: number;
}

interface Patient {
  id: string;
  profiles: {
    full_name: string;
    email: string;
  }[];
  therapy_type: string;
  assigned_therapist_id?: string;
  therapists?: {
    profiles: {
      full_name: string;
    }[];
  }[];
}

interface Therapist {
  id: string;
  profiles: {
    full_name: string;
    email: string;
  }[];
  specialty: string;
  available: boolean;
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats>({
    totalPatients: 0,
    totalTherapists: 0,
    totalSessions: 0,
    completedSessions: 0,
  });
  const [patients, setPatients] = useState<Patient[]>([]);
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [therapyFilter, setTherapyFilter] = useState('all');
  const supabase = createClient();

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    // Load stats
    const [patientsResult, therapistsResult, sessionsResult] = await Promise.all([
      supabase.from('patients').select('id', { count: 'exact' }),
      supabase.from('therapists').select('id', { count: 'exact' }),
      supabase.from('sessions').select('status', { count: 'exact' }),
    ]);

    setStats({
      totalPatients: patientsResult.count || 0,
      totalTherapists: therapistsResult.count || 0,
      totalSessions: sessionsResult.count || 0,
      completedSessions: sessionsResult.data?.filter(s => s.status === 'completed').length || 0,
    });

    // Load patients with therapist info
    const { data: patientsData } = await supabase
      .from('patients')
      .select(`
        id,
        therapy_type,
        assigned_therapist_id,
        profiles!inner (
          full_name,
          email
        ),
        therapists (
          profiles!inner (
            full_name
          )
        )
      `)
      .order('created_at', { ascending: false });

    if (patientsData) setPatients(patientsData);

    // Load therapists
    const { data: therapistsData } = await supabase
      .from('therapists')
      .select(`
        id,
        specialty,
        available,
        profiles!inner (
          full_name,
          email
        )
      `)
      .order('created_at', { ascending: false });

    if (therapistsData) setTherapists(therapistsData);
  };

  const handleAssignTherapist = async (patientId: string, therapistId: string) => {
    try {
      const { error } = await supabase
        .from('patients')
        .update({ assigned_therapist_id: therapistId })
        .eq('id', patientId);

      if (error) throw error;

      toast.success('Therapist assigned successfully!');
      loadDashboardData();
    } catch (error: any) {
      toast.error('Failed to assign therapist: ' + error.message);
    }
  };

  const handleToggleAvailability = async (therapistId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('therapists')
        .update({ available: !currentStatus })
        .eq('id', therapistId);

      if (error) throw error;

      toast.success('Therapist availability updated!');
      loadDashboardData();
    } catch (error: any) {
      toast.error('Failed to update availability: ' + error.message);
    }
  };

  const filteredPatients = patients.filter(patient => {
    const profile = patient.profiles[0];
    const matchesSearch = profile?.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile?.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTherapy = therapyFilter === 'all' || patient.therapy_type === therapyFilter;
    return matchesSearch && matchesTherapy;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Platform management and analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPatients}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Therapists</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTherapists}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSessions}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.totalSessions > 0 ? Math.round((stats.completedSessions / stats.totalSessions) * 100) : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patients Management */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Management</CardTitle>
              <CardDescription>View and manage all patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <Select value={therapyFilter} onValueChange={setTherapyFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="speech">Speech</SelectItem>
                    <SelectItem value="autism">Autism</SelectItem>
                    <SelectItem value="mental_health">Mental Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="max-h-96 overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Therapy Type</TableHead>
                      <TableHead>Assigned Therapist</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{patient.profiles[0]?.full_name}</p>
                            <p className="text-sm text-gray-500">{patient.profiles[0]?.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="capitalize">
                            {patient.therapy_type.replace('_', ' ')}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {patient.therapists?.[0]?.profiles[0]?.full_name || 'Unassigned'}
                        </TableCell>
                        <TableCell>
                          <Select
                            onValueChange={(therapistId) => handleAssignTherapist(patient.id, therapistId)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Assign" />
                            </SelectTrigger>
                            <SelectContent>
                              {therapists.map((therapist) => (
                                <SelectItem key={therapist.id} value={therapist.id}>
                                  {therapist.profiles[0]?.full_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Therapists Management */}
          <Card>
            <CardHeader>
              <CardTitle>Therapist Management</CardTitle>
              <CardDescription>Manage therapist availability and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-h-96 overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Specialty</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {therapists.map((therapist) => (
                      <TableRow key={therapist.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{therapist.profiles[0]?.full_name}</p>
                            <p className="text-sm text-gray-500">{therapist.profiles[0]?.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {therapist.specialty}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={therapist.available ? 'default' : 'secondary'}>
                            {therapist.available ? 'Available' : 'Unavailable'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleToggleAvailability(therapist.id, therapist.available)}
                          >
                            {therapist.available ? 'Set Unavailable' : 'Set Available'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}