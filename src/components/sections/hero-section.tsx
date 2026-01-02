'use client';

import React, { useTransition, useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const glowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const HeroSection: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Forza il play al montaggio per garantire l'autoplay su mobile
    const playVideo = () => {
      if (videoRef.current) {
        // Assicuriamoci che sia mutato (requisito per autoplay)
        videoRef.current.muted = true;
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    playVideo();
    
    // Riprova dopo un breve ritardo e anche al click ovunque (user gesture)
    const timeoutId = setTimeout(playVideo, 1000);
    
    const handleGesture = () => {
      playVideo();
      document.removeEventListener('touchstart', handleGesture);
      document.removeEventListener('mousedown', handleGesture);
    };

    document.addEventListener('touchstart', handleGesture);
    document.addEventListener('mousedown', handleGesture);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('touchstart', handleGesture);
      document.removeEventListener('mousedown', handleGesture);
    };
  }, []);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      // Get current path without the current locale prefix
      const pathWithoutLocale = pathname.startsWith(`/${locale}`) 
        ? pathname.replace(`/${locale}`, '') || '/' 
        : pathname;
      
      // Build new URL: Italian at root (/), English at /en
      const newPath = newLocale === 'it' 
        ? (pathWithoutLocale === '/' ? '/' : pathWithoutLocale)
        : `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
        
      window.location.href = newPath;
    });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pillars = [
    { id: '01', label: t('pillar1') },
    { id: '02', label: t('pillar2') },
    { id: '03', label: t('pillar3') }
  ];

  return (
    <section id="hero" className="relative flex h-screen w-full flex-col overflow-hidden bg-[#050508]">
      
      {/* AMBIENT GLOW */}
      <motion.div 
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute left-1/2 top-[45%] -z-0 h-[400px] w-[400px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-accent/15 via-accent/5 to-transparent blur-[80px] md:blur-[100px]" 
      />

      {/* 3D AVATAR */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-[70vh] md:h-[95vh] w-auto max-w-none object-contain mix-blend-screen opacity-90"
            style={{ WebkitPlaysInline: true } as any}
          >
            <source src="/video-matt-2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* EDITORIAL FRAME */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12 lg:p-16"
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          {/* LEFT: NAME */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-[18vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
              {t('name')}
            </h1>
            <span className="mt-2 text-[4vw] md:text-[1.8vw] lg:text-[1.2vw] font-medium tracking-[0.4em] text-white/50 uppercase">
              {t('surname')}
            </span>
          </motion.div>

          {/* RIGHT: STATUS & LANG */}
          <motion.div variants={itemVariants} className="flex flex-col items-end pt-2 gap-4 md:gap-6">
            <div className="flex flex-col items-end text-right">
              <span className="font-mono text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent">
                {t('role')}
              </span>
              <span className="font-mono mt-1 text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 font-bold">
                {t('subrole')}
              </span>
            </div>

            {/* LANGUAGE TOGGLE - Hero Version */}
            <div className="pointer-events-auto flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-sm">
              {['it', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  disabled={isPending || locale === l}
                  className={`px-2 md:px-3 py-1 text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${
                    locale === l 
                      ? 'bg-accent text-white shadow-[0_0_15px_rgba(53,75,181,0.3)]' 
                      : 'text-white/20 hover:text-white/50'
                  } ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* MIDDLE LEFT: PILLARS - Adjusted for mobile */}
        <motion.div 
          variants={itemVariants} 
          className="hidden md:flex absolute left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 flex-col gap-10 md:gap-12"
        >
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col gap-2 group pointer-events-auto cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent group-hover:translate-x-1 transition-transform">{pillar.id}</span>
                <div className="h-px w-6 bg-accent/40 group-hover:w-10 transition-all duration-500" />
              </div>
              <span className="text-base md:text-lg font-bold text-white group-hover:text-accent tracking-[0.2em] uppercase transition-colors duration-500">
                {pillar.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0">
          {/* LEFT: COORDINATES - Hidden on mobile or simplified */}
          <motion.div variants={itemVariants} className="hidden md:flex flex-col gap-2">
            <span className="font-mono text-xs md:text-sm text-white/30 tracking-wider">
              45.4642° N, 9.1900° E
            </span>
            <span className="text-xs md:text-sm font-semibold text-white/50 tracking-[0.3em] uppercase">
              {t('location')}
            </span>
            <span className="font-mono text-2xl md:text-3xl font-light text-white/15 italic mt-1">
              2026
            </span>
          </motion.div>

          {/* CENTER: SCROLL */}
          <motion.div 
            variants={itemVariants}
            className="md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] text-white/30">
              {t('scroll')}
            </span>
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-8 md:h-10 w-px bg-gradient-to-b from-accent/80 to-transparent" 
            />
          </motion.div>

          {/* RIGHT: TAGLINE & CTA */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-8 md:gap-12 max-w-md">
            <p className="text-center md:text-right text-base md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed tracking-wide">
              {t('tagline1')}
              <span className="text-white font-medium"> {t('taglineHighlight1')}</span>,
              <br className="hidden md:block" />
              {t('tagline2')}
              <span className="text-accent font-medium"> {t('taglineHighlight2')}</span>.
            </p>

            {/* INTEGRATED CTA BUTTON */}
            <button
              onClick={scrollToContact}
              className="pointer-events-auto group flex items-center gap-6 px-8 md:px-10 py-4 md:py-5 bg-white text-black font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs transition-all duration-500 hover:bg-accent hover:text-white rounded-sm shadow-2xl"
            >
              <span>{t('cta')}</span>
              <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">→</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* FRAME BORDERS ANIMATION */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-30" 
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-30" 
      />
    </section>
  );
};
