import React from 'react';
import { Code2 } from 'lucide-react';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';

const footerSections = {
  explore: {
    title: 'Explore',
    links: [
      { label: 'Featured Projects', href: '#' },
      { label: 'Categories', href: '#' },
      { label: 'Trending', href: '#' },
      { label: 'New Projects', href: '#' },
    ],
  },
  contribute: {
    title: 'Contribute',
    links: [
      { label: 'How to Contribute', href: '#' },
      { label: 'Guidelines', href: '#' },
      { label: 'Submit Project', href: '#' },
      { label: 'Become a Maintainer', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="relative bg-[#0D1117]/80 backdrop-blur-xl border-t border-gray-800/50">
      {/* Purple Gradient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-[120px]" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-gray-800/50">
          {/* Logo Section */}
          <div className="lg:max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-1.5">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OpenSourceHub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover amazing open source projects and connect with developers from around the world.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(footerSections).map(([key, section]) => (
              <FooterColumn key={key} {...section} />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OpenSourceHub. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};