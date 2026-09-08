'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Plane, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '@/data/destinations';
import { formatCurrency } from '@/lib/utils';

export const Destinations: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              Destinations
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Featured Chauffeur Cities
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Explore key commercial metropolises where AeroGlide provides 24/7 dedicated executive vehicle fleets.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-amber-600 transition group self-start md:self-auto shrink-0 pb-1"
          >
            <span>Browse All Cities</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial-style 8 Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DESTINATIONS.map((city) => (
            <Link
              key={city.id}
              href={`/book?airport=${city.airportCode}`}
              className="group relative bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-end min-h-[300px] sm:min-h-[320px]"
            >
              {/* Background City Image */}
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={city.image}
                  alt={`${city.name} City Transfer`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* Airport Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-slate-950 text-[11px] font-black rounded-lg uppercase tracking-wider">
                  {city.airportCode}
                </span>
              </div>

              {/* Bottom Editorial Content */}
              <div className="relative z-10 p-5 sm:p-6 space-y-1.5 text-white">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {city.country}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {city.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium truncate">
                  {city.airportName}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">From</span>
                    <span className="font-bold text-white">{formatCurrency(city.startingFare, 'USD')}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Avg Journey</span>
                    <span className="font-medium text-slate-200">{city.avgTransferTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
