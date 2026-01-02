'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
  const t = useTranslations('logos');

  return (
    <section className="relative bg-[#354BB5] py-20 md:py-36 overflow-hidden">
      {/* SECTION HEADER - Monumental & Bolder */}
      <div className="container mx-auto px-6 md:px-8 mb-16 md:mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <h4 className="text-white text-2xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
            {t('title')} <span className="italic font-light opacity-80 font-serif normal-case">{t('titleItalic')}</span>
          </h4>
          <p className="text-white/50 text-[10px] md:text-sm lg:text-base uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold max-w-xl leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>

      {/* INFINITE LOGO SCROLL - Scaled Up */}
      <div className="relative flex items-center">
        {/* FADE GRADIENTS FOR SIDES */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#354BB5] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#354BB5] to-transparent z-10" />

        <motion.div 
          className="flex items-center gap-16 md:gap-48 whitespace-nowrap"
          animate={{ x: [0, -1500] }} // Reduced for mobile
          transition={{ 
            duration: 25,
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center transition-all duration-700 hover:scale-110">
              <div className="relative h-8 md:h-16 lg:h-20 w-32 md:w-48 lg:w-64">
                <Image 
                  src={logo} 
                  alt="Partner Logo" 
                  fill
                  className="object-contain drop-shadow-xl opacity-60 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 256px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Frame border bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10 z-30" />
    </section>
  );
};
