import React from 'react';
import { transitionClasses } from '../utils/transitions';

interface SectionDividerProps {
  children: React.ReactNode;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ children }) => {
  return (
    <section className="relative py-32">
      {children}
      
      {/* Gradient divider line */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div 
          className={`h-px w-[90%] max-w-5xl ${transitionClasses.base}`}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.2) 50%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.1) 50%, transparent 100%)'
        }}
      />
    </section>
  );
};