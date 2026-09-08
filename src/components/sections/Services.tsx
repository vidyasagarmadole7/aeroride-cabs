'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PlaneLanding, 
  PlaneTakeoff, 
  Repeat, 
  Briefcase, 
  Navigation, 
  Clock, 
  ArrowRight, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { AIRPORT_SERVICES } from '@/data/services';

const iconMap: Record<string, any> = {
  PlaneLanding,
  PlaneTakeoff,
  Repeat,
  Briefcase,
  Navigation,
  Clock
};

export const Services: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Executive Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Airport Transfers Designed Around You
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            From seamless curbside flight pickups to corporate fleet logistics, experience bespoke airport mobility tailored to your schedule.
          </p>
        </div>

        {/* 6 Luxury Service Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {AIRPORT_SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || PlaneLanding;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-7 hover:border-slate-400 hover:shadow-md transition-all duration-300 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-950 group-hover:text-amber-400 transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Bullet Points */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 group-hover:text-amber-600 transition"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
