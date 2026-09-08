import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0A1128',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aeroglidecabs.com'),
  title: {
    default: 'AeroGlide Cabs | Executive Airport Transfers & Chauffeur Service',
    template: '%s | AeroGlide Executive Chauffeur'
  },
  description: 'Pre-book guaranteed luxury airport transfers with live flight radar tracking, 60 minutes complimentary waiting, suited executive chauffeurs, and upfront fixed flat fares.',
  keywords: [
    'airport transfer',
    'executive airport taxi',
    'luxury airport chauffeur',
    'corporate airport transfer',
    'flight tracking airport cab',
    'black car airport service',
    'first class airport transfer'
  ],
  authors: [{ name: 'AeroGlide Mobility Solutions' }],
  creator: 'AeroGlide Cabs',
  publisher: 'AeroGlide Cabs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  openGraph: {
    title: 'AeroGlide Cabs - Premium Airport Transfers & Executive Chauffeurs',
    description: 'Guaranteed on-time executive airport transfers across 50+ global aviation hubs with live flight monitoring and transparent flat tariffs.',
    url: 'https://aeroglidecabs.com',
    siteName: 'AeroGlide Cabs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AeroGlide Cabs - Executive Airport Transfers',
    description: 'Guaranteed on-time airport pickups & drops with flight tracking and transparent flat fares.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'AeroGlide Cabs',
    image: 'https://aeroglidecabs.com/og-image.jpg',
    telephone: '+1-800-456-2376',
    url: 'https://aeroglidecabs.com',
    priceRange: '$$$',
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' }
    ],
    serviceType: [
      'Executive Airport Pickup Transfer',
      'Airport Curbside Departure Chauffeur',
      'Round Trip Airport Chauffeur',
      'Corporate Airport Mobility Solutions',
      'Hourly Chauffeur Drive'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: '52840'
    }
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFC] text-[#0A1128] pb-20 lg:pb-0 selection:bg-amber-100 selection:text-amber-900">
        {/* Sticky Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Multi-column Footer */}
        <Footer />

        {/* Mobile Sticky Action Bar */}
        <MobileBottomBar />
      </body>
    </html>
  );
}
