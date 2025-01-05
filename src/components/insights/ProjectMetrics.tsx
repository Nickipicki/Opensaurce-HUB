import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, GitFork, Star, Users } from 'lucide-react';

const metrics = [
  { icon: Star, label: 'Stars', value: '15.2k', trend: '+12%' },
  { icon: GitFork, label: 'Forks', value: '2.8k', trend: '+8%' },
  { icon: Users, label: 'Contributors', value: '436', trend: '+24%' },
  { icon: BarChart, label: 'Downloads', value: '892k', trend: '+18%' }
];

export const ProjectMetrics = () => {
  return (
    <div className="relative bg-[#0D1117]/90 backdrop-blur-xl rounded-2xl border border-purple-500/10 p-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-[100px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h2 className="text-2xl font-bold text-white mb-8">Project Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <metric.icon className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-400">{metric.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">{metric.value}</span>
                <span className="text-sm text-emerald-400">{metric.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Chart */}
        <div className="mt-8 bg-gray-800/30 rounded-xl p-6">
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
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 mx-1"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  style={{
                    height: `${Math.random() * 100}%`,
                    background: `linear-gradient(180deg, ${i % 2 ? '#8B5CF6' : '#6366F1'} 0%, transparent 100%)`
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};