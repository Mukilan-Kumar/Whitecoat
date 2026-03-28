-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  property_interest TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo TEXT NOT NULL,
  location TEXT,
  description TEXT,
  website TEXT,
  email TEXT,
  phone TEXT,
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_partners_featured ON partners(featured);
CREATE INDEX IF NOT EXISTS idx_partners_active ON partners(active);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (you can restrict this later)
CREATE POLICY "Enable insert for all users" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for all users" ON contacts
  FOR SELECT USING (true);

CREATE POLICY "Enable read for all users" ON partners
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON partners
  FOR INSERT WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to auto-update updated_at
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partners_updated_at BEFORE UPDATE ON partners
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
-- You can uncomment this to add some test data
/*
INSERT INTO partners (name, logo, location, description, featured, active) VALUES
  ('Prestige Estates', 'prestige_estates_projects_limited.webp', 'Chennai, India', 'Premium luxury developments', true, true),
  ('Brigade Enterprises', 'brigade_enterprises_limited.webp', 'Chennai, India', 'Trusted real estate developer', true, true),
  ('Sobha Ltd', 'sobha_developers_limited.webp', 'Chennai, India', 'Quality construction excellence', true, true);
*/
