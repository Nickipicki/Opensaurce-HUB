import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface AvatarSelectorProps {
  selectedAvatar: string;
  onSelect: (avatar: string) => void;
}

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ selectedAvatar, onSelect }) => {
  // Generate static avatar URLs with fixed seeds
  const avatarStyles = [
    { style: 'adventurer', seed: 'avatar1' },
    { style: 'avataaars', seed: 'avatar2' },
    { style: 'fun-emoji', seed: 'avatar3' },
    { style: 'pixel-art', seed: 'avatar4' },
    { style: 'bottts', seed: 'avatar5' },
    { style: 'initials', seed: 'avatar6' }
  ];

  // Generate URLs only once
  const avatarUrls = avatarStyles.map(({ style, seed }) => 
    `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`
  );

  // If no avatar is selected, select the first one by default
  React.useEffect(() => {
    if (!selectedAvatar && avatarUrls.length > 0) {
      onSelect(avatarUrls[0]);
    }
  }, [selectedAvatar, avatarUrls, onSelect]);

  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {avatarUrls.map((avatarUrl, index) => (
        <motion.button
          key={avatarUrl}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(avatarUrl)}
          className={`relative p-1 rounded-xl transition-all duration-300 ${
            selectedAvatar === avatarUrl
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
              : 'bg-gray-800/50 hover:bg-gray-700/50'
          }`}
        >
          <img
            src={avatarUrl}
            alt={`Avatar option ${index + 1}`}
            className="w-full aspect-square rounded-lg"
          />
          {selectedAvatar === avatarUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 rounded-xl ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0D1117]"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};