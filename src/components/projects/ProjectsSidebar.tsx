import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Plus, Star, Clock, Archive, 
  GitFork, Users, Trash2
} from 'lucide-react';

const menuItems = [
  { icon: Star, label: 'Favorites', count: 5 },
  { icon: Clock, label: 'Recent', count: 12 },
  { icon: GitFork, label: 'My Projects', count: 8 },
  { icon: Users, label: 'Collaborations', count: 3 },
  { icon: Archive, label: 'Archived', count: 2 },
  { icon: Trash2, label: 'Trash', count: 0 },
];

export const ProjectsSidebar = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-24 bg-[#0D1117]/90 backdrop-blur-xl rounded-2xl border border-purple-500/10 p-6">
        <button className="w-full mb-6 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          New Project
        </button>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.label}
              whileHover={{ x: 4 }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.count > 0 && (
                <span className="px-2 py-1 rounded-md bg-gray-800 text-xs group-hover:bg-gray-700 transition-colors">
                  {item.count}
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};