// src/components/ScrollHandler.jsx (atau tetap ScrollToTop.jsx jika Anda mau)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jika ada hash di URL (misal: /about.html#journey)
    if (hash) {
      // Hapus '#' dari hash untuk mendapatkan ID
      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        // Scroll ke elemen tersebut dengan efek smooth
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Jika elemen tidak ditemukan (misal hash salah), fallback ke paling atas
        window.scrollTo(0, 0);
      }
    } else {
      // Jika tidak ada hash (misal: /about.html saja), scroll ke paling atas
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Efek akan dijalankan ulang setiap kali pathname atau hash berubah

  return null; // Komponen ini tidak merender elemen UI apa pun
}

export default ScrollHandler; // Pastikan nama export sesuai dengan nama file