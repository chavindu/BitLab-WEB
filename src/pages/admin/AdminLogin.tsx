import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/supabase';
import { Code2 } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/admin');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Code2 className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access the admin dashboard
          </p>
        </div>

        <div className="mt-8">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={import.meta.env.VITE_GOOGLE_CLIENT_ID ? ['google'] : []}
            redirectTo={`${window.location.origin}/admin`}
            showLinks={import.meta.env.VITE_DISABLE_SIGNUP !== 'true'}
            view={import.meta.env.VITE_DISABLE_SIGNUP === 'true' ? 'sign_in' : 'sign_up'}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;