'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  "I don't chase trends. I build what lasts.",
  "Clarity is an ethical act against complexity.",
  "Systems should elevate people, not replace them.",
  "Growth without foundations is just future debt.",
  "Innovation is only valuable when it becomes usable structure.",
  "Truth and courage are the only real multipliers in business."
];

interface PrincipleItemProps {
  text: string;
  index: number;
}

const PrincipleItem: React.FC<PrincipleItemProps> = ({ text, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  // margin: "100% 0px -50% 0px" 
  // - 100% top: include everything above the viewport (keep it white)
  // - -50% bottom: activate only when passing the middle of the screen
  const isActive = useInView(ref, { 
    margin: "100% 0px -50% 0px",
    once: false
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-8 md:py-10"
    >
      <div className="flex items-center gap-8 md:gap-12">
        {/* Number - Scaled down & Bold */}
        <div className="flex-shrink-0">
          <span 
            className={`block text-2xl md:text-3xl font-extrabold tracking-tighter transition-all duration-700 ease-out leading-none ${
              isActive ? 'text-accent' : 'text-white/5'
            }`}
          >
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>

        {/* Text - Well compressed dimensions */}
        <p 
          className={`text-lg md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight transition-all duration-1000 ease-out ${
            isActive ? 'text-white' : 'text-white/10'
          }`}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export const PrinciplesSection: React.FC = () => {
  return (
    <section className="relative bg-[#050508] py-24 md:py-32">
      <div className="container px-8 md:px-16 lg:px-24">
        
        {/* Header - Minimal & Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-8 bg-accent/60" />
             <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent/80">Principles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter leading-none uppercase">
            Operating Principles
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/30 max-w-sm leading-relaxed">
            Not slogans. Filters for every decision I make.
          </p>
        </motion.div>

        {/* Principles List - High compression */}
        <div className="divide-y divide-white/5 border-t border-white/5">
          {principles.map((text, i) => (
            <PrincipleItem key={i} text={text} index={i} />
          ))}
        </div>

        {/* Midas Touch - Symmetrical & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-40 max-w-4xl border-l border-accent/30 pl-8 md:pl-12"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-accent/60 mb-6 block">
            The Commitment
          </span>

          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-white/80 leading-tight tracking-tight mb-10 italic">
            "Everything I touch should leave <span className="text-white underline decoration-accent/30 decoration-2 underline-offset-4">better</span> than I found it."
          </p>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-extrabold text-accent tracking-tight uppercase">
              The New Midas Touch
            </h3>
            <p className="text-sm md:text-base text-white/30 max-w-lg leading-relaxed">
              An obsession with quality that turns potential into enduring value.
            </p>
          </div>

          {/* Signature - Discreet */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white/60 uppercase">Matt Arnaboldi</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">Founder & Operator</span>
            </div>
            <div className="h-px w-8 bg-white/10" />
            <span className="font-mono text-lg font-extralight text-white/5">2026</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
