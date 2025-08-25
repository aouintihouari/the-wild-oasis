import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ljwgzyulikxlahtwtsuw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd2d6eXVsaWt4bGFodHd0c3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NDgyNTUsImV4cCI6MjA3MTEyNDI1NX0.fghyzWi5j_gAdAGNUBBtbvYGlxJ7KE78CDnLsgWGZpM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
