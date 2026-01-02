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
      const currentPath = pathname.replace(`/${locale}`, '') || '/';
      window.location.href = `/${newLocale}${currentPath === '/' ? '' : currentPath}`;
    });
  };

  return (
    <footer className="relative bg-[#354BB5] py-16 md:py-32 overflow-hidden border-t border-white/20">
      {/* Decorative Circles */}
      <div className="absolute top-[-50px] right-[-50px] md:top-[-100px] md:right-[-100px] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-white/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] md:bottom-[-100px] md:left-[-100px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-black/20 rounded-full blur-[50px] md:blur-[80px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col gap-16 md:gap-20">
          
          {/* TOP SECTION: BIG LOGO GESTURE */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <Link href="/" className="group">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h2 className="text-5xl md:text-8xl lg:text-[10vw] font-black text-white leading-none tracking-tighter uppercase group-hover:text-white transition-colors">
                  MATT
                </h2>
                <span className="text-white/60 font-mono text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase mt-3 md:mt-4 group-hover:text-white transition-colors">
                  {t('tagline')}
                </span>
              </motion.div>
            </Link>

            {/* FUNNY / COOL ELEMENT: "THE EASTER EGG" */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative cursor-help"
            >
              <div className="flex flex-col items-start md:items-end text-left md:text-right">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">{t('funFact')}</span>
                <p className="text-white text-sm md:text-lg italic max-w-[280px] group-hover:text-white transition-colors leading-relaxed">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pt-16 md:pt-20 border-t border-white/20">
            
            {/* Contacts & Language Switcher */}
            <div className="flex flex-col gap-5 md:gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/60 font-bold">{t('direct')}</span>
              <a href="mailto:hello@morfeushub.com" className="text-white text-base md:text-lg font-bold hover:text-white/70 transition-opacity break-all">hello@morfeushub.com</a>
              <div className="flex flex-col gap-3">
                <a href="https://www.linkedin.com/in/matteo-arnaboldi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BoRRGqgZpQo6xNgppmNPy4Q%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest font-medium">LinkedIn</a>
                <a href="https://www.youtube.com/@matteoarnaboldi3952" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest font-medium">YouTube</a>
                <a href="https://matteoarnaboldi.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest font-medium text-orange-400/80 hover:text-orange-400">AI Espresso</a>
              </div>

              {/* Language Switcher moved here, under Social Links */}
              <div className="flex items-center gap-2 mt-2">
                {['it', 'en'].map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    disabled={isPending || locale === l}
                    className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                      locale === l 
                        ? 'text-white underline underline-offset-4 decoration-2' 
                        : 'text-white/40 hover:text-white/70'
                    } ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-5 md:gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/60 font-bold">{t('base')}</span>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                45.4642° N, 9.1900° E<br />
                Milano, Italy
              </p>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-5 md:gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/60 font-bold">{t('status')}</span>
              <div className="items-center gap-3 hidden sm:flex">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">{t('statusText')}</span>
              </div>
              <div className="flex sm:hidden items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold text-xs uppercase tracking-widest">{t('statusText')}</span>
              </div>
            </div>

            {/* Funny Button / CTA */}
            <div className="flex flex-col sm:items-start md:items-end gap-5 md:gap-6">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/60 font-bold">{t('dontClick')}</span>
              <Link href="/self-destruct">
                <motion.div 
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 md:px-6 md:py-3 border border-white/40 text-white/80 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-[#354BB5] transition-all duration-500 cursor-pointer text-center"
                >
                  {t('selfDestruct')}
                </motion.div>
              </Link>
            </div>

          </div>

          {/* BOTTOM SECTION: LEGAL & CREDITS */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 pt-10 md:pt-12 text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/40 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center">
              <span>© {currentYear} Matteo Arnaboldi</span>
              <span className="font-mono">Aventus Global - RO47690977 - CUI: 47539878</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">{t('privacy')}</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors cursor-pointer">{t('cookie')}</Link>
            </div>
            <span className="italic">{t('builtWith')}</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
