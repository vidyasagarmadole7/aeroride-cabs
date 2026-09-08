'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, MapPin, Clock, Navigation, ArrowRight, Sparkles } from 'lucide-react';
import { POPULAR_ROUTES } from '@/data/routes';
import { formatCurrency } from '@/lib/utils';

export const PopularRoutes: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Navigation className="w-3.5 h-3.5" />
              Fixed-Fare Express Routes
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Popular Airport Taxi Routes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Pre-calculated flat tariffs with all toll taxes and airport parking included. Zero surprise surcharges.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
          >
            <span>Search Custom Route</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Tag */}
                <div className="relative h-36 w-full bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={route.image}
                    alt={route.to}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {route.popularTag && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider shadow">
                      {route.popularTag}
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-xs font-semibold text-amber-300 block">{route.city} Hub</span>
                    <span className="text-sm font-bold truncate block">{route.to}</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="p-4 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Plane className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0 -rotate-45" />
                    <span className="text-slate-800 font-medium truncate">{route.from}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-semibold truncate">{route.to}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                    <span>{route.distanceKm} km approx</span>
                    <span>{route.durationText}</span>
                  </div>
                </div>
              </div>

              {/* Price & Book CTA */}
              <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <div>
                  <div className="text-[10px] text-slate-400">Starting from</div>
                  <div className="text-lg font-black text-slate-950">
                    {formatCurrency(route.startingFare)}
                  </div>
                </div>

                <Link
                  href={`/book?airport=${route.airportCode}&loc=${encodeURIComponent(route.to)}`}
                  className="py-2 px-3.5 bg-slate-900 group-hover:bg-amber-400 group-hover:text-slate-950 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                >
                  <span>Book Cab</span>
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

