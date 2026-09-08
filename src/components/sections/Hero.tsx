'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Plane, 
  Clock, 
  Star, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { BookingWidget } from '@/components/booking/BookingWidget';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-100 via-blue-50/40 to-slate-50 text-slate-900 pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28 overflow-hidden w-full border-b border-slate-200/80">
      {/* Background Architectural Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
          alt="Airport Runway background"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/90 via-slate-50/95 to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Hero Top Trust Pill & Badges */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-800 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">Trusted Airport Taxi Network Across 50+ Global Hubs</span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-700 font-extrabold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% On-Time Guarantee
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-slate-950">
            Reliable <span className="text-blue-600">Airport Taxi</span> Service
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed px-2">
            Pre-book guaranteed airport pickups & drops with real-time flight tracking, 60 minutes complimentary waiting, and 100% transparent fixed flat fares.
          </p>

          {/* Micro Trust Stats */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-xs sm:text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="font-black text-slate-950">4.9/5</span>
              <span className="text-slate-500">(500k+ Trips)</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-slate-800">Zero Surge Multipliers</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <Plane className="w-3.5 h-3.5 text-blue-600 -rotate-45 shrink-0" />
              <span className="text-slate-800">Live Flight Radar Sync</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Booking Widget */}
        <div className="max-w-5xl mx-auto w-full">
          <BookingWidget />
        </div>

        {/* Quick Route Shortcuts Under Widget */}
        <div className="mt-8 pt-5 border-t border-slate-200/80 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="font-bold text-slate-800">Popular Hubs:</span>
            <Link href="/book?airport=DEL" className="hover:text-blue-600 font-semibold underline decoration-slate-300 underline-offset-4">Delhi (DEL)</Link>
            <span>•</span>
            <Link href="/book?airport=BOM" className="hover:text-blue-600 font-semibold underline decoration-slate-300 underline-offset-4">Mumbai (BOM)</Link>
            <span>•</span>
            <Link href="/book?airport=BLR" className="hover:text-blue-600 font-semibold underline decoration-slate-300 underline-offset-4">Bengaluru (BLR)</Link>
            <span>•</span>
            <Link href="/book?airport=HYD" className="hover:text-blue-600 font-semibold underline decoration-slate-300 underline-offset-4">Hyderabad (HYD)</Link>
            <span>•</span>
            <Link href="/book?airport=DXB" className="hover:text-blue-600 font-semibold underline decoration-slate-300 underline-offset-4">Dubai (DXB)</Link>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>Need Urgent Taxi? Call <strong className="text-blue-600 font-bold">+1 (800) 456-AERO</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
