export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  category: "cloud" | "ai" | "data" | "microservices";
  description: string;
  badge: string;
  metrics: { label: string; value: string }[];
  features: string[];
  techStack: string[];
  architectureSnippet: {
    title: string;
    language: string;
    code: string;
  };
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  client: string;
  industry: "FinTech" | "HealthTech" | "E-Commerce" | "Logistics" | "DevSecOps";
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  readTime: string;
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  architectureHighlights: string[];
}

export interface BentoFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  colSpan?: string;
  badge?: string;
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  highlight: string;
}
