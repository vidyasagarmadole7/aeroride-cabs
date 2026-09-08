'use client';

import React from 'react';
import { 
  MapPin, 
  Car, 
  CreditCard, 
  UserCheck, 
  ArrowRight, 
  Sparkles,
  Plane
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Enter Route & Flight',
      desc: 'Select your arrival/departure airport, terminal, destination address, pickup time, and flight number for automatic delay tracking.',
      icon: Plane,
      color: 'bg-blue-600'
    },
    {
      step: '02',
      title: 'Choose Your Cab',
      desc: 'Browse upfront fixed fares for Sedans, Innova Crysta SUVs, Executive Sedans, or VIP Luxury Chauffeurs with transparent luggage ratings.',
      icon: Car,
      color: 'bg-amber-500'
    },
    {
      step: '03',
      title: 'Confirm & Secure',
      desc: 'Lock in your booking in 60 seconds. Choose full online payment, 20% advance deposit, or pay to chauffeur post-journey.',
      icon: CreditCard,
      color: 'bg-emerald-600'
    },
    {
      step: '04',
      title: 'Meet Chauffeur at Gate',
      desc: 'Driver details are sent via SMS/WhatsApp 2 hours in advance. Enjoy 60 minutes free waiting and inside-terminal meet & greet.',
      icon: UserCheck,
      color: 'bg-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How AeroGlide Airport Booking Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From touch-down to your destination doorstep, experience a friction-free airport commute without queueing or surge pricing.
          </p>
        </div>

        {/* Steps Grid with Connecting Lines */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-7 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 text-center items-center group"
              >
                {/* Step Icon & Number Badge */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center border-2 border-white shadow">
                    {s.step}
                  </span>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

