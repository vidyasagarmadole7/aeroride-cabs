'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, PhoneCall, Car, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden w-full">
      {/* Glow decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Pre-Book & Save Time at the Terminal
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Flying Soon? Book Your Stress-Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Airport Transfer</span> Today
        </h2>

        <p className="text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Say goodbye to taxi queues and erratic surge pricing. Lock in your verified chauffeur, flight tracking buffer, and guaranteed ride in under 60 seconds.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
          <Link
            href="/book"
            className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 min-h-[50px]"
          >
            <Car className="w-5 h-5 text-slate-950 shrink-0" />
            <span>Book Airport Cab Online</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>

          <a
            href="tel:+18004562376"
            className="px-8 py-4 bg-slate-800/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base rounded-2xl border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2.5 shadow-lg min-h-[50px]"
          >
            <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Call 24/7 Hotline</span>
          </a>
        </div>

        {/* Guarantee Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs text-slate-300 border-t border-slate-800 max-w-xl mx-auto font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            Free Cancellation up to 1hr
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Plane className="w-4 h-4 text-blue-400 -rotate-45 shrink-0" />
            60m Free Touchdown Waiting
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            100% Fixed Flat Fare
          </span>
        </div>
      </div>
    </section>
  );
};
