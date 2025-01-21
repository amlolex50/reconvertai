import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // Get the error_description and access_token from URL
        const params = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = params.get('access_token');
        const errorDescription = params.get('error_description');

        if (errorDescription) {
          throw new Error(errorDescription);
        }

        if (accessToken) {
          const { error: sessionError } = await supabase.auth.getSession();
          if (sessionError) throw sessionError;

          toast({
            title: "Email confirmed",
            description: "Your email has been successfully verified.",
          });
        }

        // Redirect to home page
        navigate('/');
      } catch (error) {
        console.error('Error during email confirmation:', error);
        toast({
          title: "Error",
          description: error.message || "Failed to confirm email. Please try again.",
          variant: "destructive",
        });
        navigate('/');
      }
    };

    handleEmailConfirmation();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
    </div>
  );
};

export default AuthCallback;