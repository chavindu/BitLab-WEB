/*
  # Initial Schema Setup

  1. New Tables
    - `services` - Store service information
    - `portfolio` - Store portfolio projects
    - `team_members` - Store team member information
    - `metrics` - Store company metrics
    - `tech_stack` - Store technology stack information
    - `contact_info` - Store company contact information
    - `social_links` - Store social media links

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage data
*/

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  bio text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Metrics table
CREATE TABLE IF NOT EXISTS metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tech stack table
CREATE TABLE IF NOT EXISTS tech_stack (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  name text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Contact information table
CREATE TABLE IF NOT EXISTS contact_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  address text NOT NULL,
  map_url text NOT NULL,
  phone_numbers text[] NOT NULL DEFAULT '{}',
  email text NOT NULL,
  business_hours text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Social links table
CREATE TABLE IF NOT EXISTS social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_stack ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

-- Policies for authenticated users
DO $$ 
BEGIN
  -- Services policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'services' AND policyname = 'Allow public read services'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read services" ON services FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'services' AND policyname = 'Allow authenticated users to manage services'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage services" ON services FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;

  -- Portfolio policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'portfolio' AND policyname = 'Allow public read portfolio'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read portfolio" ON portfolio FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'portfolio' AND policyname = 'Allow authenticated users to manage portfolio'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage portfolio" ON portfolio FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;

  -- Team members policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'team_members' AND policyname = 'Allow public read team_members'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read team_members" ON team_members FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'team_members' AND policyname = 'Allow authenticated users to manage team_members'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage team_members" ON team_members FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;

  -- Metrics policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'metrics' AND policyname = 'Allow public read metrics'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read metrics" ON metrics FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'metrics' AND policyname = 'Allow authenticated users to manage metrics'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage metrics" ON metrics FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;

  -- Tech stack policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'tech_stack' AND policyname = 'Allow public read tech_stack'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read tech_stack" ON tech_stack FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'tech_stack' AND policyname = 'Allow authenticated users to manage tech_stack'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage tech_stack" ON tech_stack FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;

  -- Contact info policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contact_info' AND policyname = 'Allow public read contact_info'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read contact_info" ON contact_info FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'contact_info' AND policyname = 'Allow authenticated users to manage contact_info'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage contact_info" ON contact_info FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;

  -- Social links policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'social_links' AND policyname = 'Allow public read social_links'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow public read social_links" ON social_links FOR SELECT TO public USING (true)');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'social_links' AND policyname = 'Allow authenticated users to manage social_links'
  ) THEN
    EXECUTE format('CREATE POLICY "Allow authenticated users to manage social_links" ON social_links FOR ALL TO authenticated USING (true) WITH CHECK (true)');
  END IF;
END $$;

-- Insert initial contact information if not exists
INSERT INTO contact_info (address, map_url, phone_numbers, email, business_hours)
SELECT 
  'No 52, Govijana Mawatha, Wijayapura, Anuradhapura',
  'https://maps.app.goo.gl/5gz2TNAQAPS9njtGA',
  ARRAY['0705105177', '0707107177'],
  'contact@bitlab.lk',
  'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed'
WHERE NOT EXISTS (SELECT 1 FROM contact_info);

-- Insert social media links if not exists
INSERT INTO social_links (platform, url, icon)
SELECT 'Facebook', 'https://www.facebook.com/bitlab.lk', 'facebook'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'Facebook');

INSERT INTO social_links (platform, url, icon)
SELECT 'LinkedIn', 'https://www.linkedin.com/company/bitlab-lk/', 'linkedin'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'LinkedIn');

INSERT INTO social_links (platform, url, icon)
SELECT 'Instagram', 'https://instagram.com/bitlab.lk', 'instagram'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'Instagram');

INSERT INTO social_links (platform, url, icon)
SELECT 'X', 'https://x.com/BitLabLK', 'twitter'
WHERE NOT EXISTS (SELECT 1 FROM social_links WHERE platform = 'X');