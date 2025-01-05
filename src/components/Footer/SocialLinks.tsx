import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500/20 transition-colors group"
        >
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
        </a>
      ))}
    </div>
  );
};