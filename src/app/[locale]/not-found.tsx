'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050508] overflow-hidden">
      
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(239,68,68,0.15)_0%,_transparent_70%)] blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ERROR CODE - Monumental */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="font-mono text-[20vw] md:text-[15vw] font-black text-white/[0.03] leading-none tracking-tighter select-none">
              404
            </span>
          </motion.div>

          {/* SYSTEM MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative -mt-32 md:-mt-48"
          >
            {/* Error Tag */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.5em] text-red-500 font-bold">
                [SYSTEM_ERROR]
              </span>
            </div>

            {/* Main Message */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Sector<br />Not Found
            </h1>

            <p className="text-lg md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              The coordinates you entered don&apos;t match any known system. 
              <br className="hidden md:block" />
              Either the page was moved, deleted, or you&apos;re testing my infrastructure.
            </p>

            {/* Humorous System Log */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 max-w-xl mx-auto mb-16 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">System Log</span>
                <div className="flex-1 h-px bg-white/5" />
                <span className="font-mono text-[10px] text-white/20">v2.0.26</span>
              </div>
              <div className="font-mono text-xs md:text-sm text-white/50 space-y-2">
                <p><span className="text-white/30">[00:00:01]</span> User requested unknown sector...</p>
                <p><span className="text-white/30">[00:00:02]</span> Scanning database...</p>
                <p><span className="text-white/30">[00:00:03]</span> <span className="text-red-400/80">ERROR:</span> Page not found in any known universe.</p>
                <p><span className="text-white/30">[00:00:04]</span> <span className="text-emerald-400/80">SUGGESTION:</span> Return to base. Make espresso. Try again.</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <a 
                href="/en"
                className="inline-flex items-center gap-6 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-sm md:text-base hover:bg-red-500 hover:text-white transition-all duration-700 rounded-sm group shadow-2xl"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span>
                Return to Base
              </a>
              
              <a 
                href="mailto:hello@morfeushub.com"
                className="inline-flex items-center gap-6 px-12 py-6 border border-white/10 text-white/60 font-bold uppercase tracking-[0.3em] text-sm md:text-base hover:border-red-500 hover:text-red-500 transition-all duration-700 rounded-sm"
              >
                Report Bug
                <span className="text-sm">→</span>
              </a>
            </motion.div>

            {/* Easter Egg */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-20 font-mono text-[10px] text-white/10 uppercase tracking-[0.6em]"
            >
              Fun fact: This page took longer to design than most startups take to pivot.
            </motion.p>

          </motion.div>

        </div>
      </div>

      {/* Frame borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
    </div>
  );
}
