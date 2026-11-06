import AnalyticsEvents from '@/components/AnalyticsEvents';
import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';

const outfit = Outfit({
  subsets: ['latin'],
  
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adualliance.com'),
  twitter: { card: 'summary_large_image' },
  title: 'ADU Builders Orange County | ADU Alliance',
  description:
    'Explore ADU builders, garage conversions, plans and permits in Orange County. ADU Alliance connects homeowners with independent contractor partners.',
  keywords: [
    'ADU builders Orange County',
    'ADU contractor Irvine',
    'Newport Beach garage conversion',
    'custom stick built ADU California',
    'backyard ADU plans Orange County',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'ADU Alliance',
    images: [
      {
        url: 'https://adualliance.com/images/localized/adu_asset_7b7dec0f36.jpeg',
        width: 1200,
        height: 630,
        alt: 'Modern backyard accessory dwelling unit',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ADU Alliance',
    logo: 'https://adualliance.com/images/logo-transparent.png',
    image: 'https://adualliance.com/images/localized/adu_asset_7b7dec0f36.jpeg',
    '@id': 'https://adualliance.com/#organization',
    url: 'https://adualliance.com',
    telephone: '+1-949-822-9561',
    areaServed: [
      'Orange County', 'Irvine', 'Newport Beach', 'Costa Mesa', 'Huntington Beach',
      'Anaheim', 'Santa Ana', 'Fullerton', 'Mission Viejo'
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable} scroll-smooth bg-brand-black text-white`}>
      <head>
        {/* Google Tag Manager Container */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNC2GR4');`,
          }}
        />

        {/* GTM owns the Google tag configuration. This wrapper queues events once. */}
        <Script id="analytics-event-queue" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: 'window.dataLayer = window.dataLayer || []; window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};'}} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-brand-black text-white font-sans antialiased selection:bg-brand-amber selection:text-black flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNC2GR4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnalyticsEvents />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}