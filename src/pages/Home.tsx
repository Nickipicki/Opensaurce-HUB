import React from 'react';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { ProjectInsights } from '../components/ProjectInsights';
import { GradientBackground } from '../components/ui/GradientBackground';
import { SectionDivider } from '../components/ui/SectionDivider';
import { PageTransition } from '../components/transitions/PageTransition';

export const Home = () => {
  return (
    <>
      <GradientBackground />
      <div className="relative z-10">
        <PageTransition>
          <SectionDivider>
            <Hero />
          </SectionDivider>
          <SectionDivider>
            <ProjectGrid />
          </SectionDivider>
          <SectionDivider>
            <ProjectInsights />
          </SectionDivider>
        </PageTransition>
      </div>
    </>
  );
};