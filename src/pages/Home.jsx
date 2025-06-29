import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'; // Untuk bagian 'About' di halaman utama
import ProjectPreviewSection from '../components/ProjectPreviewSection'; // Jika ada bagian 'Projects' di halaman utama
import MiniContactSection from '../components/MiniContactSection.jsx';
import { Helmet } from 'react-helmet-async'; // Pastikan Anda sudah menginstal react-helmet-async

function Home() {
  return (
    <>
    <Helmet>
        <title>Safta Nasdalihin | Blockchain & Smart Contract Developer Portfolio</title>
        <meta name="description" content="Safta Nasdalihin is a passionate self-taught Blockchain Developer specializing in secure smart contracts and decentralized solutions. Explore my projects and journey in Web3." />
        {/* Anda bisa menambahkan meta tag lain di sini jika perlu, seperti keywords (jarang digunakan lagi) */}
      </Helmet>
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
    </>
  );
}

export default Home;