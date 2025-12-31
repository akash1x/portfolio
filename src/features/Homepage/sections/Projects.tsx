import { forwardRef } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import ProjectCard from "../components/ProjectCard";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const { projects } = usePortfolio();
  return (
    <div ref={ref} className="flex flex-col gap-20">
      <div className="flex flex-col gap-20">
        <h1>/ pet projects</h1>
      </div>
      <div className="flex  gap-4">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </div>
  );
});

export default Projects;
