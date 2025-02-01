// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={1000}
//         className="w-full object-contain"
//       />

//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;










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
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={src} alt={title} className="w-full h-64 object-cover" />
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