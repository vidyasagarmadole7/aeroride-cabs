'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Plane, 
  Clock, 
  Sparkles, 
  UserCheck, 
  Banknote,
  Luggage
} from 'lucide-react';

export const AirportBenefits: React.FC = () => {
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
      aeroglide: 'Available (Arrival gate nameboard)',
      app: 'Not available (Walk to taxi pickup zone)',
      taxiQueue: 'Not available'
    },
    {
      feature: 'Pre-selected Vehicle & Luggage Space',
      aeroglide: 'Guaranteed (Sedan, SUV, Minibus)',
      app: 'Random vehicle match',
      taxiQueue: 'Limited compact cars'
    },
    {
      feature: 'Driver Details in Advance',
      aeroglide: '2 Hours prior via SMS & WhatsApp',
      app: '2-5 mins prior only',
      taxiQueue: 'None'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Comparison Guide
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Pre-Booking AeroGlide is Smarter
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            See how pre-arranged airport transfers compare against on-demand ride apps and waiting in local terminal taxi queues.
          </p>
        </div>

        {/* Comparison Table with light theme */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600 font-bold">
                  <th className="p-4 sm:p-5 font-bold">Transfer Features</th>
                  <th className="p-4 sm:p-5 font-black text-blue-700 bg-blue-50/80 border-x border-blue-200">
                    AeroGlide Cabs (Recommended)
                  </th>
                  <th className="p-4 sm:p-5 font-bold">On-Demand Ride Apps</th>
                  <th className="p-4 sm:p-5 font-bold">Airport Taxi Queue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-blue-900 bg-blue-50/40 border-x border-blue-100">
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
