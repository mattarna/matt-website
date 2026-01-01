'use client';

import React from 'react';
import { Link } from '@/i18n/routing';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo - Minimal */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center border border-white/20">
            <span className="text-xs font-bold text-white">M</span>
          </div>
        </Link>

        {/* Nav - Right */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-accent"
          >
            Work
          </Link>
          <Link
            href="/"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-accent"
          >
            Services
          </Link>
          <a
            href="mailto:hello@matteoarnaboldi.com"
            className="border border-accent px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-accent transition-all hover:bg-accent hover:text-black"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};
