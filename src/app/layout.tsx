import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ADU Alliance | Premier Orange County ADU Builders & Architects',
  description:
    'Dedicated ADU design-build general contractor in Orange County, CA. Custom architectural plans, in-house city permitting across 34 OC cities, and high-craft construction. Call (657) 298-4061.',
  keywords: [
    'ADU builders Orange County',
    'ADU contractor Irvine',
    'Newport Beach garage conversion',
    'modern prefab ADU California',
    'backyard ADU plans Orange County',
  ],
  openGraph: {
    title: 'ADU Alliance | Orange County ADU Builders',
    description: 'We only build ADUs. Single-contract design, permits, and full construction in Orange County.',
    url: 'https://adualliance.com',
    siteName: 'ADU Alliance',
    images: [
      {
        url: '/images/localized/adu_asset_7b7dec0f36.jpeg',
        width: 1200,
        height: 630,
        alt: 'Modern ADU Built by ADU Alliance in Orange County',
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
    '@type': 'GeneralContractor',
    name: 'ADU Alliance',
    image: '/images/localized/adu_asset_7b7dec0f36.jpeg',
    '@id': 'https://adualliance.com/#organization',
    url: 'https://adualliance.com',
    telephone: '+1-657-298-4061',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Irvine',
      addressRegion: 'CA',
      postalCode: '92618',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6846,
      longitude: -117.8265,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: [
      'Irvine', 'Newport Beach', 'Costa Mesa', 'Huntington Beach',
      'Anaheim', 'Santa Ana', 'Fullerton', 'Mission Viejo', 'Orange County'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '194',
      bestRating: '5',
    },
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

        {/* Google tag (gtag.js) GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C1EYM0JCZC"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C1EYM0JCZC');
            `,
          }}
        />

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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}
