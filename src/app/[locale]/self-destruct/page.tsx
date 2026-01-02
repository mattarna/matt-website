'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SelfDestructPage() {
  const [countdown, setCountdown] = useState(10);
  const [isAborted, setIsAborted] = useState(false);
  const [phase, setPhase] = useState<'initial' | 'countdown' | 'boom'>('initial');
  const router = useRouter();

  useEffect(() => {
    if (phase === 'countdown' && countdown > 0 && !isAborted) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && phase === 'countdown') {
      setPhase('boom');
    }
  }, [countdown, phase, isAborted]);

  // Effect to handle the final redirection after the explosion
  useEffect(() => {
    if (phase === 'boom') {
      const timer = setTimeout(() => {
        // Using window.location instead of router.push for a harder reset 
        // and to avoid potential router issues during "destruction"
        window.location.href = '/en';
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleAbortion = () => {
    setIsAborted(true);
    setTimeout(() => {
      router.push('/en');
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#050508] flex items-center justify-center overflow-hidden font-mono text-white">
      
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ff0000 1px, transparent 1px), linear-gradient(to bottom, #ff0000 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Atmospheric Glow */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${phase === 'countdown' ? 'bg-red-950/20' : ''}`} />

      <div className="container relative z-10 px-8 text-center max-w-4xl mx-auto">
        
        <AnimatePresence mode="wait">
          {phase === 'initial' && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-12"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse" />
                <span className="text-red-500 uppercase tracking-[0.8em] font-black text-xs">Security Protocol 000</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Self-Destruct Sequence
              </h1>
              
              <p className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed">
                You were told not to click. <br />
                The infrastructure is now unstable. Every system, decision, and espresso shot is being de-materialized.
              </p>

              <button
                onClick={() => setPhase('countdown')}
                className="group relative px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.4em] text-sm transition-all duration-500 rounded-sm"
              >
                Initiate Sequence
                <div className="absolute inset-0 border border-red-400/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              </button>
            </motion.div>
          )}

          {phase === 'countdown' && (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-16"
            >
              <div className="flex flex-col items-center gap-6">
                <span className="text-red-500 uppercase tracking-[0.5em] font-black text-sm animate-flicker">
                  {isAborted ? 'ABORTING SEQUENCE...' : 'CRITICAL FAILURE IMMINENT'}
                </span>
                <motion.div 
                  key={countdown}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-[30vw] md:text-[20vw] font-black leading-none text-red-600 drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]"
                >
                  {isAborted ? 'XX' : countdown}
                </motion.div>
              </div>

              {!isAborted ? (
                <div className="flex flex-col gap-8 w-full max-w-md">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div 
                      initial={{ width: '100%' }}
                      animate={{ width: `${(countdown / 10) * 100}%` }}
                      transition={{ duration: 1, ease: 'linear' }}
                      className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                    />
                  </div>
                  <button
                    onClick={handleAbortion}
                    className="text-white/40 hover:text-white text-xs uppercase tracking-[0.5em] transition-colors border border-white/10 py-4 hover:border-white/30"
                  >
                    Cancel (Too late?)
                  </button>
                </div>
              ) : (
                <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-sm italic">
                  Systems stabilized. Returning to safety...
                </p>
              )}
            </motion.div>
          )}

          {phase === 'boom' && (
            <motion.div
              key="boom"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
            >
              <motion.span 
                initial={{ scale: 1 }}
                animate={{ scale: 100 }}
                transition={{ duration: 1 }}
                className="text-black font-black uppercase text-9xl"
              >
                BYE
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SYSTEM LOG OVERLAY - Always active in background */}
        <div className="fixed bottom-12 left-12 text-left hidden lg:block opacity-20 group pointer-events-none transition-opacity hover:opacity-100">
           <div className="font-mono text-[9px] text-red-500 uppercase tracking-widest space-y-1">
              <p>[0x00A] Deleting "ai-espresso" cache...</p>
              <p>[0x00B] Off-loading "morfeus" infrastructure...</p>
              <p>[0x00C] Shredding "clarity" systems...</p>
              <p>[0x00D] Dumping espresso into the void...</p>
              <p>[0x00E] <span className="font-black">TOTAL WIPEOUT DETECTED</span></p>
           </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-flicker {
          animation: flicker 0.2s infinite;
        }
      `}</style>
    </div>
  );
}
