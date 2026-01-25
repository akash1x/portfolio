import { useState, useEffect } from "react";
import { headerData } from "../config/utils/data";
import useContentful from "./useContentful";
import { resume } from "react-dom/server";

export const usePortfolio = () => {
  const {
    getAboutMe,
    getWorkExperiences,
    getTechnicalSkills,
    getEducations,
    getProjects,
    getResume,
  } = useContentful();

  const [about, setAbout] = useState<any>(null);
  const [education, setEducation] = useState<any[]>([]);
  const [experience, setExperience] = useState<any[]>([]);
  const [header, setHeader] = useState(headerData);
  const [projects, setProjects] = useState<any[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [profileImg, setProfileImg] = useState<string>("");
  const [resume, setResume] = useState<any>(null);
  const fetchData = async () => {
    try {
      const aboutData = await getAboutMe();
      if (aboutData) {
        setAbout(aboutData);
        setProfileImg(aboutData.profileImage);
      }

      const workExperienceData = await getWorkExperiences();

      if (workExperienceData) {
        setExperience(workExperienceData);
      }

      const technicalSkillsData = await getTechnicalSkills();
      if (technicalSkillsData) {
        setSkills(technicalSkillsData as string[]);
      }

      const educationData = await getEducations();
      if (educationData) {
        setEducation(educationData);
      }

      const projectsData = await getProjects();
      if (projectsData) {
        setProjects(projectsData);
      }

      const resumeData = await getResume();
      if (resumeData) {
        setResume(resumeData);
      }
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    about,
    education,
    experience,
    header,
    projects,
    skills,
    profileImg,
    resume,
  };
};
