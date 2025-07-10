export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  category: 'real' | 'fictional';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'devops' | 'security';
}

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export type Language = 'pt' | 'en';
export type Theme = 'light' | 'dark';