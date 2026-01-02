'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const QualificationSection: React.FC = () => {
  const t = useTranslations('qualification');

  const pillars = [
    { id: '01', title: t('pillars.0.title'), desc: t('pillars.0.desc') },
    { id: '02', title: t('pillars.1.title'), desc: t('pillars.1.desc') },
    { id: '03', title: t('pillars.2.title'), desc: t('pillars.2.desc') }
  ];

  return (
    <section id="qualification" className="relative bg-[#354BB5] py-24 md:py-48 overflow-hidden">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container relative z-10 mx-auto px-6 md:px-16 lg:px-24">
        
        {/* SECTION HEADER - Minimal & Authority */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-28 text-center"
        >
          <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/40 mb-6 block font-bold">
            {t('label')}
          </span>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none uppercase">
            {t('title')}
          </h2>
        </motion.div>

        {/* THE IDEAL CLIENT - Balanced Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-20 md:mb-32"
        >
          <p className="text-xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight tracking-tight text-center max-w-5xl mx-auto uppercase italic">
            {t('idealClient').split(t('realComplexity'))[0]}
            <span className="text-white underline decoration-white/30 underline-offset-8">{t('realComplexity')}</span>
            {t('idealClient').split(t('realComplexity'))[1]?.split(t('decisionsMatter'))[0]}
            <span className="text-white underline decoration-white/30 underline-offset-8">{t('decisionsMatter')}</span>
            {t('idealClient').split(t('decisionsMatter'))[1]}
          </p>
        </motion.div>

        {/* THREE PILLARS - Horizontal Layout with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-20 md:mb-32">
          
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-sm transition-all duration-500 hover:border-white/30"
            >
              {/* Subtle Glow Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white transition-all duration-500">
                  <span className="font-mono text-base md:text-lg font-bold text-white group-hover:text-[#354BB5]">
                    {pillar.id}
                  </span>
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-white uppercase tracking-tight mb-4 leading-none">
                  {pillar.title}
                </h4>
                <p className="text-sm md:text-base text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* THE FILTER - Subtle & Clean */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center border-t border-white/10 pt-16 md:pt-20"
        >
          <p className="text-base md:text-xl text-white/30 mb-8 italic">
            {t('notFor')}
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-white/20 mx-auto mb-8"
          />
          <p className="text-sm md:text-lg text-white/50 font-medium uppercase tracking-[0.3em] md:tracking-[0.4em]">
            {t('closing')}
          </p>
        </motion.div>

      </div>

      {/* Frame borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10 z-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10 z-30" />
    </section>
  );
};
