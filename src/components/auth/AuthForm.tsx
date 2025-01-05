import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { AvatarSelector } from './AvatarSelector';
import { supabase } from '../../lib/supabase';

interface AuthFormProps {
  type: 'signin' | 'signup';
  onSuccess?: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ type, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (type === 'signup') {
        // First sign up the user
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              avatar_url: selectedAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`
            }
          }
        });
        
        if (signUpError) throw signUpError;
        
        // Update the profile if user was created
        if (authData.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
              id: authData.user.id,
              full_name: name,
              avatar_url: selectedAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${authData.user.id}`,
              updated_at: new Date().toISOString()
            });

          if (profileError) throw profileError;
        }
      } else {
        await signIn(email, password);
      }
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignIn = async (provider: 'github' | 'google') => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      });

      if (error) throw error;
      if (!data.url) throw new Error('Authentication service unavailable');

      // Redirect to OAuth provider
      window.location.href = data.url;
    } catch (err) {
      console.error(`${provider} sign in error:`, err);
      const errorMessage = err instanceof Error 
        ? err.message
        : `Unable to connect to ${provider}. Please try again later.`;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleOAuthSignIn('github')}
          disabled={loading}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Github className="w-5 h-5" />
          {loading ? 'Connecting...' : 'GitHub'}
        </button>
        <button
          onClick={() => handleOAuthSignIn('google')}
          disabled={loading}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z"
            />
          </svg>
          {loading ? 'Connecting...' : 'Google'}
        </button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-[#0D1117] text-gray-400">Or continue with email</span>
        </div>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'signup' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-3">
                Choose an Avatar
              </label>
              <AvatarSelector
                selectedAvatar={selectedAvatar}
                onSelect={setSelectedAvatar}
              />
            </div>
          </>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Loading...' : type === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};