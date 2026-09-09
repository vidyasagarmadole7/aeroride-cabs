'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Briefcase, 
  Wind, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';
import { formatINR } from '@/lib/fareCalculator';

export const FleetSection: React.FC = () => {
  return (
    <section id="fleet" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Airport Fleet Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Choose the Right Vehicle Class
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              From economical airport Sedans to executive Innova Crysta MUVs and luxury German chauffeur cars.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 transition group self-start md:self-auto shrink-0 pb-1"
          >
            <span>View All Fleet Options</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Card Vehicle Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.vehicles.map((v) => (
            <div
              key={v.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-slate-950 text-[10px] font-black rounded-lg uppercase tracking-wider shadow-xs">
                      {v.tag}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3.5">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-950">
                      {v.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                      {v.models}
                    </p>
                  </div>

                  {/* Capacities */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 font-semibold">
                    <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      <span>{v.passengerCapacity} Guests</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                      <span>{v.luggageCapacity} Bags</span>
                    </div>
                    {v.ac && (
                      <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                        <Wind className="w-3.5 h-3.5 text-blue-600" />
                        <span>AC</span>
                      </div>
                    )}
                  </div>

                  {/* Feature Highlights */}
                  <ul className="space-y-1.5 pt-1 border-t border-slate-100">
                    {v.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Starting Fare & BOOK NOW */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting At</span>
                  <span className="text-xl font-black text-slate-950">{formatINR(v.baseFare)}</span>
                </div>

                <Link
                  href={`/book?cat=${v.category}`}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-black transition shadow-xs flex items-center gap-1.5 uppercase tracking-wide cursor-pointer"
                >
                  <span>BOOK NOW</span>
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
