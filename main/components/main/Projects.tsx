// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10"> */}
//       <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
//         <ProjectCard

//           src="/task_manager_api.webp"
//           title="Task Manager API"
//           description="A robust REST API for managing tasks with real-time updates using Socket.IO, built with Node.js, Express, and MongoDB."
//         />
//         <ProjectCard
//           src="/fizzFuzz.png"
//           title="Fizz Fuzz: A fuzzing tool for websites"
//           description="Python script finds all the sub domains of a website."
//         />
//         <ProjectCard
//           src="/filecomp.png"
//           title="File Compression Tool"
//           description="Compress any text-based file."
//         />
//         <ProjectCard
//           src="/traffic.png"
//           title="Traffic Light Emergency Vehicle Prioritization System"
//           description="Sets priority for emergency vehicles on traffic signal."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;





// Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/livechat-support.png"
          title="Live Chat Support System"
          description="A real-time chat support system built with Go, featuring WebSocket communication, JWT authentication, and message persistence using SQLite and Redis."
          githubLink="https://github.com/muhammadharoon26/livechat-support"
        />
        <ProjectCard
          src="/task_manager_api.png"
          title="Task Manager API"
          description="A robust REST API for managing tasks with real-time updates using Socket.IO, built with Node.js, Express, and MongoDB."
          githubLink="https://github.com/muhammadharoon26/task-manager-api"
        />
        <ProjectCard
          src="/tier3-devops-cicd-iac-project.png"
          title="Tier3 DevOps CICD IAC Project"
          description="A DevOps project showcasing version control, automated testing, CI/CD, containerization, monitoring, and infrastructure as code."
          githubLink="https://github.com/muhammadharoon26/tier3-devops-cicd-iac-project"
        />
        <ProjectCard
          src="/fizzFuzz.png"
          title="Fizz Fuzz: A fuzzing tool for websites"
          description="Python script finds all the sub domains of a website."
          githubLink="https://github.com/muhammadharoon26/fizzFuzz"
        />
        <ProjectCard
          src="/filecomp.png"
          title="File Compression Tool"
          description="Compress any text-based file."
          githubLink="https://github.com/muhammadharoon26/File-Compression-tool"
        />
        <ProjectCard
          src="/traffic.png"
          title="Traffic Light Emergency Vehicle Prioritization System"
          description="Sets priority for emergency vehicles on traffic signal."
          githubLink="https://github.com/muhammadharoon26/Traffic-Light-Emergency-Vehicle-Priority-System"
        />
      </div>
    </div>
  );
};

export default Projects;