'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { AIRPORTS } from '@/data/airports';

export const PopularAirports: React.FC = () => {
  const displayAirports = AIRPORTS.slice(0, 8);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-amber-600 -rotate-45" />
              Global Aviation Network
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Major Connected Airport Hubs
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Seamless executive chauffeur transfers at the world&apos;s most active commercial aviation terminals.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-amber-600 transition group self-start md:self-auto shrink-0 pb-1"
          >
            <span>View All 50+ Global Hubs</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Luxury Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayAirports.map((airport) => (
            <Link
              key={airport.id}
              href={`/book?airport=${airport.code}`}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-end min-h-[320px] sm:min-h-[340px]"
            >
              {/* Background Photography with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={airport.image}
                  alt={`${airport.city} Airport Chauffeur`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                  onError={(e) => {
                    // Fallback to high-res architecture placeholder if remote fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* Top Code Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-slate-950 text-xs font-black rounded-lg uppercase tracking-wider shadow-sm">
                  {airport.code}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 sm:p-6 space-y-2 text-white">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  {airport.city}, {airport.country}
                </div>
                <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                  {airport.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium line-clamp-2 leading-relaxed opacity-90">
                  {airport.tagline}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition">
                  <span>Book Transfer</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
