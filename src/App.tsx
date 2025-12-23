import About from "./features/Homepage/sections/About";
import Contact from "./features/Homepage/sections/Contact";
import Education from "./features/Homepage/sections/Education";
import Experience from "./features/Homepage/sections/Experience";
import Header from "./features/Homepage/sections/Header";
import Projects from "./features/Homepage/sections/Projects";
import Skills from "./features/Homepage/sections/Skills";
import "./App.css";
function App() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto gap-10">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
