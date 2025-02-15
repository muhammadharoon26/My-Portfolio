// ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  title,
  description,
  githubLink,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <img src={src} alt={title} width={1000} height={1000} className="w-full h-64 object-cover" />
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
      >
        <h2 className="text-lg font-bold mt-4">{title}</h2>
      </a>
      <p className="text-gray-600">{description}</p>

    </div>
  );
};

export default ProjectCard;