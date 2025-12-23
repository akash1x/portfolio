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
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ],
};

export const aboutData: AboutData = {
  name: "Akash Dohare",
  title: "Software Engineer",
  welcomeMessage:
    "Welcome to my portfolio,please scroll down to know more about me",
  introductionTitle: "Introduction",
  bioPoints: [
    {
      emoji: "👨‍💻",
      description:
        "I'm a Software Engineer with over 4 years of experience in software development and cloud technologies.",
    },
    {
      emoji: "🎓",
      description:
        "Currently working toward my Honours Bachelor of Science in Computer Science at Ontario Tech University, I'm all about building reliable, scalable software that makes a difference.",
    },
    {
      emoji: "🛠",
      description:
        "From full-stack development to cloud-based solutions, I've led enterprise-level projects that streamline operations and deliver real impact.",
    },
    {
      emoji: "🔧",
      description:
        "I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈",
    },
    {
      emoji: "📈",
      description:
        "I'm always learning and exploring new technologies to stay ahead of the curve. 📈",
    },
  ],
};

export const experienceData: Experience[] = [
  {
    role: "Software Engineer",
    company: "Deqode",
    period: "2022-2025",
    description: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },

  {
    role: "Software Engineer",
    company: "Deqode",
    period: "2022-2025",
    description: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },

  {
    role: "Software Engineer",
    company: "Deqode",
    period: "2022-2025",
    description: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "JSS Academy of Technical Education",
    period: "2014-2018",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "JSS Academy of Technical Education",
    period: "2014-2018",
  },
];

export const skillsData: Skill[] = [
  { name: "React" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Python" },
  { name: "JavaScript" },
  { name: "HTML" },
  { name: "CSS" },
];

export const projectsData: Project[] = [
  {
    title: "Project 1",
    description: "Project description placeholder.",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/username/project1",
    image: "https://placehold.co/600x400/png",
  },

  {
    title: "Project 1",
    description: "Project description placeholder.ddd",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/username/project1",
    image: "https://placehold.co/600x400/png",
  },
];

export const profileImageData = profileImage;
