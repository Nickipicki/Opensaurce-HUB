export const transitionClasses = {
  // Base transitions
  base: 'transition-all duration-700 ease-in-out',
  
  // Specific transitions
  fade: 'transition-opacity duration-700 ease-in-out',
  scale: 'transition-transform duration-700 ease-in-out',
  
  // Hover effects
  hover: {
    scale: 'hover:scale-105 transition-transform duration-700 ease-in-out',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-shadow duration-700 ease-in-out',
    color: 'transition-colors duration-700 ease-in-out'
  }
};