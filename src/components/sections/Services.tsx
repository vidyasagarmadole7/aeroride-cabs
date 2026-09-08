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
  Check, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { AIRPORT_SERVICES } from '@/data/services';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PlaneLanding':
        return PlaneLanding;
      case 'PlaneTakeoff':
        return PlaneTakeoff;
      case 'Repeat':
        return Repeat;
      case 'Briefcase':
        return Briefcase;
      case 'Navigation':
        return Navigation;
      case 'Clock':
      default:
        return Clock;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Tailored Mobility Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Our Airport Transfer Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From solo business travelers requiring high punctuality to large family delegations with heavy luggage, explore our specialized airport transfer formats.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AIRPORT_SERVICES.map((service) => {
            const IconComponent = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl border border-slate-200 hover:border-blue-500 p-7 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Hover Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-5">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className="w-full py-3 px-4 bg-slate-50 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

