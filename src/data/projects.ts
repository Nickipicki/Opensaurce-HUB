import { Code2, GitBranch, Globe, Shield, Cpu, Database, Cloud, Smartphone } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  stars: number;
  forks: number;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

// Featured projects for homepage
export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'TensorFlow',
    description: "An open-source machine learning framework for everyone",
    stars: 172000,
    forks: 88000,
    tags: ['Machine Learning', 'Python', 'C++'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    title: 'React Native',
    description: 'Create native apps for Android and iOS using React',
    stars: 108000,
    forks: 23000,
    tags: ['Mobile', 'JavaScript', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    title: 'VS Code',
    description: 'Code editing. Redefined.',
    stars: 145000,
    forks: 26000,
    tags: ['Editor', 'TypeScript', 'Electron'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    featured: true
  }
];

// All projects including non-featured ones
export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    title: 'CodeCraft IDE',
    description: 'Modern, lightweight code editor with AI assistance',
    stars: 1200,
    forks: 180,
    tags: ['Developer Tools', 'TypeScript', 'Electron'],
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'DataFlow',
    description: 'Real-time data processing pipeline framework',
    stars: 850,
    forks: 120,
    tags: ['Data Engineering', 'Python', 'Apache Beam'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'SecureAuth',
    description: 'Zero-trust authentication system for modern apps',
    stars: 2300,
    forks: 340,
    tags: ['Security', 'Go', 'Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'CloudScale',
    description: 'Kubernetes operator for automatic scaling',
    stars: 1800,
    forks: 250,
    tags: ['DevOps', 'Go', 'Kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AIAssist',
    description: 'Machine learning toolkit for code completion',
    stars: 3200,
    forks: 420,
    tags: ['AI/ML', 'Python', 'Developer Tools'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-4b0face48697?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'MobileKit',
    description: 'Cross-platform mobile UI components',
    stars: 920,
    forks: 145,
    tags: ['Mobile', 'React Native', 'UI'],
    imageUrl: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'GraphQL Engine',
    description: 'High-performance GraphQL server with real-time subscriptions',
    stars: 4100,
    forks: 580,
    tags: ['GraphQL', 'Rust', 'Database'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'WebAssembly Kit',
    description: 'Tools for building and optimizing WebAssembly modules',
    stars: 1600,
    forks: 210,
    tags: ['WebAssembly', 'Rust', 'Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=800&q=80'
  }
];