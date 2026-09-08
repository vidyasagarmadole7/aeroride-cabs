'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { POPULAR_ROUTES } from '@/data/routes';
import { formatCurrency } from '@/lib/utils';

export const PopularRoutes: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Corporate Travel Directory
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Popular Airport Transfer Routes
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Fixed-rate executive corridors connecting aviation terminals directly to major business tech parks and city centers.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-amber-600 transition group self-start md:self-auto shrink-0 pb-1"
          >
            <span>Custom Route Search</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Route Directory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-6 hover:border-slate-400 hover:shadow-md transition-all duration-300 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                    {route.popularTag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {route.distanceKm} km
                  </span>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase">From Airport</div>
                  <div className="text-sm font-bold text-slate-950 truncate">
                    {route.from}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-amber-600 font-bold uppercase">To Destination</div>
                  <div className="text-sm font-bold text-slate-950 truncate">
                    {route.to}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Avg: {route.durationText}</span>
                </div>
              </div>

              {/* Bottom Price & Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Flat Fare From</div>
                  <div className="text-base sm:text-lg font-black text-slate-950">
                    {formatCurrency(route.startingFare, 'USD')}
                  </div>
                </div>

                <Link
                  href={`/book?airport=${route.airportCode}&loc=${encodeURIComponent(route.to)}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-900 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  <span>Book</span>
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
