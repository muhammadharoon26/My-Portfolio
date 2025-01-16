"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[15px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className='Welcome-text text-bold text-[13px]'>
                        {/* Muhammad Haroon Portfolio */}
                        Delivering Solutions of DevOps | Backend Development | API Development | Web Scraping

                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    <span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-red-500'>
                            DevOps Engineer | Backend Developer
                        </span>
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-purple-400 my-5 max-w-[600px]'>
                    Developer with 10 months of experience in cloud, CI/CD and API development. Proficient in Python and database optimisation. Proven ability to design and implement scalable solutions, enhance application performance and drive successful projects in Agile environments. Committed to continuous learning and adapting evolving technologies.
                </motion.p>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <Image
                    src="/mainIconsdark.svg"
                    alt="work-icons"
                    height={650}
                    width={650} />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent