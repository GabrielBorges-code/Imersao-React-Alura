import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://emoemcsednimbcvlkeod.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtb2VtY3NlZG5pbWJjdmxrZW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODgxOTYsImV4cCI6MTk4Mzg2NDE5Nn0.RHRC2f_bzvFOBRqBC4HGnWW-upPpA-W9MMpQqA0xgoE";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*");
    },
  };
}
