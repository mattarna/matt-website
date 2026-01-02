'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
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
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wide leading-relaxed mb-12">
              I don&apos;t build for speed alone.
              <br />
              <span className="text-white/40">I build for what holds.</span>
            </p>

            <div className="space-y-8 mb-16">
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Most problems aren&apos;t solved by more tools or automation.
                <br />
                They&apos;re solved by <span className="text-white font-semibold">clarity</span>: seeing the system as it is, naming the trade-offs, and choosing a direction you can stand behind.
              </p>

              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Clarity is not a soft skill. It&apos;s an <span className="text-white font-semibold">ethical act</span>.
                <br />
                Because unclear decisions create fragility, waste time, and quietly erode trust.
              </p>

              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Technology matters only when it becomes <span className="text-white font-semibold">usable structure</span>.
                <br />
                Not novelty. Not performance theater.
                <br />
                Structure that reduces load, strengthens execution, and elevates people.
              </p>

              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                I work like an <span className="text-white font-semibold">operator</span>, not a spectator.
                <br />
                Where complexity is real and consequences exist.
                <br />
                Where decisions can&apos;t be postponed or disguised as experimentation.
              </p>
            </div>

            {/* KEY PRINCIPLES - Condensed */}
            <div className="border-l-2 border-white/20 pl-6 mb-16 space-y-3">
              <p className="text-sm md:text-base text-white/50 uppercase tracking-wider font-bold">
                Growth without foundations is debt.
              </p>
              <p className="text-sm md:text-base text-white/50 uppercase tracking-wider font-bold">
                Innovation without discipline is noise.
              </p>
              <p className="text-sm md:text-base text-white/50 uppercase tracking-wider font-bold">
                Systems that don&apos;t respect humans eventually break.
              </p>
            </div>

            {/* CLOSING STATEMENT */}
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-16">
              The real advantage today is not moving faster, but <span className="text-white font-semibold">deciding better</span>.
              <br />
              Building things that last.
              <br />
              Leaving people, projects, and organizations stronger than I found them.
            </p>

            {/* THE NEW MIDAS TOUCH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="pt-8 border-t border-white/10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent/80 mb-6 block">
                The Commitment
              </span>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                The New Midas Touch
              </h3>
              <p className="mt-4 text-lg md:text-xl text-white/60 italic">
                &quot;Everything I touch should leave better than it was before.&quot;
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
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
              Strategic Systems
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
              AI Integration
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
              10+ Years Experience
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

