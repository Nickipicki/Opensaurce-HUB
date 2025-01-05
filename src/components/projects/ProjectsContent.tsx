import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ProjectCard } from '../ProjectCard';
import { CategoryFilter } from '../CategoryFilter';
import { ALL_PROJECTS } from '../../data/projects';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { motion, AnimatePresence } from 'framer-motion';

// Extract unique categories from project tags
const categories = ['All', ...new Set(
  ALL_PROJECTS.flatMap(project => project.tags)
)];

export const ProjectsContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedCategories, toggleCategory, clearFilters, filteredProjects } = useProjectFilter(ALL_PROJECTS);

  // Filter projects based on search query
  const searchedProjects = useMemo(() => {
    if (!searchQuery.trim()) return filteredProjects;
    
    const query = searchQuery.toLowerCase();
    return filteredProjects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [filteredProjects, searchQuery]);

  return (
    <div className="flex-1">
      {/* Search and Filter Header */}
      <div className="mb-8 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-12 pr-4 py-3 bg-[#0D1117]/90 backdrop-blur-xl rounded-xl border border-purple-500/10 text-white placeholder-gray-500 focus:border-purple-500 transition-colors"
          />
        </div>
        <button className="px-4 py-3 bg-[#0D1117]/90 backdrop-blur-xl rounded-xl border border-purple-500/10 text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Category Filters */}
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
        onClearFilters={clearFilters}
      />

      {/* Projects Grid */}
      <div className="bg-[#0D1117]/90 backdrop-blur-xl rounded-2xl border border-purple-500/10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {searchedProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};