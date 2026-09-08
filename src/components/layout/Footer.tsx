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
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-14 sm:pt-18 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-12 sm:pb-14 border-b border-slate-900">
          <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-850">
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-xl text-amber-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">On-Time Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Chauffeur reports 15 mins early at your doorstep.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-850">
            <div className="p-2.5 bg-blue-400/10 border border-blue-400/20 rounded-xl text-blue-400 shrink-0">
              <Plane className="w-5 h-5 -rotate-45" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Flight Delay Buffer</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Real-time radar sync + 60 mins free touchdown wait.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-850">
            <div className="p-2.5 bg-emerald-400/10 border border-emerald-400/20 rounded-xl text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Fixed Flat Fares</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Zero midnight surge, zero rain surge. All tolls itemized.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-850">
            <div className="p-2.5 bg-purple-400/10 border border-purple-400/20 rounded-xl text-purple-400 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Flexible Payments</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Pay online, 20% deposit, or pay driver on arrival.</p>
            </div>
          </div>
        </div>

        {/* 5 Organized Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 py-12">
          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                <Plane className="w-4 h-4 -rotate-45" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black text-white">
                  AERO<span className="text-amber-400">GLIDE</span>
                </span>
                <span className="text-[9px] bg-slate-900 text-slate-300 font-bold px-1.5 py-0.5 rounded border border-slate-800 uppercase tracking-widest">
                  CHAUFFEUR
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2 sm:pr-6 font-medium">
              AeroGlide Mobility Solutions is an international executive airport transfer network providing private, pre-arranged chauffeur services across 50+ aviation hubs.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Global Desk: <strong className="text-white">+1 (800) 456-AERO</strong> / +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Concierge: <strong className="text-white">support@aeroglidecabs.com</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>HQ: Terminal 3 Aviation Boulevard, Aerocity Hub</span>
              </div>
            </div>
          </div>

          {/* Column 2: Airport Transfers */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Airport Transfers</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/book?type=pickup" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Airport Pickup Transfer
                </Link>
              </li>
              <li>
                <Link href="/book?type=drop" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Airport Curbside Drop
                </Link>
              </li>
              <li>
                <Link href="/book?type=roundtrip" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Roundtrip Transfers
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Corporate Transfers
                </Link>
              </li>
              <li>
                <Link href="/book?type=hourly" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Hourly Chauffeur Drive
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Chauffeur Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Chauffeur Services</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/book?cat=sedan" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Executive Sedan Class
                </Link>
              </li>
              <li>
                <Link href="/book?cat=suv" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Premium SUV Class
                </Link>
              </li>
              <li>
                <Link href="/book?cat=luxury" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> First Class VIP (Mercedes S)
                </Link>
              </li>
              <li>
                <Link href="/book?cat=tempo" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Executive Minibus (12 Pax)
                </Link>
              </li>
              <li>
                <Link href="/book?cat=ev" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Eco-Green Luxury EV
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Popular Routes & Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/track" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Track Live Chauffeur
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Airport Helpdesk Directory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Safety & Sanitization
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Free Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> GST Billing Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} AeroGlide Mobility Solutions. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-600">Payment Partners:</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">VISA</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">Mastercard</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">AMEX</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">Apple Pay</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">UPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
