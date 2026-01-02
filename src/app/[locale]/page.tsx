import { HeroSection } from '@/components/sections/hero-section';
import { PrinciplesSection } from '@/components/sections/principles-section';
import { ExpertiseSection } from '@/components/sections/expertise-section';
import { LogoSection } from '@/components/sections/logo-section';
import { SelectedWorkSection } from '@/components/sections/selected-work-section';
import { ManifestoSection } from '@/components/sections/manifesto-section';
import { QualificationSection } from '@/components/sections/qualification-section';
import { CTASection } from '@/components/sections/cta-section';
import React from 'react';
import { getTranslations } from 'next-intl/server';

import { StrategicFormula } from '@/components/sections/strategic-formula';

interface HomeProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matteo Arnaboldi",
    "url": "https://matteoarnaboldi.com",
    "jobTitle": "Strategic Operator & Entrepreneur",
    "description": t('description'),
    "sameAs": [
      "https://linkedin.com/in/marnaboldi",
      "https://youtube.com/@matteoarnaboldi"
    ],
    "knowsAbout": [
      "Strategic Systems",
      "AI Implementation",
      "Performance Marketing",
      "Entrepreneurship"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col">
        <HeroSection />
        <PrinciplesSection />
        <ExpertiseSection />
        <StrategicFormula />
        <LogoSection />
        <SelectedWorkSection />
        <ManifestoSection />
        <QualificationSection />
        <CTASection />
      </main>
    </>
  );
}
