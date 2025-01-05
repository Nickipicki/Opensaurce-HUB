import React from 'react';
import { ProjectCard } from './ProjectCard';
import { FEATURED_PROJECTS } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectGrid = () => {
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Discover our handpicked selection of outstanding open source projects
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {FEATURED_PROJECTS.map((project) => (
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
  );
}