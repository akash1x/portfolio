import {
  AboutData,
  Education,
  Experience,
  HeaderData,
  Project,
  Skill,
} from "../../features/Homepage/types";
import profileImage from "../../assets/profile.png";

export const headerData: HeaderData = {
  name: "Akash Dohare",
  navItems: [
    "Home",
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ],
};

export const aboutData: AboutData = {
  name: "Akash Dohare",
  title: "Senior Software Engineer",
  welcomeMessage:
    "Full-stack developer with 5+ years of experience building scalable backend systems and rich frontend interfaces.",
  introductionTitle: "/ about me",
  bioPoints: [
    {
      emoji: "👨‍💻",
      description:
        "Senior Software Engineer with 5+ years of experience in building scalable backend systems and rich frontend interfaces.",
    },
    {
      emoji: "🚀",
      description:
        "Proven track record of optimizing system performance, leading code quality initiatives, and delivering client-facing modules used by 50,000+ users.",
    },
    {
      emoji: "🛠",
      description:
        "Experienced in React, NestJS, AWS, Azure, and upgrading legacy systems to modern tech stacks.",
    },
    {
      emoji: "🤝",
      description:
        "Strong problem solver with experience in team mentoring and cross-functional collaboration.",
    },
    {
      emoji: "🏆",
      description:
        "Awarded Persistent's Prize for outstanding performance in the Smart India Hackathon - 2018.",
    },
  ],
};

export const experienceData: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Deqode",
    period: "May 2022 - Present",
    description: [
      "Developed and maintained full-stack Web3 and fintech applications using NestJS, TypeORM, ReactJS, and PostgreSQL.",
      "Collaborated with designers and product teams to deliver 5+ client-facing modules with a combined user base of 50,000+ users.",
      "Led integration of secure payment systems (Trustpay/Praxis), achieving 99.99% success rate.",
      "Mentored 3+ junior developers through pair programming, PR reviews, and architectural discussions.",
      "Optimized PostgreSQL database schemas and queries, resulting in 30% faster query execution.",
    ],
  },
  {
    role: "Research Engineer",
    company: "LG Soft India",
    period: "Mar 2020 - May 2022",
    description: [
      "Spearheaded upgrade of LG Audio Recorder and File Manager apps to latest Android APIs (Android 10 to 12) for 10M+ global users.",
      "Fixed over 200+ issues related to system compatibility and OS behavior changes using ADB log analysis.",
      "Increased app crash-free sessions by 25%.",
      "Documented upgrade procedures and collaborated across India-Korea teams for OS compliance transitions.",
    ],
  },
];

export const educationData: Education[] = [
  {
    degree: "Post Graduate Diploma In Advance Computing",
    institution: "CDAC, Pune",
    period: "08/2019 - 02/2020",
  },
  {
    degree: "B.Tech Computer Science And Engineering",
    institution: "JSS Academy Of Technical Education, Noida",
    period: "08/2014 - 08/2018",
  },
  {
    degree: "12th Standard (Higher Secondary)",
    institution: "Kendriya Vidyalaya, Lucknow",
    period: "03/2013 - 03/2014",
  },
  {
    degree: "10th Standard (Secondary)",
    institution: "Kendriya Vidyalaya, Lucknow",
    period: "03/2011 - 03/2012",
  },
];

export const skillsData: Skill[] = [
  { name: "React JS" },
  { name: "Nest JS" },
  { name: "Node JS" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "AWS" },
  { name: "Azure" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Java Core" },
  { name: "C++" },
];

export const projectsData: Project[] = [
  {
    title: "Blinkplanet",
    description:
      "Web3/Fintech platform. Integrated secure fiat payment gateways and optimized DB schemas.",
    technologies: ["NestJS", "ReactJS", "Web3", "AWS", "Postgres"],
    link: "https://www.blinkplanet.com/",
    image: "https://placehold.co/600x400/png?text=Blinkplanet",
  },
  {
    title: "Employee Handbook",
    description:
      "Scalable platform for employee onboarding used by 500+ small businesses.",
    technologies: ["NodeJS", "ReactJS", "Contentful CMS", "Azure"],
    link: "https://smallbusiness.wsps.ca/safety-orientation-handbook/",
    image: "https://placehold.co/600x400/png?text=Employee+Handbook",
  },
  {
    title: "WSPS",
    description:
      "Production web app upgrade and backend migration to Azure Functions.",
    technologies: ["Craft CMS", "Azure Functions", "SQL", "Node.js"],
    link: "https://wsps.ca/",
    image: "https://placehold.co/600x400/png?text=WSPS",
  },
];

export const profileImageData = profileImage;
