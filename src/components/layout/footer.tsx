'use client';

import React, { useTransition } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('footer');

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      // Get the path without the current locale prefix
      const currentPath = pathname.replace(`/${locale}`, '') || '/';
      // Navigate to the new locale path
      window.location.href = `/${newLocale}${currentPath === '/' ? '' : currentPath}`;
    });
  };

  return (
    <footer className="relative bg-[#354BB5] py-20 md:py-32 overflow-hidden border-t border-white/20">
      {/* Decorative Circles */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-black/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col gap-20">
          
          {/* TOP SECTION: BIG LOGO GESTURE */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-black text-white leading-none tracking-tighter uppercase">
                MATT
              </h2>
              <span className="text-white/60 font-mono text-xs md:text-sm tracking-[0.5em] uppercase mt-4">
                {t('tagline')}
              </span>
            </motion.div>

            {/* FUNNY / COOL ELEMENT: "THE EASTER EGG" */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative cursor-help"
            >
              <div className="flex flex-col items-end text-right">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">{t('funFact')}</span>
                <p className="text-white text-base md:text-lg italic max-w-[280px] group-hover:text-white transition-colors leading-relaxed">
                  {t('funFactText')}
                </p>
                <div className="mt-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1 h-1 bg-white/40 group-hover:bg-white/80 transition-colors" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE SECTION: LINKS & INFO */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-20 border-t border-white/20">
            
            {/* Contacts */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/60 font-bold">{t('direct')}</span>
              <a href="mailto:hello@morfeushub.com" className="text-white text-lg font-bold hover:text-white/70 transition-opacity">hello@morfeushub.com</a>
              <div className="flex flex-col gap-3">
                <a href="https://linkedin.com/in/marnaboldi" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">LinkedIn</a>
                <a href="https://youtube.com/@matteoarnaboldi" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">YouTube</a>
                <a href="https://aiespresso.it" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium text-orange-400/80 hover:text-orange-400">AI Espresso</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/60 font-bold">{t('base')}</span>
              <p className="text-white/90 text-base leading-relaxed">
                45.4642° N, 9.1900° E<br />
                Milano, Italy
              </p>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/60 font-bold">{t('status')}</span>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <span className="text-white font-bold text-sm uppercase tracking-widest">{t('statusText')}</span>
              </div>
            </div>

            {/* Funny Button / CTA */}
            <div className="flex flex-col md:items-end gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/60 font-bold">{t('dontClick')}</span>
              <Link href="/self-destruct">
                <motion.div 
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-white/40 text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-[#354BB5] transition-all duration-500 cursor-pointer"
                >
                  {t('selfDestruct')}
                </motion.div>
              </Link>
            </div>

          </div>

          {/* BOTTOM SECTION: LEGAL & CREDITS */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 text-[9px] uppercase tracking-[0.5em] text-white/40">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <span>© {currentYear} Matteo Arnaboldi</span>
              <span className="font-mono">P.IVA 12184310961</span>
            </div>

            {/* Language Switcher in Footer */}
            <div className="flex items-center gap-4 bg-black/20 rounded-full p-1.5 border border-white/5">
              {['it', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  disabled={isPending || locale === l}
                  className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                    locale === l 
                      ? 'bg-white text-[#354BB5]' 
                      : 'text-white/30 hover:text-white/60'
                  } ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {l === 'it' ? 'Italiano' : 'English'}
                </button>
              ))}
            </div>

            <div className="flex gap-8">
              <span className="hover:text-white/60 cursor-default">{t('privacy')}</span>
              <span className="hover:text-white/60 cursor-default">{t('cookie')}</span>
            </div>
            <span className="italic">{t('builtWith')}</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
