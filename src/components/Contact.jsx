import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="px-6 border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {" "}
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="m-8 flex items-center justify-center gap-8 text-2xl"
        >
          <a
            href="https://www.linkedin.com/in/rimpy-yadav-ab1581271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className=" hover:text-purple-800"/>
          </a>
          <a
            href="https://github.com/Rimpyyadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" hover:text-purple-800" />
          </a>
          <a
            href="https://twitter.com/Rimpyadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className=" hover:text-purple-800" />
          </a>

          <a href="rimpy4216@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className=" hover:text-purple-800" />
      </a>
        </motion.div>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          created by rimpy 
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;
