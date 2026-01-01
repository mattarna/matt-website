'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-black">
      {/* Giant Typography Frame */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-between px-6 pt-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <span className="text-[15vw] font-black leading-[0.8] tracking-tighter text-white md:text-[12vw]">
            MATT
          </span>
          <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.4em] text-white/50 md:text-xs">
            Strategic Systems
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-end"
        >
          <span className="text-[15vw] font-black leading-[0.8] tracking-tighter text-white md:text-[12vw]">
            AI
          </span>
          <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.4em] text-accent md:text-xs">
            Systems Builder
          </span>
        </motion.div>
      </div>

      {/* Video Avatar - Center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[90%] w-auto max-w-none object-contain mix-blend-screen"
        >
          <source src="/VIDEO MATT 1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bottom Left - Expertise Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-6 z-30 flex flex-col gap-1 md:left-12"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
          Performance Marketing
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
          AI Integration
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
          Funnels & Systems
        </span>
      </motion.div>

      {/* Bottom Center - Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

      {/* Bottom Right - Year & Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 right-6 z-30 flex flex-col items-end gap-1 md:right-12"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
          45.4642° N, 9.1900° E
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
          Milano, Italy
        </span>
        <span className="font-mono text-2xl font-light text-white/20">
          2026
        </span>
      </motion.div>

      {/* Subtle purple glow behind avatar */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />
    </section>
  );
};
