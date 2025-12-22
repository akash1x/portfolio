import { useState } from "react";
import {
  aboutData,
  educationData,
  experienceData,
  headerData,
  projectsData,
  skillsData,
  profileImageData,
} from "../../../config/utils/data";
import {
  AboutData,
  Education,
  Experience,
  HeaderData,
  Project,
  Skill,
} from "../types";

export const usePortfolio = () => {
  // Simulating data fetching or just returning static data
  const [about, setAbout] = useState<AboutData>(aboutData);
  const [education, setEducation] = useState<Education[]>(educationData);
  const [experience, setExperience] = useState<Experience[]>(experienceData);
  const [header, setHeader] = useState<HeaderData>(headerData);
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [skills, setSkills] = useState<Skill[]>(skillsData);
  const [profileImg, setProfileImg] = useState<string>(profileImageData);

  return {
    about,
    education,
    experience,
    header,
    projects,
    skills,
    profileImg,
  };
};
