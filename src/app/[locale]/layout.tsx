import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
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

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans antialiased min-h-screen flex flex-col bg-[#030712]`}>
        <PageLoader />
        <FilmGrain />
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
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
