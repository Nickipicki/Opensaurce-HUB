import React from 'react';
import { ProjectStats } from './ProjectStats';
import { ProjectMetrics } from './ProjectMetrics';
import { TrendingProjects } from './TrendingProjects';

export const ProjectInsights = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Features */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-4xl font-bold text-white mb-8">Project Insights</h2>
          
          <InsightFeature 
            number="01"
            title="Real-Time Analytics"
            description="Track project popularity and engagement metrics in real-time."
          />
          
          <InsightFeature 
            number="02"
            title="Contribution Metrics"
            description="Monitor pull requests, issues, and community engagement."
          />
          
          <InsightFeature 
            number="03"
            title="Performance Data"
            description="Analyze download statistics and dependency usage."
          />
        </div>

        {/* Right Column - Dashboard Preview */}
        <div className="lg:w-2/3">
          <div className="bg-[#0D1117]/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 shadow-2xl">
            <ProjectStats />
            <TrendingProjects />
            <ProjectMetrics />
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightFeature = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-purple-500/50 transition-colors">
    <div className="text-sm text-gray-500 mb-2">{number}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);