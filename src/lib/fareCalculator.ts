import { SITE_CONFIG } from '@/config/siteConfig';

export interface FareCalculationInput {
  baseFare: number;
  ratePerKm: number;
  distanceKm?: number;
  isRoundtrip?: boolean;
  rentalHours?: number;
  meetAndGreet?: boolean;
  childSeat?: boolean;
}

export interface FareBreakdownResult {
  baseFare: number;
  distanceFare: number;
  airportToll: number;
  highwayToll: number;
  addonsCost: number;
  subtotal: number;
  gstTax: number;
  total: number;
  savings: number;
  estimatedDistanceKm: number;
}

/**
 * Calculates itemized and total transparent fare for AeroGlide Cabs.
 * Formula: Base Fare + Distance Fare + Airport Entry Toll + Highway Tolls + Addons + 5% GST
 */
export function calculateDynamicFare(input: FareCalculationInput): FareBreakdownResult {
  const distance = input.distanceKm && input.distanceKm > 0 ? input.distanceKm : 28;
  const multiplier = input.isRoundtrip ? 1.85 : 1; // 15% discount on roundtrip return leg

  const rawBaseFare = input.baseFare;
  const rawDistanceFare = distance * input.ratePerKm;
  const basePlusDistance = (rawBaseFare + rawDistanceFare) * multiplier;

  const airportToll = SITE_CONFIG.airportEntryToll;
  const highwayToll = input.isRoundtrip ? SITE_CONFIG.stateTollsAvg * 2 : SITE_CONFIG.stateTollsAvg;

  let addonsCost = 0;
  if (input.meetAndGreet) addonsCost += 299;
  if (input.childSeat) addonsCost += 199;

  const subtotalBeforeTax = basePlusDistance + airportToll + highwayToll + addonsCost;
  const gstTax = Math.round(subtotalBeforeTax * SITE_CONFIG.gstRate);
  const total = Math.round(subtotalBeforeTax + gstTax);

  // Calculate savings compared to surge-based competitor pricing (approx 1.25x)
  const savings = Math.round(total * 0.2);

  return {
    baseFare: Math.round(rawBaseFare * multiplier),
    distanceFare: Math.round(rawDistanceFare * multiplier),
    airportToll,
    highwayToll,
    addonsCost,
    subtotal: Math.round(subtotalBeforeTax),
    gstTax,
    total,
    savings,
    estimatedDistanceKm: input.isRoundtrip ? distance * 2 : distance
  };
}

/**
 * Formats Indian Rupee (INR) or chosen currency cleanly
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

