"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Providing Smooth Workflow of Your Product
      </motion.div>
      {/* <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[25px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
      </motion.div> */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-[25px] text-white max-w-[600px] w-auto h-auto'>
        <span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-red-500'>
            Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
          </span>
        </span>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Experience with vast Technologies
      </motion.div>
    </div>
  )
}

export default SkillText