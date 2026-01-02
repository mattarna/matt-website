'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const CTASection: React.FC = () => {
  const t = useTranslations('cta');

  return (
    <section id="contact" className="relative bg-[#050508] py-24 md:py-48 lg:py-64 overflow-hidden">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* ATMOSPHERIC GRADIENT (PURPLE/BLUE) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#354BB5_0%,_#7c3aed_20%,_transparent_60%)] opacity-[0.2] blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-radial from-[#354BB5]/25 to-transparent blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* FRAME / CONTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-16"
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-white/40 font-light leading-relaxed tracking-tight max-w-4xl mx-auto italic">
              {t('context').split(t('mentorship'))[0]}
              <span className="text-white/60">{t('mentorship')}</span>
              {t('context').split(t('mentorship'))[1]?.split(t('consulting'))[0]}
              <span className="text-white/60">{t('consulting')}</span>
              {t('context').split(t('consulting'))[1]?.split(t('operator'))[0]}
              <span className="text-white/60">{t('operator')}</span>
              {t('context').split(t('operator'))[1]}
            </p>
          </motion.div>

          {/* MAIN CTA TEXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12 drop-shadow-2xl">
              {t('title1')}<br />{t('title2')}<br /><span className="italic">{t('title3')}</span>
            </h2>
          </motion.div>

          {/* BUTTONS GROUP */}
          <div className="flex flex-col items-center gap-12 md:gap-20">
            
            {/* PRIMARY CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full md:w-auto"
            >
              <motion.a 
                href="https://calendar.app.google/bnYW3bkW47aZiLgFA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(53, 75, 181, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-6 md:gap-8 px-10 py-6 md:px-12 md:py-6 bg-white text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-base hover:bg-[#354BB5] hover:text-white transition-all duration-700 rounded-sm relative overflow-hidden group shadow-2xl w-full md:w-auto"
              >
                <span className="relative z-10">{t('button')}</span>
                <span className="relative z-10 text-xl md:text-2xl transition-transform duration-500 group-hover:translate-x-2">→</span>
                <div className="absolute inset-0 bg-[#354BB5] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              </motion.a>
            </motion.div>

            {/* SECONDARY CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto"
            >
              {/* AI ESPRESSO CARD */}
              <motion.a 
                href="https://matteoarnaboldi.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative flex flex-col items-start p-8 md:p-10 rounded-sm overflow-hidden border border-white/5 bg-white/[0.01] transition-all duration-700 hover:border-[#FF6B00]/30 hover:bg-white/[0.03]"
              >
                {/* Background Gradient Hover - Orange */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative z-10 flex flex-col items-start gap-4 md:gap-6 w-full">
                  <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 group-hover:text-[#FF6B00] transition-colors font-bold">{t('newsletterLabel')}</span>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">AI Espresso</span>
                    <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700 text-[#FF6B00]">→</span>
                  </div>
                </div>
              </motion.a>

              {/* LINKEDIN CARD */}
              <motion.a 
                href="https://www.linkedin.com/in/matteo-arnaboldi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BoRRGqgZpQo6xNgppmNPy4Q%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative flex flex-col items-start p-8 md:p-10 rounded-sm overflow-hidden border border-white/5 bg-white/[0.01] transition-all duration-700 hover:border-accent/30 hover:bg-white/[0.03]"
              >
                {/* Background Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative z-10 flex flex-col items-start gap-4 md:gap-6 w-full">
                  <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 group-hover:text-accent transition-colors font-bold">{t('linkedinLabel')}</span>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">LinkedIn</span>
                    <span className="text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700 text-accent">→</span>
                  </div>
                </div>
              </motion.a>
            </motion.div>

          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
