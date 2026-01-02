'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export const SilentNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const sections = [
    { id: 'hero', label: t('start') },
    { id: 'principles', label: t('principles') },
    { id: 'expertise', label: t('expertise') },
    { id: 'work', label: t('work') },
    { id: 'manifesto', label: t('manifesto') },
    { id: 'qualification', label: t('qualification') },
    { id: 'contact', label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Visibility toggle: only show after scrolling past 200px
      setIsVisible(window.scrollY > 200);

      // Active section detection
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentScroll = window.scrollY + window.innerHeight / 3;

      sectionElements.forEach((el, index) => {
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (currentScroll >= top && currentScroll < bottom) {
            setActiveSection(sections[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If on a subpage, redirect to home with hash
      window.location.href = `/${locale}/#${id}`;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6 items-end group"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative flex items-center gap-4 group/item py-1"
            >
              {/* LABEL */}
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500",
                "opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0",
                activeSection === section.id ? "text-accent" : "text-white/40"
              )}>
                {section.label}
              </span>

              {/* DOT / LINE */}
              <div className="relative flex items-center justify-center w-4 h-4">
                <motion.div 
                  animate={{ 
                    height: activeSection === section.id ? 16 : 4,
                    width: activeSection === section.id ? 2 : 2,
                    backgroundColor: activeSection === section.id ? 'var(--accent)' : 'rgba(255,255,255,0.2)'
                  }}
                  className="rounded-full transition-colors duration-500"
                />
                
                {/* RING FOR ACTIVE */}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="nav-ring"
                    className="absolute inset-0 border border-accent/20 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
