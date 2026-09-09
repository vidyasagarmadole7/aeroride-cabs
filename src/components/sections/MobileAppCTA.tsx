'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Car, ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

export const MobileAppCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-blue-950 to-slate-950 text-white relative overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Seamless Airport Travel in Your Pocket
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans leading-tight">
              Your Ride. Your Time. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Your Way.
              </span>
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-xl leading-relaxed font-medium">
              Pre-book airport cabs in under 60 seconds, track your assigned driver on live radar maps, and access instant GST travel receipts anytime.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <Car className="w-4 h-4 text-slate-950" />
                <span>BOOK A CAB ONLINE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => alert('AeroGlide mobile app is launching soon on Android & iOS! You can book directly on our mobile web browser.')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>DOWNLOAD APP (SOON)</span>
              </button>
            </div>
          </div>

          {/* Right Floating Badge Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white space-y-4 max-w-xs w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                  AG
                </div>
                <div>
                  <h4 className="font-bold text-sm">AeroGlide Mobility</h4>
                  <div className="flex text-amber-400 text-xs">★★★★★ 4.9/5</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Fixed Fares Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>60 Mins Free Touchdown Waiting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

