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
  Compass,
  ArrowRight
  Users,
  Headphones
} from 'lucide-react';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { SITE_CONFIG } from '@/config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#FAFBFD] text-slate-950 pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 overflow-hidden w-full border-b border-slate-200/70">
      {/* Editorial Luxury Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
    <section className="relative bg-gradient-to-b from-slate-100 via-blue-50/30 to-white text-slate-900 pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28 overflow-hidden w-full border-b border-slate-200">
      {/* Background Architectural Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2200&q=85"
          alt="Luxury Chauffeur at Airport Terminal"
          className="w-full h-full object-cover object-center filter grayscale contrast-115 scale-105"
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
          alt="Airport Runway & Chauffeur"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/90 via-[#FAFBFD]/95 to-[#FAFBFD]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/90 via-slate-50/95 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Editorial Eyebrow & Hero Copy */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>EXECUTIVE AIRPORT TRANSFERS</span>
        {/* Hero Top Trust Pill & Badges */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>India&apos;s Trusted Airport Cab & Chauffeur Network</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-semibold lowercase">50+ global aviation hubs</span>
            <span className="text-emerald-700 font-extrabold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Fixed Flat Fares
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1] font-sans">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-950 font-sans">
            Your Journey Begins <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-amber-600">
              The Moment You Land.
            </span>
            <span className="text-blue-600">The Moment You Land.</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed px-2">
            Punctual, private airport chauffeur service with real-time flight radar tracking, 60 minutes complimentary waiting, and guaranteed flat fares. Handled with absolute precision.
            Reliable, punctual and comfortable airport transfers with professional chauffeurs, live flight monitoring and transparent fares.
          </p>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-xs text-slate-700 font-semibold">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
          {/* Micro Trust Stats */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1 text-xs sm:text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full border border-slate-200 shadow-2xs">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-black text-slate-950">4.95/5</span>
              <span className="text-slate-500 font-medium">(50,000+ Journeys)</span>
              <span className="font-black text-slate-950">4.9/5 Rating</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>60 Mins Free Touchdown Waiting</span>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full border border-slate-200 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="text-slate-800">50,000+ Happy Travellers</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Fixed Flat Tariffs</span>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full border border-slate-200 shadow-2xs">
              <Headphones className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-slate-800">24/7 Customer Support</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Luxury Reservation Console */}
        {/* Hero Overlapping Advanced 5-Tab Booking Widget */}
        <div className="max-w-5xl mx-auto w-full">
          <BookingWidget />
        </div>

        {/* Airport Hub Fast Links */}
        <div className="mt-8 pt-5 border-t border-slate-200/70 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        {/* Quick Hub Shortcuts Under Widget */}
        <div className="mt-8 pt-5 border-t border-slate-200 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="font-bold text-slate-800">Direct Chauffeur Hubs:</span>
            <Link href="/book?airport=DEL" className="hover:text-amber-600 font-medium transition">Delhi (DEL)</Link>
            <span className="text-slate-300">•</span>
            <Link href="/book?airport=BOM" className="hover:text-amber-600 font-medium transition">Mumbai (BOM)</Link>
            <span className="text-slate-300">•</span>
            <Link href="/book?airport=BLR" className="hover:text-amber-600 font-medium transition">Bengaluru (BLR)</Link>
            <span className="text-slate-300">•</span>
            <Link href="/book?airport=HYD" className="hover:text-amber-600 font-medium transition">Hyderabad (HYD)</Link>
            <span className="text-slate-300">•</span>
            <Link href="/book?airport=DXB" className="hover:text-amber-600 font-medium transition">Dubai (DXB)</Link>
            <span className="text-slate-300">•</span>
            <Link href="/book?airport=LHR" className="hover:text-amber-600 font-medium transition">London (LHR)</Link>
            <span className="font-bold text-slate-800">Popular Airport Hubs:</span>
            <Link href="/book?airport=PNQ" className="hover:text-blue-600 font-bold underline decoration-slate-300 underline-offset-4">Pune (PNQ)</Link>
            <span>•</span>
            <Link href="/book?airport=BOM" className="hover:text-blue-600 font-bold underline decoration-slate-300 underline-offset-4">Mumbai (BOM)</Link>
            <span>•</span>
            <Link href="/book?airport=DEL" className="hover:text-blue-600 font-bold underline decoration-slate-300 underline-offset-4">Delhi (DEL)</Link>
            <span>•</span>
            <Link href="/book?airport=BLR" className="hover:text-blue-600 font-bold underline decoration-slate-300 underline-offset-4">Bengaluru (BLR)</Link>
            <span>•</span>
            <Link href="/book?airport=HYD" className="hover:text-blue-600 font-bold underline decoration-slate-300 underline-offset-4">Hyderabad (HYD)</Link>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
            <span>VIP Desk: <strong className="text-slate-950 font-bold">+1 (800) 456-AERO</strong></span>
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>Need Urgent Taxi? Call <strong className="text-blue-700 font-bold">{SITE_CONFIG.phone}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
