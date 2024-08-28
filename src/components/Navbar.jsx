import React from 'react';
import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-5 w-20 rounded-full' src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-between gap-4 text-2xl">
        <div className="flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
