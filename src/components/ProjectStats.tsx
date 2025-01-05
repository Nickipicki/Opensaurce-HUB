import React from 'react';
import { Users, GitFork, Star, Code2 } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, trend }: { icon: any; value: string; label: string; trend: string }) => (
  <div className="bg-gray-800/30 rounded-xl p-4">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-purple-500/20 rounded-lg">
        <Icon className="w-5 h-5 text-purple-400" />
      </div>
      <span className="text-gray-400">{label}</span>
    </div>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-sm text-emerald-400">+{trend}%</span>
    </div>
  </div>
);

export const ProjectStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <StatCard icon={Star} value="15.2k" label="Total Stars" trend="12" />
    <StatCard icon={GitFork} value="2.8k" label="Total Forks" trend="8" />
    <StatCard icon={Code2} value="892" label="Pull Requests" trend="24" />
    <StatCard icon={Users} value="436" label="Contributors" trend="18" />
  </div>
);