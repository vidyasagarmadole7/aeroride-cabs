'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, Car } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 sm:py-3 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center gap-2">
        <a
          href="tel:+18004562376"
          className="flex flex-col items-center justify-center px-3 py-2 bg-slate-50 border border-slate-200 text-blue-600 rounded-xl text-xs font-bold shrink-0 min-h-[44px] min-w-[58px] active:bg-slate-100 transition"
          aria-label="Call 24/7 Helpline"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-bold">24/7 Call</span>
        </a>

        <Link
          href="/book"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md shadow-amber-400/20 active:scale-[0.98] transition min-h-[44px]"
        >
          <Car className="w-4 h-4 text-slate-950 shrink-0" />
          <span className="truncate">Book Airport Cab Now</span>
        </Link>
      </div>
    </div>
  );
};
