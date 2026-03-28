import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  property_interest?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface Partner {
  id?: string;
  name: string;
  logo: string;
  location?: string;
  description?: string;
  website?: string;
  email?: string;
  phone?: string;
  featured: boolean;
  active: boolean;
  created_at?: string;
  updated_at?: string;
}
