'use client'
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [showPdf, setShowPdf] = useState(false);

  const togglePdfDisplay = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div>
      {/* PDF display */}
      {showPdf && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <iframe
            src="/Resume (1).pdf"
            title="PDF Viewer"
            width="80%"
            height="80%"
          ></iframe>
          <button
            className="absolute top-5 right-5 text-white"
            onClick={togglePdfDisplay}
          >
            Close
          </button>
        </div>
      )}

      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/scriptkiddie.png"
              alt="logo"
              width={40}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Hi!
            </span>
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-2000">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>

          {/* Hamburger menu */}
          <div className="cursor-pointer" onClick={togglePdfDisplay}>
            <Image
              src="/resume.png" // Replace with your hamburger icon image
              alt="Menu"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
