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
  Clock, 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { AuthModal } from './AuthModal';
import { SITE_CONFIG } from '@/config/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Airport Transfers', href: '/', exact: true },
    { label: 'Outstation', href: '/#outstation' },
    { label: 'Hourly Chauffeur', href: '/#hourly' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Track Ride', href: '/track' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* 1. Slim Top Information Bar */}
      <div className="bg-slate-950 text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] border-b border-slate-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Flight Tracking
            </span>
            <span>•</span>
            <span>24/7 Airport Assistance</span>
            <span>•</span>
            <span>Fixed Transparent Fares</span>
            <span>•</span>
            <span>Professional Chauffeurs</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition"
            >
              <Phone className="w-3 h-3 fill-amber-400" />
              <span>24/7 Concierge: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5 sm:py-3'
            : 'bg-white border-b border-slate-200 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-sans">
                    Aero<span className="text-blue-600">Glide</span>
                  </span>
                  <span className="text-[10px] bg-amber-400 text-slate-950 font-extrabold px-1.5 py-0.5 rounded tracking-wider uppercase">
                    CABS
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-0.5 hidden sm:block">
                  Airport Mobility & Chauffeurs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = link.exact
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'text-blue-700 bg-blue-50 font-extrabold'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Sign In</span>
              </button>

              <Link
                href="/book"
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1.5 uppercase tracking-wide cursor-pointer"
              >
                <Car className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                <span>BOOK A CAB</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/book"
                className="px-3 py-1.5 bg-amber-400 text-slate-950 font-black text-xs rounded-lg shadow-xs"
              >
                BOOK
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-slate-950 bg-slate-100 rounded-xl border border-slate-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between transition"
                >
                  <span>{link.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-300" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 border border-slate-200 text-blue-700 font-bold text-xs rounded-xl"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Concierge: {SITE_CONFIG.phone}</span>
              </a>

              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-xs"
              >
                <Car className="w-4 h-4" />
                <span>BOOK AN AIRPORT CAB NOW</span>
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
