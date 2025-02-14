// 'use client'
// import Image from "next/image";
// import React, { useState } from "react";
// // import Chatbot from "../sub/Chatbot";
// import '@/app/globals.css';
// import Chatbot from "../sub/Chatbot";


// const Navbar = () => {
//   const [showPdf, setShowPdf] = useState(false);

//   const togglePdfDisplay = () => {
//     setShowPdf(!showPdf);
//   };

//   return (
//     <div>
//       {/* PDF display */}
//       {showPdf && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <iframe
//             src="/Resume - Muhammad Haroon.pdf"
//             title="PDF Viewer"
//             width="80%"
//             height="80%"
//           ></iframe>
//           <button
//             className="absolute top-5 right-5 text-white"
//             onClick={togglePdfDisplay}
//           >
//             Close
//           </button>
//         </div>
//       )}

//       <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
//         <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] cursor-pointer">

// {/* <Image
//   src="/scriptkiddie.png"
//   alt="logo"
//   width={40}
//   height={50}
//   className="cursor-pointer hover:animate-slowspin"
// /> */}
// <div >
// <Chatbot/>
// </div>
// {/* <Chatbot/> */}
// <span className="font-bold ml-[60px] hidden md:block text-gray-300 " style={{ marginLeft: '-225px'}}>
//   Hi!
// </span>

//           <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-2000">
//             <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//               <a href="#about-me" className="cursor-pointer">
//                 About me
//               </a>
//               <a href="#skills" className="cursor-pointer">
//                 Skills
//               </a>
//               <a href="#projects" className="cursor-pointer">
//                 Projects
//               </a>
//             </div>
//           </div>

//           {/* Hamburger menu */}
//           <div className="cursor-pointer" onClick={togglePdfDisplay}>
//             <img
//               src="/resume.png" // Replace with your hamburger icon image
//               alt="Menu"
//               width={30}
//               height={30}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



'use client'
import Image from "next/image";
import React, { useState } from "react";
import Chatbot from "../sub/Chatbot";

const Navbar = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglePdfDisplay = () => {
    setShowPdf(!showPdf);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about-me", text: "About me" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
  ];

  return (
    <div>
      {/* PDF Modal */}
      {showPdf && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <iframe
            src="/Muhammad Haroon - Resume.pdf"
            title="PDF Viewer"
            width="80%"
            height="80%"
          ></iframe>
          <button
            className="absolute top-5 right-5 text-white hover:text-gray-300"
            onClick={togglePdfDisplay}
          >
            Close
          </button>
        </div>
      )}

      {/* Navbar */}
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
        <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Chatbot */}
          {/* <Image
            src="/scriptkiddie.png"
            alt="logo"
            width={40}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
          <div >
            <Chatbot />
          </div>
          <span className="font-bold ml-[60px] hidden md:block text-gray-300 " style={{ marginLeft: '-225px' }}>
            Hi!
          </span>

          {/* Middle - Navigation Links (Hidden on mobile) */}
          <div className="hidden md:block flex-1 max-w-[500px] mx-4">
            <div className="flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Resume button */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button (Visible only on mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Resume Button */}
            <button
              onClick={togglePdfDisplay}
              className="cursor-pointer"
            >
              <img
                src="/resume.png"
                alt="Resume"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014] border-t border-[#7042f861] py-4">
            <div className="flex flex-col items-center space-y-4 text-gray-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;