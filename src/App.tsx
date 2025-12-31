import About from "./features/Homepage/sections/About";
import Contact from "./features/Homepage/sections/Contact";
import Education from "./features/Homepage/sections/Education";
import Experience from "./features/Homepage/sections/Experience";
import Header from "./features/Homepage/sections/Header";
import Projects from "./features/Homepage/sections/Projects";
import Skills from "./features/Homepage/sections/Skills";
import Footer from "./features/Homepage/sections/Footer";
import "./App.css";
import { useScrollToSection } from "./features/Homepage/hooks/useScrollToSection";

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

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto gap-70">
      <Header onScroll={scrollToSection} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Education ref={educationRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
