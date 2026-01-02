'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate initial loading time or wait for assets
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // 2.5 seconds total duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center gap-8">
            {/* LOGO ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                MATT
              </h1>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="font-mono text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/40 mt-4 font-bold"
              >
                Strategic Infrastructure
              </motion.span>
            </motion.div>

            {/* PROGRESS LINE */}
            <div className="relative w-48 h-px bg-white/10 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity 
                }}
                className="absolute inset-0 bg-accent w-full"
              />
            </div>

            {/* TECHNICAL COORDINATES */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">
                System Initializing...
              </span>
              <span className="font-mono text-[8px] text-white/10">
                45.4642° N, 9.1900° E
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

