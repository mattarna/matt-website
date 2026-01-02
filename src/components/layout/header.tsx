'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'principles', label: 'Principles', num: '01' },
  { id: 'expertise', label: 'Expertise', num: '02' },
  { id: 'work', label: 'Work', num: '03' },
  { id: 'manifesto', label: 'Manifesto', num: '04' },
];

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Only show after passing the hero section
      if (currentScrollY < heroHeight * 0.8) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Show on scroll up, hide on scroll down
      if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[200]"
        >
          <div className="relative flex items-center gap-3 px-4 py-3 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-full shadow-2xl">
            
            {/* LEFT: Logo + Status */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 px-5 py-2.5 hover:bg-white/5 rounded-full transition-all duration-500 group"
            >
              <span className="text-lg font-black text-white tracking-tighter uppercase group-hover:text-accent transition-colors">
                MATT
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 hidden md:block">
                  SYS_ACTIVE
                </span>
              </div>
            </button>

            {/* DIVIDER */}
            <div className="h-7 w-px bg-white/15" />

            {/* CENTER: Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center gap-2 px-5 py-2.5 hover:bg-white/5 rounded-full transition-all duration-500"
                >
                  <span className="font-mono text-xs text-accent/70 group-hover:text-accent transition-colors">
                    {link.num}
                  </span>
                  <span className="font-mono text-sm uppercase tracking-[0.12em] text-white/70 group-hover:text-white transition-colors font-bold">
                    {link.label}
                  </span>
                </button>
              ))}
            </nav>

            {/* DIVIDER */}
            <div className="h-7 w-px bg-white/15 hidden md:block" />

            {/* RIGHT: CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 px-6 py-2.5 bg-white/5 hover:bg-accent border border-white/15 hover:border-accent rounded-full transition-all duration-500 group"
            >
              <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/90 group-hover:text-white font-bold">
                Contact
              </span>
              <span className="text-sm text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                →
              </span>
            </button>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
