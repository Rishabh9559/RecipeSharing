import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://digscxahrmfphugkimxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZ3NjeGFocm1mcGh1Z2tpbXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNTgzMzcsImV4cCI6MjA1MTgzNDMzN30.xhtt8A69SpnyEv5lJncK3qNel8YZiNsijc9kMIQ04y4';

export const supabase = createClient(supabaseUrl, supabaseKey);
