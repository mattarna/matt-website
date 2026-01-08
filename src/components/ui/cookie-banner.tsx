'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { sendGTMEvent } from '@next/third-parties/google';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('cookieBanner');
  const locale = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show after 3 seconds for a smoother entry
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    sendGTMEvent({
      event: 'cookie_consent_update',
      consent_level: 'all'
    });
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    sendGTMEvent({
      event: 'cookie_consent_update',
      consent_level: 'necessary'
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[500]"
        >
          <div className="relative overflow-hidden bg-[#030712]/80 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl">
            {/* Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
                    {t('label')}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">
                  {t('title')}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  {t('description')}
                  <Link 
                    href={`/${locale}/cookie-policy`}
                    className="text-white hover:text-accent underline underline-offset-4 ml-1 transition-colors"
                  >
                    {t('policyLink')}
                  </Link>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptCookies}
                  className="flex-1 px-6 py-3 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-accent hover:text-white transition-all duration-500 rounded-sm"
                >
                  {t('accept')}
                </button>
                <button
                  onClick={declineCookies}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white/60 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 hover:text-white transition-all duration-500 rounded-sm"
                >
                  {t('decline')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};




