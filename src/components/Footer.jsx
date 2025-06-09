// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 px-4 md:px-12 text-center text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-lg">
          &copy; {currentYear} Safta. All rights reserved.
        </div>
        <div className="flex space-x-6 text-2xl">
          <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="hover:text-custom-violet transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://github.com/your_github" target="_blank" rel="noopener noreferrer" className="hover:text-custom-violet transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-custom-violet transition duration-300">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-lg">
          Designed & Built by Safta.
        </div>
      </div>
    </footer>
  );
}

export default Footer;