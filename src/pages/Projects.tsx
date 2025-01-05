import React from 'react';
import { ProjectsSidebar } from '../components/projects/ProjectsSidebar';
import { ProjectsContent } from '../components/projects/ProjectsContent';
import { GradientBackground } from '../components/ui/GradientBackground';
import { PageTransition } from '../components/transitions/PageTransition';

export const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <GradientBackground />
      <PageTransition>
        <div className="container mx-auto px-4 pt-24 pb-20">
          <div className="flex gap-8">
            <ProjectsSidebar />
            <ProjectsContent />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};