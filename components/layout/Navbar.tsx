// components/layout/Navbar.tsx
"use client"; // Needed for hooks (useState, usePathname)

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border 
                    bg-background/80 backdrop-blur-md transition-colors">
      
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold transition-colors hover:text-primary">
          Safta.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-primary 
                          ${isActive 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-foreground/70'
                          }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Dark Mode Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button & Dark Mode Toggle (On Mobile) */}
        <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 text-2xl transition-colors hover:text-primary"
                aria-label="Toggle menu"
            >
                {isOpen ? <HiX /> : <HiMenu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] flex h-[calc(100%-65px)] w-full 
                        flex-col items-center justify-center space-y-8 bg-background/95 
                        backdrop-blur-md transition-opacity duration-300 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-4xl font-semibold transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};