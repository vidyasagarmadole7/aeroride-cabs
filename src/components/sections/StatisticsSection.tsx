'use client';

import React from 'react';
import { Users, Car, MapPin, Headphones, Star, ShieldCheck } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      value: '50,000+',
      label: 'Happy Travellers',
      sublabel: 'Rated 4.9/5 for punctuality',
      icon: Users
    },
    {
      value: '100,000+',
      label: 'Successful Trips',
      sublabel: 'Airport pickups & drops',
      icon: Car
    },
    {
      value: '25+',
      label: 'Airport Locations',
      sublabel: 'Pan-India coverage',
      icon: MapPin
    },
    {
      value: '24/7',
      label: 'Customer Support',
      sublabel: 'Dedicated flight dispatchers',
      icon: Headphones
    },
    {
      value: '4.9 / 5',
      label: 'Average Rating',
      sublabel: 'Google & verified reviews',
      icon: Star
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden w-full">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Proven Reliability & Scale
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by Corporate & Leisure Travellers Across India
          </h2>
        </div>

        {/* 5 Stats Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`space-y-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

