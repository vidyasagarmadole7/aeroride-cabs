'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Plane, 
  Receipt, 
  Timer, 
  Headphones, 
  Sparkles,
  ArrowRight
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
  const features = [
    {
      num: '01',
      title: 'On-Time, Every Time',
      desc: 'Our chauffeur reports 15 minutes before scheduled departure. Zero flight-miss anxiety, guaranteed.'
      title: 'Always On Time',
      desc: 'Our driver reports 15 minutes before scheduled pickup time at your doorstep. Zero anxiety of missing your departure flight.',
      icon: Clock,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      num: '02',
      title: 'Professionally Trained Chauffeurs',
      desc: 'Formally suited, background-vetted chauffeurs trained in executive etiquette and defensive highway navigation.'
      title: 'Verified Chauffeurs',
      desc: 'Formally dressed, background-vetted commercial drivers trained in executive hospitality and defensive highway driving.',
      icon: UserCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      num: '03',
      title: 'Live Flight Monitoring',
      desc: 'We monitor live airport radar. Early arrivals or delayed touch-downs are auto-adjusted with zero extra charges.'
      desc: 'Real-time telemetry sync with airport radar. If your flight is delayed or lands early, driver pickup time is adjusted automatically.',
      icon: Plane,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      num: '04',
      title: 'Fixed, Transparent Fares',
      desc: 'Zero surge multipliers, zero midnight premiums. Highway tolls, GST taxes, and airport permits are fully itemized.'
      title: 'Fixed Transparent Pricing',
      desc: 'Zero midnight surge pricing, zero rain multipliers. All airport parking fees, state highway tolls, and 5% GST are transparently itemized.',
      icon: Receipt,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      num: '05',
      title: '60-Minute Complimentary Waiting',
      desc: 'Take your time clearing passport control, baggage claim, and customs. 1 full hour of grace time from touchdown.'
      title: 'Complimentary Waiting',
      desc: 'Includes 60 minutes free touchdown grace waiting time for international & domestic arrivals to clear baggage and immigration.',
      icon: Timer,
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    },
    {
      num: '06',
      title: '24/7 Travel Assistance',
      desc: 'Direct access to our 24/7 airport concierge operations desk for instant itinerary changes and gate coordination.'
      title: '24/7 Customer Support',
      desc: 'Round-the-clock airport concierge operations desk to assist with last-minute schedule changes, lost luggage, and gate coordination.',
      icon: Headphones,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-End Chauffeur Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[460px] sm:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85"
                alt="Executive Chauffeur holding car door"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            The AeroGlide Guarantee
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Why Choose AeroGlide?
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Experience the gold standard in Indian airport mobility. We eliminate long terminal taxi lines, sudden cancellations, and hidden charges.
          </p>
        </div>

              {/* Floating Trust Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-lg text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-black text-sm shrink-0">
                    AG
        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((item) => (
            <div
              key={item.num}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-7 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold border ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-950">The AeroGlide Standard</h4>
                    <p className="text-[11px] text-slate-600 font-medium">Over 500,000 corporate transfers completed with 99.4% on-time record.</p>
                  </div>
                  <span className="text-xs font-black font-mono text-slate-400">
                    {item.num}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Luxury Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Uncompromising Excellence
                <h3 className="text-base sm:text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Why Leading Travelers Choose Us
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
                Eliminate unverified drivers, surge multipliers, and airport queue delays. We set the global standard for private executive travel.
              </p>
            </div>

            {/* 6 Numbered Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((item) => (
                <div key={item.num} className="space-y-2 border-t border-slate-200/80 pt-4">
                  <div className="text-sm font-black text-amber-600 font-mono tracking-wider">
                    {item.num}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition shadow-xs tracking-wide"
              >
                <span>Reserve Your Chauffeur Today</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
