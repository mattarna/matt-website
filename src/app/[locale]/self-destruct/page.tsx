'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function SelfDestructPage() {
  const [countdown, setCountdown] = useState(10);
  const [isAborted, setIsAborted] = useState(false);
  const [phase, setPhase] = useState<'initial' | 'countdown' | 'boom'>('initial');
  const router = useRouter();
  const t = useTranslations('selfDestruct');
  const locale = useLocale();

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
        window.location.href = `/${locale}`;
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, locale]);

  const handleAbortion = () => {
    setIsAborted(true);
    setTimeout(() => {
      router.push(`/${locale}`);
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
                <span className="text-red-500 uppercase tracking-[0.8em] font-black text-xs">{t('protocol')}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                {t('title')}
              </h1>
              
              <p className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed">
                {t('intro')}
              </p>

              <button
                onClick={() => setPhase('countdown')}
                className="group relative px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.4em] text-sm transition-all duration-500 rounded-sm"
              >
                {t('initiateButton')}
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
                <motion.span 
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                  className="text-red-500 uppercase tracking-[0.5em] font-black text-sm"
                >
                  {isAborted ? t('aborting') : t('critical')}
                </motion.span>
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
                    {t('cancelButton')}
                  </button>
                </div>
              ) : (
                <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-sm italic">
                  {t('stabilized')}
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
              <p>[0x00A] {t('log1')}</p>
              <p>[0x00B] {t('log2')}</p>
              <p>[0x00C] {t('log3')}</p>
              <p>[0x00D] {t('log4')}</p>
              <p>[0x00E] <span className="font-black">{t('log5')}</span></p>
           </div>
        </div>

      </div>
    </div>
  );
}
