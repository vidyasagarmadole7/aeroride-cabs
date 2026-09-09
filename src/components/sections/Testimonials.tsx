'use client';

import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, User, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Rohan Deshmukh',
      role: 'Business Traveler',
      city: 'Pune',
      tripType: 'Pune Airport (PNQ) → Hinjewadi Phase 1',
      rating: 5,
      review: 'From touchdown to my hotel, everything was flawless. My flight from Delhi landed 20 minutes early, but my driver was already parked at Terminal 1 with my name on a board. Super smooth experience!'
    },
    {
      id: 'rev-2',
      name: 'Dr. Priya & Sameer Sen',
      role: 'Family Vacation',
      city: 'Mumbai',
      tripType: 'Mumbai Airport (BOM T2) → South Mumbai',
      rating: 5,
      review: 'Traveling with elderly parents and 4 large bags is usually stressful, but AeroGlide made it effortless. The Innova Crysta was spotless, AC was crisp, and the driver handled all our luggage with care.'
    },
    {
      id: 'rev-3',
      name: 'Amitabh Sharma',
      role: 'Corporate Travel Lead',
      city: 'Bengaluru',
      tripType: 'BLR Airport T2 → Whitefield Tech Zone',
      rating: 5,
      review: 'We use AeroGlide for all our international client and executive transfers in Bengaluru and Delhi. 100% on-time record, fixed GST invoices, and zero surge pricing even during peak rain hours.'
    },
    {
      id: 'rev-4',
      name: 'Meera Nambiar',
      role: 'Solo International Traveler',
      city: 'Hyderabad',
      tripType: 'Hyderabad Airport (HYD) → Jubilee Hills',
      rating: 5,
      review: 'As a woman traveling alone on a 2:00 AM flight, safety is my number one priority. The driver details were sent 2 hours before landing, live tracking was active, and the driver was extremely polite.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Guest Experiences
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Endorsed by Discerning Travelers
            What Our Travellers Say
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Read verified feedback from corporate leaders, international consultants, and families who rely on AeroGlide for their airport transfers.
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            Over 50,000 corporate leaders, families, and flyers rely on AeroGlide for punctual airport journeys.
          </p>
        </div>

        {/* Testimonials 2x2 Grid with Elegant Quote Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAFBFD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Route Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-slate-200 text-slate-600">
                    {t.tripType}
                  </span>
                </div>
        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm">
          <Quote className="w-12 h-12 text-blue-100 absolute top-6 right-8 hidden sm:block" />

                {/* Large Quotation */}
                <blockquote className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
          {/* Current Slide */}
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Stars & Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-950">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                {reviews[currentIndex].tripType}
              </span>
            </div>

                <div className="text-right hidden sm:block">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Route</div>
                  <div className="text-xs text-slate-700 font-semibold">{t.route}</div>
            {/* Quotation */}
            <blockquote className="text-base sm:text-xl text-slate-900 font-medium leading-relaxed italic">
              &ldquo;{reviews[currentIndex].review}&rdquo;
            </blockquote>

            {/* Reviewer Details */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-950">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {reviews[currentIndex].role} • {reviews[currentIndex].city}
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-emerald-700 font-bold hidden sm:flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Airport Ride
              </span>
            </div>
          ))}
          </div>

          {/* Controls: Prev / Next & Indicators */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentIndex === idx ? 'bg-blue-600 w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-4">
          * Clearly marked demo sample reviews representative of standard AeroGlide traveler feedback.
        </p>
      </div>
    </section>
  );
};
