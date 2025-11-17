// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // IMPORTANT: Activate dark mode
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // This will center the container by default
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
        slideDown: "slideDown 0.3s ease-out",
        slideUp: "slideUp 0.3s ease-in",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
        fadeOut: {
          "from": { opacity: "1" },
          "to": { opacity: "0" },
        },
        slideDown: {
          "from": { 
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "to": { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "from": { 
            opacity: "1",
            transform: "translateY(0)",
          },
          "to": { 
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;