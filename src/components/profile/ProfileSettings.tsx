import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Camera } from 'lucide-react';
import { useAuthContext } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { AvatarSelector } from '../auth/AvatarSelector';

export const ProfileSettings = () => {
  const { user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name || '');
  const [selectedAvatar, setSelectedAvatar] = useState(user?.user_metadata?.avatar_url || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load profile data when component mounts
  useEffect(() => {
    const loadProfile = async () => {
      if (!user?.id) return;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error loading profile:', error);
        return;
      }

      if (data) {
        setFullName(data.full_name || '');
        setSelectedAvatar(data.avatar_url || '');
      }
    };

    loadProfile();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Update both auth metadata and profile
      const updates = {
        full_name: fullName,
        avatar_url: selectedAvatar,
        updated_at: new Date().toISOString(),
      };

      // Update auth metadata
      const { error: metadataError } = await supabase.auth.updateUser({
        data: { full_name: fullName, avatar_url: selectedAvatar }
      });

      if (metadataError) throw metadataError;

      // Update profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user?.id);

      if (profileError) throw profileError;

      setIsEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while saving');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0D1117]/90 backdrop-blur-xl rounded-2xl border border-purple-500/10 p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          {isEditing ? (
            <AvatarSelector
              selectedAvatar={selectedAvatar}
              onSelect={setSelectedAvatar}
            />
          ) : (
            <div className="relative">
              <img
                src={selectedAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}`}
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
            </div>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={!isEditing}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 transition-colors disabled:opacity-50"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              value={user?.email}
              disabled
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white opacity-50"
            />
          </div>
        </div>

        {isEditing && (
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        )}
      </form>
    </motion.div>
  );
};