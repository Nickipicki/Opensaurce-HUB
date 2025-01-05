import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  children: React.ReactNode;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ children }) => {
  return (
    <motion.section 
      className="relative py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {children}
      
      {/* Gradient divider line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 flex justify-center"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div 
          className="h-px w-[90%] max-w-5xl"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.2) 50%, transparent 100%)'
          }}
        />
      </motion.div>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.1) 50%, transparent 100%)'
        }}
      />
    </motion.section>
  );
};