import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative">
      <div className="relative container mx-auto px-4 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Amazing<br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Open Source Projects
          </span>
        </h1>
        
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          Explore a curated collection of innovative open-source projects.
          Find the perfect tools and libraries to power your next big idea.
        </p>

        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-full font-semibold text-lg text-white hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          Explore Projects
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}