'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Receipt, 
  Users, 
  FileSpreadsheet, 
  ShieldCheck, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export const CorporateSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCorporateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const corporateFeatures = [
    {
      icon: Users,
      title: 'Employee Transportation',
      desc: 'Safe, punctual daily airport transfers & late-night office commutes.'
    },
    {
      icon: Building2,
      title: 'Executive & VIP Travel',
      desc: 'Premium Innova Crysta & luxury sedans for client visits and board meetings.'
    },
    {
      icon: Receipt,
      title: 'Centralized Monthly Billing',
      desc: 'Single consolidated tax invoice with complete cost-center and employee ride logs.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Automated 100% GST Invoices',
      desc: 'Instant GST tax credit compliance with company GSTIN on all bookings.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Account Manager',
      desc: 'Personal relationship manager for priority allocation and custom enterprise tariffs.'
    },
    {
      icon: ShieldCheck,
      title: 'Custom Travel Policies & Reports',
      desc: 'Detailed monthly analytics and customized department-level spend limits.'
    }
  ];

  return (
    <section id="corporate" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Content & 6 Corporate Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                Enterprise Solutions
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Corporate Mobility Made Simple
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
                Streamline business travel logistics for your leadership team, international clients, and staff across all major Indian commercial hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {corporateFeatures.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-blue-700 flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Request Submitted!</h3>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{name}</strong>. Our enterprise mobility team will reach out to <strong>{email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleCorporateSubmit} className="space-y-3.5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">Partner With AeroGlide</h3>
                  <p className="text-xs text-slate-500 font-medium">Get customized corporate tariff slabs & credit facility.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Company Registered Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Technologies India Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma (Travel Admin)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@acme.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-[44px] p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full min-h-[44px] p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>REQUEST CORPORATE SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

