'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Plane, 
  Car, 
  PhoneCall, 
  User, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown, 
  Building2, 
  Search, 
  Sparkles,
  Clock,
  Compass,
  ArrowRight
} from 'lucide-react';
import { AuthModal } from './AuthModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR' | 'GBP'>('USD');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Airport Transfers', href: '/', exact: true },
    { label: 'Outstation', href: '/book?type=roundtrip' },
    { label: 'Hourly Chauffeur', href: '/book?type=hourly' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Track Ride', href: '/track' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-slate-200/80 py-2 sm:py-2.5'
            : 'bg-white border-b border-slate-150 py-2.5 sm:py-3'
        }`}
      >
        {/* Minimal Luxury Top Utility Bar */}
        <div className="hidden lg:block border-b border-slate-100 pb-1.5 mb-1.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] text-slate-500 font-medium tracking-wide">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Flight Radar Synchronization</span>
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1 text-slate-600">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>60-Minute Complimentary Touchdown Waiting</span>
              </span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="tel:+18004562376"
                className="flex items-center gap-1.5 font-semibold text-slate-800 hover:text-amber-600 transition"
              >
                <PhoneCall className="w-3 h-3 text-amber-500" />
                <span>24/7 Concierge Desk:</span>
                <span className="font-bold text-slate-950">+1 (800) 456-AERO</span>
              </a>
              <span className="text-slate-200">•</span>
              <div className="flex items-center gap-1 text-slate-600">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="bg-transparent text-slate-700 rounded px-1 py-0.5 border-none focus:outline-none cursor-pointer text-[11px] font-bold"
                >
                  <option value="USD">USD ($)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo Treatment */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-xl bg-gradient-to-tr from-slate-950 to-slate-850 border border-slate-800 flex items-center justify-center text-amber-400 shadow-xs group-hover:border-amber-400/40 transition">
                <Plane className="w-4 h-4 -rotate-45 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-950 font-sans">
                    AERO<span className="text-amber-600 font-black">GLIDE</span>
                  </span>
                  <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 text-[9px] font-extrabold rounded tracking-widest border border-slate-200 uppercase">
                    CHAUFFEUR
                  </span>
                </div>
                <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase -mt-0.5 hidden sm:block">
                  Executive Airport Transfers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.exact
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'text-slate-950 bg-slate-100/80 font-bold'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-xl transition flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Sign In</span>
              </button>

              <Link
                href="/book"
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 tracking-wide"
              >
                <span>Book Airport Cab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger & Quick Book */}
            <div className="flex items-center gap-2 sm:hidden">
              <Link
                href="/book"
                className="px-3 py-1.5 bg-amber-400 text-slate-950 font-black text-[11px] rounded-lg shadow-xs"
              >
                Book
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-slate-950 bg-slate-50 rounded-xl border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-xl">
            <div className="grid grid-cols-1 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:text-amber-600 hover:bg-slate-50 flex items-center justify-between transition"
                >
                  <span>{link.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-300" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:+18004562376"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs rounded-xl"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
                <span>24/7 Concierge (+1 800 456-AERO)</span>
              </a>

              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-xs"
              >
                <Car className="w-4 h-4" />
                <span>Book Airport Chauffeur</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
};
