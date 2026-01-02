'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex h-screen w-full flex-col overflow-hidden bg-[#050508]">
      
      {/* AMBIENT GLOW */}
      <motion.div 
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute left-1/2 top-[45%] -z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-accent/15 via-accent/5 to-transparent blur-[100px]" 
      />

      {/* 3D AVATAR */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[80vh] w-auto max-w-none object-contain mix-blend-screen"
          >
            <source src="/VIDEO MATT 2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* EDITORIAL FRAME */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12 lg:p-16"
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          {/* LEFT: NAME */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-[16vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
              MATT
            </h1>
            <span className="mt-2 text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] font-medium tracking-[0.4em] text-white/50 uppercase">
              Arnaboldi
            </span>
          </motion.div>

          {/* RIGHT: STATUS */}
          <motion.div variants={itemVariants} className="flex flex-col items-end pt-2">
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.6em] text-accent">
              Strategic Operator
            </span>
            <span className="font-mono mt-1 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 font-bold">
              Founder & Builder
            </span>
          </motion.div>
        </div>

        {/* MIDDLE LEFT: PILLARS */}
        <motion.div 
          variants={itemVariants} 
          className="absolute left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-10 md:gap-12"
        >
          {[
            { id: '01', label: 'Entrepreneur' },
            { id: '02', label: 'AI Systems' },
            { id: '03', label: 'Performance Marketing' }
          ].map((pillar) => (
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
        <div className="flex items-end justify-between">
          {/* LEFT: COORDINATES */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <span className="font-mono text-xs md:text-sm text-white/30 tracking-wider">
              45.4642° N, 9.1900° E
            </span>
            <span className="text-xs md:text-sm font-semibold text-white/50 tracking-[0.3em] uppercase">
              Milano, Italy
            </span>
            <span className="font-mono text-2xl md:text-3xl font-light text-white/15 italic mt-1">
              2026
            </span>
          </motion.div>

          {/* CENTER: SCROLL */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] text-white/30">
              Scroll
            </span>
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-10 w-px bg-gradient-to-b from-accent/80 to-transparent" 
            />
          </motion.div>

          {/* RIGHT: TAGLINE */}
          <motion.div variants={itemVariants} className="flex flex-col items-end gap-3 max-w-md">
            <p className="text-right text-lg md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed tracking-wide">
              Turning complexity into
              <span className="text-white font-medium"> clarity</span>,
              <br />
              and clarity into
              <span className="text-accent font-medium"> systems that work</span>.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* FRAME BORDERS ANIMATION */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-30" 
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-30" 
      />
    </section>
  );
};
