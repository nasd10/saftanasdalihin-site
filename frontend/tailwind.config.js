/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        // Tambahkan delay jika diperlukan, atau atur di style inline
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        // Warna yang sudah Anda definisikan
        'primary-color': '#3b3b3b',
        'secondary-color': '#4b4b4b',
        'background-color': '#f7f7f7', // Hati-hati, ini light color
        'hover-color': 'rgb(182, 180, 180)',
        'accent-color': '#333',
        'highlight-color': '#a8a8a8',
        'border-color': '#dadada',

        // Tambahkan warna gelap kustom untuk gradient jika perlu, atau gunakan violet bawaan Tailwind
        'dark-background-start': '#1A0033', // Hitam pekat keunguan
        'dark-background-mid': '#330066',  // Ungu gelap
        'dark-background-end': '#8B00FF',  // Violet yang Anda suka (ini mirip violet-600 Tailwind)
      },
      backgroundImage: {
        // Gradient untuk Hero Section (disesuaikan dengan warna gelap Anda)
        'hero-gradient': 'linear-gradient(to bottom, var(--tw-colors-dark-background-start), var(--tw-colors-dark-background-mid), var(--tw-colors-dark-background-end))',
        // Gradient untuk About Section (disesuaikan dengan warna gelap Anda)
        'about-gradient': 'linear-gradient(to bottom, var(--tw-colors-dark-background-start), var(--tw-colors-dark-background-mid), var(--tw-colors-dark-background-end))',
      },
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        // Anda bisa menambahkan font default jika mau, misal untuk body
        'sans': ['Montserrat', 'sans-serif'], // Menggunakan Montserrat sebagai sans default
      },
       zIndex: {
         '9999': '9999',
      }
    },
  },
  plugins: [],
}