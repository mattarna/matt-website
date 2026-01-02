'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const expertiseData = [
  {
    id: '01',
    title: 'Company Building',
    description: 'I help founders turn complexity into clear direction, ownership, and durable execution. Scaling a business requires more than just energy; it requires a repeatable operating cadence that reduces cognitive load and empowers teams.',
    bullets: [
      'Decision design and strategic prioritization',
      'Operating cadence and leadership accountability',
      'Strategy translated into clear execution systems',
      'Organizational design for high-growth environments',
      'Standard Operating Procedures (SOPs) for scalability'
    ],
    image: '/Background (6).webp'
  },
  {
    id: '02',
    title: 'AI Systems',
    description: 'I integrate AI where it improves decisions and operations, without creating fragility. AI should not be a gimmick; it must be a structural leverage point that enhances human capability and operational efficiency.',
    bullets: [
      'Practical workflow and process automation design',
      'Internal knowledge systems and leverage architecture',
      'Custom AI guardrails, governance, and adoption',
      'Integration of LLMs into core business functions',
      'AI-driven data analysis for strategic insights'
    ],
    image: '/Background (7).webp'
  },
  {
    id: '03',
    title: 'Growth Systems',
    description: 'I build demand and growth systems that perform without burning the brand or the team. Performance marketing is not just about spending; it is about building an acquisition architecture that scales with predictable ROI.',
    bullets: [
      'Strategic demand and positioning mechanics',
      'End-to-end funnel and lifecycle architecture',
      'Performance loops and advanced measurement',
      'Multi-channel acquisition and scaling strategies',
      'Brand-consistent growth optimization'
    ],
    image: '/Background (8).webp'
  }
];

const ScrollingImage = ({ 
  data, 
  index, 
  progress 
}: { 
  data: typeof expertiseData[0]; 
  index: number; 
  progress: any;
}) => {
  // We divide the 1.0 progress into 3 parts (0.33 each)
  const segment = 1 / expertiseData.length;
  const startTransition = index * segment;
  
  // The transition starts a bit before the segment and ends a bit after 
  // to make it feel like it takes "some scroll notches"
  const y = useTransform(
    progress,
    [startTransition - 0.15, startTransition + 0.15],
    ["100%", "0%"]
  );

  // First image is the base, always at 0
  if (index === 0) {
    return (
      <div className="absolute inset-0 z-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
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
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover"
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

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-8 bg-white/40" />
             <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/80 font-bold">Operating Model</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight uppercase">
            Strategic Operating Model
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            Systems designed to turn complexity into clear direction and durable growth. 
            Built for environments where decisions carry real weight.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-24">
          
          {/* LEFT SIDE: SCROLLING TEXT CONTENT */}
          <div className="flex-[1.2] flex flex-col">
            {expertiseData.map((data) => (
              <div key={data.id} className="h-screen flex flex-col justify-center w-full max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
          <div className="hidden lg:block flex-1 h-screen sticky top-0">
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
