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
  CheckCircle2,
  Plus,
  Minus,
  Navigation
} from 'lucide-react';
import { Airport, TripType, VehicleCategory } from '@/types/booking';
import { AIRPORTS } from '@/data/airports';
import { AirportSelector } from './AirportSelector';
import { LocationInput } from './LocationInput';
import { getTodayDateString, getTomorrowDateString, getDefaultPickupTime } from '@/lib/utils';

interface BookingWidgetProps {
  initialTripType?: TripType;
  initialAirportCode?: string;
  className?: string;
  onSearch?: (searchParams: any) => void;
  compact?: boolean;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  initialTripType = 'pickup',
  initialAirportCode = 'DEL',
  className = '',
  onSearch,
  compact = false
}) => {
  const router = useRouter();

  // Tab State
  const [tripType, setTripType] = useState<TripType>(initialTripType);

  // Form State
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(
    AIRPORTS.find(a => a.code === initialAirportCode) || AIRPORTS[0]
  );
  const [terminal, setTerminal] = useState<string>(
    selectedAirport?.terminals[0] || 'Terminal 3 (International & Domestic)'
  );
  const [location, setLocation] = useState<string>('Connaught Place (CP), Central Delhi');
  const [pickupDate, setPickupDate] = useState<string>(getTodayDateString());
  const [pickupTime, setPickupTime] = useState<string>(getDefaultPickupTime());
  const [returnDate, setReturnDate] = useState<string>(getTomorrowDateString());
  const [returnTime, setReturnTime] = useState<string>('18:00');
  const [rentalHours, setRentalHours] = useState<number>(8);
  const [passengers, setPassengers] = useState<number>(2);
  const [luggage, setLuggage] = useState<number>(2);
  const [categoryFilter, setCategoryFilter] = useState<VehicleCategory>('all');
  const [flightNumber, setFlightNumber] = useState<string>('');

  // Stepper popup
  const [paxModalOpen, setPaxModalOpen] = useState(false);

  const handleAirportChange = (airport: Airport) => {
    setSelectedAirport(airport);
    setTerminal(airport.terminals[0] || 'Terminal 1');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const searchParams = {
      tripType,
      airportCode: selectedAirport?.code || 'DEL',
      terminal,
      location,
      pickupDate,
      pickupTime,
      returnDate: tripType === 'roundtrip' ? returnDate : undefined,
      returnTime: tripType === 'roundtrip' ? returnTime : undefined,
      rentalHours: tripType === 'hourly' ? rentalHours : undefined,
      passengers,
      luggage,
      category: categoryFilter,
      flightNumber
    };

    if (onSearch) {
      onSearch(searchParams);
    } else {
      const query = new URLSearchParams({
        type: tripType,
        airport: selectedAirport?.code || 'DEL',
        terminal,
        loc: location,
        date: pickupDate,
        time: pickupTime,
        pax: String(passengers),
        bags: String(luggage),
        cat: categoryFilter,
        flight: flightNumber
      }).toString();

      router.push(`/book?${query}`);
    }
  };

  return (
    <div className={`w-full bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/80 overflow-hidden ${className}`}>
      {/* Premium Reservation Console Tabs */}
      <div className="flex bg-slate-100/70 border-b border-slate-200/80 p-1.5 gap-1 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setTripType('pickup')}
          className={`flex-1 min-w-[125px] sm:min-w-0 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            tripType === 'pickup'
              ? 'bg-white text-slate-950 shadow-xs border border-slate-200/60 font-extrabold'
              : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
          }`}
        >
          <PlaneLanding className={`w-3.5 h-3.5 shrink-0 ${tripType === 'pickup' ? 'text-amber-500' : 'text-slate-400'}`} />
          <span>Airport Pickup</span>
        </button>

        <button
          type="button"
          onClick={() => setTripType('drop')}
          className={`flex-1 min-w-[125px] sm:min-w-0 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            tripType === 'drop'
              ? 'bg-white text-slate-950 shadow-xs border border-slate-200/60 font-extrabold'
              : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
          }`}
        >
          <PlaneTakeoff className={`w-3.5 h-3.5 shrink-0 ${tripType === 'drop' ? 'text-amber-500' : 'text-slate-400'}`} />
          <span>Airport Drop</span>
        </button>

        <button
          type="button"
          onClick={() => setTripType('roundtrip')}
          className={`flex-1 min-w-[125px] sm:min-w-0 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            tripType === 'roundtrip'
              ? 'bg-white text-slate-950 shadow-xs border border-slate-200/60 font-extrabold'
              : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
          }`}
        >
          <Repeat className={`w-3.5 h-3.5 shrink-0 ${tripType === 'roundtrip' ? 'text-amber-500' : 'text-slate-400'}`} />
          <span>Round Trip</span>
          <span className="hidden md:inline-block text-[9px] bg-amber-100 text-amber-900 px-1 py-0.2 rounded font-bold">
            -15%
          </span>
        </button>

        <button
          type="button"
          onClick={() => setTripType('hourly')}
          className={`flex-1 min-w-[125px] sm:min-w-0 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            tripType === 'hourly'
              ? 'bg-white text-slate-950 shadow-xs border border-slate-200/60 font-extrabold'
              : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
          }`}
        >
          <Clock3 className={`w-3.5 h-3.5 shrink-0 ${tripType === 'hourly' ? 'text-amber-500' : 'text-slate-400'}`} />
          <span>Hourly Chauffeur</span>
        </button>
      </div>

      {/* Main Reservation Form */}
      <form onSubmit={handleSearchSubmit} className="p-4 sm:p-6 lg:p-7 space-y-4">
        {/* Row 1: Airport & Location Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {tripType === 'drop' ? (
            <>
              <LocationInput
                value={location}
                onChange={setLocation}
                label="Pickup Address / Hotel / Residence"
                placeholder="Enter pickup address, hotel or street..."
                airportCode={selectedAirport?.code || 'DEL'}
                iconType="pickup"
              />
              <AirportSelector
                selectedAirport={selectedAirport}
                selectedTerminal={terminal}
                onSelectAirport={handleAirportChange}
                onSelectTerminal={setTerminal}
                label="Destination Airport"
                placeholder="Select departure airport..."
              />
            </>
          ) : (
            <>
              <AirportSelector
                selectedAirport={selectedAirport}
                selectedTerminal={terminal}
                onSelectAirport={handleAirportChange}
                onSelectTerminal={setTerminal}
                label="Arrival Airport"
                placeholder="Select arrival airport..."
              />
              <LocationInput
                value={location}
                onChange={setLocation}
                label={tripType === 'hourly' ? 'City / Area for Chauffeur Drive' : 'Destination / Hotel / Drop Address'}
                placeholder="Enter destination area, hotel, or street..."
                airportCode={selectedAirport?.code || 'DEL'}
                iconType="drop"
              />
            </>
          )}
        </div>

        {/* Row 2: Date, Time, Passengers & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Pickup Date */}
          <div className="w-full">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 truncate">
                <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                Pickup Date
              </span>
              <div className="flex items-center gap-1 text-[10px] text-amber-600 font-bold shrink-0 ml-1">
                <button
                  type="button"
                  onClick={() => setPickupDate(getTodayDateString())}
                  className="hover:underline"
                >
                  Today
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setPickupDate(getTomorrowDateString())}
                  className="hover:underline"
                >
                  Tmrw
                </button>
              </div>
            </label>
            <input
              type="date"
              required
              min={getTodayDateString()}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs cursor-pointer"
            />
          </div>

          {/* Pickup Time */}
          <div className="w-full">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Pickup Time (24H)
            </label>
            <input
              type="time"
              required
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs cursor-pointer"
            />
          </div>

          {/* Passengers & Bags Modal Stepper */}
          <div className="relative w-full">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Passengers & Luggage
            </label>
            <button
              type="button"
              onClick={() => setPaxModalOpen(!paxModalOpen)}
              className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 text-left text-xs sm:text-sm font-bold text-slate-900 shadow-2xs flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2 truncate">
                <span>{passengers} Guests</span>
                <span className="text-slate-300">•</span>
                <span>{luggage} Bags</span>
              </div>
              <span className="text-[11px] text-amber-600 font-bold ml-1 shrink-0">Edit</span>
            </button>

            {/* Stepper Popup */}
            {paxModalOpen && (
              <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 space-y-3.5 animate-in fade-in zoom-in-95 duration-150 w-full max-w-full">
                {/* Passengers */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">Passengers</div>
                    <div className="text-[11px] text-slate-500">Ages 2 and above</div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={passengers <= 1}
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-black text-sm w-4 text-center text-slate-900">{passengers}</span>
                    <button
                      type="button"
                      disabled={passengers >= 12}
                      onClick={() => setPassengers(Math.min(12, passengers + 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Luggage */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">Luggage Cases</div>
                    <div className="text-[11px] text-slate-500">Check-in size bags</div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={luggage <= 0}
                      onClick={() => setLuggage(Math.max(0, luggage - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-black text-sm w-4 text-center text-slate-900">{luggage}</span>
                    <button
                      type="button"
                      disabled={luggage >= 10}
                      onClick={() => setLuggage(Math.min(10, luggage + 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPaxModalOpen(false)}
                  className="w-full py-2 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition shadow-xs"
                >
                  Confirm Capacity
                </button>
              </div>
            )}
          </div>

          {/* Vehicle Category or Rental Hours */}
          {tripType === 'hourly' ? (
            <div className="w-full">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Clock3 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                Hourly Package
              </label>
              <select
                value={rentalHours}
                onChange={(e) => setRentalHours(Number(e.target.value))}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs cursor-pointer truncate"
              >
                <option value={4}>4 Hours / 40 km</option>
                <option value={8}>8 Hours / 80 km (Full Day Executive)</option>
                <option value={12}>12 Hours / 120 km (Extended Day)</option>
              </select>
            </div>
          ) : (
            <div className="w-full">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                Chauffeur Class
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as any)}
                className="w-full min-h-[48px] p-3 bg-white border border-slate-300 rounded-xl hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs cursor-pointer truncate"
              >
                <option value="all">All Chauffeur Classes</option>
                <option value="sedan">Executive Sedan (Mercedes E / BMW 5)</option>
                <option value="suv">Premium SUV (Innova Crysta / Alphard)</option>
                <option value="luxury">First Class VIP (Mercedes S / Maybach)</option>
                <option value="tempo">Executive Minibus (12 Pax)</option>
                <option value="ev">Eco-Green Luxury EV (BMW i7)</option>
              </select>
            </div>
          )}
        </div>

        {/* Optional Round Trip Details */}
        {tripType === 'roundtrip' && (
          <div className="p-3.5 sm:p-4 bg-amber-50/60 border border-amber-200/80 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 animate-in fade-in duration-150">
            <div>
              <label className="block text-[11px] font-bold text-amber-950 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                Return Pickup Date
              </label>
              <input
                type="date"
                min={pickupDate}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full min-h-[44px] p-2.5 bg-white border border-amber-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-amber-950 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                Return Pickup Time
              </label>
              <input
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full min-h-[44px] p-2.5 bg-white border border-amber-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
        )}

        {/* Bottom CTA Row: Flight Radar Info + "Find My Chauffeur" Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-slate-100">
          <div className="flex items-center gap-2.5 flex-1">
            <div className="relative flex-1 sm:max-w-xs">
              <input
                type="text"
                placeholder="Flight No. (e.g. BA-142, AI-102)"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                className="w-full min-h-[44px] pl-8 pr-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 text-slate-900 uppercase"
              />
              <Plane className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5 shrink-0" />
            </div>
            <span className="hidden sm:flex items-center gap-1 text-[11px] text-slate-600 font-semibold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              60m Free Waiting
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer shrink-0 tracking-wide"
          >
            <span>Find My Chauffeur</span>
            <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
          </button>
        </div>
      </form>
    </div>
  );
};
