'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Receipt, 
  Users, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileSpreadsheet,
  Headphones
} from 'lucide-react';

export default function CorporatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [monthlyTrips, setMonthlyTrips] = useState('50-200');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 w-full">
      {/* Corporate Hero Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 text-slate-950 py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            AeroGlide Enterprise & B2B
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Corporate Airport Transfers, Simplified
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Empower your executive teams, international clients, and business travelers with priority airport transfers, automated GST compliance, and customized monthly billing.
          </p>
        </div>
      </section>

      {/* Main Content & Lead Form Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left: Enterprise Features */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 w-full">
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-950">
                Built for High-Growth Enterprises
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">
                Save up to 25% on airport transportation overhead while providing white-glove executive hospitality to your leadership and clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Consolidated GST Invoicing</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Single monthly invoice with complete employee cost-center breakdowns, trip logs, and 100% tax claim compliance.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Guaranteed Fleet Allocation</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Zero peak-hour shortages. Lock in executive sedans and luxury chauffeur cars even during heavy festival & conference seasons.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">24/7 Dedicated Account Desk</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Personal corporate relationship manager and VIP airport desk number for instant schedule changes and VIP itineraries.
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Custom Expense Caps</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Set department-level ride rules, maximum fare allowances, and automated approvals via our enterprise dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg w-full">
            {submitted ? (
              <div className="text-center py-8 space-y-3.5">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{contactPerson}</strong>. Our enterprise solutions head will contact you within 2 business hours with custom corporate tariff slabs for <strong>{companyName}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Request Corporate Onboarding</h3>
                  <p className="text-xs text-slate-500 font-medium">Get discounted business rates & credit terms.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Company Registered Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Technologies Inc."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Green (Travel Admin)"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rachel@acme.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Estimated Monthly Airport Transfers
                  </label>
                  <select
                    value={monthlyTrips}
                    onChange={(e) => setMonthlyTrips(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="10-50">10 – 50 trips / month</option>
                    <option value="50-200">50 – 200 trips / month</option>
                    <option value="200+">200+ trips / month (Custom Enterprise)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Corporate Tariff Card</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
