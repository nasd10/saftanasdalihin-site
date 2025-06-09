// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Mengambil path URL saat ini

  useEffect(() => {
    // Setiap kali 'pathname' (URL) berubah, scroll ke atas
    window.scrollTo(0, 0);
  }, [pathname]); // Bergantung pada 'pathname'

  return null; // Komponen ini tidak merender apa-apa secara visual
}

export default ScrollToTop;