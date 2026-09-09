'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is included in the airport transfer fare?',
      a: 'All AeroGlide fares are 100% all-inclusive. Your quote includes the dedicated vehicle with professional driver, fuel, airport terminal entry/parking tolls, state highway express tolls, and 5% GST. Zero midnight surge and zero hidden extras.'
    },
    {
      q: 'How much waiting time is complimentary?',
      a: 'We provide 60 minutes of complimentary waiting time from the actual flight touchdown time for all airport pickups, allowing you ample time to clear baggage claim and immigration.'
    },
    {
      q: 'Can I track my chauffeur?',
      a: 'Yes. 2 hours before your scheduled ride, you will receive an SMS and WhatsApp message containing your driver\'s name, verified mobile number, car model, vehicle number, and a live GPS tracking link.'
    },
    {
      q: 'Can I change my pickup time?',
      a: 'Yes, you can easily modify your pickup date and time up to 1 hour before scheduled departure by contacting our 24/7 concierge desk at +91 98765 43210 with zero modification fees.'
    },
    {
      q: 'What happens if my flight is delayed?',
      a: 'Our central dispatch system monitors live flight radar. If your flight is delayed or lands ahead of schedule, your chauffeur\'s pickup time is automatically synchronized at no additional cost.'
    },
    {
      q: 'Do you provide GST invoices?',
      a: 'Yes! We generate automated 100% compliant corporate GST invoices with your company name and GSTIN number immediately upon booking confirmation and trip completion.'
    },
    {
      q: 'Can I cancel my booking?',
      a: 'Yes. We offer a 100% full refund upon cancellation up to 1 hour before scheduled pickup time. Instant refunds are processed directly to your original payment mode.'
    },
    {
      q: 'Do you provide corporate billing?',
      a: 'Yes, AeroGlide Corporate Mobility offers centralized monthly credit billing, customized department cost-centers, employee booking portals, and a dedicated corporate account manager.'
    },
    {
      q: 'Do you provide outstation transfers?',
      a: 'Yes, we provide direct one-way and roundtrip outstation cabs from all major airports to nearby cities (e.g. Pune to Mumbai/Lonavala/Shirdi, Delhi to Agra/Jaipur, Bengaluru to Mysuru/Coorg).'
    },
    {
      q: 'Do you provide 24/7 support?',
      a: 'Yes, our airport concierge and emergency response desk operates 24 hours a day, 7 days a week, 365 days a year to assist you at any stage of your journey.'
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Clear Answers for Your Journey
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-xl mx-auto">
            Everything you need to know about airport meet & greets, flight delay tracking, transparent fares, and booking policies.
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-950 pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-600 text-white border-blue-600' : 'text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-200/60 bg-white animate-in fade-in duration-150">
                    <p className="pt-3.5">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-10 p-5 sm:p-6 bg-blue-50/70 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Still have questions or custom trip requirements?</h4>
            <p className="text-xs text-slate-600 font-medium">Our 24/7 airport customer support team is just a call away.</p>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
