// src/components/AboutSection.jsx
import React from 'react';
import { FaLaptopCode, FaRocket, FaLightbulb, FaUserGraduate } from 'react-icons/fa'; // Contoh ikon, Anda bisa menambah/mengganti
import { Link } from 'react-router-dom'; // Jika menggunakan React Router untuk navigasi

function AboutSection() {
  // Data dummy untuk preview (ini bisa Anda ganti nanti)
  const aboutPreviews = [
    {
      icon: <FaUserGraduate />,
      title: "My Path to Blockchain",
      description: "Driven by a passion for decentralized technology, my journey into blockchain development began with self-study and hands-on projects. Explore my transition and growth.",
      link: "/about.html#journey" // Link ke sub-bagian di About page
    },
    {
      icon: <FaLaptopCode />,
      title: "Skills & Expertise",
      description: "Proficient in modern web technologies, I craft elegant solutions for complex challenges. See my full skill set on the About page.",
      link: "/about.html#skills" // Link ke sub-bagian di About page
    },
    {
      icon: <FaRocket />,
      title: "Philosophy",
      description: "I believe in clean code, innovative design, and user-centric development. My approach combines creativity with functionality.",
      link: "/about.html#philosophy" // Link ke sub-bagian di About page
    }
  ];

  return (
    <section className="relative mt-10 py-20 px-4 md:px-12 min-h-[80vh] text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute opacity-70 rounded-3xl inset-0 bg-linear-45/oklch from-blue-900 via-purple-900 to-indigo-700 z-0"></div> {/* Menggunakan gradient baru dari tailwind.config.js */}

      {/* Optional: Add some subtle background patterns or shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/2 w-64 h-64 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>


      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white animate-fade-in-up">
          A Glimpse Into My World
        </h2>

        {/* Grid untuk Preview Konten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutPreviews.map((item, index) => (
            <Link
              key={index}
              to={item.link} // Gunakan href untuk navigasi ke halaman lain/anchor
              className="shadow-violet-500 group flex flex-col items-center p-8 bg-gray-900 bg-opacity-70 rounded-lg drop-shadow-lg
                         hover:bg-violet-800 hover:bg-opacity-80 transition-all duration-300 transform
                         hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-violet-600
                         animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }} // Delay animasi per kartu
            >
              <div className="text-violet-500 text-5xl mb-6 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-3xl text-center font-semibold mb-4 text-white group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-center mb-6 flex-grow">
                {item.description}
              </p>
              <span className="text-violet-400 group-hover:text-white transition-colors duration-300 font-medium">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Tombol ke Halaman About Penuh */}
        <div className="text-center mt-40 animate-fade-in-up delay-1000">
          <Link
            to="/about.html"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-10 rounded-full
                       transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore My Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;