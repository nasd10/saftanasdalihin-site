// src/App.jsx
import React from 'react';
import './index.css'; // Pastikan ini diimpor untuk Tailwind CSS
import './App.css'; // Jika ada file CSS khusus untuk App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; // Pastikan ini ada jika Anda punya halaman About
// import About from './pages/About';
import Project from './pages/Project'; // Pastikan ini ada jika Anda punya halaman Project penuh
import Contact from './pages/Contact';
import Footer from './components/Footer'; // Import Footer
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop untuk scroll otomatis ke atas saat navigasi

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Tambahkan ScrollToTop di sini untuk scroll otomatis ke atas saat navigasi */}
      <div className="App bg-primary-color min-h-screen text-white font-montserrat">
        {/* Tambahkan CustomCursor di sini jika diperlukan */}
        <CustomCursor />
        {/* Navbar di luar Routes untuk tetap terlihat di semua halaman */}
        <Navbar />
        <main> {/* Wrap Routes dengan <main> untuk semantik */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/project.html" element={<Project />} />
            <Route path="/contact.html" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Tambahkan Footer di sini, di luar Routes */}
      </div>
    </Router>
  );
}

export default App;