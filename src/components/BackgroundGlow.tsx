import React from 'react';

export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Top-left glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur-[120px]" />
      </div>
      
      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur-[100px]" />
      </div>
    </div>
  );
}