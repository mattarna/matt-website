import { HeroSection } from '@/components/sections/hero-section';
import { PrinciplesSection } from '@/components/sections/principles-section';
import { ExpertiseSection } from '@/components/sections/expertise-section';
import { LogoSection } from '@/components/sections/logo-section';
import React from 'react';

interface HomeProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ params }: HomeProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { locale } = await params;

  return (
    <main className="flex flex-col">
      <HeroSection />
      <PrinciplesSection />
      <ExpertiseSection />
      <LogoSection />
    </main>
  );
}
