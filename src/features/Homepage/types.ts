export interface Skill {
  name: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  image?: string;
}

export interface AboutData {
  name: string;
  title: string;
  welcomeMessage: string;
  introductionTitle: string;
  bioPoints: {
    emoji: string;
    description: string;
  }[];
}

export interface HeaderData {
  name: string;
  navItems: string[];
}
