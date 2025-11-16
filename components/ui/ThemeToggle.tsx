// components/ui/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect IMPORTANT to solve hydration issues (SSR vs Client render)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-6"></div>; 
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="rounded-full p-2 transition-colors duration-300 
                 hover:bg-secondary active:scale-95"
    >
      {isDark ? (
        <FiSun size={20} className="text-foreground/70" />
      ) : (
        <FiMoon size={20} className="text-foreground/70" />
      )}
    </button>
  );
}