import { createServerSupabaseClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = await createServerSupabaseClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Get user profile to determine role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (!profile) {
    redirect('/login');
  }

  // Redirect based on role
  switch (profile.role) {
    case 'patient':
      redirect('/dashboard/patient');
    case 'therapist':
      redirect('/dashboard/therapist');
    case 'admin':
      redirect('/dashboard/admin');
    default:
      redirect('/login');
  }
}