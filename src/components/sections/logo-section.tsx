'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const logos = [
  '/loghi matt (2).png',
  '/loghi matt (3).png',
  '/loghi matt (4).png',
  '/loghi matt (5).png',
  '/loghi matt (6).png',
  '/loghi matt (7).png',
  '/loghi matt (8).png',
  '/loghi matt (9).png',
  '/loghi matt (10).png',
];

export const LogoSection: React.FC = () => {
  const t = useTranslations('logos');

  // Double the logos for a seamless loop
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative bg-[#354BB5] py-24 md:py-48 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="container mx-auto px-6 mb-20 md:mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <h4 className="text-white text-3xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
            {t('title')} <span className="italic font-light opacity-80 font-serif normal-case">{t('titleItalic')}</span>
          </h4>
          <p className="text-white/50 text-[10px] md:text-sm lg:text-base uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold max-w-xl leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>

      {/* INFINITE LOGO SCROLL */}
      <div className="relative flex items-center group">
        {/* FADE GRADIENTS FOR SIDES */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#354BB5] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#354BB5] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex items-center gap-24 md:gap-40 lg:gap-56 whitespace-nowrap px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40,
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {doubledLogos.map((logo, index) => {
            const isSpecialLogo = logo.includes('(5)') || logo.includes('(7)');
            
            return (
              <div key={index} className="flex-shrink-0 flex items-center justify-center transition-all duration-700 hover:scale-110">
                <div className="relative h-12 md:h-24 lg:h-32 w-48 md:w-72 lg:w-96">
                  <Image 
                    src={logo} 
                    alt="Partner Logo" 
                    fill
                    className={`object-contain transition-opacity ${
                      isSpecialLogo 
                        ? 'brightness-150 contrast-125 grayscale' 
                        : 'brightness-0 invert opacity-80 hover:opacity-100'
                    }`}
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Frame border bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10 z-30" />
    </section>
  );
};
