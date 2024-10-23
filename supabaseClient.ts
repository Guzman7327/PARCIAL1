// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// URL y la API Key del proyecto que te proporciona Supabase
const supabaseUrl = https://xtppbckkazuzhlogsksn.supabase.co; 
const supabaseAnonKey =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0cHBiY2trYXp1emhsb2dza3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MzU1MTQsImV4cCI6MjA0NTExMTUxNH0.KG01CvpC4GZgRdE8_9DTRG3jNew005lAjeM-Pbxszfg; // Clave pública de la API

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
