'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const StrategicFormula: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  const t = useTranslations('formula');

  const components = [
    { title: 'MARKETING', label: 'DEMAND' },
    { title: 'AI', label: 'LEVERAGE' },
    { title: 'EXECUTION', label: 'SYSTEM' }
  ];

  return (
    <section id="formula" ref={containerRef} className="relative bg-[#050508] py-24 md:py-48 overflow-hidden">
      {/* SCAN LINE EFFECT - Desktop Only for performance */}
      <motion.div 
        animate={{ y: ['0%', '100%', '0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-accent/5 z-0 pointer-events-none hidden md:block"
      />

      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        
        <div className="max-w-[1400px] mx-auto">
          {/* THE MATHEMATICAL BOX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-20 lg:p-24 border border-white/5 bg-white/[0.01] rounded-sm overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
              style={{ 
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '30px 30px' 
              }} 
            />
            
            {/* Animated Glow behind result */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent rounded-full blur-[100px] pointer-events-none z-0"
            />

            <div className="relative z-10 flex flex-col items-center">
              
              {/* Formula Row / Vertical Stack on Mobile */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-10 w-full mb-10 md:mb-12">
                {components.map((comp, i) => (
                  <React.Fragment key={comp.title}>
                    {/* Component Card */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="flex flex-col items-center text-center px-6 md:px-8 py-5 md:py-6 rounded-sm border border-white/5 bg-white/[0.02] hover:border-accent/30 hover:bg-accent/5 transition-all duration-500 w-full lg:w-auto min-w-[160px] group/card"
                    >
                      <span className="font-mono text-[7px] md:text-[9px] text-accent font-bold tracking-[0.4em] mb-2 opacity-60 group-hover/card:opacity-100 transition-opacity">{comp.label}</span>
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap transition-all duration-500 group-hover/card:scale-105">
                        {comp.title}
                      </h3>
                      {/* Active Status Indicator */}
                      <div className="mt-3 md:mt-4 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent/40 animate-pulse" />
                        <span className="font-mono text-[6px] md:text-[7px] text-white/20 tracking-widest uppercase font-bold group-hover/card:text-accent/40 transition-colors">SYNC_ACTIVE</span>
                      </div>
                    </motion.div>
                    
                    {/* Operator */}
                    {i < components.length - 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.2 }}
                        className="text-xl md:text-3xl font-thin text-white/10"
                      >
                        +
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* INTEGRATION BRIDGE */}
              <div className="relative w-full flex flex-col items-center mb-10 md:mb-12">
                {/* SVG Curly Brace - Desktop Only */}
                <div className="hidden lg:block w-full max-w-4xl px-12">
                  <svg viewBox="0 0 800 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 overflow-visible text-accent/20 group-hover:text-accent/40 transition-colors duration-1000">
                    <motion.path 
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                      d="M10 0 C 10 30, 390 10, 400 40 C 410 10, 790 30, 790 0" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Central Arrow Down - Redesigned for Mobile Simplicity */}
                <div className="flex flex-col items-center">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 40 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="w-px bg-accent/40 relative"
                  >
                    {/* Flow pulse */}
                    <motion.div 
                      animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute left-1/2 -translate-x-1/2 w-1.5 h-4 bg-accent/60 blur-[2px] rounded-full"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
                    className="w-2.5 h-2.5 md:w-3 md:h-3 border-b-2 border-r-2 border-accent" 
                  />
                </div>
              </div>

              {/* Final Result */}
              <div className="text-center px-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="font-mono text-[8px] md:text-[9px] text-accent font-bold tracking-[0.4em] mb-3 block"
                >
                  <span className="animate-pulse uppercase">Output_Result</span>
                </motion.span>
                <motion.h4 
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="text-2xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none"
                >
                  {t('result')}
                </motion.h4>
              </div>

              {/* System Meta - Optimized for Mobile */}
              <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[7px] md:text-[8px] text-white/20 tracking-widest uppercase">Sync_Protocol_Active</span>
                </div>
                <span className="font-mono text-[7px] md:text-[8px] text-white/10 tracking-wider">01 // INTEGRATION_VERIFIED</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Atmospheric detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
