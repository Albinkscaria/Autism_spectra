-- Supabase Database Schema for Speelan Therapy Platform
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE user_role AS ENUM ('patient', 'therapist', 'admin');
CREATE TYPE therapy_type AS ENUM ('speech', 'autism', 'mental_health');
CREATE TYPE session_status AS ENUM ('scheduled', 'completed', 'cancelled');

-- Create profiles table
CREATE TABLE profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'patient',
  avatar_url TEXT,
  phone TEXT,
  date_of_birth DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create patients table
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
  assigned_therapist_id UUID REFERENCES therapists(id),
  diagnosis TEXT,
  therapy_type therapy_type NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create therapists table
CREATE TABLE therapists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
  specialty therapy_type NOT NULL,
  license_number TEXT,
  bio TEXT,
  available BOOLEAN DEFAULT true
);

-- Create sessions table
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  therapist_id UUID NOT NULL REFERENCES therapists(id) ON DELETE CASCADE,
  session_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  session_notes TEXT,
  session_type therapy_type NOT NULL,
  status session_status DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create progress_tracking table
CREATE TABLE progress_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  therapist_id UUID NOT NULL REFERENCES therapists(id) ON DELETE CASCADE,
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  milestone TEXT NOT NULL,
  score INTEGER CHECK (score >= 0 AND score <= 100),
  notes TEXT,
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE therapists ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_tracking ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Therapists can view their assigned patients' profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM patients p
      WHERE p.user_id = profiles.user_id
      AND p.assigned_therapist_id IN (
        SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles p WHERE p.user_id = auth.uid() AND p.role = 'admin'
    )
  );

-- RLS Policies for patients
CREATE POLICY "Patients can view their own record" ON patients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Therapists can view their assigned patients" ON patients
  FOR SELECT USING (
    assigned_therapist_id IN (
      SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
    )
  );

CREATE POLICY "Therapists can update their assigned patients" ON patients
  FOR UPDATE USING (
    assigned_therapist_id IN (
      SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all patients" ON patients
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles p WHERE p.user_id = auth.uid() AND p.role = 'admin'
    )
  );

-- RLS Policies for therapists
CREATE POLICY "Therapists can view their own record" ON therapists
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all therapists" ON therapists
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles p WHERE p.user_id = auth.uid() AND p.role = 'admin'
    )
  );

-- RLS Policies for sessions
CREATE POLICY "Patients can view their own sessions" ON sessions
  FOR SELECT USING (
    patient_id IN (
      SELECT p.id FROM patients p WHERE p.user_id = auth.uid()
    )
  );

CREATE POLICY "Therapists can view sessions for their patients" ON sessions
  FOR SELECT USING (
    therapist_id IN (
      SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
    )
  );

CREATE POLICY "Therapists can manage sessions for their patients" ON sessions
  FOR ALL USING (
    therapist_id IN (
      SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all sessions" ON sessions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles p WHERE p.user_id = auth.uid() AND p.role = 'admin'
    )
  );

-- RLS Policies for progress_tracking
CREATE POLICY "Patients can view their own progress" ON progress_tracking
  FOR SELECT USING (
    patient_id IN (
      SELECT p.id FROM patients p WHERE p.user_id = auth.uid()
    )
  );

CREATE POLICY "Therapists can view progress for their patients" ON progress_tracking
  FOR SELECT USING (
    therapist_id IN (
      SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
    )
  );

CREATE POLICY "Therapists can manage progress for their patients" ON progress_tracking
  FOR ALL USING (
    therapist_id IN (
      SELECT t.id FROM therapists t WHERE t.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all progress tracking" ON progress_tracking
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles p WHERE p.user_id = auth.uid() AND p.role = 'admin'
    )
  );

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email, role)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email, (NEW.raw_user_meta_data->>'role')::user_role);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to create patient or therapist record based on role
CREATE OR REPLACE FUNCTION public.create_role_specific_record()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.role = 'patient' THEN
    INSERT INTO public.patients (user_id, therapy_type)
    VALUES (NEW.user_id, (NEW.raw_user_meta_data->>'therapy_type')::therapy_type);
  ELSIF NEW.role = 'therapist' THEN
    INSERT INTO public.therapists (user_id, specialty)
    VALUES (NEW.user_id, (NEW.raw_user_meta_data->>'specialty')::therapy_type);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create role-specific record
CREATE TRIGGER on_profile_created
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.create_role_specific_record();