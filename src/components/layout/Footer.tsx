import React from 'react';
import Link from 'next/link';
import { 
  Plane, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200 pt-12 sm:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-10 sm:pb-12 border-b border-slate-200">
          <div className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-600 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-950 font-bold text-sm">On-Time Guarantee</h4>
              <p className="text-xs text-slate-500 mt-0.5">Chauffeur arrives 15 mins early at your doorstep.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-600 shrink-0">
              <Plane className="w-5 h-5 -rotate-45" />
            </div>
            <div>
              <h4 className="text-slate-950 font-bold text-sm">Flight Delay Buffer</h4>
              <p className="text-xs text-slate-500 mt-0.5">Real-time radar sync + 60 mins free touchdown wait.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-950 font-bold text-sm">100% Fixed Flat Fares</h4>
              <p className="text-xs text-slate-500 mt-0.5">Zero midnight surge, zero rain surge. Tolls itemized.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-xl text-purple-600 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-950 font-bold text-sm">Flexible Payments</h4>
              <p className="text-xs text-slate-500 mt-0.5">Pay online, 20% advance deposit, or pay driver upon arrival.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 py-10 sm:py-12">
          {/* Brand & About */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-xs">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-950">
                  Aero<span className="text-blue-600">Glide</span> Cabs
                </span>
                <span className="text-[11px] text-slate-500 font-semibold uppercase">Punctual & Premium Airport Mobility</span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-2 sm:pr-6">
              AeroGlide Cabs is a premium airport transfer network offering seamless, pre-booked chauffeur rides across 50+ global aviation hubs. Rated 4.9/5 by 500,000+ satisfied passengers.
            </p>
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>24/7 Hotline: <strong className="text-slate-950">+1 (800) 456-AERO</strong> / +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Email: <strong className="text-slate-950">support@aeroglidecabs.com</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Global Ops Hub: Terminal 3 Aviation Boulevard, Aerocity</span>
              </div>
            </div>
          </div>

          {/* Airport Services */}
          <div className="space-y-3">
            <h4 className="text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider">Airport Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/book?type=pickup" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Airport Pickup Chauffeur
                </Link>
              </li>
              <li>
                <Link href="/book?type=drop" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Airport Drop Service
                </Link>
              </li>
              <li>
                <Link href="/book?type=roundtrip" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Roundtrip Transfers
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Corporate Airport Travel
                </Link>
              </li>
              <li>
                <Link href="/book?type=hourly" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Hourly Airport Rental
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> VIP Luxury Chauffeurs
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Airport Hubs */}
          <div className="space-y-3">
            <h4 className="text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider">Major Airports</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/book?airport=DEL" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Delhi Airport (DEL)
                </Link>
              </li>
              <li>
                <Link href="/book?airport=BOM" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Mumbai Airport (BOM)
                </Link>
              </li>
              <li>
                <Link href="/book?airport=BLR" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Bengaluru Airport (BLR)
                </Link>
              </li>
              <li>
                <Link href="/book?airport=HYD" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Hyderabad Airport (HYD)
                </Link>
              </li>
              <li>
                <Link href="/book?airport=DXB" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Dubai Airport (DXB)
                </Link>
              </li>
              <li>
                <Link href="/book?airport=LHR" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> London Heathrow (LHR)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick & Legal */}
          <div className="space-y-3">
            <h4 className="text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/track" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Track Live Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> 24/7 Airport Support Desk
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Fleet Safety & Sanitization
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> Free Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-blue-600 transition flex items-center gap-1.5 font-medium">
                  <ArrowRight className="w-3 h-3 text-slate-400" /> GST Billing Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} AeroGlide Mobility Solutions. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-400 font-medium">Payment Partners:</span>
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-bold text-[10px]">VISA</span>
              <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-bold text-[10px]">Mastercard</span>
              <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-bold text-[10px]">AMEX</span>
              <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-bold text-[10px]">Apple Pay</span>
              <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-bold text-[10px]">UPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
