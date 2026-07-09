export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'core' | 'growth' | 'admin';
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  typicalNeeds: string[];
  heroImage: string;
  tagline: string;
  primaryColor: string;
}

export interface DemoSite {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  primaryColor: string;
  rating: string;
  reviewCount: number;
  services: string[];
  phone: string;
  email: string;
  location: string;
}

export interface PricingTier {
  name: string;
  priceMonthly: number;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  location: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
