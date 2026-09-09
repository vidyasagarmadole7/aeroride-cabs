export type TripType = 'pickup' | 'drop' | 'roundtrip' | 'outstation' | 'hourly';

export type VehicleCategory = 'all' | 'sedan' | 'suv' | 'premium' | 'luxury' | 'tempo' | 'ev';

export interface Airport {
  id: string;
  name: string;
  code: string; // IATA code e.g. DEL, JFK, BOM, LHR
  city: string;
  state?: string;
  country: string;
  terminals: string[];
  popular?: boolean;
  image: string;
  tagline?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  models: string; // e.g. "Toyota Etios / Maruti Dzire / Hyundai Aura"
  passengerCapacity: number;
  luggageCapacity: number;
  ac: boolean;
  hasWifi?: boolean;
  hasBottleWater?: boolean;
  rating: number;
  totalTrips: number;
  baseFare: number;
  ratePerKm: number;
  estimatedMins: number;
  image: string;
  features: string[];
  tag?: string; // e.g. "Best Seller", "Executive Pick", "Family Choice"
  description: string;
  cancellationPolicy: string;
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  airportCode: string;
  city: string;
  distanceKm: number;
  durationText: string;
  startingFare: number;
  popularTag?: string;
  image: string;
}

export interface AirportService {
  id: string;
  title: string;
  iconName: string;
  badge?: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  ctaText: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  review: string;
  route: string;
  tripType: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'flight' | 'pricing' | 'service' | 'corporate';
}

export interface BookingState {
  tripType: TripType;
  airport: Airport | null;
  terminal: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate?: string;
  returnTime?: string;
  rentalPackageHours?: number;
  passengers: number;
  luggage: number;
  categoryFilter: VehicleCategory;
  selectedVehicle: Vehicle | null;
  // Passenger details
  passengerName: string;
  passengerPhone: string;
  passengerEmail: string;
  flightNumber: string;
  airline: string;
  meetAndGreet: boolean;
  nameboardText: string;
  childSeat: boolean;
  extraLuggageRack: boolean;
  bilingualChauffeur: boolean;
  specialInstructions: string;
  // Corporate
  isCorporate: boolean;
  companyName?: string;
  gstin?: string;
  // Promo & Payment
  promoCode: string;
  discountAmount: number;
  paymentMode: 'full' | 'partial' | 'driver';
  bookingId?: string;
  createdAt?: string;
}

export interface DestinationCity {
  id: string;
  name: string;
  country: string;
  airportName: string;
  airportCode: string;
  image: string;
  startingFare: number;
  avgTransferTime: string;
  fleetCount: number;
}

