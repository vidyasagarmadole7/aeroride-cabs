'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, ArrowRight, MapPin, Building, Sparkles } from 'lucide-react';
import { AIRPORTS } from '@/data/airports';
import { formatCurrency } from '@/lib/utils';

export const PopularAirports: React.FC = () => {
  const airports = AIRPORTS.slice(0, 8);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Plane className="w-3.5 h-3.5 -rotate-45" />
              Global Aviation Network
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Popular Airport Cab Hubs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Dedicated pickup lounges, expedited parking exit, and verified executive chauffeurs stationed at every major terminal.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
          >
            <span>View All 50+ Connected Airports</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Airport Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {airports.map((airport) => (
            <div
              key={airport.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Code Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={airport.image}
                    alt={airport.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* IATA Code Pill */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-xs font-black tracking-wider border border-slate-800 flex items-center gap-1.5 shadow-md">
                    <Plane className="w-3.5 h-3.5 text-amber-400 -rotate-45" />
                    <span>{airport.code}</span>
                  </div>

                  {/* City Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-lg font-bold leading-tight drop-shadow-sm">
                      {airport.city}
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {airport.country}
                    </div>
                  </div>
                </div>

                {/* Airport Details */}
                <div className="p-4 space-y-2">
                  <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                    {airport.name}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{airport.terminals.length} Passenger Terminals</span>
                  </div>

                  {airport.tagline && (
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed pt-1">
                      {airport.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-4 pt-0">
                <Link
                  href={`/book?airport=${airport.code}`}
                  className="w-full py-2.5 px-3 bg-slate-100 hover:bg-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  <span>Book Taxi at {airport.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

