import React from 'react';

export const ProjectMetrics = () => (
  <div className="bg-gray-800/30 rounded-xl p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-white">Monthly Activity</h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-sm text-gray-400">Commits</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="text-sm text-gray-400">Pull Requests</span>
        </div>
      </div>
    </div>
    
    <div className="h-64 w-full bg-gradient-to-b from-purple-500/10 to-transparent rounded-lg relative">
      {/* Placeholder for actual chart */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="flex-1 mx-1"
            style={{
              height: `${Math.random() * 100}%`,
              background: `linear-gradient(180deg, ${i % 2 ? '#8B5CF6' : '#6366F1'} 0%, transparent 100%)`
            }}
          />
        ))}
      </div>
    </div>
  </div>
);