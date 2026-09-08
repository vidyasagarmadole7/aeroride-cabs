'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Plane, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ShieldCheck, 
  Download, 
  Printer, 
  Share2, 
  Car, 
  Sparkles, 
  QrCode,
  PhoneCall,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookingState } from '@/types/booking';
import { formatCurrency, calculateTripFare } from '@/lib/utils';

interface ConfirmationVoucherProps {
  booking: BookingState;
  currency?: 'USD' | 'INR' | 'EUR' | 'GBP';
}

export const ConfirmationVoucher: React.FC<ConfirmationVoucherProps> = ({
  booking,
  currency = 'USD'
}) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore in environments without canvas
    }
  }, []);

  const fareBreakdown = booking.selectedVehicle
    ? calculateTripFare(
        booking.selectedVehicle.baseFare,
        booking.selectedVehicle.ratePerKm,
        25,
        booking.tripType === 'roundtrip',
        { meetAndGreet: booking.meetAndGreet, childSeat: booking.childSeat }
      )
    : { total: 39, baseFare: 32, taxes: 3, airportFee: 4 };

  const finalPaid = Math.max(0, fareBreakdown.total - booking.discountAmount);

  const handlePrint = () => {
    window.print();
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`AeroGlide Airport Transfer: ${booking.airport?.code || 'DEL'} to ${booking.dropLocation || 'Destination'}`);
    const details = encodeURIComponent(`Booking Ref: ${booking.bookingId}\nVehicle: ${booking.selectedVehicle?.name}\nChauffeur Helpline: +1 800 456-AERO`);
    const dateStr = booking.pickupDate.replace(/-/g, '');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}T100000Z/${dateStr}T113000Z&details=${details}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 w-full">
      {/* Top Banner Alert */}
      <div className="bg-emerald-600 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1.5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-100" />
            <span>Booking Confirmed & Flight Sync Active</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
            You&apos;re All Set for Takeoff!
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-md leading-relaxed">
            Your airport chauffeur is reserved. A confirmation SMS & WhatsApp voucher has been dispatched to <strong>{booking.passengerPhone || '+1 (555) 019-2834'}</strong>.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 text-center shrink-0 w-full sm:w-auto">
          <div className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider">
            Booking Reference ID
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white mt-0.5">
            {booking.bookingId || 'AG-849204'}
          </div>
          <div className="text-[10px] text-emerald-200 mt-0.5">Guaranteed Allocation</div>
        </div>
      </div>

      {/* Main Digital Boarding Pass Ticket */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden print:border-none print:shadow-none w-full">
        {/* Ticket Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <Plane className="w-5 h-5 -rotate-45" />
            </div>
            <div className="min-w-0">
              <div className="text-base sm:text-lg font-black tracking-tight truncate">
                Aero<span className="text-amber-400">Glide</span> Digital Pass
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                Official Airport Chauffeur Transfer Voucher
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition text-xs font-bold flex items-center gap-1.5"
              aria-label="Print voucher"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleAddToCalendar}
              className="p-2 sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition text-xs font-bold flex items-center gap-1.5"
              aria-label="Add to calendar"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Calendar</span>
            </button>
          </div>
        </div>

        {/* Live Trip Status Progress Indicator */}
        <div className="bg-slate-50 border-b border-slate-200 p-4">
          <div className="text-xs font-bold text-slate-800 mb-3 flex items-center justify-between">
            <span>Ride Lifecycle Tracker</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Monitoring Active
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
            <div className="space-y-1">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs font-bold">
                ✓
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-900">Confirmed</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500">Locked in</div>
            </div>
            <div className="space-y-1">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xs font-bold">
                2
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-900">Driver Assigned</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500">2h before trip</div>
            </div>
            <div className="space-y-1">
              <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mx-auto text-xs font-bold">
                3
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-600">Flight Radar</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400">Touchdown sync</div>
            </div>
            <div className="space-y-1">
              <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mx-auto text-xs font-bold">
                4
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-600">Pickup</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400">Terminal gate</div>
            </div>
          </div>
        </div>

        {/* Itinerary & Passenger Grid */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left: Journey Info */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Journey Details
              </h4>

              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-start gap-2.5">
                  <Plane className="w-4 h-4 text-blue-600 mt-0.5 shrink-0 -rotate-45" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-slate-400 font-medium">Airport & Terminal</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {booking.airport?.name || 'Indira Gandhi International Airport'} ({booking.airport?.code || 'DEL'})
                    </div>
                    <div className="text-xs text-blue-600 font-bold">{booking.terminal || 'Terminal 3'}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-slate-400 font-medium">Destination Address</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {booking.dropLocation || 'Connaught Place, Central Delhi'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Pickup Date:</span>
                    <span className="font-bold text-slate-900">{booking.pickupDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Pickup Time:</span>
                    <span className="font-bold text-slate-900">{booking.pickupTime} (24H)</span>
                  </div>
                </div>

                {booking.flightNumber && (
                  <div className="pt-2 border-t border-slate-200 text-xs flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Flight No:</span>
                    <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {booking.flightNumber} {booking.airline ? `(${booking.airline})` : ''}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Vehicle & QR Code */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Reserved Vehicle & Verification
              </h4>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
                  <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-slate-900" />
                </div>
                <div className="space-y-0.5 min-w-0 flex-1">
                  <div className="text-[11px] text-slate-500 font-medium">Show QR at Airport Gate</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {booking.selectedVehicle?.name || 'Prime Sedan'}
                  </div>
                  <div className="text-xs text-slate-600 truncate">
                    {booking.selectedVehicle?.models || 'Maruti Dzire / Toyota Etios'}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold">
                    60 Mins Free Touchdown Waiting
                  </div>
                </div>
              </div>

              {/* Passenger Summary */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Lead Passenger:</span>
                  <span className="font-bold text-slate-900 truncate ml-2">{booking.passengerName || 'Vikramaditya Roy'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Phone:</span>
                  <span className="font-bold text-slate-900">{booking.passengerPhone || '+91 98765 43210'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Capacity Booked:</span>
                  <span className="font-bold text-slate-800">{booking.passengers} Pax, {booking.luggage} Bags</span>
                </div>
                {booking.meetAndGreet && (
                  <div className="flex justify-between text-blue-600 font-bold">
                    <span>Placard Meet & Greet:</span>
                    <span>{booking.nameboardText || booking.passengerName}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chauffeur Preview Box */}
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                <User className="w-5 h-5 text-amber-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
                  Chauffeur Allocation
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  Senior Executive Chauffeur will be assigned
                </div>
                <div className="text-[11px] text-slate-600">
                  Driver contact & car plate sent via WhatsApp 2h before trip.
                </div>
              </div>
            </div>

            <a
              href="tel:+18004562376"
              className="px-3.5 py-2 bg-white hover:bg-slate-100 text-blue-700 font-bold text-xs rounded-xl border border-blue-200 transition flex items-center gap-1.5 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>24/7 Hotline</span>
            </a>
          </div>

          {/* Payment & Invoice Summary */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-slate-600 space-y-0.5 text-center sm:text-left">
              <div>
                Payment Mode: <strong className="text-slate-900 capitalize">{booking.paymentMode === 'full' ? '100% Online (Paid)' : booking.paymentMode === 'partial' ? '20% Deposit (Paid)' : 'Pay to Driver on Arrival'}</strong>
              </div>
              <div className="text-[11px] text-emerald-700 font-medium">
                Invoice sent to {booking.passengerEmail || 'your registered email'}.
              </div>
            </div>

            <div className="text-center sm:text-right">
              <div className="text-[11px] text-slate-500 font-medium">Total Fixed Fare</div>
              <div className="text-2xl font-black text-slate-950">
                {formatCurrency(finalPaid, currency)}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-bold transition"
          >
            ← Back to Homepage
          </Link>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <Link
              href="/track"
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition text-center"
            >
              Track Live Ride
            </Link>
            <Link
              href="/book?type=roundtrip"
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold transition text-center"
            >
              Book Return
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
