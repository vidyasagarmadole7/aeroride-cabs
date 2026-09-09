'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Car, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* WhatsApp Quick Chat */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 group"
        aria-label="Chat on WhatsApp with AeroGlide Cabs"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 group"
        aria-label={`Call 24/7 Helpline ${SITE_CONFIG.phone}`}
        title="Call 24/7 Support"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Call 24/7 Concierge
        </span>
      </a>
    </div>
  );
};

