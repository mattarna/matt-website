import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Syne, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { PageLoader } from '@/components/ui/page-loader';
import { SilentNavigation } from '@/components/layout/silent-navigation';
import { FilmGrain } from '@/components/ui/film-grain';
import { Header } from '@/components/layout/header';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { ContactForm } from '@/components/sections/contact-form';
import { Metadata } from 'next';
import Script from 'next/script';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  const baseUrl = 'https://matteoarnaboldi.com'; // Use your real domain here

  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Matteo Arnaboldi' }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: locale === 'it' ? '/' : `/${locale}`,
      languages: {
        'it-IT': '/',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: baseUrl,
      siteName: 'Matteo Arnaboldi',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/logo-matteo.png', // Updated to logo-matteo.png
          width: 1200,
          height: 630,
          alt: t('ogTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      creator: '@matteoarnaboldi',
      images: ['/logo-matteo.png'], // Updated to logo-matteo.png
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  // Structured Data (JSON-LD) for Person/Professional
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Matteo Arnaboldi',
    url: 'https://matteoarnaboldi.com',
    jobTitle: 'Strategic Operator & Entrepreneur',
    description: messages.common.description,
    sameAs: [
      'https://linkedin.com/in/marnaboldi',
      'https://youtube.com/@matteoarnaboldi',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Performance Marketing',
      'Business Systems',
      'Entrepreneurship'
    ]
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Favicon & Icons */}
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVMKC24');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans antialiased min-h-screen flex flex-col bg-[#030712]`}>
        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVMKC24"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <PageLoader />
        <FilmGrain />
        <CustomCursor />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SilentNavigation />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CookieBanner />
            <ContactForm />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
