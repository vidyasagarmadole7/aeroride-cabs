'use client';

import React from 'react';
import { Check, Car, User, CreditCard, CheckCircle2 } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number; // 1: Search / Select, 2: Passenger Details, 3: Review & Pay, 4: Confirmed
  onStepClick?: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, onStepClick }) => {
  const steps = [
    { num: 1, label: 'Vehicle', fullLabel: 'Choose Vehicle', icon: Car },
    { num: 2, label: 'Passenger', fullLabel: 'Passenger & Flight', icon: User },
    { num: 3, label: 'Review', fullLabel: 'Review & Pay', icon: CreditCard },
    { num: 4, label: 'Confirmed', fullLabel: 'Confirmed', icon: CheckCircle2 }
  ];

  return (
    <div className="w-full py-3.5 sm:py-4 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between relative">
          {/* Connector Line Background */}
          <div className="absolute top-4 sm:top-5 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          <div
            className="absolute top-4 sm:top-5 left-4 h-0.5 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-300"
            style={{ width: `${Math.min(100, Math.max(0, ((currentStep - 1) / (steps.length - 1)) * 100))}%` }}
          />

          {/* Steps */}
          {steps.map((step) => {
            const isCompleted = currentStep > step.num;
            const isCurrent = currentStep === step.num;
            const isClickable = onStepClick && step.num < currentStep;

            return (
              <div
                key={step.num}
                onClick={() => isClickable && onStepClick(step.num)}
                className={`relative z-10 flex flex-col items-center gap-1 ${
                  isClickable ? 'cursor-pointer' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200 ${
                    isCompleted
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : isCurrent
                      ? 'bg-blue-600 text-white ring-4 ring-blue-100 shadow-md scale-105'
                      : 'bg-white border-2 border-slate-300 text-slate-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  ) : (
                    <step.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-bold text-center ${
                    isCurrent
                      ? 'text-blue-600 font-extrabold'
                      : isCompleted
                      ? 'text-slate-800'
                      : 'text-slate-400'
                  }`}
                >
                  <span className="sm:hidden">{step.label}</span>
                  <span className="hidden sm:inline">{step.fullLabel}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
