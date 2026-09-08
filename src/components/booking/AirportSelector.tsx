'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Plane, Search, MapPin, Check, ChevronDown, Sparkles } from 'lucide-react';
import { Airport } from '@/types/booking';
import { AIRPORTS } from '@/data/airports';

interface AirportSelectorProps {
  selectedAirport: Airport | null;
  selectedTerminal: string;
  onSelectAirport: (airport: Airport) => void;
  onSelectTerminal: (terminal: string) => void;
  label?: string;
  placeholder?: string;
}

export const AirportSelector: React.FC<AirportSelectorProps> = ({
  selectedAirport,
  selectedTerminal,
  onSelectAirport,
  onSelectTerminal,
  label = 'Select Airport',
  placeholder = 'Search airport by city or code...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAirports = AIRPORTS.filter(airport => {
    const query = searchQuery.toLowerCase();
    return (
      airport.name.toLowerCase().includes(query) ||
      airport.code.toLowerCase().includes(query) ||
      airport.city.toLowerCase().includes(query) ||
      airport.country.toLowerCase().includes(query)
    );
  });

  const popularAirports = AIRPORTS.filter(a => a.popular).slice(0, 6);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 truncate">
          <Plane className="w-3.5 h-3.5 text-blue-600 -rotate-45 shrink-0" />
          <span className="truncate">{label}</span>
        </span>
        {selectedAirport && (
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0 ml-1">
            IATA: {selectedAirport.code}
          </span>
        )}
      </label>

      {/* Main Trigger Input */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[50px] p-3 bg-white border border-slate-300 rounded-xl hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 cursor-pointer transition shadow-2xs flex items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xs shrink-0 border border-blue-100">
            {selectedAirport ? selectedAirport.code : 'AIR'}
          </div>
          <div className="text-left truncate flex-1 min-w-0">
            {selectedAirport ? (
              <>
                <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {selectedAirport.city} ({selectedAirport.code})
                </div>
                <div className="text-[11px] text-slate-500 truncate font-medium">
                  {selectedAirport.name}
                </div>
              </>
            ) : (
              <div className="text-xs sm:text-sm text-slate-400 font-medium truncate">
                {placeholder}
              </div>
            )}
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Terminal selector if airport is selected */}
      {selectedAirport && selectedAirport.terminals.length > 0 && (
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-600 shrink-0">Terminal:</span>
          <select
            value={selectedTerminal || selectedAirport.terminals[0]}
            onChange={(e) => onSelectTerminal(e.target.value)}
            className="w-full text-xs font-semibold bg-slate-50 text-slate-900 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer truncate"
          >
            {selectedAirport.terminals.map((term) => (
              <option key={term} value={term}>
                {term}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 w-full max-w-full">
          {/* Search Box */}
          <div className="p-3 border-b border-slate-100 bg-slate-50/90">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                autoFocus
                placeholder="Type city, airport name, or IATA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-medium rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Popular Airport Quick Chips */}
            <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Popular:
              </span>
              {popularAirports.map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    onSelectAirport(p);
                    onSelectTerminal(p.terminals[0] || '');
                    setIsOpen(false);
                    setSearchQuery('');
                  }}
                  className={`text-[11px] px-2 py-0.5 rounded-md font-bold border transition ${
                    selectedAirport?.id === p.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                  }`}
                >
                  {p.code}
                </button>
              ))}
            </div>
          </div>

          {/* Airport List */}
          <div className="max-h-56 sm:max-h-64 overflow-y-auto divide-y divide-slate-100">
            {filteredAirports.length > 0 ? (
              filteredAirports.map((airport) => {
                const isSelected = selectedAirport?.id === airport.id;
                return (
                  <div
                    key={airport.id}
                    onClick={() => {
                      onSelectAirport(airport);
                      onSelectTerminal(airport.terminals[0] || '');
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className={`p-2.5 sm:p-3 cursor-pointer transition flex items-center justify-between hover:bg-blue-50/70 ${
                      isSelected ? 'bg-blue-50 font-medium' : ''
                    }`}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                        {airport.code}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {airport.city}, {airport.country}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate leading-tight">
                          {airport.name}
                        </div>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-6 text-center text-xs text-slate-500">
                No airports found matching &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
