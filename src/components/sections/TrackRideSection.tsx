'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Car, 
  User, 
  PhoneCall, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Navigation,
  Loader2,
  Check
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const TrackRideSection: React.FC = () => {
  const [bookingId, setBookingId] = useState('AG-849204');
  const [mobileNumber, setMobileNumber] = useState('9876543210');
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      setTrackingResult({
        bookingId: bookingId || 'AG-849204',
        status: 'Driver Dispatched & En Route',
        driverName: 'Rajesh Kumar (Badge #4892)',
        driverPhone: '+91 98765 43210',
        driverRating: 4.96,
        vehicleNumber: 'MH 12 AB 8492',
        vehicleType: 'Innova Crysta Premium SUV (White)',
        pickupLocation: 'Pune International Airport (Terminal 1 - Exit Pillar 4)',
        destination: 'Hinjewadi Phase 1 IT Park, Pune',
        etaMinutes: '8 Mins',
        flightNumber: '6E-204 (Delhi to Pune - Landed)'
      });
    }, 700);
  };

  return (
    <section id="track" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            Live Status Portal
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Track My Ride
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-xl mx-auto">
            Enter your 8-digit Booking Reference ID and registered phone number to view live chauffeur allocation and GPS status.
          </p>
        </div>

        {/* Search Input Form */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm">
          <form onSubmit={handleTrackSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Booking ID *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. AG-849204"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value.toUpperCase())}
                className="w-full min-h-[48px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-black text-slate-900 uppercase focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="9876543210"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full min-h-[48px] p-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider disabled:opacity-50"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Tracking...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>TRACK RIDE</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tracking Live Result Mockup */}
        {trackingResult && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Top Status Header */}
            <div className="bg-slate-950 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Booking Status: {trackingResult.status}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                  Trip Reference #{trackingResult.bookingId}
                </h3>
              </div>

              <span className="px-3 py-1 bg-slate-800 text-amber-400 text-xs font-bold rounded-full border border-slate-700">
                ETA: {trackingResult.etaMinutes}
              </span>
            </div>

            {/* Details Grid */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* Driver & Vehicle Box */}
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center font-black text-lg shrink-0">
                    RK
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                      Assigned Senior Chauffeur
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {trackingResult.driverName} (★ 4.96)
                    </h4>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      {trackingResult.vehicleType} • <strong className="text-slate-900">{trackingResult.vehicleNumber}</strong>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2 shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Driver Now</span>
                </a>
              </div>

              {/* Itinerary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Pickup Location:</span>
                  <div className="font-bold text-slate-900">{trackingResult.pickupLocation}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Destination:</span>
                  <div className="font-bold text-slate-900">{trackingResult.destination}</div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs pt-2">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs font-bold">✓</div>
                  <div className="font-bold text-slate-900">Confirmed</div>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs font-bold">✓</div>
                  <div className="font-bold text-slate-900">Assigned</div>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xs font-bold animate-pulse">3</div>
                  <div className="font-bold text-blue-700">En Route</div>
                </div>
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto text-xs font-bold">4</div>
                  <div className="font-semibold text-slate-400">Arrived</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

