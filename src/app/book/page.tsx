'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Briefcase, 
  Edit2, 
  ShieldCheck, 
  Car, 
  Check, 
  Sparkles, 
  ArrowRight,
  Filter,
  CreditCard,
  Lock
} from 'lucide-react';
import { StepIndicator } from '@/components/booking/StepIndicator';
import { VehicleCard } from '@/components/booking/VehicleCard';
import { FareSummary } from '@/components/booking/FareSummary';
import { PassengerForm } from '@/components/booking/PassengerForm';
import { ConfirmationVoucher } from '@/components/booking/ConfirmationVoucher';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { VEHICLES } from '@/data/vehicles';
import { AIRPORTS } from '@/data/airports';
import { BookingState, TripType, Vehicle, VehicleCategory } from '@/types/booking';
import { generateBookingId, getTodayDateString, getDefaultPickupTime, formatCurrency, calculateTripFare } from '@/lib/utils';

function BookingFlowContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search Param Initializers
  const queryType = (searchParams.get('type') as TripType) || 'pickup';
  const queryAirport = searchParams.get('airport') || 'DEL';
  const queryTerminal = searchParams.get('terminal') || 'Terminal 3';
  const queryLoc = searchParams.get('loc') || 'Connaught Place (CP), Central Delhi';
  const queryDate = searchParams.get('date') || getTodayDateString();
  const queryTime = searchParams.get('time') || getDefaultPickupTime();
  const queryPax = Number(searchParams.get('pax')) || 2;
  const queryBags = Number(searchParams.get('bags')) || 2;
  const queryCat = (searchParams.get('cat') as VehicleCategory) || 'all';
  const queryFlight = searchParams.get('flight') || '';

  const airportObj = AIRPORTS.find(a => a.code === queryAirport) || AIRPORTS[0];

  // Active Multi-step (1: Vehicle, 2: Passenger, 3: Review/Pay, 4: Confirmed)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [editSearchOpen, setEditSearchOpen] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<VehicleCategory>(queryCat);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-low' | 'capacity'>('recommended');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);

  // Central Booking State
  const [bookingState, setBookingState] = useState<BookingState>({
    tripType: queryType,
    airport: airportObj,
    terminal: queryTerminal,
    pickupLocation: queryType === 'drop' ? queryLoc : `${airportObj.name} (${queryTerminal})`,
    dropLocation: queryType === 'drop' ? `${airportObj.name} (${queryTerminal})` : queryLoc,
    pickupDate: queryDate,
    pickupTime: queryTime,
    passengers: queryPax,
    luggage: queryBags,
    categoryFilter: queryCat,
    selectedVehicle: VEHICLES.find(v => v.category === queryCat) || VEHICLES[0],
    passengerName: '',
    passengerPhone: '',
    passengerEmail: '',
    flightNumber: queryFlight,
    airline: '',
    meetAndGreet: false,
    nameboardText: '',
    childSeat: false,
    extraLuggageRack: false,
    bilingualChauffeur: false,
    specialInstructions: '',
    isCorporate: false,
    promoCode: '',
    discountAmount: 0,
    paymentMode: 'full',
    bookingId: '',
    createdAt: ''
  });

  // Filter & Sort Vehicles
  const filteredVehicles = VEHICLES.filter(v => {
    if (categoryFilter !== 'all' && v.category !== categoryFilter) {
      return false;
    }
    if (bookingState.passengers > v.passengerCapacity) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.baseFare - b.baseFare;
    if (sortBy === 'capacity') return b.passengerCapacity - a.passengerCapacity;
    return b.rating - a.rating; // recommended
  });

  const handleUpdateBooking = (updates: Partial<BookingState>) => {
    setBookingState(prev => ({ ...prev, ...updates }));
  };

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setBookingState(prev => ({ ...prev, selectedVehicle: vehicle }));
  };

  const handleApplyPromo = (code: string, discount: number) => {
    setBookingState(prev => ({
      ...prev,
      promoCode: code,
      discountAmount: discount
    }));
  };

  const handlePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingState.passengerName || !bookingState.passengerPhone || !bookingState.passengerEmail) {
      alert('Please fill all required passenger details.');
      return;
    }
    setCurrentStep(3); // Go to Review & Pay
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalPaymentConfirm = () => {
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      const generatedId = generateBookingId();
      setBookingState(prev => ({
        ...prev,
        bookingId: generatedId,
        createdAt: new Date().toISOString()
      }));
      setCurrentStep(4); // Confirmed
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      {/* Top Breadcrumb & Step Progress Bar */}
      <StepIndicator
        currentStep={currentStep}
        onStepClick={(step) => {
          if (step < currentStep) {
            setCurrentStep(step);
          }
        }}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full flex-1">
        {/* Step 1 & Step 2 Top Itinerary Bar - Light Theme */}
        {currentStep <= 3 && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 border border-slate-200 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm flex-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-black text-xs shrink-0">
                  {bookingState.airport?.code || 'DEL'}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    {bookingState.tripType === 'pickup' ? 'Pickup Airport' : 'Drop Airport'}
                  </span>
                  <span className="font-bold text-slate-900 truncate block">
                    {bookingState.airport?.name} ({bookingState.terminal})
                  </span>
                </div>
              </div>

              <span className="text-slate-300 hidden sm:inline font-bold">➔</span>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    {bookingState.tripType === 'pickup' ? 'Destination' : 'Pickup Location'}
                  </span>
                  <span className="font-bold text-slate-900 max-w-xs truncate block">
                    {bookingState.dropLocation}
                  </span>
                </div>
              </div>

              <div className="border-l border-slate-200 pl-4 hidden md:flex items-center gap-4 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{bookingState.pickupDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{bookingState.pickupTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>{bookingState.passengers} Pax</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setEditSearchOpen(!editSearchOpen)}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-blue-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 self-end lg:self-center shrink-0 border border-slate-200 cursor-pointer"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{editSearchOpen ? 'Close Edit' : 'Modify Search'}</span>
            </button>
          </div>
        )}

        {/* Collapsible Edit Search Drawer */}
        {editSearchOpen && currentStep <= 3 && (
          <div className="mb-8 animate-in fade-in zoom-in-95 duration-200 w-full">
            <BookingWidget
              initialTripType={bookingState.tripType}
              initialAirportCode={bookingState.airport?.code}
              onSearch={(params) => {
                const updatedAirport = AIRPORTS.find(a => a.code === params.airportCode) || AIRPORTS[0];
                setBookingState(prev => ({
                  ...prev,
                  tripType: params.tripType,
                  airport: updatedAirport,
                  terminal: params.terminal,
                  pickupLocation: params.tripType === 'drop' ? params.location : `${updatedAirport.name} (${params.terminal})`,
                  dropLocation: params.tripType === 'drop' ? `${updatedAirport.name} (${params.terminal})` : params.location,
                  pickupDate: params.pickupDate,
                  pickupTime: params.pickupTime,
                  passengers: params.passengers,
                  luggage: params.luggage,
                  categoryFilter: params.category,
                  flightNumber: params.flightNumber || prev.flightNumber
                }));
                setCategoryFilter(params.category);
                setEditSearchOpen(false);
              }}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 1: CHOOSE VEHICLE */}
        {/* ========================================================================= */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start w-full">
            {/* Left Column: Filter Bar & Vehicles List */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6 w-full">
              {/* Category Filter Pills & Sort Dropdown */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
                  <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1 shrink-0">
                    <Filter className="w-3.5 h-3.5" /> Filter:
                  </span>
                  {[
                    { id: 'all', label: 'All Cabs' },
                    { id: 'sedan', label: 'Sedans' },
                    { id: 'suv', label: 'Innova / SUVs' },
                    { id: 'luxury', label: 'Luxury' },
                    { id: 'tempo', label: 'Minibus' },
                    { id: 'ev', label: 'EV' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setCategoryFilter(tab.id as VehicleCategory)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap shrink-0 cursor-pointer ${
                        categoryFilter === tab.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <span className="text-xs text-slate-400 font-semibold">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs font-bold bg-slate-50 text-slate-800 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="recommended">Best Rated</option>
                    <option value="price-low">Lowest Fare</option>
                    <option value="capacity">Max Capacity</option>
                  </select>
                </div>
              </div>

              {/* Vehicle List */}
              <div className="space-y-3.5 sm:space-y-4 w-full">
                {filteredVehicles.length > 0 ? (
                  filteredVehicles.map(vehicle => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      isSelected={bookingState.selectedVehicle?.id === vehicle.id}
                      onSelect={(v) => {
                        handleVehicleSelect(v);
                        setCurrentStep(2); // Advance to Passenger details
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    />
                  ))
                ) : (
                  <div className="p-8 sm:p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <Car className="w-10 h-10 text-slate-300 mx-auto" />
                    <h3 className="font-bold text-slate-900">No Cabs Match This Passenger Count</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Try lowering the passenger count or selecting &quot;All Cabs&quot; to see available vehicle options.
                    </p>
                    <button
                      onClick={() => setCategoryFilter('all')}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow cursor-pointer"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Floating Fare Summary */}
            <div className="lg:col-span-4 w-full">
              <FareSummary
                vehicle={bookingState.selectedVehicle}
                tripType={bookingState.tripType}
                airportName={bookingState.airport?.name || 'Indira Gandhi Airport'}
                airportCode={bookingState.airport?.code || 'DEL'}
                terminal={bookingState.terminal}
                location={bookingState.dropLocation}
                pickupDate={bookingState.pickupDate}
                pickupTime={bookingState.pickupTime}
                meetAndGreet={bookingState.meetAndGreet}
                childSeat={bookingState.childSeat}
                paymentMode={bookingState.paymentMode}
                onPaymentModeChange={(mode) => setBookingState(prev => ({ ...prev, paymentMode: mode }))}
                discountAmount={bookingState.discountAmount}
                onApplyPromo={handleApplyPromo}
              />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: PASSENGER & FLIGHT DETAILS */}
        {/* ========================================================================= */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start w-full">
            <div className="lg:col-span-8 w-full">
              <PassengerForm
                bookingState={bookingState}
                onChange={handleUpdateBooking}
                onSubmit={handlePassengerSubmit}
                onBack={() => setCurrentStep(1)}
              />
            </div>

            <div className="lg:col-span-4 w-full">
              <FareSummary
                vehicle={bookingState.selectedVehicle}
                tripType={bookingState.tripType}
                airportName={bookingState.airport?.name || 'Indira Gandhi Airport'}
                airportCode={bookingState.airport?.code || 'DEL'}
                terminal={bookingState.terminal}
                location={bookingState.dropLocation}
                pickupDate={bookingState.pickupDate}
                pickupTime={bookingState.pickupTime}
                meetAndGreet={bookingState.meetAndGreet}
                childSeat={bookingState.childSeat}
                paymentMode={bookingState.paymentMode}
                onPaymentModeChange={(mode) => setBookingState(prev => ({ ...prev, paymentMode: mode }))}
                discountAmount={bookingState.discountAmount}
                onApplyPromo={handleApplyPromo}
              />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: REVIEW & PAYMENT CONFIRMATION */}
        {/* ========================================================================= */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 w-full">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950">Review Your Booking</h2>
                  <p className="text-xs text-slate-500">Please verify trip itinerary, vehicle category, and passenger details before confirming.</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-full shrink-0">
                  100% Price Lock
                </span>
              </div>

              {/* Itinerary Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/80 text-xs">
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400 block font-medium">Route:</span>
                    <div className="font-bold text-slate-900 text-sm">
                      {bookingState.airport?.name} ({bookingState.terminal}) ➔ {bookingState.dropLocation}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-400 block font-medium">Pickup Date:</span>
                      <span className="font-bold text-slate-900">{bookingState.pickupDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Pickup Time:</span>
                      <span className="font-bold text-slate-900">{bookingState.pickupTime}</span>
                    </div>
                  </div>

                  {bookingState.flightNumber && (
                    <div>
                      <span className="text-slate-400 block font-medium">Flight Radar Sync:</span>
                      <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {bookingState.flightNumber} {bookingState.airline ? `(${bookingState.airline})` : ''}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 border-t md:border-t-0 md:border-l md:pl-6 border-slate-200">
                  <div>
                    <span className="text-slate-400 block font-medium">Reserved Cab:</span>
                    <div className="font-bold text-slate-900 text-sm">{bookingState.selectedVehicle?.name}</div>
                    <div className="text-slate-500 font-medium">{bookingState.selectedVehicle?.models}</div>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">Primary Passenger:</span>
                    <div className="font-bold text-slate-900">{bookingState.passengerName}</div>
                    <div className="text-slate-600">{bookingState.passengerPhone} • {bookingState.passengerEmail}</div>
                  </div>

                  {bookingState.meetAndGreet && (
                    <div className="text-blue-600 font-bold">
                      Placard Meet & Greet: {bookingState.nameboardText || bookingState.passengerName}
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Section */}
              <div className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold">256-Bit Encrypted Secure Checkout</span>
                  </div>
                  <span className="text-xs text-amber-400 font-bold uppercase">
                    Mode: {bookingState.paymentMode === 'full' ? '100% Online' : bookingState.paymentMode === 'partial' ? '20% Deposit' : 'Pay Driver on Arrival'}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  By clicking Confirm Booking, you agree to AeroGlide Terms of Service and Free Cancellation up to 1 hour before pickup time.
                </p>

                <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="min-h-[48px] px-5 py-2.5 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition text-center cursor-pointer"
                  >
                    ← Edit Passenger Info
                  </button>

                  <button
                    type="button"
                    disabled={isProcessingPayment}
                    onClick={handleFinalPaymentConfirm}
                    className="min-h-[48px] px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer text-center"
                  >
                    {isProcessingPayment ? (
                      <span>Processing Secure Lock...</span>
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5" />
                        <span>Confirm & Lock Airport Cab</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 4: INSTANT BOOKING CONFIRMATION & VOUCHER */}
        {/* ========================================================================= */}
        {currentStep === 4 && (
          <ConfirmationVoucher booking={bookingState} />
        )}
      </main>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-semibold text-slate-700">Loading AeroGlide Booking Engine...</p>
          </div>
        </div>
      }
    >
      <BookingFlowContent />
    </Suspense>
  );
}
