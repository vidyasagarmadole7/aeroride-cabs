'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Tag, 
  Check, 
  X, 
  CreditCard, 
  Banknote, 
  Clock, 
  MapPin, 
  Plane, 
  Calendar,
  Sparkles,
  Car
} from 'lucide-react';
import { Vehicle, TripType } from '@/types/booking';
import { formatCurrency, calculateTripFare } from '@/lib/utils';

interface FareSummaryProps {
  vehicle: Vehicle | null;
  tripType: TripType;
  airportName: string;
  airportCode: string;
  terminal: string;
  location: string;
  pickupDate: string;
  pickupTime: string;
  returnDate?: string;
  returnTime?: string;
  distanceKm?: number;
  meetAndGreet?: boolean;
  childSeat?: boolean;
  paymentMode: 'full' | 'partial' | 'driver';
  onPaymentModeChange: (mode: 'full' | 'partial' | 'driver') => void;
  discountAmount: number;
  onApplyPromo: (code: string, discount: number) => void;
  currency?: 'USD' | 'INR' | 'EUR' | 'GBP';
}

export const FareSummary: React.FC<FareSummaryProps> = ({
  vehicle,
  tripType,
  airportName,
  airportCode,
  terminal,
  location,
  pickupDate,
  pickupTime,
  returnDate,
  returnTime,
  distanceKm = 25,
  meetAndGreet = false,
  childSeat = false,
  paymentMode,
  onPaymentModeChange,
  discountAmount,
  onApplyPromo,
  currency = 'USD'
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');

  if (!vehicle) {
    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 text-center space-y-3 shadow-xs">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <Car className="w-6 h-6" />
        </div>
        <h4 className="font-bold text-slate-900">No Vehicle Selected</h4>
        <p className="text-xs text-slate-500">
          Select a vehicle from the list to view fare calculation and proceed with booking.
        </p>
      </div>
    );
  }

  const fareCalculations = calculateTripFare(
    vehicle.baseFare,
    vehicle.ratePerKm,
    distanceKm,
    tripType === 'roundtrip',
    { meetAndGreet, childSeat }
  );

  const subtotal = fareCalculations.total;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'FLY10') {
      const discount = Math.round(subtotal * 0.1);
      onApplyPromo(code, discount);
      setAppliedPromo(code);
      setPromoError('');
    } else if (code === 'AERO100' || code === 'WELCOME20') {
      const discount = 8;
      onApplyPromo(code, discount);
      setAppliedPromo(code);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try FLY10 or AERO100');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedPromo('');
    setPromoInput('');
    setPromoError('');
    onApplyPromo('', 0);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg overflow-hidden lg:sticky lg:top-24 w-full">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
            Trip Fare Summary
          </span>
          <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-bold">
            {tripType === 'pickup' ? 'Airport Pickup' : tripType === 'drop' ? 'Airport Drop' : tripType === 'roundtrip' ? 'Round Trip' : 'Hourly Chauffeur'}
          </span>
        </div>
        <div className="text-base sm:text-lg font-black text-white mt-1 truncate">
          {vehicle.name}
        </div>
        <div className="text-xs text-slate-300 truncate">
          {vehicle.models}
        </div>
      </div>

      {/* Itinerary Quick Glance */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/80 space-y-2.5 text-xs text-slate-700">
        <div className="flex items-start gap-2.5">
          <Plane className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 -rotate-45" />
          <div className="truncate flex-1 min-w-0">
            <span className="font-bold text-slate-900 truncate block">{airportName} ({airportCode})</span>
            <div className="text-[11px] text-slate-500 font-medium truncate">{terminal}</div>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
          <div className="truncate flex-1 min-w-0">
            <span className="font-bold text-slate-900 truncate block">{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-1 text-slate-600 font-medium">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{pickupDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{pickupTime}</span>
          </div>
        </div>
      </div>

      {/* Itemized Pricing */}
      <div className="p-4 sm:p-5 space-y-2.5 text-xs">
        <div className="flex justify-between text-slate-600">
          <span>Base Chauffeur Fare ({distanceKm} km)</span>
          <span className="font-bold text-slate-900">{formatCurrency(fareCalculations.baseFare, currency)}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Airport Toll & Terminal Entry</span>
          <span className="font-bold text-slate-900">{formatCurrency(fareCalculations.airportFee, currency)}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>GST / State Taxes (5%)</span>
          <span className="font-bold text-slate-900">{formatCurrency(fareCalculations.taxes, currency)}</span>
        </div>

        {meetAndGreet && (
          <div className="flex justify-between text-blue-600 font-semibold">
            <span>Inside-Terminal Meet & Greet Placard</span>
            <span>{formatCurrency(8, currency)}</span>
          </div>
        )}

        {childSeat && (
          <div className="flex justify-between text-blue-600 font-semibold">
            <span>Child Safety Car Seat</span>
            <span>{formatCurrency(6, currency)}</span>
          </div>
        )}

        {discountAmount > 0 && (
          <div className="flex justify-between text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
            <span className="flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Coupon ({appliedPromo})
            </span>
            <span>-{formatCurrency(discountAmount, currency)}</span>
          </div>
        )}

        {/* Promo Code Input */}
        <div className="pt-2 border-t border-slate-100">
          {appliedPromo ? (
            <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{appliedPromo} Applied!</span>
              </div>
              <button
                type="button"
                onClick={handleRemoveCoupon}
                className="text-xs text-red-600 hover:underline font-bold"
              >
                Remove
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplyCoupon} className="space-y-1">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (FLY10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                  className="flex-1 px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
                >
                  Apply
                </button>
              </div>
              {promoError && (
                <div className="text-[11px] text-red-600 font-bold">{promoError}</div>
              )}
            </form>
          )}
        </div>

        {/* Total Guaranteed Price */}
        <div className="pt-3 border-t border-slate-200 flex items-baseline justify-between">
          <div>
            <div className="text-xs text-slate-500 font-semibold">Guaranteed Flat Fare</div>
            <div className="text-[11px] text-emerald-700 font-bold">Zero Surge Multiplier</div>
          </div>
          <div className="text-2xl font-black text-slate-950">
            {formatCurrency(finalTotal, currency)}
          </div>
        </div>
      </div>

      {/* Payment Options Toggle */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-2">
        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
          Payment Preference
        </span>

        <label
          onClick={() => onPaymentModeChange('full')}
          className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
            paymentMode === 'full'
              ? 'bg-blue-50 border-blue-600 text-slate-900 font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60'
          }`}
        >
          <div className="flex items-center gap-2 text-xs">
            <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="truncate">Pay 100% Online (Instant Lock)</span>
          </div>
          <input
            type="radio"
            name="paymentMode"
            checked={paymentMode === 'full'}
            onChange={() => onPaymentModeChange('full')}
            className="text-blue-600 ml-2"
          />
        </label>

        <label
          onClick={() => onPaymentModeChange('partial')}
          className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
            paymentMode === 'partial'
              ? 'bg-blue-50 border-blue-600 text-slate-900 font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60'
          }`}
        >
          <div className="flex items-center gap-2 text-xs">
            <Banknote className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="truncate">Pay 20% Deposit ({formatCurrency(finalTotal * 0.2, currency)})</span>
          </div>
          <input
            type="radio"
            name="paymentMode"
            checked={paymentMode === 'partial'}
            onChange={() => onPaymentModeChange('partial')}
            className="text-blue-600 ml-2"
          />
        </label>

        <label
          onClick={() => onPaymentModeChange('driver')}
          className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
            paymentMode === 'driver'
              ? 'bg-blue-50 border-blue-600 text-slate-900 font-bold'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60'
          }`}
        >
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-4 h-4 text-slate-600 shrink-0" />
            <span className="truncate">Pay Full Amount to Driver</span>
          </div>
          <input
            type="radio"
            name="paymentMode"
            checked={paymentMode === 'driver'}
            onChange={() => onPaymentModeChange('driver')}
            className="text-blue-600 ml-2"
          />
        </label>
      </div>

      {/* Free Cancellation Trust Tag */}
      <div className="p-3.5 bg-emerald-50 text-emerald-900 text-[11px] font-semibold flex items-center gap-2 border-t border-emerald-100">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>100% Refund upon cancellation up to 1 hr before ride.</span>
      </div>
    </div>
  );
};
