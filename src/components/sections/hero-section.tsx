'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-black font-sans">
      
      {/* 1. LAYER BACKGROUND: GIANT NAME BEHIND AVATAR */}
      <div className="absolute inset-0 z-0 flex items-start justify-center pt-[10vh]">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[22vw] font-black tracking-tighter text-white/[0.03] select-none"
        >
          MATT
        </motion.span>
      </div>

      {/* 2. LAYER MIDDLE: 3D AVATAR */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[85%] w-auto max-w-none object-contain mix-blend-screen opacity-95"
        >
          <source src="/VIDEO MATT 2.mp4" type="video/mp4" />
        </video>
        {/* Subtle purple glow focal point */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* 3. LAYER FRONT: FOREGROUND TYPOGRAPHY & DATA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-10 lg:p-12"
      >
        {/* TOP ROW: LOGO & IDENTITY */}
        <div className="flex items-start justify-between">
          <motion.div variants={itemVariants} className="flex flex-col gap-1">
            <span className="text-2xl font-black tracking-tighter text-white">MATT</span>
            <div className="h-[2px] w-8 bg-accent" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-end pt-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Strategic Operator</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Founder & Builder</span>
          </motion.div>
        </div>

        {/* MIDDLE ROW: FLOATING IDENTITY */}
        <div className="flex flex-1 items-center justify-between">
           <motion.div variants={itemVariants} className="hidden lg:flex flex-col gap-8">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-accent tracking-widest mb-1">CORE 01</span>
                <span className="text-xs font-medium tracking-wider text-white/80">ENTREPRENEUR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-accent tracking-widest mb-1">CORE 02</span>
                <span className="text-xs font-medium tracking-wider text-white/80">AI SYSTEMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-accent tracking-widest mb-1">CORE 03</span>
                <span className="text-xs font-medium tracking-wider text-white/80">PERFORMANCE</span>
              </div>
           </motion.div>
           
           <div className="flex-1" /> {/* Spacer for Avatar */}

           <motion.div variants={itemVariants} className="hidden lg:flex flex-col items-end gap-2 rotate-90 origin-right translate-x-4">
              <span className="text-[10px] font-medium tracking-[0.5em] text-white/20 uppercase whitespace-nowrap">
                Innovation through structure
              </span>
           </motion.div>
        </div>

        {/* BOTTOM ROW: SURNAME & METADATA */}
        <div className="flex items-end justify-between">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-accent tracking-widest">PERFORMANCE MARKETING</span>
               <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">AI INTEGRATION</span>
            </div>
            <div className="flex flex-col font-mono text-[10px] text-white/20">
              <span>45.4642° N</span>
              <span>9.1900° E</span>
            </div>
          </motion.div>

          {/* SURNAME - BIG BUT LOWER */}
          <motion.div variants={itemVariants} className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 flex flex-col items-center">
             <span className="text-[14vw] font-black leading-none tracking-tighter text-white opacity-90 drop-shadow-2xl">
                ARNABOLDI
             </span>
             <div className="mt-4 flex flex-col items-center gap-3">
                <span className="text-[9px] font-medium uppercase tracking-[0.5em] text-white/40">Scroll to Explore</span>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-8 w-px bg-gradient-to-b from-accent to-transparent" 
                />
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Milano, IT</span>
            <span className="font-mono text-3xl font-light text-white/10 italic leading-none">2026</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Frame Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
    </section>
  );
};
