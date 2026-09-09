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
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-14 sm:pt-18 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Trust Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-12 sm:pb-14 border-b border-slate-900">
          <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-850">
            <div className="p-2.5 bg-amber-400/10 border border-amber-400/20 rounded-xl text-amber-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">On-Time Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Chauffeur arrives 15 mins early at your doorstep.</p>
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
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Zero midnight surge, zero rain surge. Tolls itemized.</p>
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

        {/* Multi-Column Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 py-12">
          {/* Column 1: Brand & Contact Overview */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white">
                  Aero<span className="text-blue-500">Glide</span>
                </span>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded tracking-wider uppercase">
                  CABS
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2 sm:pr-6 font-medium">
              AeroGlide Cabs is India&apos;s premier airport mobility and corporate chauffeur network, operating across 25+ major aviation hubs with guaranteed fixed tariffs and flight radar monitoring.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Helpline: <strong className="text-white">{SITE_CONFIG.phone}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Support: <strong className="text-white">{SITE_CONFIG.email}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>HQ: {SITE_CONFIG.address}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#25D366] text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Services</h4>
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
                <Link href="/book?type=outstation" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Outstation Cabs
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Corporate Mobility
                </Link>
              </li>
              <li>
                <Link href="/book?type=hourly" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Hourly Chauffeur
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> About AeroGlide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Contact Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Fleet Safety & Hygiene
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Free Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Quick Portals */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Support & Help</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/track" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Track My Ride
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Airport Helpdesk Directory
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> GST Billing Portal
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Help Center & FAQs
                </Link>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Emergency SOS Desk
                </a>
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
            <span className="text-slate-500">Payment Modes Accepted:</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">UPI</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">Google Pay</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">PhonePe</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">VISA</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">Mastercard</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded font-bold text-[10px]">Cash to Driver</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
