export interface Skill {
  name: string;
}

export interface Experience {
  designation: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  collge: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  techStack?: string[];
  link?: string;
  image?: string;
  githubLink?: string;
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
  socialLinks: {
    github: string;
    linkedin: string;
  };
}
