'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Wind, 
  ShieldCheck, 
  Star, 
  Check, 
  Info, 
  ArrowRight,
  Sparkles,
  Plane
} from 'lucide-react';
import { Vehicle } from '@/types/booking';
import { formatCurrency, calculateTripFare } from '@/lib/utils';

interface VehicleCardProps {
  vehicle: Vehicle;
  isSelected?: boolean;
  distanceKm?: number;
  isRoundtrip?: boolean;
  onSelect: (vehicle: Vehicle) => void;
  currency?: 'USD' | 'INR' | 'EUR' | 'GBP';
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  isSelected = false,
  distanceKm = 25,
  isRoundtrip = false,
  onSelect,
  currency = 'INR'
}) => {
  const [showFareBreakdown, setShowFareBreakdown] = useState(false);

  const fareDetails = calculateTripFare(
    vehicle.baseFare,
    vehicle.ratePerKm,
    distanceKm,
    isRoundtrip
  );

  return (
    <div
      className={`relative bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden w-full ${
        isSelected
          ? 'border-slate-950 ring-2 ring-slate-950/20 shadow-lg'
          : 'border-slate-200/80 hover:border-slate-400 hover:shadow-md'
      }`}
    >
      {/* Top Class Tag Badge */}
      {vehicle.tag && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md text-slate-950 text-[10px] sm:text-[11px] font-black rounded-lg uppercase tracking-wider shadow-xs border border-slate-200">
            {vehicle.tag}
          </span>
        </div>
      )}

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
        {/* Left: Car Image & Rating */}
        <div className="md:col-span-4 flex flex-col items-center">
          <div className="relative w-full h-36 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover object-center rounded-xl transform hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          <div className="flex items-center gap-2 mt-2.5 text-xs text-slate-600">
            <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-md font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{vehicle.rating}</span>
            </div>
            <span className="text-[11px] font-medium text-slate-500">({vehicle.totalTrips.toLocaleString()} trips)</span>
          </div>
        </div>

        {/* Center: Vehicle Details & Inclusions */}
        <div className="md:col-span-5 space-y-2.5 sm:space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black text-slate-950">{vehicle.name}</h3>
              {vehicle.ac && (
                <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-1.5 py-0.5 rounded">
                  Climate AC
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {vehicle.models}
            </p>
          </div>

          {/* Capacity Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
              <Users className="w-3.5 h-3.5 text-slate-600" />
              <span>{vehicle.passengerCapacity} Guests</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
              <Briefcase className="w-3.5 h-3.5 text-slate-600" />
              <span>{vehicle.luggageCapacity} Cases</span>
            </div>
          </div>

          {/* Key Bullet Inclusions */}
          <ul className="space-y-1 pt-1">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{vehicle.cancellationPolicy}</span>
          </div>
        </div>

        {/* Right: Fare, Tooltip & CTA */}
        <div className="md:col-span-3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 pt-3.5 md:pt-0 md:pl-5 space-y-3">
          <div className="text-left md:text-right">
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Fixed Flat Fare</div>
            <div className="flex items-baseline md:justify-end gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-950">
                {formatCurrency(fareDetails.total, currency)}
              </span>
              <span className="text-xs text-slate-400 font-semibold line-through">
                {formatCurrency(fareDetails.total * 1.15, currency)}
              </span>
            </div>
            <div className="text-[11px] text-emerald-700 font-bold flex items-center md:justify-end gap-1">
              <span>All Tolls & Taxes Included</span>
              <button
                type="button"
                onClick={() => setShowFareBreakdown(!showFareBreakdown)}
                className="text-slate-400 hover:text-slate-950 cursor-pointer"
                aria-label="Fare breakdown details"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelect(vehicle)}
            className={`w-full min-h-[46px] py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isSelected
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <span>Reserve Chauffeur</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Fare Breakdown Tooltip */}
      {showFareBreakdown && (
        <div className="bg-slate-50 border-t border-slate-200 p-4 text-xs text-slate-700 animate-in fade-in duration-150">
          <div className="font-bold text-slate-900 mb-2">Itemized Tariff Breakdown</div>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span>Base Chauffeur Rate & Fuel ({distanceKm} km)</span>
              <span className="font-semibold text-slate-900">{formatCurrency(fareDetails.baseFare, currency)}</span>
            </div>
            <div className="flex justify-between">
              <span>Airport Terminal Entry & Express Tolls</span>
              <span className="font-semibold text-slate-900">{formatCurrency(fareDetails.airportFee, currency)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST / State Transport Taxes (5%)</span>
              <span className="font-semibold text-slate-900">{formatCurrency(fareDetails.taxes, currency)}</span>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-slate-950">
              <span>Total Guaranteed Fixed Tariff</span>
              <span>{formatCurrency(fareDetails.total, currency)}</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-medium">
            Zero surge pricing. Includes 60 minutes complimentary touchdown waiting time.
          </p>
        </div>
      )}
    </div>
  );
};
