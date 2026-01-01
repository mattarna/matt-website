import { HeroSection } from '@/components/sections/hero-section';
import React from 'react';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { locale } = await params;

  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
