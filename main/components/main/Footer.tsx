// import React from "react";
// import {
//   RxGithubLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";
// import MailIcon from '@mui/icons-material/Mail';

// const Footer = () => {
//   return (
//     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
//         <div className="w-full flex flex-col items-center justify-center m-auto">
//             <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxGithubLogo />
//                         <a href ="https://github.com/muhammadharoon26" className="text-[15px] ml-[6px]">GitHub</a>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <span className="text-[15px] ml-[6px]">+92-332-5623738</span>    
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxLinkedinLogo />
//                         <a href= "http://www.linkedin.com/in/muhammadharoon26" className="text-[15px] ml-[6px]">LinkedIn</a>    
//                     </p>
//                     {/* <p className="flex flex-row items-center my-[15px] cursor-pointer"> */}
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <MailIcon />
//                         <span className="text-[15px] ml-[6px]">mharoon1326@gmail.com</span>    
//                     </p>
//                 </div>
//             </div>

//             <div className="mb-[20px] text-[15px] text-center">
//                 &copy; Muhammad Haroon Inc. All rights reserved
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer















import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    return (
        <footer className="relative z-20 w-full bg-transparent text-gray-200 shadow-lg p-4">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] flex flex-col items-center justify-start">
                        <div className="my-4">
                            <a
                                href="https://github.com/muhammadharoon26"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center cursor-pointer hover:text-gray-400 transition-colors relative z-30"
                            >
                                <RxGithubLogo size={20} />
                                <span className="text-[15px] ml-2">GitHub</span>
                            </a>
                        </div>

                        <div className="my-4">
                            <a
                                href="tel:+923325623738"
                                className="flex flex-row items-center cursor-pointer hover:text-gray-400 transition-colors relative z-30"
                            >
                                <span className="text-[15px]">+92-332-5623738</span>
                            </a>
                        </div>
                    </div>

                    <div className="min-w-[200px] flex flex-col items-center justify-start">
                        <div className="my-4">
                            <a
                                href="https://www.linkedin.com/in/muhammadharoon26"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center cursor-pointer hover:text-gray-400 transition-colors relative z-30"
                            >
                                <RxLinkedinLogo size={20} />
                                <span className="text-[15px] ml-2">LinkedIn</span>
                            </a>
                        </div>

                        <div className="my-4">
                            <a
                                href="mailto:mharoon1326@gmail.com"
                                className="flex flex-row items-center cursor-pointer hover:text-gray-400 transition-colors relative z-30"
                            >
                                <MailIcon fontSize="small" />
                                <span className="text-[15px] ml-2">mharoon1326@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mb-5 text-[15px] text-center">
                    &copy; Muhammad Haroon Inc. All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;