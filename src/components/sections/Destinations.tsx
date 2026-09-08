'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Plane, ArrowRight, Car, Clock } from 'lucide-react';
import { DESTINATIONS } from '@/data/destinations';
import { formatCurrency } from '@/lib/utils';

export const Destinations: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Top Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Popular Connected Cities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fast, premium airport transfers across leading commercial and tourist hubs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-xl flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-amber-400 -rotate-45" />
                    <span>{dest.airportCode}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <p className="text-xs text-slate-300 font-medium">{dest.country}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{dest.airportName}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Avg: {dest.avgTransferTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-slate-400" />
                      <span>{dest.fleetCount}+ Active Cabs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[10px] text-slate-400">Starting from</span>
                  <div className="text-lg font-black text-slate-950">{formatCurrency(dest.startingFare)}</div>
                </div>

                <Link
                  href={`/book?airport=${dest.airportCode}`}
                  className="py-2.5 px-4 bg-slate-900 group-hover:bg-amber-400 group-hover:text-slate-950 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                >
                  <span>Book Transfer</span>
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

