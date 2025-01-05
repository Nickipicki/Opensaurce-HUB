import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Code2, Users } from 'lucide-react';

const stats = [
  { icon: Star, label: 'Total Stars', value: '1.2k', trend: '+8%' },
  { icon: GitFork, label: 'Forks', value: '234', trend: '+12%' },
  { icon: Code2, label: 'Contributions', value: '892', trend: '+15%' },
  { icon: Users, label: 'Following', value: '156', trend: '+5%' },
];

export const ProjectStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#0D1117]/90 backdrop-blur-xl rounded-xl border border-purple-500/10 p-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <stat.icon className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-gray-400">{stat.label}</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-white">{stat.value}</span>
            <span className="text-sm text-emerald-400">{stat.trend}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};