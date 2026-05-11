-- Run this in your Supabase SQL editor to create the patients table

CREATE TABLE IF NOT EXISTS patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 0 AND age <= 120),
  query TEXT NOT NULL,
  ward TEXT NOT NULL CHECK (ward IN ('General Ward', 'Emergency Ward', 'Mental Health Ward')),
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Allow anon inserts (for demo; restrict in production)
CREATE POLICY "Allow anon insert" ON patients
  FOR INSERT TO anon WITH CHECK (true);

-- Allow anon reads (optional, remove in production)
CREATE POLICY "Allow anon select" ON patients
  FOR SELECT TO anon USING (true);
