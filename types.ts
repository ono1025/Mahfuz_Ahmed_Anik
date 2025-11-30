export interface SocialLink {
  name: string;
  url: string;
  icon: string; // FontAwesome class
  color: string; // Hex or Tailwind class for specific branding
}

export interface ResearchInterest {
  title: string;
  icon: string;
  description: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  orgUrl?: string;
  period: string;
  description: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue?: string;
  url?: string;
  note?: string;
  links?: { name: string; url: string }[];
}

export interface ProjectItem {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
}

export interface AchievementItem {
  title: string;
  detail?: string;
  url?: string;
}

export interface TrainingItem {
  name: string;
  url?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  major?: string;
  result?: string;
  courses?: string;
}
