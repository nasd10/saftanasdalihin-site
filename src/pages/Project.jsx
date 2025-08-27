// src/pages/Project.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Import ikon

// Data Dummy Projects (Tambahkan proyek Anda di sini!)
const allProjects = [
  {
    id: 1,
    title: "Voting Smart Contract",
    description: "A simple decentralized voting system built with Solidity and deployed to the Ethereum Sepolia testnet.",
    image: "/images/Ilustrasi-Voting-Smart-Contract.png", // Pastikan path ini benar
    technologies: ["Solidity", "Remix IDE", "Etherscan", "MetaMask", "Smart Contract"], // Tambahkan teknologi
    liveLink: "https://sepolia.etherscan.io/address/0x0219d0B5352fC9776D88F62Ef0bB95BF12d95F7D#code",
    githubLink: "https://github.com/nasdthestudent/voting-smart-contract",
  },
  {
    id: 2,
    title: "Simple Smart Contract",
    description: "Solidity-based contract to store and update a number (only by the owner). Built to practice access control and data persistence on Ethereum-compatible chains.",
    image: "/images/simple-smart-contract.png", // PASTIKAN PATH INI BENAR
    technologies: ["Solidity", "Remix IDE", "Etherscan", "MetaMask", "Smart Contract"], // Tambahkan teknologi
    liveLink: "https://sepolia.etherscan.io/address/0x0A5A5ecEECC9E5edD56E91675847d871F4BA2ec5#code",
    githubLink: "https://github.com/nasdthestudent/simple-smart-contract",
  },
  {
    id: 3,
    title: "Project #3",
    description: "COMING SOON!",
    image: "/images/project-3.jpg",
    technologies: ["#"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Project #4",
    description: "COMING SOON!",
    image: "/images/project-4.jpg", // Pastikan ada gambar ini
    technologies: ["#"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Project #5",
    description: "COMING SOON!",
    image: "/images/project-5.jpg", // Pastikan ada gambar ini
    technologies: ["#"],
    liveLink: "#",
    githubLink: "#",
  },
  // Tambahkan lebih banyak proyek di sini
];

function Project() {
  return (
    // Tambahkan pt-32 di sini untuk padding-top yang cukup
    <div className="relative pt-32 pb-12 min-h-screen text-white bg-gray-950 overflow-hidden">
      {/* Background Gradient & Blobs (Konsisten dengan tema, jika blobs berfungsi) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-violet-900 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob z-0 animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-5000"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-3000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-violet-500 animate-fade-in-up">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-lg shadow-xl overflow-hidden
                         transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
                         animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay saat hover untuk detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex space-x-3">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-violet-400 text-2xl transition duration-200 transform hover:scale-110"
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()} // Mencegah hover pada parent
                        >
                            <FaExternalLinkAlt />
                        </a>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-violet-400 text-2xl transition duration-200 transform hover:scale-110"
                            title="GitHub Repository"
                            onClick={(e) => e.stopPropagation()} // Mencegah hover pada parent
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-violet-300 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;