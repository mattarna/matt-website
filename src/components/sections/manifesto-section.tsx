'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const ManifestoSection: React.FC = () => {
  const t = useTranslations('manifesto');

  return (
    <section id="manifesto" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/matt backgorund.png"
          alt="Matteo Arnaboldi"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24 py-32 md:py-48">
        <div className="max-w-3xl ml-auto">
          
          {/* MANIFESTO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide leading-relaxed mb-12">
              {t('intro1')}
              <br />
              <span className="text-white/40">{t('intro2')}</span>
            </p>

            <div className="space-y-8 mb-16">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {t('p1').split(t('clarityHighlight'))[0]}
                <span className="text-white font-semibold">{t('clarityHighlight')}</span>
                {t('p1').split(t('clarityHighlight'))[1]}
              </p>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {t('p2').split(t('ethicalHighlight'))[0]}
                <span className="text-white font-semibold">{t('ethicalHighlight')}</span>
                {t('p2').split(t('ethicalHighlight'))[1]}
              </p>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {t('p3').split(t('structureHighlight'))[0]}
                <span className="text-white font-semibold">{t('structureHighlight')}</span>
                {t('p3').split(t('structureHighlight'))[1]}
              </p>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {t('p4').split(t('operatorHighlight'))[0]}
                <span className="text-white font-semibold">{t('operatorHighlight')}</span>
                {t('p4').split(t('operatorHighlight'))[1]}
              </p>
            </div>

            {/* KEY PRINCIPLES - Condensed */}
            <div className="border-l-2 border-white/20 pl-6 mb-16 space-y-3">
              <p className="text-base md:text-lg text-white/50 uppercase tracking-wider font-bold">
                {t('principle1')}
              </p>
              <p className="text-base md:text-lg text-white/50 uppercase tracking-wider font-bold">
                {t('principle2')}
              </p>
              <p className="text-base md:text-lg text-white/50 uppercase tracking-wider font-bold">
                {t('principle3')}
              </p>
            </div>

            {/* CLOSING STATEMENT */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-16">
              {t('closing').split(t('decidingHighlight'))[0]}
              <span className="text-white font-semibold">{t('decidingHighlight')}</span>
              {t('closing').split(t('decidingHighlight'))[1]}
            </p>

            {/* THE NEW MIDAS TOUCH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="pt-8 border-t border-white/10"
            >
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-accent/80 mb-6 block font-bold">
                {t('commitmentLabel')}
              </span>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                {t('midasTitle')}
              </h3>
              <p className="mt-4 text-xl md:text-2xl text-white/60 italic">
                {t('midasQuote')}
              </p>
            </motion.div>

          </motion.div>

          {/* METADATA - Bottom Right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 flex flex-col items-end gap-1"
          >
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/30 font-bold">
              {t('meta1')}
            </span>
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/30 font-bold">
              {t('meta2')}
            </span>
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/30 font-bold">
              {t('meta3')}
            </span>
          </motion.div>

        </div>
      </div>

      {/* Frame borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-30" />
    </section>
  );
};
