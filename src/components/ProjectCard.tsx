import React from 'react';
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  stars: number;
  forks: number;
  tags: string[];
  imageUrl: string;
}

export function ProjectCard({ title, description, stars, forks, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="card-hover rounded-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Github className="w-5 h-5 text-indigo-400" />
          <h3 className="text-xl font-bold text-gray-200 hover-transition">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4 hover-transition">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm font-medium border border-indigo-800/30 hover-transition hover:bg-indigo-900/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover-transition hover:text-yellow-400">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-400">{stars}</span>
            </div>
            <div className="flex items-center gap-1 hover-transition hover:text-purple-400">
              <GitFork className="w-4 h-4 text-gray-500" />
              <span className="text-gray-400">{forks}</span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-indigo-400 hover-transition hover:text-indigo-300 group">
            View Project
            <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}