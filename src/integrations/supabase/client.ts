// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pewhgvvxbkquqlzpsibv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBld2hndnZ4YmtxdXFsenBzaWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5ODM2MjMsImV4cCI6MjA1NzU1OTYyM30.OzvVOwMJBgSTiSiBGyfwkgiVkiaHZWuu8jhr9ns4Gs4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);