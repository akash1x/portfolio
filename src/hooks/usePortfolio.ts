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
    getIntro,
    getContact,
  } = useContentful();

  const [about, setAbout] = useState<any>(null);
  const [education, setEducation] = useState<any[]>([]);
  const [experience, setExperience] = useState<any[]>([]);
  const [header, setHeader] = useState(headerData);
  const [projects, setProjects] = useState<any[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [profileImg, setProfileImg] = useState<string>("");
  const [resume, setResume] = useState<any>(null);
  const [intro, setIntro] = useState<any>("");
  const [contact, setContact] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [
        aboutData,
        workExperienceData,
        technicalSkillsData,
        educationData,
        projectsData,
        resumeData,
        introData,
        contactData,
      ] = await Promise.all([
        getAboutMe(),
        getWorkExperiences(),
        getTechnicalSkills(),
        getEducations(),
        getProjects(),
        getResume(),
        getIntro(),
        getContact(),
      ]);

      if (aboutData) {
        setAbout(aboutData);
        setProfileImg(aboutData.profileImage);
      }

      if (workExperienceData) {
        setExperience(workExperienceData);
      }

      if (technicalSkillsData) {
        setSkills(technicalSkillsData as string[]);
      }

      if (educationData) {
        setEducation(educationData);
      }

      if (projectsData) {
        setProjects(projectsData);
      }

      if (resumeData) {
        setResume(resumeData);
      }

      if (introData) {
        setIntro(introData);
      }

      if (contactData) {
        setContact(contactData);
      }
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    } finally {
      setIsLoading(false);
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
    intro,
    contact,
    isLoading,
  };
};
