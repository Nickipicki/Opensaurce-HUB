import React from 'react';
import { Code2, Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { transitionClasses } from '../../utils/transitions';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' }
];

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  Resources: ['Documentation', 'API Reference', 'Guides', 'Examples'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Status']
};

export const ModernFooter = () => {
  return (
    <footer className="relative bg-[#0D1117]/80 backdrop-blur-xl border-t border-purple-500/10">
      {/* Purple gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-[120px]" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 group">
              <div className={`bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-1.5 ${transitionClasses.hover.scale}`}>
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OpenSourceHub</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Discover and contribute to amazing open source projects. Join our community of developers making the web better, together.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center ${transitionClasses.hover.scale} ${transitionClasses.hover.glow} group`}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-6">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OpenSourceHub. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button className={`text-gray-400 ${transitionClasses.hover.color} hover:text-purple-400`}>
              Privacy Policy
            </button>
            <button className={`text-gray-400 ${transitionClasses.hover.color} hover:text-purple-400`}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};