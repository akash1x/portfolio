import { usePortfolio } from "../hooks/usePortfolio";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { projects } = usePortfolio();
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h3>Innovative Creations</h3>
        <h1>Projects</h1>
      </div>
      <div className="flex  gap-4">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
