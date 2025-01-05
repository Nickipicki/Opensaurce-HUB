import React from 'react';
import { motion } from 'framer-motion';

interface StepIndicatorProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const StepIndicator = ({ index, isActive, onClick }: StepIndicatorProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative"
      whileHover={{ scale: isActive ? 1 : 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 scale-110 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
          : 'bg-gray-800 hover:bg-gray-700'
      }`}>
        <span className="text-white font-semibold">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.button>
  );
};