import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  onClearFilters: () => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategories, 
  onToggleCategory, 
  onClearFilters 
}: CategoryFilterProps) {
  const showClearButton = !selectedCategories.includes('All') && selectedCategories.length > 0;

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      {showClearButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={onClearFilters}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors border border-red-500/20"
        >
          <X className="w-4 h-4" />
          Clear Filters
        </motion.button>
      )}

      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onToggleCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            selectedCategories.includes(category)
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200 border border-gray-700'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}