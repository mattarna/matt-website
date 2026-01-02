'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const ScrollingImage = ({ 
  data, 
  index, 
  progress,
  totalItems
}: { 
  data: ExpertiseArea; 
  index: number; 
  progress: any;
  totalItems: number;
}) => {
  const segment = 1 / totalItems;
  const startTransition = index * segment;
  
  const y = useTransform(
    progress,
    [startTransition - 0.15, startTransition + 0.15],
    ["100%", "0%"]
  );

  if (index === 0) {
    return (
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <motion.div
      style={{ y, zIndex: index }}
      className="absolute inset-0 overflow-hidden bg-[#354BB5]"
    >
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </motion.div>
  );
};

export const ExpertiseSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const t = useTranslations('expertise');

  const images = ['/Background (6).webp', '/Background (7).webp', '/Background (8).webp'];

  const expertiseData: ExpertiseArea[] = [0, 1, 2].map((i) => ({
    id: t(`areas.${i}.id`),
    title: t(`areas.${i}.title`),
    description: t(`areas.${i}.description`),
    bullets: [0, 1, 2, 3, 4].map((j) => t(`areas.${i}.bullets.${j}`)),
    image: images[i]
  }));

  return (
    <section id="expertise" ref={containerRef} className="relative bg-[#354BB5] py-24 md:py-32">
      {/* Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container relative z-10 mx-auto px-6 md:px-16 lg:px-24">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-32 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-6 md:w-8 bg-white/40" />
             <span className="font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/80 font-bold">{t('label')}</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight uppercase">
            {t('title')}
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* MOBILE LAYOUT: STACKED */}
        <div className="flex flex-col lg:hidden gap-20">
          {expertiseData.map((data) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              className="flex flex-col gap-10"
            >
              <div className="relative w-full aspect-square rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={data.image} 
                  alt={data.title} 
                  fill 
                  className="object-cover" 
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-sm font-bold text-white/40 tracking-widest">
                    {data.id}
                  </span>
                  <div className="h-px w-8 bg-white/20" />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-none uppercase">
                  {data.title}
                </h3>
                
                <p className="text-base md:text-xl text-white/60 leading-relaxed mb-10">
                  {data.description}
                </p>
                
                <div className="flex flex-col gap-4">
                  {data.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <span className="text-white/40 text-xs mt-1.5 font-mono">▶</span>
                      <span className="text-sm md:text-lg text-white/80 tracking-tight font-bold uppercase transition-colors">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP LAYOUT: STICKY SCROLL */}
        <div className="hidden lg:flex flex-row items-start justify-center gap-24">
          {/* LEFT SIDE: SCROLLING TEXT CONTENT */}
          <div className="flex-[1.2] flex flex-col">
            {expertiseData.map((data) => (
              <div key={data.id} className="h-screen flex flex-col justify-center w-full max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-sm font-bold text-white/40 tracking-widest">
                      {data.id}
                    </span>
                    <div className="h-px w-8 bg-white/20" />
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-none uppercase">
                    {data.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                    {data.description}
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    {data.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <span className="text-white/40 text-xs mt-1.5 transition-transform group-hover:translate-x-1 font-mono">▶</span>
                        <span className="text-sm md:text-base lg:text-lg text-white/80 tracking-tight font-bold transition-colors group-hover:text-white uppercase">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: STICKY IMAGE */}
          <div className="flex-1 h-screen sticky top-0">
            <div className="h-full flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[600px]">
                {/* Abstract decorative elements */}
                <div className="absolute -top-6 -right-6 grid grid-cols-3 gap-2 opacity-20 z-20">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-4 h-4 border border-white/20" />
                  ))}
                </div>

                {/* Image Container with granular scroll stacking effect */}
                <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                  {expertiseData.map((data, index) => (
                    <ScrollingImage 
                      key={data.id} 
                      data={data} 
                      index={index} 
                      progress={scrollYProgress}
                      totalItems={expertiseData.length}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10 z-30" />
    </section>
  );
};
