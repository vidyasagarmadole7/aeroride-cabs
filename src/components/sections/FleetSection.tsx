'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Briefcase, 
  Wind, 
  Wifi, 
  Star, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Check
} from 'lucide-react';
import { VEHICLES } from '@/data/vehicles';
import { VehicleCategory } from '@/types/booking';
import { formatCurrency } from '@/lib/utils';

export const FleetSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VehicleCategory>('all');

  const filteredVehicles = activeTab === 'all'
    ? VEHICLES
    : VEHICLES.filter(v => v.category === activeTab);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Spotless & Verified Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Choose Your Ideal Airport Cab
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every vehicle is air-conditioned, commercially insured, GPS tracked, and maintained to top executive standards.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Fleet' },
              { id: 'sedan', label: 'Sedans (4 Pax)' },
              { id: 'suv', label: 'Innova / SUVs (6 Pax)' },
              { id: 'luxury', label: 'VIP Luxury' },
              { id: 'tempo', label: 'Tempo Minibus (12 Pax)' },
              { id: 'ev', label: 'Electric EV' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as VehicleCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Tag */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {vehicle.tag && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                      {vehicle.tag}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{vehicle.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {vehicle.models}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{vehicle.passengerCapacity} Pax</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      <span>{vehicle.luggageCapacity} Bags</span>
                    </div>
                    {vehicle.ac && (
                      <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700">
                        <Wind className="w-3.5 h-3.5 text-blue-500" />
                        <span>AC</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {vehicle.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price and Action */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Starting Fare</div>
                  <div className="text-xl font-black text-slate-950">
                    {formatCurrency(vehicle.baseFare)}
                    <span className="text-xs font-medium text-slate-500"> / trip</span>
                  </div>
                </div>

                <Link
                  href={`/book?cat=${vehicle.category}`}
                  className="py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

