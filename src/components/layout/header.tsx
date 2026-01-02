'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('header');

  const navLinks = [
    { id: 'principles', label: t('principles'), num: '01' },
    { id: 'expertise', label: t('expertise'), num: '02' },
    { id: 'work', label: t('work'), num: '03' },
    { id: 'manifesto', label: t('manifesto'), num: '04' },
  ];

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      const currentPath = pathname.replace(`/${locale}`, '') || '/';
      window.location.href = `/${newLocale}${currentPath === '/' ? '' : currentPath}`;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Desktop logic: Show after hero, hide on scroll down
      if (window.innerWidth >= 768) {
        if (currentScrollY < heroHeight * 0.8) {
          setIsVisible(false);
          setLastScrollY(currentScrollY);
          return;
        }

        if (currentScrollY < lastScrollY - 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY + 10) {
          setIsVisible(false);
        }
      } else {
        // Mobile logic: Show after initial scroll to avoid overlapping Hero elements
        setIsVisible(currentScrollY > 100);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    
    if (el) {
      // Use native scrollIntoView which is more robust against layout shifts
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If on a subpage, redirect to home with hash
      window.location.href = `/${locale}/#${id}`;
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    
    if (pathname === `/${locale}` || pathname === `/${locale}/`) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.location.href = `/${locale}`;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            {/* DESKTOP HEADER */}
            <motion.header
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
              className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-auto"
            >
              <div className="relative flex items-center justify-start gap-3 px-4 py-3 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-full shadow-2xl">
                <button 
                  onClick={scrollToTop}
                  className="flex items-center gap-3 px-5 py-2.5 hover:bg-white/5 rounded-full transition-all duration-500 group"
                >
                  <span className="text-lg font-black text-white tracking-tighter uppercase group-hover:text-accent transition-colors">
                    MATT
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                  </div>
                </button>

                <div className="h-7 w-px bg-white/15" />

                <nav className="flex items-center gap-1">
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

                <div className="h-7 w-px bg-white/15" />

                <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
                  {['it', 'en'].map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      disabled={isPending || locale === l}
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                        locale === l 
                          ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                          : 'text-white/30 hover:text-white/60'
                      } ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-3 px-6 py-2.5 bg-white/5 hover:bg-accent border border-white/15 hover:border-accent rounded-full transition-all duration-500 group"
                >
                  <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/90 group-hover:text-white font-bold">
                    {t('contact')}
                  </span>
                  <span className="text-sm text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                    →
                  </span>
                </button>
              </div>
            </motion.header>

            {/* NEW MOBILE STICKY HEADER (Sticky Style like Reference) */}
            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              className="md:hidden fixed top-0 left-0 right-0 z-[200] bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between"
            >
              <div onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer">
                <span className="text-xl font-black text-white tracking-tighter uppercase">MATT</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-5 py-2 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_4px_15px_rgba(53,75,181,0.3)] flex items-center gap-2"
                >
                  BOOK <span className="text-[12px] translate-y-[-1px]">↗</span>
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="px-5 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors"
                >
                  MENU
                </button>
              </div>
            </motion.header>
          </>
        )}
      </AnimatePresence>

      {/* FULL SCREEN MOBILE MENU (remains similar but accessible via the new MENU button) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[300] bg-[#030712] flex flex-col p-8 md:hidden"
          >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
              <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-[#354BB5]/30 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#7c3aed]/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex items-center justify-between mb-20">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                MATT
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
              >
                ✕
              </button>
            </div>

            <nav className="relative z-10 flex flex-col gap-8 mb-20">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-6 group text-left"
                >
                  <span className="font-mono text-lg text-accent font-bold">
                    {link.num}
                  </span>
                  <span className="text-4xl font-black text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-6 group text-left"
              >
                <span className="font-mono text-lg text-accent font-bold">
                  05
                </span>
                <span className="text-4xl font-black text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                  {t('contact')}
                </span>
              </motion.button>
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto relative z-10 flex flex-col gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/30 font-bold">
                Language / Lingua
              </span>
              <div className="flex gap-4">
                {['it', 'en'].map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={cn(
                      "px-8 py-4 rounded-sm text-sm font-black uppercase tracking-[0.2em] transition-all duration-500 flex-1",
                      locale === l 
                        ? 'bg-accent text-white shadow-xl shadow-accent/20' 
                        : 'bg-white/5 text-white/40 border border-white/10'
                    )}
                  >
                    {l === 'it' ? 'Italiano' : 'English'}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold"
            >
              © 2026 MATTEO ARNABOLDI • STRATEGIC SYSTEMS
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
