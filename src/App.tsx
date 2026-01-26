import About from "./features/Homepage/sections/About";
import Contact from "./features/Homepage/sections/Contact";
import Education from "./features/Homepage/sections/Education";
import Experience from "./features/Homepage/sections/Experience";
import Header from "./features/Homepage/sections/Header";
import Projects from "./features/Homepage/sections/Projects";
import Skills from "./features/Homepage/sections/Skills";
import Footer from "./features/Homepage/sections/Footer";
import "./App.css";
import { useScrollToSection } from "./hooks/useScrollToSection";
import Intro from "./features/Homepage/sections/Intro";
import { usePortfolio } from "./hooks/usePortfolio";

import SkeletonLoader from "./components/SkeletonLoader";
import { Reveal } from "./components/Reveal";

function App() {
  const {
    aboutRef,
    experienceRef,
    educationRef,
    skillsRef,
    projectsRef,
    contactRef,
    scrollToSection,
  } = useScrollToSection();

  const { isLoading } = usePortfolio();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-6 md:px-10 lg:px-0 overflow-x-hidden">
      <Header onScroll={scrollToSection} />
      <Reveal width="100%">
        <Intro />
      </Reveal>
      <Reveal width="100%">
        <About ref={aboutRef} />
      </Reveal>
      <Reveal width="100%">
        <Experience ref={experienceRef} />
      </Reveal>
      <Reveal width="100%">
        <Education ref={educationRef} />
      </Reveal>
      <Reveal width="100%">
        <Skills ref={skillsRef} />
      </Reveal>
      <Reveal width="100%">
        <Projects ref={projectsRef} />
      </Reveal>
      <Reveal width="100%">
        <Contact ref={contactRef} />
      </Reveal>
      <Footer />
    </div>
  );
}

export default App;
function getAboutMe() {
  throw new Error("Function not implemented.");
}
