import { usePortfolio } from "../hooks/usePortfolio";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { projects } = usePortfolio();

  return (
    <div>
      <h3>Projects</h3>
      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </div>
  );
};

export default Projects;
