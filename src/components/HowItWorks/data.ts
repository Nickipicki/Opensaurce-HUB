import { UserPlus, GitFork, Users } from 'lucide-react';
import { Step } from './types';

export const steps: Step[] = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Set up your developer profile, add your skills, and connect your GitHub account to showcase your contributions.',
    icon: UserPlus
  },
  {
    number: '02',
    title: 'Discover Projects',
    description: 'Browse through a curated list of open source projects, filter by technology, and find the perfect project to contribute to.',
    icon: GitFork
  },
  {
    number: '03',
    title: 'Join the Community',
    description: 'Connect with other developers, collaborate on projects, and grow your network in the open source community.',
    icon: Users
  }
];