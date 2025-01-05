import React from 'react';

interface FooterColumnProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};