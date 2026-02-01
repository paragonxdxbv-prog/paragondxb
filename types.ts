import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  gradient: string;
  image: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}