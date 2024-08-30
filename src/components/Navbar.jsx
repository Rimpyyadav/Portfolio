import React from 'react';
///import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full flex items-center justify-between py-2 px-4 z-50 backdrop-blur-lg">
      <div className="flex flex-shrink-0 items-center">
        
      </div>
      <div className="m-6 flex items-center justify-between gap-4 text-2xl">
        <div className="flex space-x-5">
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
