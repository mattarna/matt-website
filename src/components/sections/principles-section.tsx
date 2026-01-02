'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface PrincipleItemProps {
  text: string;
  index: number;
}

const PrincipleItem: React.FC<PrincipleItemProps> = ({ text, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const isActive = useInView(ref, { 
    margin: "100% 0px -50% 0px",
    once: false
  });

  return (
    <div
      ref={ref}
      className="py-8 md:py-14"
    >
      <div className="flex items-center gap-6 md:gap-16">
        {/* Number */}
        <div className="flex-shrink-0">
          <span 
            className={`block text-2xl md:text-5xl font-extrabold tracking-tighter transition-all duration-1000 ease-out leading-none ${
              isActive ? 'text-accent' : 'text-white/5'
            }`}
          >
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>

        {/* Text */}
        <p 
          className={`text-lg md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight transition-all duration-1000 ease-out ${
            isActive ? 'text-white' : 'text-white/10'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export const PrinciplesSection: React.FC = () => {
  const t = useTranslations('principles');

  // Get the principles list from translations
  const principlesList = [
    t('list.0'),
    t('list.1'),
    t('list.2'),
    t('list.3'),
    t('list.4'),
    t('list.5')
  ];

  return (
    <section id="principles" className="relative bg-[#050508] py-24 md:py-48 overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container px-6 md:px-16 lg:px-24">
        
        {/* Header - Minimal & Compact */}
        <div className="mb-16 md:mb-32">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
             <div className="h-px w-6 md:w-8 bg-accent/60" />
             <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent/80 font-bold">{t('label')}</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tighter leading-none uppercase">
            {t('title')}
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-lg text-white/30 max-w-sm leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Principles List - High compression */}
        <div className="divide-y divide-white/5 border-t border-white/5">
          {principlesList.map((text, i) => (
            <PrincipleItem key={i} text={text} index={i} />
          ))}
        </div>

        {/* Midas Touch - Symmetrical & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-56 max-w-4xl border-l border-accent/30 pl-6 md:pl-16 group"
        >
          <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent/60 mb-6 md:mb-8 block transition-colors group-hover:text-accent font-bold">
            {t('commitmentLabel')}
          </span>

          <p className="text-xl md:text-4xl lg:text-5xl font-bold text-white/80 leading-tight tracking-tight mb-8 md:mb-12 italic transition-colors group-hover:text-white">
            {t('commitmentQuote')}
          </p>

          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-lg md:text-3xl font-extrabold text-accent tracking-tight uppercase">
              {t('midasTitle')}
            </h3>
            <p className="text-sm md:text-xl text-white/30 max-w-xl leading-relaxed">
              {t('midasDesc')}
            </p>
          </div>

          {/* Signature - Discreet */}
          <div className="mt-12 md:mt-20 flex items-center gap-6 md:gap-8">
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-tight text-white/60 uppercase">Matt Arnaboldi</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/20">{t('signature')}</span>
            </div>
            <div className="h-px w-8 md:w-12 bg-white/10" />
            <span className="font-mono text-lg md:text-xl font-extralight text-white/5">2026</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
