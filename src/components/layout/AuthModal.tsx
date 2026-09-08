'use client';

import React, { useState } from 'react';
import { X, Phone, Mail, ShieldCheck, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup' | 'corporate';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const [tab, setTab] = useState<'login' | 'signup' | 'corporate'>(defaultTab);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 8 || email.includes('@')) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setOtpSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
              AG
            </div>
            <span className="text-lg font-bold tracking-tight">AeroGlide Account</span>
          </div>
          <p className="text-sm text-slate-300">
            Access past bookings, live flight tracking alerts, and exclusive airport ride perks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50/70 text-sm font-medium">
          <button
            onClick={() => { setTab('login'); setOtpSent(false); }}
            className={`flex-1 py-3 text-center transition ${
              tab === 'login'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quick Login
          </button>
          <button
            onClick={() => { setTab('signup'); setOtpSent(false); }}
            className={`flex-1 py-3 text-center transition ${
              tab === 'signup'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            New Sign Up
          </button>
          <button
            onClick={() => { setTab('corporate'); setOtpSent(false); }}
            className={`flex-1 py-3 text-center transition ${
              tab === 'corporate'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Corporate Portal
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Welcome Back!</h3>
              <p className="text-sm text-slate-600">Logged in successfully. Connecting your ride profile...</p>
            </div>
          ) : !otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {tab === 'corporate' ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Corporate Email ID
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Single sign-on supported for registered enterprise clients.</p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium">
                      +1 / +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                <span>Get Instant OTP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsSuccess(true)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 border border-slate-200 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 transition"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSuccess(true)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 border border-slate-200 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 transition"
                >
                  <UserCheck className="w-4 h-4 text-slate-700" />
                  <span>Guest Checkout</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 justify-center text-xs text-slate-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>256-bit encrypted secure session</span>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="text-center space-y-1">
                <p className="text-xs text-slate-500">
                  Enter the 4-digit verification code sent to
                </p>
                <p className="text-sm font-semibold text-slate-800">{phone || email}</p>
              </div>

              <div>
                <input
                  type="text"
                  maxLength={4}
                  required
                  placeholder="• • • •"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-center text-2xl tracking-[0.5em] font-mono py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition shadow-md shadow-emerald-500/20"
              >
                Verify & Sign In
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="text-blue-600 hover:underline"
                >
                  Change details
                </button>
                <button
                  type="button"
                  onClick={() => alert('New OTP sent: 1234')}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Resend OTP in 30s
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

