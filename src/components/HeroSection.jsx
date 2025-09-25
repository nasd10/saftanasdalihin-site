// src/components/HeroSection.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';

function HeroSection() {
  const handleScrollDown = () => {
    // Cari elemen section "about" di halaman yang sama
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="z-5 relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-[75%]"
           style={{
             backgroundImage: 'url("images/Nasel.jpg")',
             backgroundAttachment: 'fixed',
           }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-violet-500 rounded-full animate-pulse-slow z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-violet-400 rounded-full animate-pulse-medium z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-violet-300 rounded-full animate-pulse-fast z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full p-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Hi, I'm <i className='font-serif'>Safta Nasdalihin</i><br />
          <span className="text-violet-500">Blockchain Developer</span>
        </h1>
        <p className="text-xl md:text-2xl italic mb-10 animate-fade-in-up delay-200">"Take it seriously, aim higher"</p>
        <div className="flex justify-center space-x-8 animate-fade-in-up delay-400">
          <a href="https://instagram.com/safta_nas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500 text-3xl transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://github.com/nasdthestudent" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500 text-3xl transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/saftanasdalihin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500 text-3xl transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={handleScrollDown}>
        <span className="text-white text-4xl hover:text-violet-500 transition duration-300">
          <FaChevronDown />
        </span>
      </div>
    </section>
  );
}

export default HeroSection;