import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-green-bright/5 px-4 py-6 rounded-xl">
      <img
        className="w-auto h-50 rounded-xl"
        src={project.image}
        alt="project image"
      />
      <div className="mt-4">
        <h4 className="font-bold font-xl">{project.title}</h4>
        <p className="">{project.description}</p>

        {project.technologies && <p>Tech: {project.technologies.join(", ")}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
