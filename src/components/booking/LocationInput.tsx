'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Building, Train, Hotel, Search, X } from 'lucide-react';
import { POPULAR_LOCATIONS } from '@/data/airports';

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  airportCode?: string;
  iconType?: 'pickup' | 'drop';
}

export const LocationInput: React.FC<LocationInputProps> = ({
  value,
  onChange,
  label = 'Destination / Drop Location',
  placeholder = 'Enter city landmark, hotel, or street address...',
  airportCode = 'DEL',
  iconType = 'drop'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const defaultLocations = POPULAR_LOCATIONS[airportCode] || POPULAR_LOCATIONS['DEL'];

  const filteredLocations = defaultLocations.filter(loc =>
    loc.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (loc: string) => {
    setInputValue(loc);
    onChange(loc);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 truncate">
          <MapPin className={`w-3.5 h-3.5 shrink-0 ${iconType === 'pickup' ? 'text-emerald-600' : 'text-amber-500'}`} />
          <span className="truncate">{label}</span>
        </span>
      </label>

      <div className="relative w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full min-h-[50px] pl-10 pr-9 py-2.5 bg-white border border-slate-300 rounded-xl hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-xs sm:text-sm font-bold text-slate-900 shadow-2xs transition"
        />
        <MapPin className={`w-4 h-4 absolute left-3.5 top-4 ${iconType === 'pickup' ? 'text-emerald-600' : 'text-amber-500'}`} />
        
        {inputValue && (
          <button
            type="button"
            onClick={() => {
              setInputValue('');
              onChange('');
            }}
            className="absolute right-3 top-3.5 p-1 text-slate-400 hover:text-slate-700"
            aria-label="Clear location"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-150 max-h-56 sm:max-h-60 overflow-y-auto w-full max-w-full">
          <div className="p-2.5 bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-blue-500" />
            <span>Popular Landmarks & Hubs</span>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(loc)}
                  className="p-2.5 sm:p-3 text-xs font-medium text-slate-800 hover:bg-blue-50/70 cursor-pointer flex items-center gap-2.5 transition"
                >
                  <div className="w-6 h-6 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                    {loc.includes('Station') ? (
                      <Train className="w-3.5 h-3.5 text-blue-600" />
                    ) : loc.includes('Hotel') || loc.includes('Marriott') ? (
                      <Hotel className="w-3.5 h-3.5 text-amber-500" />
                    ) : (
                      <Building className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>
                  <span className="truncate">{loc}</span>
                </div>
              ))
            ) : (
              <div
                onClick={() => {
                  onChange(inputValue);
                  setIsOpen(false);
                }}
                className="p-3 text-xs text-blue-600 font-semibold hover:bg-blue-50 cursor-pointer flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Use &quot;{inputValue}&quot; as custom destination</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
