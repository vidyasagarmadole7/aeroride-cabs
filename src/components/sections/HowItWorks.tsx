'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Car, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: "Tell Us Where You're Going",
      desc: 'Enter your departure or arrival airport, destination address, flight number, and pickup time.',
      icon: MapPin
    },
    {
      num: '02',
      title: 'Choose Your Vehicle Class',
      desc: 'Select from Executive Sedans, Premium SUVs, First Class Luxury, or Business Minibuses with flat pricing.',
      icon: Car
    },
    {
      num: '03',
      title: 'Enter Passenger Details',
      desc: 'Provide your contact details, optional inside-terminal meet & greet placard name, and payment preference.',
      icon: UserCheck
    },
    {
      num: '04',
      title: 'Meet Your Chauffeur',
      desc: 'Receive chauffeur details 2 hours prior. Your driver tracks your flight and awaits your arrival at the terminal.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            How AeroGlide Works
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Book your guaranteed airport transfer in under 60 seconds with instant confirmation and real-time flight tracking.
          </p>
        </div>

        {/* Timeline Grid (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-4">
                {/* Icon & Step Number Circle */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-slate-900 shadow-sm relative z-10">
                    <step.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <span className="text-xs font-black font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {step.num}
                  </span>
                </div>

                {/* Step Text */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Banner (Section 11: Premium Trust Section) */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/80 shadow-2xs">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
            <h3 className="text-lg sm:text-2xl font-black text-slate-950">
              Trusted by Business Travelers, Families & Global Travelers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Over 500,000 successful airport pickups across international business hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x divide-slate-200">
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-4xl font-black text-slate-950 font-sans">4.95 / 5</div>
              <div className="text-xs text-slate-600 font-bold">Customer Rating</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-4xl font-black text-slate-950 font-sans">500K+</div>
              <div className="text-xs text-slate-600 font-bold">Trips Completed</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-4xl font-black text-slate-950 font-sans">50+</div>
              <div className="text-xs text-slate-600 font-bold">Airport Hubs</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-4xl font-black text-slate-950 font-sans">24 / 7</div>
              <div className="text-xs text-slate-600 font-bold">Travel Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
