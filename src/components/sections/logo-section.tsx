'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/loghi-matt (1).png',
  '/loghi-matt (2).png',
  '/loghi-matt (3).png',
  '/loghi-matt (4).png',
  '/loghi-matt (5).png',
  '/logo.png',
  // Repeating for seamless loop
  '/loghi-matt (1).png',
  '/loghi-matt (2).png',
  '/loghi-matt (3).png',
  '/loghi-matt (4).png',
  '/loghi-matt (5).png',
  '/logo.png',
];

export const LogoSection: React.FC = () => {
  return (
    <section className="relative bg-[#354BB5] py-28 md:py-36 overflow-hidden">
      {/* SECTION HEADER - Monumental & Bolder */}
      <div className="container mx-auto px-8 mb-24 md:mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <h4 className="text-white text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
            Name-dropping, <span className="italic font-light opacity-80 font-serif normal-case">briefly</span>
          </h4>
          <p className="text-white/50 text-xs md:text-sm lg:text-base uppercase tracking-[0.5em] font-bold max-w-xl leading-relaxed">
            It&apos;s the past. Not that important, but people seem to care
          </p>
        </motion.div>
      </div>

      {/* INFINITE LOGO SCROLL - Scaled Up */}
      <div className="relative flex items-center">
        {/* FADE GRADIENTS FOR SIDES */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#354BB5] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#354BB5] to-transparent z-10" />

        <motion.div 
          className="flex items-center gap-24 md:gap-48 whitespace-nowrap"
          animate={{ x: [0, -2500] }} // Adjusted for larger content
          transition={{ 
            duration: 30, // Slightly faster for bigger scale
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center transition-all duration-700 hover:scale-110">
              <img 
                src={logo} 
                alt="Partner Logo" 
                className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Frame border bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10 z-30" />
    </section>
  );
};
