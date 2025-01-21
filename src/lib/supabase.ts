import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kuolbxpvsbgpjmhgboag.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1b2xieHB2c2JncGptaGdib2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MDA2NTMsImV4cCI6MjA1MzA3NjY1M30.97s6c-ldWsaefq5r3bb8gKF8oeOYaBCCJ8ss2ps1LTA';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anonymous Key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);