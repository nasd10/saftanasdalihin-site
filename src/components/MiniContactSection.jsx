// src/components/MiniContactSection.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MiniContactSection() {
  return (
    <section className="relative py-20 px-4 md:px-12 text-white text-center overflow-hidden bg-gray-900">
      {/* BACKGROUND GRADIENT - Konsisten dengan tema */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-900 via-gray-950 to-gray-900 z-0"></div>

      {/* BLOB ANIMASI (jika nanti berfungsi) - Untuk visual yang konsisten */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob z-0 animation-delay-3000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-5000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-500 animate-fade-in-up">
          Ready to Collaborate?
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up delay-100">
          Let's build something amazing together. Feel free to reach out for projects, questions, or just a chat!
        </p>

        {/* Call to Action Button */}
        <div className="animate-fade-in-up delay-200">
          <Link
            to="/contact.html"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-10 rounded-full
                       transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Send Me a Message
          </Link>
        </div>

        {/* Social Media Icons - Opsional, jika ingin tetap ada di mini-contact */}
        <div className="flex justify-center space-x-6 mt-12 animate-fade-in-up delay-300">
          <a
            href="https://instagram.com/yourusername" // Ganti dengan GitHub Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/yourusername" // Ganti dengan GitHub Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile" // Ganti dengan LinkedIn Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com" // Ganti dengan email Anda
            className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
            title="Email Me"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MiniContactSection;