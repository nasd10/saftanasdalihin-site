import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'; // Untuk bagian 'About' di halaman utama
import ProjectPreviewSection from '../components/ProjectPreviewSection'; // Jika ada bagian 'Projects' di halaman utama
// import ContactSection from '../components/ContactSection';
import MiniContactSection from '../components/MiniContactSection.jsx';
import Contact from './Contact';

function Home() {
  return (
    <div className='relative'>
      {/* Bagian Hero */}
      <HeroSection />
      {/* Jika Anda ingin bagian 'About' langsung muncul di Home setelah Hero, tambahkan di sini */}
      <section id="about" className="py-20 px-4 md:px-12">
        <AboutSection />
      </section>
      <section id="projects" className="py-20 px-4 md:px-12">
        <ProjectPreviewSection />
      </section>
      <section id="contact" className="py-20 px-4 md:px-12">
        <MiniContactSection />
      </section>
        
      {/* Tambahkan section lain jika ada di halaman Home */}
      
    </div>
  );
}

export default Home;