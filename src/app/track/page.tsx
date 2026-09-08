'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Plane, 
  Car, 
  User, 
  PhoneCall, 
  ShieldCheck, 
  AlertCircle,
  Navigation
} from 'lucide-react';

export default function TrackRidePage() {
  const [bookingId, setBookingId] = useState('');
  const [phone, setPhone] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSearched(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 w-full">
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            Live Status Portal
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950">
            Track Your Airport Chauffeur
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            Enter your 8-character Booking Reference ID (e.g. AG-849204) and registered mobile number to check real-time driver allocation.
          </p>
        </div>

        {/* Lookup Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm w-full">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Booking Reference ID *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. AG-849204"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value.toUpperCase())}
                className="w-full min-h-[46px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-black text-slate-900 uppercase focus:ring-2 focus:ring-blue-500"
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full min-h-[46px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-[46px] p-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Checking Radar...</span>
                ) : (
                  <>
                    <Navigation className="w-4 h-4" />
                    <span>Track Ride Status</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Search Results Display */}
        {isSearched && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 w-full">
            {/* Status Top Banner */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Status: Driver Assigned & En Route
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                  Booking #{bookingId || 'AG-849204'}
                </h3>
              </div>

              <a
                href="tel:+18004562376"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl text-xs font-bold border border-slate-700 flex items-center gap-1.5 self-end sm:self-auto"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>24/7 Helpline</span>
              </a>
            </div>

            {/* Chauffeur Live Details */}
            <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-lg shrink-0">
                    RK
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                      Assigned Senior Chauffeur
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">Rajesh Kumar (Badge #4892)</h4>
                    <div className="text-xs text-slate-600 mt-0.5 font-medium">
                      Toyota Innova Crysta • <strong className="text-slate-900">DL 1N C 8492</strong>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Driver</span>
                </a>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center text-xs">
                <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200">
                  <div className="font-black text-xs sm:text-sm">1. Reserved</div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Confirmed</div>
                </div>
                <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200">
                  <div className="font-black text-xs sm:text-sm">2. Driver Assigned</div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Rajesh Kumar</div>
                </div>
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-200">
                  <div className="font-black text-xs sm:text-sm">3. Flight Radar</div>
                  <div className="text-[10px] text-blue-700 font-semibold mt-0.5">On Schedule</div>
                </div>
                <div className="p-3 bg-slate-100 text-slate-600 rounded-xl border border-slate-200">
                  <div className="font-black text-xs sm:text-sm text-slate-800">4. Gate Pickup</div>
                  <div className="text-[10px] text-slate-500 font-semibold mt-0.5">T3 Gate 4</div>
                </div>
              </div>

              {/* Trip Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="space-y-0.5">
                  <span className="text-slate-400 font-semibold">Pickup Airport:</span>
                  <div className="font-bold text-slate-900">Indira Gandhi International (DEL T3)</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-400 font-semibold">Destination:</span>
                  <div className="font-bold text-slate-900">Connaught Place, Central Delhi</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
