'use client';

import React from 'react';
import { 
  Clock, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  Headphones, 
  Plane, 
  Timer, 
  Car, 
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Guaranteed On-Time Pickup',
      desc: 'Our chauffeur arrives at your doorstep 15 minutes before scheduled time. Zero anxiety of missing your departure flight.',
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: Plane,
      title: 'Real-Time Flight Tracking',
      desc: 'We monitor live airport radar. If your flight is delayed or lands early, driver pickup time is adjusted automatically with no extra cost.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: Timer,
      title: '60 Mins Free Waiting Time',
      desc: 'Take your time clearing immigration, customs, and baggage claim. We include 1 hour of complimentary waiting from actual touchdown.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: ShieldCheck,
      title: '100% Transparent Flat Fares',
      desc: 'No sudden midnight surge multipliers or rain surcharges. All state permits, fuel, tolls, and GST taxes are upfront and itemized.',
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      icon: UserCheck,
      title: 'Verified Senior Chauffeurs',
      desc: 'Background-verified, professionally uniformed chauffeurs trained in executive etiquette and defensive highway driving.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      icon: Sparkles,
      title: 'Clean & Sanitized Vehicles',
      desc: 'Every vehicle undergoes multi-point safety checks, AC filter servicing, vacuum cleaning, and cabin sanitization before every trip.',
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    },
    {
      icon: Headphones,
      title: '24/7 Airport Support Desk',
      desc: 'Dedicated round-the-clock helpdesk stationed near airport terminals to assist with gate coordination, route changes, or lost luggage.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      icon: Car,
      title: 'Diverse Premium Fleet',
      desc: 'From economical Prime Sedans to executive Toyota Innova Crysta SUVs, luxury Mercedes-Benz sedans, and 12-seater Tempo Travellers.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            The AeroGlide Standard
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Eliminate long taxi queues, unreliable ride cancellations, and hidden charges. We provide the gold standard in premium airport mobility.
          </p>
        </div>

        {/* 8 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold border ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
