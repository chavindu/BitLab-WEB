import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
});

// Disable signups if environment variable is set
if (import.meta.env.VITE_DISABLE_SIGNUP === 'true') {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_UP') {
      supabase.auth.signOut();
    }
  });
}