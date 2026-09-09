'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';
import { formatINR } from '@/lib/fareCalculator';

export const MajorAirportHubs: React.FC = () => {
  return (
    <section id="airports" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 -rotate-45" />
              Pan-India Airport Network
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Major Airport Destinations
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Guaranteed on-time airport taxi pickups and drop transfers across India&apos;s 10 busiest commercial aviation hubs.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 transition group self-start md:self-auto shrink-0"
          >
            <span>Explore All 25+ Airport Hubs</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 10 Airport Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {SITE_CONFIG.airports.map((airport) => (
            <div
              key={airport.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={airport.image}
                    alt={`${airport.city} Airport Cab`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Code Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 bg-blue-600 text-white text-[11px] font-black rounded-md uppercase tracking-wider shadow-xs">
                      {airport.code}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2.5 right-2.5 z-10 text-white">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                      {airport.state}
                    </span>
                    <h3 className="text-sm font-black text-white truncate">
                      {airport.city}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3.5 space-y-2">
                  <div className="text-xs font-bold text-slate-900 leading-snug line-clamp-1">
                    {airport.name}
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                    {airport.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3.5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase text-slate-400 block">Fares From</span>
                  <span className="text-xs font-black text-slate-950">{formatINR(airport.startingFare)}</span>
                </div>

                <Link
                  href={`/book?airport=${airport.code}`}
                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

