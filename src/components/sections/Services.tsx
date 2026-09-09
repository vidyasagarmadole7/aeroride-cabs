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
  Sparkles
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
  const serviceOfferings = [
    {
      id: 'airport-pickup',
      title: 'Airport Pickup',
      icon: PlaneLanding,
      badge: 'Chauffeur Awaits',
      shortDesc: 'Guaranteed cab waiting when your flight touches down with live radar delay sync.',
      features: [
        'Live flight arrival monitoring',
        'Professional suited chauffeur',
        'Inside-terminal meet & greet placard',
        '60 mins complimentary waiting time',
        'Direct door-to-door private transfer'
      ],
      ctaText: 'Book Pickup Cab',
      href: '/book?type=pickup'
    },
    {
      id: 'airport-drop',
      title: 'Airport Drop',
      icon: PlaneTakeoff,
      badge: '15-Min Early Arrival',
      shortDesc: 'Punctual home or office doorstep pickup ensuring zero flight-miss anxiety.',
      features: [
        'Guaranteed on-time doorstep arrival',
        'Direct curbside terminal drop-off',
        'Complete luggage porterage assistance',
        'Real-time trip SMS & WhatsApp tracking',
        'All highway tolls & GST included'
      ],
      ctaText: 'Book Drop Cab',
      href: '/book?type=drop'
    },
    {
      id: 'round-trip',
      title: 'Round Trip Transfers',
      icon: Repeat,
      badge: 'Save 15%',
      shortDesc: 'Pre-schedule both departure and arrival legs with priority cab allocation.',
      features: [
        'Priority vehicle allocation guaranteed',
        'Flexible return journey scheduling',
        'Free rescheduling if flight changes',
        'Single consolidated GST invoice',
        'Exclusive 15% discount on return leg'
      ],
      ctaText: 'Book Round Trip',
      href: '/book?type=roundtrip'
    },
    {
      id: 'corporate-travel',
      title: 'Corporate Travel',
      icon: Briefcase,
      badge: 'Enterprise Mobility',
      shortDesc: 'Streamlined corporate airport mobility with automated GST billing & employee travel.',
      features: [
        'Centralized monthly corporate billing',
        'Automated 100% compliant GST invoices',
        'Dedicated 24/7 account manager',
        'Employee daily airport transportation',
        'Custom corporate tariff slabs'
      ],
      ctaText: 'Corporate Services',
      href: '/corporate'
    },
    {
      id: 'outstation',
      title: 'Outstation Transfers',
      icon: Navigation,
      badge: 'City-To-City',
      shortDesc: 'Direct airport to outstation city rides with seasoned long-distance drivers.',
      features: [
        'Affordable one-way and round trips',
        'Experienced senior highway drivers',
        'No return fare on one-way bookings',
        'Transparent all-inclusive flat pricing',
        'Comfortable intercity sedans & SUVs'
      ],
      ctaText: 'Book Outstation',
      href: '/book?type=outstation'
    },
    {
      id: 'hourly-chauffeur',
      title: 'Hourly Chauffeur',
      icon: Clock,
      badge: 'By-The-Hour',
      shortDesc: 'Retain your dedicated car & driver for meetings, client visits or shopping.',
      features: [
        '4 Hours / 40 km Package',
        '8 Hours / 80 km (Full Day Package)',
        '12 Hours / 120 km (Extended Day)',
        'Unlimited intermediate stops',
        'Safe in-car luggage storage'
      ],
      ctaText: 'Book Hourly Chauffeur',
      href: '/book?type=hourly'
    }
  ];

export const Services: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/70">
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Executive Solutions
            Comprehensive Airport Mobility
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Airport Transfers Designed Around You
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            From seamless curbside flight pickups to corporate fleet logistics, experience bespoke airport mobility tailored to your schedule.
            From scheduled flight pickups to outstation travel and corporate billing, choose the exact mobility service for your journey.
          </p>
        </div>

        {/* 6 Luxury Service Offerings Grid */}
        {/* 6 Service Cards Grid */}
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
          {serviceOfferings.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-7 hover:border-blue-400 hover:shadow-lg transition-all duration-300 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
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
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                    {service.shortDesc}
                  </p>
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
                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

              {/* Card Footer Link */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 group-hover:text-blue-900 transition"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
