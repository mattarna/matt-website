'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="relative bg-[#050508] py-32 md:py-48 lg:py-64 overflow-hidden">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* AMBIENT GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-[#354BB5]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* FRAME / CONTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white/40 font-light leading-relaxed tracking-tight max-w-3xl mx-auto">
              I don&apos;t take on many personal projects. 
              <br className="hidden md:block" />
              I typically engage through 1:1 mentorship, strategic consulting, or as a long-term operator for founders.
            </p>
          </motion.div>

          {/* MAIN CTA TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
              If you&apos;re facing real complexity, <br />we can talk.
            </h2>
          </motion.div>

          {/* BUTTONS GROUP */}
          <div className="flex flex-col items-center gap-16">
            
            {/* PRIMARY CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a 
                href="mailto:ciao@matteoarnaboldi.com"
                className="inline-flex items-center gap-6 px-12 py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm md:text-base hover:bg-[#354BB5] hover:text-white transition-all duration-500 rounded-sm shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]"
              >
                Start a conversation
                <span className="text-xl">→</span>
              </a>
            </motion.div>

            {/* SECONDARY CTAs - REDESIGNED WITH GRADIENT CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto"
            >
              {/* AI ESPRESSO CARD */}
              <a 
                href="https://aiespresso.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex flex-col items-start p-8 rounded-sm overflow-hidden border border-white/5 bg-white/[0.02] hover:border-[#FF6B00]/50 transition-all duration-500"
              >
                {/* Background Gradient Hover - Orange */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-hover:text-[#FF6B00] transition-colors">Join the newsletter</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">AI Espresso</span>
                    <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-[#FF6B00]">→</span>
                  </div>
                </div>
              </a>

              {/* LINKEDIN CARD */}
              <a 
                href="https://linkedin.com/in/marnaboldi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex flex-col items-start p-8 rounded-sm overflow-hidden border border-white/5 bg-white/[0.02] hover:border-[#354BB5]/50 transition-all duration-500"
              >
                {/* Background Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#354BB5]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 group-hover:text-accent transition-colors">Daily Insights</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">LinkedIn</span>
                    <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 text-accent">→</span>
                  </div>
                </div>
              </a>
            </motion.div>

          </div>

          {/* FINAL FOOTER METADATA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-32 md:mt-48 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 gap-8 md:gap-0"
          >
            <div className="flex flex-col items-center md:items-start gap-1 text-left">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Matteo Arnaboldi</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Entrepreneur & Strategic Operator</span>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1 text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20">45.4642° N, 9.1900° E</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20">EST. 2026</span>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
