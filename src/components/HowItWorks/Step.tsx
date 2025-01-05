import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
}

export const Step = ({ number, title, description, icon: Icon, isActive }: StepProps) => {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 ${
        isActive 
          ? 'bg-[#0D1117]/80 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
          : 'bg-gray-900/50 border border-gray-800/50'
      }`}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ 
        scale: isActive ? 1 : 0.95, 
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-start gap-4"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex-shrink-0">
          <motion.div 
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-purple-400">{number}</span>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};