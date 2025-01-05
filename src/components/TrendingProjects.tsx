import React from 'react';

const projects = [
  { name: 'TensorFlow', popularity: 92, percentage: '46%' },
  { name: 'React Native', popularity: 78, percentage: '32%' },
  { name: 'Next.js', popularity: 85, percentage: '29%' },
];

export const TrendingProjects = () => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-white mb-4">Top Projects</h3>
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={project.name} className="flex items-center gap-4">
          <span className="text-gray-500 w-8">{String(index + 1).padStart(2, '0')}</span>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{project.name}</span>
              <span className="text-purple-400">{project.percentage}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                style={{ width: `${project.popularity}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);