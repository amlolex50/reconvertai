// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kuolbxpvsbgpjmhgboag.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1b2xieHB2c2JncGptaGdib2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MDA2NTMsImV4cCI6MjA1MzA3NjY1M30.97s6c-ldWsaefq5r3bb8gKF8oeOYaBCCJ8ss2ps1LTA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);