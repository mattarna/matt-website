import React from 'react';
import { Syne, JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';
import { NotFoundContent } from '@/components/ui/not-found-content';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans bg-[#050508] text-white antialiased`}>
        <NotFoundContent />
      </body>
    </html>
  );
}
