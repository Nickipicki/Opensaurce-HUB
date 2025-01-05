import { useState, useMemo } from 'react';
import { Project } from '../data/projects';

export function useProjectFilter(projects: Project[]) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);

  const filteredProjects = useMemo(() => {
    if (selectedCategories.includes('All')) {
      return projects;
    }
    return projects.filter(project => 
      project.tags.some(tag => selectedCategories.includes(tag))
    );
  }, [projects, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      if (category === 'All') {
        return ['All'];
      }
      
      const newCategories = prev.filter(c => c !== 'All');
      if (prev.includes(category)) {
        const filtered = newCategories.filter(c => c !== category);
        return filtered.length === 0 ? ['All'] : filtered;
      } else {
        return [...newCategories, category];
      }
    });
  };

  const clearFilters = () => {
    setSelectedCategories(['All']);
  };

  return {
    selectedCategories,
    toggleCategory,
    clearFilters,
    filteredProjects
  };
}