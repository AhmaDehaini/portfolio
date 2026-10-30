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

export interface ImpactMetric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: string;
  color: string;
  bg: string;
  bar: string;
  fill: number;
  note: string;
}

export interface EfficiencyGain {
  label: string;
  value: number;
  stroke: string;
}

export interface AutomationProject {
  title: string;
  industry: string;
  icon: string;
  accent: string;
  problem: string;
  solution: string;
  monthlySavings: number;
  hoursSaved: number;
  results: string[];
  tags: string[];
}
