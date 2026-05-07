export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  accent: string;
  image?: string;
}

export interface Game {
  title: string;
  video: string;
  description: string;
  tags: string[];
}
