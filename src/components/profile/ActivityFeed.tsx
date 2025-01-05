import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, GitFork } from 'lucide-react';

const activities = [
  {
    type: 'commit',
    icon: GitCommit,
    project: 'opensourcehub',
    description: 'Added new feature for project filtering',
    time: '2 hours ago',
  },
  {
    type: 'pr',
    icon: GitPullRequest,
    project: 'react-native',
    description: 'Fix iOS navigation bug',
    time: '1 day ago',
  },
  {
    type: 'star',
    icon: Star,
    project: 'tensorflow',
    description: 'Starred TensorFlow repository',
    time: '2 days ago',
  },
  {
    type: 'fork',
    icon: GitFork,
    project: 'next.js',
    description: 'Forked Next.js repository',
    time: '3 days ago',
  },
];

export const ActivityFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0D1117]/90 backdrop-blur-xl rounded-2xl border border-purple-500/10 p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
      
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="p-2 rounded-lg bg-purple-500/20">
              <activity.icon className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-gray-300">
                <span className="font-medium text-white">{activity.project}</span>
                <span className="mx-2">·</span>
                {activity.description}
              </p>
              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};