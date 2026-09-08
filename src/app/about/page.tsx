import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles 
} from 'lucide-react';

export const metadata = {
  title: 'About AeroGlide Cabs | Executive Airport Transfer Network',
  description: 'Learn about AeroGlide Cabs, our strict chauffeur vetting standards, zero surge pricing commitment, and 24/7 airport lounge network.'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 text-slate-950 py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Our Mission & Standards
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Punctual, Transparent, and Stress-Free Airport Travel
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Founded by aviation and technology veterans, AeroGlide Cabs was created to fix the most stressful part of travel: the airport transfer.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Zero-Tolerance for Tardiness</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We know flights do not wait. Every chauffeur is required to report 15 minutes before the booked time, backed by our on-time guarantee.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">100% Flat Fixed Fares</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No arbitrary rain surge or midnight spikes. Our transparent pricing includes highway tolls, state permits, and airport parking fees.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Rigorous Chauffeur Vetting</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every driver undergoes criminal background checks, commercial license verification, and etiquette training in business hospitality.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border border-slate-200 text-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center shadow-xs">
          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl font-black text-blue-600">500k+</div>
            <div className="text-xs text-slate-600 font-bold">Airport Rides Completed</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl font-black text-blue-600">50+</div>
            <div className="text-xs text-slate-600 font-bold">Aviation Hubs Served</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl font-black text-blue-600">4.95 / 5</div>
            <div className="text-xs text-slate-600 font-bold">Average Customer Rating</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl font-black text-blue-600">99.4%</div>
            <div className="text-xs text-slate-600 font-bold">On-Time Arrival Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
}

