export interface ADUService {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  imageUrl: string;
  features: string[];
  turnaroundTime: string;
}

export interface ADUModel {
  id: string;
  name: string;
  slug: string;
  sqft: number;
  startingPrice: number;
  priceFormatted: string;
  dimensions: string;
  bedrooms: string;
  bathrooms: string;
  imageUrl: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  type: string;
  sqft: number;
  cost: string;
  permitWeeks: string;
  rentalIncome: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  highlights: string[];
}

export interface CityInfo {
  name: string;
  slug: string;
  county: string;
  population: string;
  avgRent: string;
  permitTurnaroundWeeks: string;
  keyZoningNotes: string;
  isPriority: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  imageUrl: string;
  credentials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
  category: string;
  readTime: string;
}
