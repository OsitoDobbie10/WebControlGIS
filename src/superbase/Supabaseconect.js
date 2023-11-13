import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bhocuhunztoyrnhmrrvo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJob2N1aHVuenRveXJuaG1ycnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwOTAzNjEsImV4cCI6MjAxMzY2NjM2MX0._FpOwVD5yyiJNtFBkaQzgUcLggCxTF-nMdBhr7ckcM8';
export const supabase2 = createClient(supabaseUrl, supabaseKey);