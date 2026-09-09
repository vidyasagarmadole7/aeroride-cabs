'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Plane, 
  Calendar, 
  Clock, 
  Users, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  PlaneLanding, 
  PlaneTakeoff, 
  Repeat, 
  Clock3, 
  Car,
  MapPin,
  CheckCircle2,
  Navigation,
  Loader2,
  X,
  Edit2,
  Building,
  Check
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';
import { calculateDynamicFare, formatINR, FareBreakdownResult } from '@/lib/fareCalculator';
import { getTodayDateString, getTomorrowDateString, getDefaultPickupTime } from '@/lib/utils';

export type BookingTab = 'pickup' | 'drop' | 'roundtrip' | 'outstation' | 'hourly';

interface BookingWidgetProps {
  initialTab?: BookingTab;
  initialAirportCode?: string;
  className?: string;
  onSearch?: (searchParams: any) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  initialTab = 'pickup',
  initialAirportCode = 'PNQ',
  className = '',
  onSearch
}) => {
  const router = useRouter();

  // Active Tab
  const [activeTab, setActiveTab] = useState<BookingTab>(initialTab);

  // Form State
  const [selectedAirportCode, setSelectedAirportCode] = useState<string>(initialAirportCode);
  const currentAirport = SITE_CONFIG.airports.find(a => a.code.includes(selectedAirportCode)) || SITE_CONFIG.airports[0];
  const [terminal, setTerminal] = useState<string>(currentAirport.terminals[0] || 'Terminal 1');

  const [pickupLocation, setPickupLocation] = useState<string>('Hinjewadi Phase 1, IT Park, Pune');
  const [destinationLocation, setDestinationLocation] = useState<string>('Koregaon Park & Viman Nagar, Pune');
  
  // Outstation Cities
  const [outstationFrom, setOutstationFrom] = useState<string>('Pune Airport (PNQ)');
  const [outstationTo, setOutstationTo] = useState<string>('Mumbai / Lonavala / Mahabaleshwar');
  const [outstationTripType, setOutstationTripType] = useState<'oneway' | 'roundtrip'>('oneway');

  // Dates & Times
  const [pickupDate, setPickupDate] = useState<string>(getTodayDateString());
  const [pickupTime, setPickupTime] = useState<string>(getDefaultPickupTime());
  const [returnDate, setReturnDate] = useState<string>(getTomorrowDateString());
  const [returnTime, setReturnTime] = useState<string>('18:00');

  // Capacity & Vehicle
  const [passengers, setPassengers] = useState<number>(2);
  const [luggage, setLuggage] = useState<number>(2);
  const [selectedCategory, setSelectedCategory] = useState<string>('sedan');
  const [rentalHours, setRentalHours] = useState<number>(8);
  const [flightNumber, setFlightNumber] = useState<string>('');

  // Fare Calculation Modal State
  const [isLoadingFare, setIsLoadingFare] = useState<boolean>(false);
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [calculatedFare, setCalculatedFare] = useState<FareBreakdownResult | null>(null);

  // Helper when airport changes
  const handleAirportSelect = (code: string) => {
    setSelectedAirportCode(code);
    const airport = SITE_CONFIG.airports.find(a => a.code.includes(code)) || SITE_CONFIG.airports[0];
    setTerminal(airport.terminals[0] || 'Terminal 1');
  };

  const handleGetFareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingFare(true);

    const vehicleObj = SITE_CONFIG.vehicles.find(v => v.category === selectedCategory) || SITE_CONFIG.vehicles[0];

    // Compute dynamic fare
    const fare = calculateDynamicFare({
      baseFare: vehicleObj.baseFare,
      ratePerKm: vehicleObj.ratePerKm,
      distanceKm: activeTab === 'outstation' ? 140 : activeTab === 'roundtrip' ? 30 : 25,
      isRoundtrip: activeTab === 'roundtrip' || (activeTab === 'outstation' && outstationTripType === 'roundtrip'),
      rentalHours: activeTab === 'hourly' ? rentalHours : undefined
    });

    setTimeout(() => {
      setCalculatedFare(fare);
      setIsLoadingFare(false);
      setShowSummaryModal(true);
    }, 600);
  };

  const handleConfirmAndProceed = () => {
    setShowSummaryModal(false);

    const queryParams = new URLSearchParams({
      type: activeTab,
      airport: selectedAirportCode,
      terminal,
      loc: activeTab === 'drop' ? pickupLocation : destinationLocation,
      date: pickupDate,
      time: pickupTime,
      pax: String(passengers),
      bags: String(luggage),
      cat: selectedCategory,
      flight: flightNumber
    }).toString();

    if (onSearch) {
      onSearch({ activeTab, selectedAirportCode, terminal, pickupDate, pickupTime, selectedCategory });
    } else {
      router.push(`/book?${queryParams}`);
    }
  };

  return (
    <div className={`w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden ${className}`}>
      {/* 5 Tab Navigation Bar */}
      <div className="flex bg-slate-100 border-b border-slate-200 p-1 sm:p-1.5 gap-1 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => { setActiveTab('pickup'); setShowSummaryModal(false); }}
          className={`flex-1 min-w-[120px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'pickup'
              ? 'bg-blue-600 text-white shadow-sm font-extrabold'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <PlaneLanding className="w-3.5 h-3.5 shrink-0" />
          <span>Airport Pickup</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('drop'); setShowSummaryModal(false); }}
          className={`flex-1 min-w-[120px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'drop'
              ? 'bg-blue-600 text-white shadow-sm font-extrabold'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <PlaneTakeoff className="w-3.5 h-3.5 shrink-0" />
          <span>Airport Drop</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('roundtrip'); setShowSummaryModal(false); }}
          className={`flex-1 min-w-[120px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'roundtrip'
              ? 'bg-blue-600 text-white shadow-sm font-extrabold'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <Repeat className="w-3.5 h-3.5 shrink-0" />
          <span>Round Trip</span>
          <span className="hidden md:inline text-[9px] bg-amber-400 text-slate-950 px-1 py-0.2 rounded font-black">
            -15%
          </span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('outstation'); setShowSummaryModal(false); }}
          className={`flex-1 min-w-[120px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'outstation'
              ? 'bg-blue-600 text-white shadow-sm font-extrabold'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <Navigation className="w-3.5 h-3.5 shrink-0" />
          <span>Outstation</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('hourly'); setShowSummaryModal(false); }}
          className={`flex-1 min-w-[120px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'hourly'
              ? 'bg-blue-600 text-white shadow-sm font-extrabold'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <Clock3 className="w-3.5 h-3.5 shrink-0" />
          <span>Hourly Chauffeur</span>
        </button>
      </div>

      {/* Main Booking Form */}
      <form onSubmit={handleGetFareSubmit} className="p-4 sm:p-6 lg:p-7 space-y-4 sm:space-y-5">
        {/* ROW 1: Locations / Airport Selectors based on Tab */}
        {activeTab === 'pickup' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-blue-600 -rotate-45" />
                Select Arrival Airport
              </label>
              <select
                value={selectedAirportCode}
                onChange={(e) => handleAirportSelect(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                {SITE_CONFIG.airports.map(a => (
                  <option key={a.id} value={a.code}>
                    {a.city} — {a.name} ({a.code})
                  </option>
                ))}
              </select>
              {currentAirport.terminals.length > 0 && (
                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-600 font-semibold">
                  <span>Terminal:</span>
                  <select
                    value={terminal}
                    onChange={(e) => setTerminal(e.target.value)}
                    className="bg-slate-100 rounded px-2 py-0.5 border border-slate-200 text-xs font-bold cursor-pointer"
                  >
                    {currentAirport.terminals.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                Destination / Hotel / Drop Address
              </label>
              <input
                type="text"
                required
                placeholder="Enter city area, hotel, IT park or street..."
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>
          </div>
        )}

        {activeTab === 'drop' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Pickup Location / Residence / Hotel
              </label>
              <input
                type="text"
                required
                placeholder="Enter pickup address, hotel or apartment..."
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-blue-600" />
                Departure Airport
              </label>
              <select
                value={selectedAirportCode}
                onChange={(e) => handleAirportSelect(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                {SITE_CONFIG.airports.map(a => (
                  <option key={a.id} value={a.code}>
                    {a.city} — {a.name} ({a.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {activeTab === 'roundtrip' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Pickup Address (Both Legs)
              </label>
              <input
                type="text"
                required
                placeholder="Enter home / hotel address..."
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-blue-600" />
                Airport Name
              </label>
              <select
                value={selectedAirportCode}
                onChange={(e) => handleAirportSelect(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                {SITE_CONFIG.airports.map(a => (
                  <option key={a.id} value={a.code}>
                    {a.city} — {a.name} ({a.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {activeTab === 'outstation' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  From Airport / City
                </label>
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <button
                    type="button"
                    onClick={() => setOutstationTripType('oneway')}
                    className={`px-2 py-0.5 rounded ${outstationTripType === 'oneway' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutstationTripType('roundtrip')}
                    className={`px-2 py-0.5 rounded ${outstationTripType === 'roundtrip' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                  >
                    Round Trip
                  </button>
                </div>
              </div>
              <input
                type="text"
                required
                placeholder="e.g. Pune Airport (PNQ) / Mumbai Airport"
                value={outstationFrom}
                onChange={(e) => setOutstationFrom(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                To Destination Outstation City
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shirdi, Mahabaleshwar, Lonavala, Nashik..."
                value={outstationTo}
                onChange={(e) => setOutstationTo(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>
          </div>
        )}

        {activeTab === 'hourly' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                Pickup Area / Landmark
              </label>
              <input
                type="text"
                required
                placeholder="Enter pickup hotel, airport or meeting point..."
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Clock3 className="w-3.5 h-3.5 text-blue-600" />
                Hourly Rental Package
              </label>
              <select
                value={rentalHours}
                onChange={(e) => setRentalHours(Number(e.target.value))}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                {SITE_CONFIG.hourlyPackages.map(pkg => (
                  <option key={pkg.hours} value={pkg.hours}>
                    {pkg.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* ROW 2: Dates, Times, Passengers, Luggage, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Pickup Date */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              {activeTab === 'roundtrip' ? 'Departure Date' : 'Pickup Date'}
            </label>
            <input
              type="date"
              required
              min={getTodayDateString()}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {activeTab === 'roundtrip' ? 'Departure Time' : 'Pickup Time (24H)'}
            </label>
            <input
              type="time"
              required
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
            />
          </div>

          {/* Passengers & Bags */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              Guests & Luggage
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full min-h-[48px] p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                <option value={1}>1 Pax</option>
                <option value={2}>2 Pax</option>
                <option value={3}>3 Pax</option>
                <option value={4}>4 Pax</option>
                <option value={6}>6 Pax (SUV)</option>
              </select>

              <select
                value={luggage}
                onChange={(e) => setLuggage(Number(e.target.value))}
                className="w-full min-h-[48px] p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
              >
                <option value={1}>1 Bag</option>
                <option value={2}>2 Bags</option>
                <option value={3}>3 Bags</option>
                <option value={4}>4 Bags</option>
                <option value={5}>5+ Bags</option>
              </select>
            </div>
          </div>

          {/* Vehicle Category */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Car className="w-3.5 h-3.5 text-blue-600" />
              Vehicle Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
            >
              <option value="sedan">Sedan (Dzire / Amaze)</option>
              <option value="suv">SUV / MUV (Ertiga / Carens)</option>
              <option value="premium">Premium (Innova Crysta)</option>
              <option value="luxury">Luxury (Mercedes / BMW)</option>
            </select>
          </div>
        </div>

        {/* Optional Return Details for Round Trip or Outstation Round Trip */}
        {(activeTab === 'roundtrip' || (activeTab === 'outstation' && outstationTripType === 'roundtrip')) && (
          <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 animate-in fade-in duration-150">
            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                Return Pickup Date
              </label>
              <input
                type="date"
                min={pickupDate}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full min-h-[44px] p-2.5 bg-white border border-blue-300 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                Return Pickup Time
              </label>
              <input
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full min-h-[44px] p-2.5 bg-white border border-blue-300 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>
          </div>
        )}

        {/* BOTTOM CTA ROW */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 flex-1">
            {(activeTab === 'pickup' || activeTab === 'drop') && (
              <div className="relative flex-1 sm:max-w-xs">
                <input
                  type="text"
                  placeholder="Flight No (e.g. 6E-204, AI-102)"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                  className="w-full min-h-[46px] pl-8 pr-3 py-2 text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl text-slate-900 uppercase focus:ring-2 focus:ring-blue-500"
                />
                <Plane className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
              </div>
            )}
            <span className="hidden md:flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Fixed Fares • 60m Free Airport Waiting
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoadingFare}
            className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider disabled:opacity-50"
          >
            {isLoadingFare ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Calculating Real-time Tariff...</span>
              </>
            ) : (
              <>
                <span>
                  {activeTab === 'roundtrip'
                    ? 'GET ROUND TRIP FARE'
                    : activeTab === 'outstation'
                    ? 'GET OUTSTATION FARE'
                    : activeTab === 'hourly'
                    ? 'GET HOURLY FARE'
                    : 'GET FARE'}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* ========================================================================= */}
      {/* SECTION 6: FARE BREAKDOWN & BOOKING SUMMARY MODAL */}
      {/* ========================================================================= */}
      {showSummaryModal && calculatedFare && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-slate-950 text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  Guaranteed Tariff Quote
                </span>
                <h3 className="text-lg font-black text-white">BOOKING SUMMARY</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Route Summary */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Pickup:</span>
                    <strong className="text-slate-900 text-xs sm:text-sm">
                      {activeTab === 'pickup' ? `${currentAirport.name} (${terminal})` : activeTab === 'outstation' ? outstationFrom : pickupLocation}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-slate-200">
                  <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Destination:</span>
                    <strong className="text-slate-900 text-xs sm:text-sm">
                      {activeTab === 'drop' ? `${currentAirport.name} (${terminal})` : activeTab === 'outstation' ? outstationTo : destinationLocation}
                    </strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Date & Time:</span>
                    <span className="font-bold text-slate-900">{pickupDate} at {pickupTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Vehicle & Pax:</span>
                    <span className="font-bold text-slate-900 capitalize">{selectedCategory} ({passengers} Pax)</span>
                  </div>
                </div>
              </div>

              {/* Itemized Dynamic Fare Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Base Fare & Fuel ({calculatedFare.estimatedDistanceKm} km)</span>
                  <span className="font-bold text-slate-900">{formatINR(calculatedFare.baseFare + calculatedFare.distanceFare)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Airport Entry / Parking Toll</span>
                  <span className="font-bold text-slate-900">{formatINR(calculatedFare.airportToll)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>State Highway Express Tolls</span>
                  <span className="font-bold text-slate-900">{formatINR(calculatedFare.highwayToll)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST & Service Taxes (5%)</span>
                  <span className="font-bold text-slate-900">{formatINR(calculatedFare.gstTax)}</span>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Total All-Inclusive Fare</div>
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-bold mt-0.5">
                      <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">NO SURGE PRICING</span>
                      <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">NO HIDDEN CHARGES</span>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-slate-950">
                    {formatINR(calculatedFare.total)}
                  </div>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowSummaryModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition flex items-center justify-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>EDIT BOOKING</span>
                </button>

                <button
                  type="button"
                  onClick={handleConfirmAndProceed}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-md uppercase tracking-wide"
                >
                  <span>CONFIRM BOOKING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
