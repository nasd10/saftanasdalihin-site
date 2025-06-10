// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 67) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk menentukan kelas aktif untuk desktop
  const getNavLinkClass = ({ isActive }) =>
    `text-white transition duration-300 nav-link-underline ${isActive ? 'font-semibold active-link' : ''}`;
    // Tambahkan 'nav-link-underline' dan 'active-link' secara kondisional

  // Fungsi untuk menentukan kelas aktif untuk mobile (ukuran font berbeda)
  const getMobileNavLinkClass = ({ isActive }) =>
    `text-white text-3xl transition duration-300 mobile-nav-link-underline ${isActive ? 'font-semibold active-link' : ''}`;
    // Tambahkan 'mobile-nav-link-underline' dan 'active-link' secara kondisional

  return (
    <nav
      className={`p-4 md:px-12 flex justify-between items-center w-full z-50 border-b-1 border-violet-300/50 transition-all duration-300
        ${isScrolled ? 'fixed top-0 left-0 bg-gray-900 shadow-lg' : 'absolute top-0 left-0 bg-transparent'}`}
    >
      {/* Bagian Kiri: Logo */}
      <div className="flex-none">
        <NavLink to="/" className="text-xl font-bold text-white tracking-wide cursor-pointer logo">Safta.</NavLink>
      </div>

      {/* Bagian Tengah: Navigasi (Desktop) */}
      <div className="hidden md:flex flex-grow justify-center space-x-10 lg:space-x-16">
        <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
        <NavLink to="/about.html" className={getNavLinkClass}>About</NavLink>
        <NavLink to="/project.html" className={getNavLinkClass}>Projects</NavLink>
        <NavLink to="/contact.html" className={getNavLinkClass}>Contact</NavLink>
      </div>

      {/* Bagian Kanan: Sosial Media (Desktop) */}
      <div className="hidden md:flex flex-none space-x-6 lg:space-x-8">
        <a href="https://instagram.com/safta_nas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500 text-xl transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://github.com/nasdthestudent" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500 text-xl transition duration-300">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/safta-nasdalihin-819168249/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500 text-xl transition duration-300">
          <FaLinkedin />
        </a>
      </div>

      {/* Burger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-30">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none">
            &times;
          </button>
          <NavLink onClick={() => setIsOpen(false)} to="/" className={getMobileNavLinkClass} end>Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/about.html" className={getMobileNavLinkClass}>About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/project.html" className={getMobileNavLinkClass}>Projects</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/contact.html" className={getMobileNavLinkClass}>Contact</NavLink>
          <div className="flex space-x-8 mt-8">
            <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-violet text-3xl transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://github.com/your_github" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-violet text-3xl transition duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-violet text-3xl transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;