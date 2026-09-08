'use client';

import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Plane,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const terminalDesks = [
    { city: 'New Delhi (DEL)', terminal: 'Terminal 3 & Terminal 1 Arrival Lounge', phone: '+91 11 4567 8901' },
    { city: 'Mumbai (BOM)', terminal: 'Terminal 2 Pillar 4B Chauffeur Lounge', phone: '+91 22 4567 8902' },
    { city: 'Bengaluru (BLR)', terminal: 'Terminal 1 & Terminal 2 Pick-up Point 2', phone: '+91 80 4567 8903' },
    { city: 'Hyderabad (HYD)', terminal: 'Main Passenger Terminal Level 0', phone: '+91 40 4567 8904' },
    { city: 'Dubai (DXB)', terminal: 'Terminal 3 Emirates Arrival Gate 2', phone: '+971 4 456 7890' },
    { city: 'London (LHR)', terminal: 'Terminal 2 & Terminal 5 Chauffeur Desk', phone: '+44 20 7946 0912' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 text-slate-950 py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            24/7 Live Passenger Care
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
            We&apos;re Here to Help, Round the Clock
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Need urgent assistance with flight changes, terminal gate directions, or corporate accounts? Contact our airport dispatch team directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left: Contact Numbers & Terminal Desks */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 w-full">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">24/7 Global Hotline</div>
                <div className="text-base sm:text-lg font-black text-slate-950">+1 (800) 456-AERO</div>
                <div className="text-xs text-slate-500 font-medium">+91 98765 43210 (Asia)</div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">Customer Support Email</div>
                <div className="text-sm sm:text-base font-bold text-slate-950 truncate">support@aeroglidecabs.com</div>
                <div className="text-xs text-slate-500 font-medium">Average reply: under 15 mins</div>
              </div>
            </div>

            {/* Airport Terminal Desk Directory */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Plane className="w-5 h-5 text-blue-600 -rotate-45" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Airport Terminal Helpdesk Locations</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                {terminalDesks.map((desk, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="font-bold text-slate-900">{desk.city}</div>
                    <div className="text-slate-600">{desk.terminal}</div>
                    <div className="text-blue-600 font-bold">{desk.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg w-full">
            {submitted ? (
              <div className="text-center py-8 space-y-3.5">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{name}</strong>. An airport support officer will respond to <strong>{email}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Send an Inquiry</h3>
                  <p className="text-xs text-slate-500 font-medium">Questions regarding past or upcoming rides.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Harrison"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Subject / Booking Ref
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Booking #AG-849204"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full min-h-[44px] p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How can our airport team assist you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Support Request</span>
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
