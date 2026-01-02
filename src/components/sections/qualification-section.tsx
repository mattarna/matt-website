'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const QualificationSection: React.FC = () => {
  return (
    <section className="relative bg-[#354BB5] py-32 md:py-48 overflow-hidden">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28 text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/60 mb-6 block">
            Engagement
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none uppercase">
            Working With Me
          </h2>
        </motion.div>

        {/* THE IDEAL CLIENT - Bold Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight tracking-tight text-center max-w-5xl mx-auto">
            Founders and leadership teams facing{' '}
            <span className="text-white underline decoration-white/30 underline-offset-8">real complexity</span>.
            <br className="hidden md:block" />
            {' '}Businesses past the idea phase.
            <br className="hidden md:block" />
            {' '}Environments where{' '}
            <span className="text-white underline decoration-white/30 underline-offset-8">decisions matter</span>.
          </p>
        </motion.div>

        {/* THREE PILLARS - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <span className="font-mono text-lg font-bold text-white/80">01</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Strategic Operator
            </h4>
            <p className="text-base text-white/50 leading-relaxed">
              Working alongside founders in the room where decisions happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <span className="font-mono text-lg font-bold text-white/80">02</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
              System Designer
            </h4>
            <p className="text-base text-white/50 leading-relaxed">
              Architecting growth, AI, and decision-making infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <span className="font-mono text-lg font-bold text-white/80">03</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Force Multiplier
            </h4>
            <p className="text-base text-white/50 leading-relaxed">
              High-leverage support during critical transformation phases.
            </p>
          </motion.div>

        </div>

        {/* THE FILTER - Subtle but Clear */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center border-t border-white/10 pt-16 md:pt-20"
        >
          <p className="text-lg md:text-xl text-white/30 mb-8 italic">
            Not for those seeking shortcuts, trends, or execution without accountability.
          </p>
          <p className="text-base md:text-lg text-white/50 font-medium">
            If this resonates, you know where to find me.
          </p>
        </motion.div>

      </div>

      {/* Frame borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10 z-30" />
    </section>
  );
};
