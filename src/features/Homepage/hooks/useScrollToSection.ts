import { useRef } from "react";

export const useScrollToSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Education":
        educationRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return {
    aboutRef,
    experienceRef,
    educationRef,
    skillsRef,
    projectsRef,
    contactRef,
    scrollToSection,
  };
};
