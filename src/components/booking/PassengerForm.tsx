'use client';

import React from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Plane, 
  ShieldCheck, 
  Baby, 
  Sparkles, 
  Building2, 
  FileText, 
  Info,
  Luggage,
  Languages
} from 'lucide-react';
import { BookingState } from '@/types/booking';

interface PassengerFormProps {
  bookingState: BookingState;
  onChange: (updates: Partial<BookingState>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export const PassengerForm: React.FC<PassengerFormProps> = ({
  bookingState,
  onChange,
  onSubmit,
  onBack
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6 w-full">
      {/* Passenger Basic Details */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Primary Passenger Information</h3>
            <p className="text-xs text-slate-500">Chauffeur and trip updates will be dispatched to these details.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Passenger Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 shrink-0" />
              <input
                type="text"
                required
                placeholder="e.g. Vikramaditya Roy"
                value={bookingState.passengerName}
                onChange={(e) => onChange({ passengerName: e.target.value })}
                className="w-full min-h-[46px] pl-10 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Mobile Number (SMS/WhatsApp) *
            </label>
            <div className="relative flex">
              <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-bold shrink-0">
                +91 / +1
              </span>
              <input
                type="tel"
                required
                placeholder="9876543210"
                value={bookingState.passengerPhone}
                onChange={(e) => onChange({ passengerPhone: e.target.value })}
                className="w-full min-h-[46px] px-3 py-2.5 bg-white border border-slate-300 rounded-r-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Email Address (For Voucher) *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 shrink-0" />
              <input
                type="email"
                required
                placeholder="name@email.com"
                value={bookingState.passengerEmail}
                onChange={(e) => onChange({ passengerEmail: e.target.value })}
                className="w-full min-h-[46px] pl-10 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flight Tracking & Terminal Details */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
              <Plane className="w-4 h-4 -rotate-45" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Flight Radar Tracking</h3>
              <p className="text-xs text-slate-500">We automatically monitor flight delays & adjust pickup time.</p>
            </div>
          </div>
          <span className="text-[11px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1 self-start sm:self-auto shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 60m Free Waiting
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Flight Number (Recommended)
            </label>
            <div className="relative">
              <Plane className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 shrink-0" />
              <input
                type="text"
                placeholder="e.g. AI-102, 6E-204"
                value={bookingState.flightNumber}
                onChange={(e) => onChange({ flightNumber: e.target.value.toUpperCase() })}
                className="w-full min-h-[46px] pl-10 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Airline Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Air India, IndiGo, Emirates"
              value={bookingState.airline}
              onChange={(e) => onChange({ airline: e.target.value })}
              className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="p-3 bg-blue-50/80 border border-blue-100 rounded-xl text-xs text-blue-900 flex items-start gap-2.5 font-medium leading-relaxed">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span>
            Providing your flight number enables our dispatch center to track your flight radar in real time. If your flight is delayed by 3 hours, your driver will arrive 3 hours later at no extra cost.
          </span>
        </div>
      </div>

      {/* Special Airport Add-ons */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">VIP Airport Transfer Add-Ons</h3>
            <p className="text-xs text-slate-500">Personalize your journey for exceptional convenience.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
          {/* Meet and Greet */}
          <label className="p-3.5 sm:p-4 border border-slate-200 rounded-2xl hover:border-blue-400 cursor-pointer flex items-start gap-3 bg-slate-50/60 transition">
            <input
              type="checkbox"
              checked={bookingState.meetAndGreet}
              onChange={(e) => onChange({ meetAndGreet: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Inside-Terminal Meet & Greet (+$8)</div>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Chauffeur waits inside arrival hall gate holding a personalized name placard.
              </p>
              {bookingState.meetAndGreet && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Placard Name (e.g. Dr. Roy)"
                    value={bookingState.nameboardText}
                    onChange={(e) => onChange({ nameboardText: e.target.value })}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </label>

          {/* Child Safety Seat */}
          <label className="p-3.5 sm:p-4 border border-slate-200 rounded-2xl hover:border-blue-400 cursor-pointer flex items-start gap-3 bg-slate-50/60 transition">
            <input
              type="checkbox"
              checked={bookingState.childSeat}
              onChange={(e) => onChange({ childSeat: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Child Safety Car Seat (+$6)</div>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Sanitized premium rear-facing or booster child seat for infants & toddlers.
              </p>
            </div>
          </label>

          {/* Bilingual Driver */}
          <label className="p-3.5 sm:p-4 border border-slate-200 rounded-2xl hover:border-blue-400 cursor-pointer flex items-start gap-3 bg-slate-50/60 transition">
            <input
              type="checkbox"
              checked={bookingState.bilingualChauffeur}
              onChange={(e) => onChange({ bilingualChauffeur: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900">English-Fluent Senior Chauffeur</div>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Top 5% rated executive chauffeur with fluent conversational English.
              </p>
            </div>
          </label>

          {/* Extra Luggage Assistance */}
          <label className="p-3.5 sm:p-4 border border-slate-200 rounded-2xl hover:border-blue-400 cursor-pointer flex items-start gap-3 bg-slate-50/60 transition">
            <input
              type="checkbox"
              checked={bookingState.extraLuggageRack}
              onChange={(e) => onChange({ extraLuggageRack: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Luggage Porter Assistance</div>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Driver assists loading & unloading baggage directly to hotel lobby / doorstep.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Corporate Invoicing / GST */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-900">Need Corporate GST Tax Invoice?</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={bookingState.isCorporate}
              onChange={(e) => onChange({ isCorporate: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {bookingState.isCorporate && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-3 border-t border-slate-100 animate-in fade-in duration-150">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Company Registered Name</label>
              <input
                type="text"
                placeholder="e.g. Acme Tech Solutions Inc"
                value={bookingState.companyName || ''}
                onChange={(e) => onChange({ companyName: e.target.value })}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">GSTIN / Tax ID</label>
              <input
                type="text"
                placeholder="e.g. 07AAAAA0000A1Z5"
                value={bookingState.gstin || ''}
                onChange={(e) => onChange({ gstin: e.target.value.toUpperCase() })}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold uppercase"
              />
            </div>
          </div>
        )}
      </div>

      {/* Special Driver Instructions */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3">
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
          Special Instructions for Chauffeur (Optional)
        </label>
        <textarea
          rows={2}
          placeholder="e.g., Traveling with elderly family, please park near Pillar 4; or quiet cabin preferred for conference call."
          value={bookingState.specialInstructions}
          onChange={(e) => onChange({ specialInstructions: e.target.value })}
          className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[48px] px-6 py-3 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer text-center"
        >
          ← Change Vehicle
        </button>

        <button
          type="submit"
          className="min-h-[48px] px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition transform hover:-translate-y-0.5 cursor-pointer text-center"
        >
          Proceed to Review & Pay →
        </button>
      </div>
    </form>
  );
};
