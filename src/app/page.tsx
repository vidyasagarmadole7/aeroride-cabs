import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { MajorAirportHubs } from '@/components/sections/MajorAirportHubs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { FleetSection } from '@/components/sections/FleetSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { AirportBenefits } from '@/components/sections/AirportBenefits';
import { SafetySection } from '@/components/sections/SafetySection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CorporateSection } from '@/components/sections/CorporateSection';
import { TrackRideSection } from '@/components/sections/TrackRideSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { MobileAppCTA } from '@/components/sections/MobileAppCTA';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'AeroGlide Cabs | Reliable Airport Taxi & Chauffeur Services',
  description: 'Book reliable airport transfers, airport pickup and drop, outstation cabs, corporate travel and hourly chauffeur services with AeroGlide Cabs.',
  keywords: [
    'airport cab booking',
    'airport taxi pune',
    'airport taxi mumbai',
    'airport cab delhi',
    'airport cab bangalore',
    'outstation cabs',
    'corporate airport transfers',
    'hourly chauffeur cabs'
  ],
  openGraph: {
    title: 'AeroGlide Cabs - Premier Indian Airport Cab & Chauffeur Network',
    description: 'Guaranteed on-time airport pickups & drops with flight tracking, fixed flat fares and verified drivers across 25+ airport hubs.',
    type: 'website',
    url: 'https://vidyasagarmadole7.github.io/aeroride-cabs/'
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with interactive 5-Tab Advanced Booking Widget */}
      <Hero />

      {/* 2. Major Airport Destinations (10 Indian Hubs) */}
      <MajorAirportHubs />

      {/* 3. 6 Core Airport Mobility Services */}
      <Services />

      {/* 4. Why Choose AeroGlide? 6 Numbered Feature Cards */}
      <WhyChooseUs />

      {/* 5. Modern Vehicle Fleet Showcase (Sedan, SUV, Premium, Luxury) */}
      <FleetSection />

      {/* 6. How It Works 4-Step Process */}
      <HowItWorks />

      {/* 7. Dark Premium Statistics Section */}
      <StatisticsSection />

      {/* 8. Airport Transfer Benefits & Comparison Matrix */}
      <AirportBenefits />

      {/* 9. Dedicated Safety Section (Your Safety Comes First) */}
      <SafetySection />

      {/* 10. Customer Reviews Carousel */}
      <Testimonials />

      {/* 11. Corporate Mobility Section & Lead Capture */}
      <CorporateSection />

      {/* 12. Interactive Track My Ride Section */}
      <TrackRideSection />

      {/* 13. Expandable 10-Item FAQ Accordion */}
      <FAQSection />

      {/* 14. Mobile App CTA (Your Ride. Your Time. Your Way.) */}
      <MobileAppCTA />

      {/* 15. Final High-Converting Booking CTA */}
      <CTASection />
    </div>
  );
}
