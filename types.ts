import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  monthly?: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}