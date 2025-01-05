import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { ProfileSettings } from '../components/profile/ProfileSettings';
import { ProjectStats } from '../components/profile/ProjectStats';
import { ActivityFeed } from '../components/profile/ActivityFeed';
import { GradientBackground } from '../components/ui/GradientBackground';
import { PageTransition } from '../components/transitions/PageTransition';

export const Profile = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <GradientBackground />
      <PageTransition>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Settings */}
            <div className="lg:col-span-1">
              <ProfileSettings />
            </div>

            {/* Stats and Activity */}
            <div className="lg:col-span-2 space-y-8">
              <ProjectStats />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};