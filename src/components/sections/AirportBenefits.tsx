'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Plane, 
  Clock, 
  UserCheck, 
  MapPin, 
  CreditCard, 
  Headphones, 
  Luggage,
  Check,
  X
} from 'lucide-react';

export const AirportBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Plane,
      title: 'Flight Radar Monitoring',
      desc: 'Live telemetry sync with airport air traffic radar. Zero penalties if your flight lands late or early.'
    },
    {
      icon: Clock,
      title: 'Complimentary Waiting Time',
      desc: 'Includes 60 minutes free waiting from touchdown for international & domestic arrivals.'
    },
    {
      icon: UserCheck,
      title: 'Meet & Greet Inside Terminal',
      desc: 'Uniformed chauffeur awaits at the arrival terminal exit gate holding your personalized name placard.'
    },
    {
      icon: MapPin,
      title: 'Door-to-Door Private Service',
      desc: 'Direct, private curbside transit to your hotel, residence, or boardroom without sharing rides.'
    },
    {
      icon: CreditCard,
      title: 'Fixed Transparent Fares',
      desc: 'All-inclusive pricing. Airport entry fees, highway tolls, and GST taxes are upfront and locked.'
    },
    {
      icon: ShieldCheck,
      title: 'Chauffeur Details in Advance',
      desc: 'Driver name, phone number, vehicle registration, and live tracking dispatched 2 hours prior.'
    },
    {
      icon: Luggage,
      title: 'Luggage Porter Assistance',
      desc: 'Driver assists loading and unloading your luggage directly to the hotel lobby or doorstep.'
    },
    {
      icon: Headphones,
      title: '24/7 Concierge Support',
      desc: 'Dedicated airport operations desk ready to handle last-minute gate or schedule changes.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Guaranteed Vehicle Availability',
      aeroglide: '100% Pre-allocated Chauffeur',
      app: 'Subject to nearby driver availability',
      taxiQueue: 'Wait in 20-45m terminal queue'
    },
    {
      feature: 'Flight Delay Buffer & Auto-Sync',
      aeroglide: 'Included (Radar sync + 60m free wait)',
      app: 'None (Driver cancellation penalty)',
      taxiQueue: 'N/A'
    },
    {
      feature: 'Pricing Transparency',
      aeroglide: '100% Flat Fixed Fare (Zero surge)',
      app: '1.5x - 2.8x Peak surge pricing',
      taxiQueue: 'Meter tampering / arbitrary quotes'
    },
    {
      feature: 'Terminal Meet & Greet with Placard',
      aeroglide: 'Included at Arrival Gate',
      app: 'Not available (Walk to taxi lot)',
      taxiQueue: 'Not available'
    },
    {
      feature: 'Driver Details in Advance',
      aeroglide: '2 Hours prior via WhatsApp & SMS',
      app: '2-5 mins prior only',
      taxiQueue: 'None'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top: 8-Item Elegant Benefit Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Executive Hospitality
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Airport Transfer Benefits
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
              Every AeroGlide reservation is backed by our signature suite of premium travel inclusions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-3 hover:border-slate-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center font-bold">
                  <item.icon className="w-5 h-5" />
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
        </div>

        {/* Bottom: Comparison Matrix Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-2xl font-black text-slate-950">
              Why Pre-Booking AeroGlide is Smarter
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Compare executive pre-arranged transfers versus ride-hailing apps and local terminal queues.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-600 font-bold">
                  <th className="p-4 sm:p-5">Service Feature</th>
                  <th className="p-4 sm:p-5 font-black text-slate-950 bg-amber-50/50 border-x border-amber-200/60">
                    AeroGlide Chauffeur (Recommended)
                  </th>
                  <th className="p-4 sm:p-5">On-Demand Ride Apps</th>
                  <th className="p-4 sm:p-5">Airport Taxi Queue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-slate-950 bg-amber-50/20 border-x border-amber-100">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>{row.aeroglide}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 font-medium">
                      {row.app}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 font-medium">
                      {row.taxiQueue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
