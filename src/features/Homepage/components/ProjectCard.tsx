import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      {project.technologies && <p>Tech: {project.technologies.join(", ")}</p>}
    </div>
  );
};

export default ProjectCard;
