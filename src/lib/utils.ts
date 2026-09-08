import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: 'USD' | 'INR' | 'EUR' | 'GBP' = 'USD'): string {
  switch (currency) {
    case 'INR':
      return `₹${Math.round(amount * 82).toLocaleString('en-IN')}`;
    case 'EUR':
      return `€${(amount * 0.92).toFixed(0)}`;
    case 'GBP':
      return `£${(amount * 0.79).toFixed(0)}`;
    case 'USD':
    default:
      return `$${amount.toFixed(0)}`;
  }
}

export function calculateTripFare(
  baseFare: number,
  ratePerKm: number,
  distanceKm: number = 25,
  isRoundtrip: boolean = false,
  extraServices: { meetAndGreet?: boolean; childSeat?: boolean } = {}
) {
  let tripFare = baseFare + (distanceKm * ratePerKm);
  if (isRoundtrip) {
    tripFare = tripFare * 1.85; // 15% discount on return leg
  }
  if (extraServices.meetAndGreet) {
    tripFare += 8; // Meet & greet fee
  }
  if (extraServices.childSeat) {
    tripFare += 6; // Child seat fee
  }

  const taxes = Math.round(tripFare * 0.05); // 5% GST/Tax
  const airportFee = 4; // Airport entry/toll fee
  const total = Math.round(tripFare + taxes + airportFee);

  return {
    baseFare: Math.round(tripFare),
    taxes,
    airportFee,
    total
  };
}

export function generateBookingId(): string {
  const prefix = 'AG';
  const num = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${num}`;
}

export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function getTomorrowDateString(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

export function getDefaultPickupTime(): string {
  const now = new Date();
  now.setHours(now.getHours() + 2);
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = '00';
  return `${hours}:${minutes}`;
}

