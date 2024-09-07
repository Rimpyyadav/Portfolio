import React from 'react';
///import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full flex items-center justify-between py-2 px-4 z-50 backdrop-blur-lg scroll-behaviour: smooth">
      <div className="flex flex-shrink-0 items-center scroll-behaviour: smooth">
        
      </div>
      <div className="m-6 flex items-center justify-between gap-4 text-2xl scroll-behaviour: smooth">
        <div className="flex space-x-5 ">
          <a href="#home" className="text-white hover:text-pink-500">Home</a>
          <a href="#about" className="text-white hover:text-pink-500">About</a>
          <a href="#skills" className="text-white hover:text-pink-500">Skills</a>
          <a href="#projects" className="text-white hover:text-pink-500">Projects</a>
          <a href="#contact" className="text-white hover:text-pink-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
