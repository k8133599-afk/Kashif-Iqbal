
export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
  achievements: string[];
  metrics?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

export interface ProjectDetail {
  challenge: string;
  solution: string;
  process: string[];
  results: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  details?: ProjectDetail;
}
