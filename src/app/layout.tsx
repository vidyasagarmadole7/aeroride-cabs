import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { SITE_CONFIG } from '@/config/siteConfig';

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
  themeColor: '#0B1B3D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vidyasagarmadole7.github.io/aeroride-cabs/'),
  title: {
    default: 'AeroGlide Cabs | Reliable Airport Taxi & Chauffeur Services',
    template: '%s | AeroGlide Cabs'
  },
  description: 'Book reliable airport transfers, airport pickup and drop, outstation cabs, corporate travel and hourly chauffeur services with AeroGlide Cabs.',
  keywords: [
    'airport cab',
    'airport taxi booking',
    'airport pickup cab',
    'airport drop taxi',
    'outstation cabs',
    'corporate airport transfer',
    'hourly chauffeur',
    'flight tracking cab'
  ],
  authors: [{ name: 'AeroGlide Mobility Solutions' }],
  creator: 'AeroGlide Cabs',
  publisher: 'AeroGlide Cabs',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AeroGlide Cabs - Reliable Airport Taxi & Chauffeur Services',
    description: 'Guaranteed on-time airport pickups & drops with flight tracking and flat fares across 25+ Indian airport hubs.',
    url: 'https://vidyasagarmadole7.github.io/aeroride-cabs/',
    siteName: 'AeroGlide Cabs',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness & TaxiService JSON-LD Schema for SEO
  const structuredDataSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'AeroGlide Cabs',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    telephone: SITE_CONFIG.phone,
    url: 'https://vidyasagarmadole7.github.io/aeroride-cabs/',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Terminal 3 Aviation Boulevard, Aerocity',
      addressLocality: 'New Delhi',
      postalCode: '110037',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Goa' },
      { '@type': 'City', name: 'Jaipur' }
    ],
    serviceType: [
      'Airport Pickup Cab Transfer',
      'Airport Curbside Drop Taxi',
      'Round Trip Airport Chauffeur',
      'Outstation Airport Cabs',
      'Corporate Travel Mobility Solutions',
      'Hourly Chauffeur Drive'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.92',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 pb-20 lg:pb-0 selection:bg-blue-100 selection:text-blue-900">
        {/* Sticky Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Multi-column Footer */}
        <Footer />

        {/* Floating Quick Action Buttons (WhatsApp & Call) */}
        <FloatingActions />

        {/* Mobile Sticky Action Bar */}
        <MobileBottomBar />
      </body>
    </html>
  );
}
