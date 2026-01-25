import { forwardRef } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import ProjectCard from "../components/ProjectCard";
import Title from "../../../components/Title";
interface ProjectsProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const Projects = ({ ref }: ProjectsProps) => {
  const { projects } = usePortfolio();
  return (
    <div ref={ref} className="flex flex-col gap-20">
      <Title title="/ pet projects" />
      <div className="flex  gap-4">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
