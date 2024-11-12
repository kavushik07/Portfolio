import React from 'react';
import logo from '../assets/KRLogo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
    return (
        // <nav className='top-0 mb-20 flex items-center justify-between py-6'>
        //     <div className="flex flex-shrink-0 items-center">
        //         <img src={logo} alt='logo'></img>
        //     </div>
        //     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        //         <a href="https://github.com/kavushik07" target="_blank" rel="noopener noreferrer">
        //             <FaGithub />
        //         </a>
        //         <a href="https://www.linkedin.com/in/kavushik-rajappan-72b469247/" target="_blank" rel="noopener noreferrer">
        //             <FaLinkedin />
        //         </a>
        //         <a href="mailto:kavushikrajappan@gmail.com">
        //             <CgMail />
        //         </a>
        //     </div>
        // </nav>
        <nav className="fixed top-0 left-0 w-full mb-20 flex items-center justify-between py-6 p-[100px]">
            <div className="flex flex-shrink-0 items-center ">
                {/* <img className="w-10"
                    src={logo} alt="logo" /> */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://github.com/kavushik07" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kavushik-rajappan-72b469247/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:kavushikrajappan@gmail.com">
                    <CgMail />
                </a>
            </div>
        </nav>

    )
}

export default Navbar