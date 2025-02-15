"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-4">
      {/* Title Section */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Providing Smooth Workflow of Your Product
      </motion.div>

      {/* About Me Box */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        // className="flex flex-col items-center justify-center border border-[#7042f88b] bg-[#2a2a3e] p-8 rounded-lg opacity-90 w-[90%] max-w-[800px] h-auto"
        className='Welcome-box flex flex-col items-center justify-center p-8 border border-[#7042f88b] opacity-[0.9] w-[90%] max-w-[800px] h-auto'
      >
        <h1 className="text-white font-bold text-[16px] leading-relaxed text-center">
          {/* <h1> */}
          Developer with 1 year of experience in Azure DevOps, Kubernetes, Jenkins, Python, Django, Node.js, Selenium, and
          API development. Proficient in Python and database optimization, with a proven ability to build scalable solutions,
          enhance performance, and drive projects in Agile environments. Committed to continuous learning and emerging
          technologies
        </h1>
      </motion.div>

      {/* Additional Text */}
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="text-[20px] text-gray-200 mt-10 text-center"
      >
        Experience With Vast Technologies !
      </motion.div>
    </div>
  );
};

export default SkillText;
