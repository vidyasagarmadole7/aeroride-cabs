'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Briefcase, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Wind,
  Wifi
} from 'lucide-react';
import { VEHICLES } from '@/data/vehicles';
import { formatCurrency } from '@/lib/utils';

export const FleetSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Chauffeur Fleet Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Travel in the Right Class
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Every vehicle in our executive fleet is thoroughly detailed, daily sanitized, and driven by a senior professional chauffeur.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-amber-600 transition group self-start md:self-auto shrink-0 pb-1"
          >
            <span>Compare All Vehicle Classes</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Card Executive Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all duration-300 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image with Aspect Ratio & Tag */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Top Badge */}
                  {vehicle.tag && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-slate-950 text-[10px] font-black rounded-lg uppercase tracking-wider shadow-xs">
                        {vehicle.tag}
                      </span>
                    </div>
                  )}

                  {/* Rating Tag */}
                  <div className="absolute bottom-3 right-3 z-10 bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-0.5 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{vehicle.rating}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                      {vehicle.models}
                    </p>
                  </div>

                  {/* Capacity Badges */}
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                    <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-slate-600" />
                      <span>{vehicle.passengerCapacity} Guests</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                      <Briefcase className="w-3.5 h-3.5 text-slate-600" />
                      <span>{vehicle.luggageCapacity} Cases</span>
                    </div>
                    {vehicle.ac && (
                      <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                        <Wind className="w-3.5 h-3.5 text-slate-600" />
                        <span>Climate AC</span>
                      </div>
                    )}
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-1 border-t border-slate-100">
                    {vehicle.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-medium">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">All-Inclusive From</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950">
                    {formatCurrency(vehicle.baseFare, 'USD')}
                  </div>
                </div>

                <Link
                  href={`/book?cat=${vehicle.category}`}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-bold transition shadow-2xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Class</span>
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
