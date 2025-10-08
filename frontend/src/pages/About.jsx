// src/pages/About.jsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiSolidity } from 'react-icons/si';

// Data dummy untuk pengalaman dan pendidikan
const experiences = [
  {
      id: 1,
      title: "",
      company: "",
      duration: "",
      description: "",
    },
  {
    id: 2,
    title: "",
    company: "",
    duration: "",
    description: "",
  },
];

const education = [
  {
    id: 1,
    degree: "High School ",
    institution: "SMA Alfa Centauri Bandung",
    year: "2018 - 2021",
    description: "Majored in Natural Sciences.",
  },
];

function About() {
  return (
    <div className="relative pt-20 pb-12 min-h-screen text-white bg-gray-950 overflow-hidden">
      {/* Background Gradient & Blobs (Konsisten dengan tema, jika blobs berfungsi) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-violet-900 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob z-0 animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-5000"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-3000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* About Hero Section */}
        <section className="text-center mb-20 py-10 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-extrabold text-violet-500 mb-6">
            About Me
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Hello! I'm Safta Nasdalihin, an aspiring Smart Contract Developer passionate about building secure, transparent, and innovative decentralized applications. With a strong self-taught background, I've been diving deep into Solidity, blockchain architecture, and the Web3 ecosystem. My mission is to design and develop reliable smart contracts that power NFTs, DAOs, DeFi, and beyond — creating a more trustworthy and efficient digital future.
          </p>
        </section>

        {/* Detailed Bio / Journey Section */}
        <section id='journey' className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-gray-800 rounded-lg shadow-xl animate-fade-in-up delay-200">
            <h3 className="text-4xl font-bold mb-6 text-white">My Path to Blockchain — through Smart Contracts</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My venture into the world of blockchain began with a profound personal conviction: a deep concern over data manipulation and centralized control. Traditional systems, where power could be abused without accountability, always left me uneasy. Discovering blockchain technology was a turning point—it resonated with me as a revolutionary foundation for transparency and fairness.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From there, I found my passion in smart contracts—the very logic that brings blockchain to life. Smart contracts are more than code; they are trust encoded, agreements that execute themselves without intermediaries. This realization sparked my dedication to master Solidity and the principles of decentralized architecture.
              <br /> <br />
              My mission as a Smart Contract Developer is to design and build secure, transparent, and immutable contracts that power NFTs, DAOs, DeFi platforms, and beyond—solutions that empower individuals and shape the future of a truly decentralized web.
            </p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-xl flex justify-center items-center animate-fade-in-up delay-400">
            {/* Placeholder for an image or illustration */}
            <img 
                src="/images/profile-placeholder.jpg" // Ganti dengan foto profil Anda!
                alt="My Profile" 
                className="w-full max-w-sm rounded-lg shadow-lg border-4 border-violet-600 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        {/* Skills & Expertise Section (Expanded) */}
        <section id='skills' className="mb-20 p-8 bg-gray-800 rounded-lg shadow-xl animate-fade-in-up delay-600">
          <h3 className="text-4xl font-bold text-center mb-10 text-white">My Skillset</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Contoh Skill Card */}
            {[
              { icon: <SiSolidity />, name: 'Solidity'},
              { icon: <FaJsSquare />, name: 'JavaScript', color: 'text-yellow-400' },
              { icon: <FaReact />, name: 'React.js', color: 'text-blue-400' },
              { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-cyan-400' },
              { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
              { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-200">
                <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
                <p className="text-lg font-semibold text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up delay-800">
            <h3 className="text-4xl font-bold mb-8 text-white text-center">Experience</h3>
            {experiences.map(exp => (
              <div key={exp.id} className="mb-8 last:mb-0">
                <h4 className="text-2xl font-semibold text-violet-400">{exp.title}</h4>
                <p className="text-gray-300 text-lg italic mb-1">{exp.company} | {exp.duration}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up delay-1000">
            <h3 className="text-4xl font-bold mb-8 text-white text-center">Education</h3>
            {education.map(edu => (
              <div key={edu.id} className="mb-8 last:mb-0">
                <h4 className="text-2xl font-semibold text-violet-400">{edu.degree}</h4>
                <p className="text-gray-300 text-lg italic mb-1">{edu.institution} | {edu.year}</p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values / Philosophy Section (New) */}
        <section id='philosophy' className="p-8 bg-gray-800 rounded-lg shadow-xl animate-fade-in-up delay-1200">
          <h3 className="text-4xl font-bold text-center mb-10 text-white">My Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h4 className="text-2xl font-semibold text-violet-400 mb-3">Problem Solving</h4>
              <p className="text-gray-300">Approaching challenges with a logical and analytical mindset, turning complex problems into elegant solutions.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h4 className="text-2xl font-semibold text-violet-400 mb-3">Continuous Learning</h4>
              <p className="text-gray-300">The tech landscape evolves rapidly, and I am committed to continuously learning new technologies and best practices.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h4 className="text-2xl font-semibold text-violet-400 mb-3">User-Centric Design</h4>
              <p className="text-gray-300">Always prioritizing the end-user experience, ensuring applications are intuitive, accessible, and enjoyable to use.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;