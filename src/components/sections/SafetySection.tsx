'use client';

import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  FileCheck, 
  GraduationCap, 
  Sparkles, 
  Navigation, 
  PhoneCall, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const SafetySection: React.FC = () => {
  const safetyProtocols = [
    {
      icon: UserCheck,
      title: '100% Police & Background Verified Drivers',
      desc: 'Every driver undergoes strict criminal background checks, address authentication, and commercial badge verification.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Chauffeur Training',
      desc: 'Drivers undergo comprehensive training in executive customer etiquette, defensive highway driving, and city navigation.'
    },
    {
      icon: Navigation,
      title: 'Real-Time GPS Fleet Tracking',
      desc: 'Every trip is monitored in real-time by our central 24/7 operations control room from start to completion.'
    },
    {
      icon: Sparkles,
      title: 'Multi-Point Vehicle Sanitization',
      desc: 'Daily interior vacuuming, AC filter sanitization, clean upholstery, and pre-trip mechanical safety inspections.'
    },
    {
      icon: AlertCircle,
      title: '24/7 Emergency & SOS Assistance',
      desc: 'In-app SOS trigger and round-the-clock emergency support desk stationed near all major airport terminals.'
    },
    {
      icon: FileCheck,
      title: 'Comprehensive Commercial Insurance',
      desc: 'Every vehicle and passenger is covered by comprehensive commercial motor passenger travel insurance.'
    }
  ];

  return (
    <section id="safety" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-14 shadow-xs">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Zero-Compromise Security
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Your Safety Comes First
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
                We implement industry-leading passenger safety protocols so you can travel with complete peace of mind, whether at 3:00 AM or peak rush hour.
              </p>
            </div>

            {/* 24/7 Support CTA */}
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2.5 shadow-sm self-start lg:self-auto shrink-0"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>24/7 EMERGENCY DESK: {SITE_CONFIG.phone}</span>
            </a>
          </div>

          {/* 6 Safety Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyProtocols.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5 hover:border-emerald-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

