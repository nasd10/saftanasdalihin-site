// src/components/ProjectPreviewSection.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Data dummy untuk proyek (tetap sama)
const projects = [
  {
    id: 1,
    title: "Simple Smart Contract",
    description: "Solidity-based contract to store and update a number (only by the owner). Built to practice access control and data persistence on Ethereum-compatible chains.",
    image: "/public/images/simple-smart-contract.png", // PASTIKAN PATH INI BENAR
    liveLink: "https://sepolia.etherscan.io/address/0x0A5A5ecEECC9E5edD56E91675847d871F4BA2ec5",
    githubLink: "https://github.com/nasdthestudent/simple-smart-contract",
  },
  {
    id: 2,
    title: "Portfolio V2",
    description: "Second iteration of my personal portfolio, built with modern web technologies like React and Tailwind CSS, focusing on performance and aesthetics.",
    image: "/images/project-2.jpg", // PASTIKAN PATH INI BENAR
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description: "A real-time messaging application with private and group chat functionalities, powered by WebSockets for instant communication.",
    image: "/images/project-3.jpg", // PASTIKAN PATH INI BENAR
    liveLink: "#",
    githubLink: "#",
  },
];

function ProjectPreviewSection() {
  return (
    <section className="relative py-20 px-4 md:px-12 text-white overflow-hidden">
      {/* BACKGROUND GRADIENT - Menggunakan warna Tailwind bawaan */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-900 via-gray-950 to-violet-900 z-0"></div>

      {/* BLOB ANIMASI - Menggunakan warna Tailwind bawaan */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob z-0 animation-delay-5000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-7000"></div>
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-violet-500 animate-fade-in-up"> {/* Menggunakan violet-500 untuk teks judul */}
          My Latest Work
        </h2>

        {/* CONTAINER BARU UNTUK LAYOUT BERGANTIAN */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 p-6 rounded-lg shadow-2xl project-card-tailwind-glow
                          transform hover:scale-[1.02] transition-all duration-300
                          animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover object-center transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-1/2 text-center md:text-left p-4">
                <h3 className="text-4xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex justify-center md:justify-start space-x-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110"
                    title="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 animate-fade-in-up delay-1000">
          <Link
            to="/project.html"
            className="inline-block bg-violet-600 hover:bg-gray-800 text-white font-semibold py-4 px-10 rounded-full
                       transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectPreviewSection;