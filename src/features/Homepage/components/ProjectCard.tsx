import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-green-bright/5 px-4 py-6 rounded-xl">
      <div className="flex mb-4 justify-between items-center">
        <CiFolderOn className="text-4xl text-[#64ffda]" />
        <div className="flex gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              title={project.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              title={project.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkSquareAlt className="text-2xl" />
            </a>
          )}
        </div>
      </div>
      <img
        className="w-auto h-50 rounded-xl"
        src={project.image}
        alt="project image"
      />
      <div className="mt-4">
        <h4 className="font-bold font-xl mb-2">{project.title}</h4>
        <p className="mb-4">{project.description}</p>

        {project.techStack && (
          <p>
            <span className="font-bold">Tech Stack:</span>{" "}
            {project.techStack.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
