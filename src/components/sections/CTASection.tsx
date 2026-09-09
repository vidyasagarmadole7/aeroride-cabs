'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, Car, ShieldCheck, ArrowRight, Sparkles, Clock, Plane } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden w-full">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          Pre-Book & Eliminate Terminal Waiting Lines
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-sans">
          Arrive Relaxed. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            Leave Refreshed.
          </span>
        </h2>

        <p className="text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Book a professional airport transfer with a chauffeur you can rely on. Guaranteed flight radar synchronization and 100% transparent fixed tariffs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
          <Link
            href="/book"
            className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 min-h-[48px] uppercase tracking-wide cursor-pointer"
          >
            <Car className="w-4 h-4 text-slate-950 shrink-0" />
            <span>BOOK AIRPORT TRANSFER</span>
            <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
          </Link>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2.5 min-h-[48px]"
          >
            <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
            <span>CALL 24/7 SUPPORT: {SITE_CONFIG.phone}</span>
          </a>
        </div>

        {/* Guarantee Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 text-xs text-slate-300 border-t border-slate-800/80 max-w-xl mx-auto font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            Free Cancellation up to 1hr
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            60m Free Airport Waiting
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Plane className="w-3.5 h-3.5 text-blue-400 -rotate-45 shrink-0" />
            Flight Radar Sync
          </span>
        </div>
      </div>
    </section>
  );
};
