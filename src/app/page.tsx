import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { PopularAirports } from '@/components/sections/PopularAirports';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { FleetSection } from '@/components/sections/FleetSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { AirportBenefits } from '@/components/sections/AirportBenefits';
import { PopularRoutes } from '@/components/sections/PopularRoutes';
import { Destinations } from '@/components/sections/Destinations';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Reliable Airport Taxi Service & Transfers | AeroGlide Cabs',
  description: 'Pre-book guaranteed airport cabs and taxis with real-time flight tracking, 60 minutes free waiting time, verified chauffeurs, and 100% transparent fixed fares.',
  keywords: [
    'airport taxi',
    'airport cab booking',
    'airport pickup service',
    'airport drop taxi',
    'luxury airport chauffeur',
    'outstation airport cabs',
    'flight tracking cab'
  ],
  openGraph: {
    title: 'AeroGlide Cabs - Premium Airport Taxi & Chauffeur Service',
    description: 'Guaranteed on-time airport pickups & drops with flight tracking and flat fares across 50+ global aviation hubs.',
    type: 'website',
    url: 'https://aeroglidecabs.com'
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with interactive Booking Widget */}
      <Hero />

      {/* 2. Popular Airport Hubs */}
      <PopularAirports />

      {/* 3. Comprehensive Airport Taxi Services */}
      <Services />

      {/* 4. Why Choose Us / Trust Features */}
      <WhyChooseUs />

      {/* 5. Vehicle Fleet Showcase */}
      <FleetSection />

      {/* 6. How It Works 4-Step Process */}
      <HowItWorks />

      {/* 7. Airport Transfer Benefits Comparison */}
      <AirportBenefits />

      {/* 8. Popular Airport Routes */}
      <PopularRoutes />

      {/* 9. Top Connected Destinations */}
      <Destinations />

      {/* 10. Customer Reviews & Testimonials */}
      <Testimonials />

      {/* 11. Frequently Asked Questions with Schema */}
      <FAQSection />

      {/* 12. Final High-Converting CTA */}
      <CTASection />
    </div>
  );
}
