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
      <Title title="/ projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
