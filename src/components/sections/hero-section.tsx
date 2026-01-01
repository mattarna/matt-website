'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillars = [
  { num: '01', title: 'ENTREPRENEUR', desc: 'Building structures that outlast effort.' },
  { num: '02', title: 'AI SYSTEMS', desc: 'Usable intelligence, integrated at the core.' },
  { num: '03', title: 'PERFORMANCE', desc: 'Data-driven growth, uncompromising ROI.' },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-black">
      {/* Video Avatar - Center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[85%] w-auto max-w-none object-contain mix-blend-screen opacity-90"
        >
          <source src="/VIDEO MATT 2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle purple glow behind avatar */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[150px]" />

      {/* Main Content Frame */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-10 lg:p-14"
      >
        {/* Top Section */}
        <div className="flex items-start justify-between">
          {/* Name - Left */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-[18vw] font-black leading-[0.75] tracking-tighter text-white md:text-[14vw] lg:text-[12vw]">
              MATTEO
            </span>
          </motion.div>

          {/* Top Right - Identity Tag */}
          <motion.div variants={itemVariants} className="flex flex-col items-end pt-2 md:pt-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent md:text-xs">
              Strategic Operator
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40 md:text-[10px]">
              Milano, Italy
            </span>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between">
          {/* Bottom Left - Three Pillars */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5 max-w-[280px] md:max-w-xs">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="group flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-accent">{pillar.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 md:text-[11px]">
                    {pillar.title}
                  </span>
                </div>
                <p className="text-[10px] leading-relaxed text-white/40 md:text-[11px]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Surname - Right */}
          <motion.div variants={itemVariants} className="flex flex-col items-end">
            <span className="text-[18vw] font-black leading-[0.75] tracking-tighter text-white md:text-[14vw] lg:text-[12vw]">
              ARNABOLDI
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Center - Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2 md:bottom-10"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-5 w-[1px] bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
