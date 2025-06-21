
export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactNode; // Optional: for visual representation
}
export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
  icon?: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string[]; // Array of bullet points
  technologies: string[];
  link?: string; // Optional project link
  imageUrl?: string; // Optional image for the project card
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[]; // Array of bullet points
  technologies?: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  grade?: string;
  coursework?: string[];
  clubs?: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date?: string; // Optional
  link?: string; // Optional link to certificate
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
}

export interface TechItem {
  id: string;
  name: string;
  logoUrl?: string; // If using images for marquee
}
