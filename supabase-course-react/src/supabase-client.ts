import { createClient } from "@supabase/supabase-js";
const key =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcHNlYXVjYnVtbmVoaHVsa2t3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNjg4NzksImV4cCI6MjA3MDY0NDg3OX0.HjScS3rIxxK-lJu4wehyzbPEaUq8r9E9VSiOVNnfAZc";
export const supabase = createClient(
	"https://qdpseaucbumnehhulkkw.supabase.co",
	key
);
