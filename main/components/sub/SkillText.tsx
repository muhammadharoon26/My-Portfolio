// "use client"
// import React from 'react'
// import { motion } from 'framer-motion'
// import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

// const SkillText = () => {
//   return (
//     <div className='w-full h-auto flex flex-col items-center justify-center'>
//       <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
//       >
//         Providing Smooth Workflow of Your Product
//       </motion.div>
//       {/* <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='text-[25px] text-white font-medium mt-[10px] text-center mb-[15px]'
//       >
//         Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
//       </motion.div> */}
//       <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='flex flex-col gap-6 mt-6 text-6xl font-bold text-[25px] w-auto h-auto'>
//         <span>
//           <span className='text-transparent text-justify bg-clip-text bg-gradient-to-r from-lime-500 to-red-500'>
//             Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
//           </span>
//         </span>
//       </motion.div>
//       <motion.div
//         variants={slideInFromRight(0.5)}
//         className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
//       >
//         Experience with vast Technologies
//       </motion.div>
//     </div>
//   )
// }

// export default SkillText




// "use client"
// import React from 'react'
// import { motion } from 'framer-motion'
// import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

// const SkillText = () => {
//   return (
//     <div className='w-full h-auto flex flex-col items-center justify-center'>
//       <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
//       >
//         Providing Smooth Workflow of Your Product
//       </motion.div>
//       {/* <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='text-[25px] text-white font-medium mt-[10px] text-center mb-[15px]'
//       >
//         Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
//       </motion.div> */}
//       {/* <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='flex flex-col gap-6 mt-6 text-6xl font-bold text-[25px] w-auto h-auto'
//       >
//         <div className='text-justify'>
//           <span className='text-transparent text-white'>
//             Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
//           </span>
//         </div>
//       </motion.div> */}
//       <motion.div
//         variants={slideInFromLeft(0.5)}
//         className='Welcome-box py-auto px-auto border border-[#7042f88b] opacity-[0.9] w-auto h-auto'>
//         <h1 className='Welcome-text text-bold text-[13px]'>
//           {/* Muhammad Haroon Portfolio */}
//           Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
//         </h1>
//       </motion.div>
//       <motion.div
//         variants={slideInFromRight(0.5)}
//         className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
//       >
//         Experience with vast Technologies
//       </motion.div>
//     </div>
//   )
// }

// export default SkillText









"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';

const SkillText = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center px-4'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Providing Smooth Workflow of Your Product
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='Welcome-box py-6 px-8 border border-[#7042f88b] opacity-[0.9] w-full max-w-[800px] h-auto text-center'
      >
        <h1 className='Welcome-text text-bold text-[16px] text-white'>
          Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Experience with vast Technologies
      </motion.div>
    </div>
  );
}

export default SkillText;
