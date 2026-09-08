import { Airport } from '@/types/booking';

export const AIRPORTS: Airport[] = [
  {
    id: 'del',
    name: 'Indira Gandhi International Airport',
    code: 'DEL',
    city: 'New Delhi',
    state: 'Delhi NCR',
    country: 'India',
    terminals: ['Terminal 3 (International & Domestic)', 'Terminal 1 (Domestic)', 'Terminal 2 (Domestic)'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Premier South Asian aviation gateway with dedicated AeroGlide executive chauffeur lounges at T3 & T1.'
  },
  {
    id: 'bom',
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    code: 'BOM',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    terminals: ['Terminal 2 (International & Domestic - Sahar)', 'Terminal 1 (Domestic - Santacruz)'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Direct express chauffeur transfers to BKC Financial Centre, Nariman Point & South Mumbai.'
  },
  {
    id: 'blr',
    name: 'Kempegowda International Airport',
    code: 'BLR',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    terminals: ['Terminal 2 (Garden Terminal)', 'Terminal 1 (Domestic & Intl)'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Fast-track airport corridor access to Whitefield Tech Zone, Electronic City & CBD.'
  },
  {
    id: 'hyd',
    name: 'Rajiv Gandhi International Airport',
    code: 'HYD',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    terminals: ['Main Passenger Terminal (Domestic & Intl)'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Elevated PVNR Expressway transfers directly into HITEC City, Gachibowli & Jubilee Hills.'
  },
  {
    id: 'dxb',
    name: 'Dubai International Airport',
    code: 'DXB',
    city: 'Dubai',
    country: 'United Arab Emirates',
    terminals: ['Terminal 3 (Emirates)', 'Terminal 1', 'Terminal 2'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    tagline: 'VIP first-class chauffeur connections to Downtown Dubai, DIFC, Palm Jumeirah & Abu Dhabi.'
  },
  {
    id: 'lhr',
    name: 'London Heathrow Airport',
    code: 'LHR',
    city: 'London',
    country: 'United Kingdom',
    terminals: ['Terminal 2 (The Queen\'s Terminal)', 'Terminal 3', 'Terminal 5 (British Airways)', 'Terminal 4'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Executive door-to-door transfers across Mayfair, City of London, Canary Wharf & UK counties.'
  },
  {
    id: 'jfk',
    name: 'John F. Kennedy International Airport',
    code: 'JFK',
    city: 'New York',
    state: 'New York',
    country: 'United States',
    terminals: ['Terminal 4', 'Terminal 1', 'Terminal 5', 'Terminal 7', 'Terminal 8'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Black car executive chauffeur service connecting JFK to Manhattan, Brooklyn & Wall Street.'
  },
  {
    id: 'sin',
    name: 'Singapore Changi Airport',
    code: 'SIN',
    city: 'Singapore',
    country: 'Singapore',
    terminals: ['Terminal 3', 'Terminal 1', 'Terminal 2', 'Terminal 4', 'Jewel Changi'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1000&q=80',
    tagline: 'World-renowned airport transfers to Marina Bay Sands, Orchard Road & Central Business District.'
  }
];

export const POPULAR_LOCATIONS: Record<string, string[]> = {
  DEL: [
    'Connaught Place (CP), Central Delhi',
    'Cyber Hub & DLF Phase 2, Gurugram',
    'Sector 62 & Wave City, Noida',
    'Aerocity Hospitality District (JW Marriott / Pullman)',
    'South Extension & Greater Kailash',
    'New Delhi Railway Station (NDLS)',
    'Old Delhi Railway Station (DLI)',
    'Vasant Kunj & Hauz Khas',
    'Faridabad Sector 15'
  ],
  BOM: [
    'Bandra Kurla Complex (BKC), Mumbai',
    'Nariman Point & Marine Drive, South Mumbai',
    'Andheri East MIDC & Seepz',
    'Powai & Hiranandani Gardens',
    'Lower Parel & Worli Business District',
    'Juhu Beach & Santacruz West',
    'Navi Mumbai (Vashi / Belapur)',
    'Thane West (Ghodbunder Road)',
    'Mumbai CSMT Central Station'
  ],
  BLR: [
    'Whitefield ITPL & EPIP Zone',
    'Electronic City Phase 1 & 2',
    'Koramangala & Indiranagar 100ft Road',
    'MG Road & Richmond Town, CBD',
    'Manyata Tech Park, Hebbal',
    'HSR Layout & Bellandur ORR',
    'KSR Bengaluru City Railway Station',
    'Yelahanka & Sahakarnagar'
  ],
  HYD: [
    'HITEC City & Cyber Towers',
    'Gachibowli Financial District',
    'Banjara Hills Road No. 12',
    'Jubilee Hills Checkpost',
    'Madhapur & Mindspace IT Park',
    'Secunderabad Railway Station',
    'Kondapur & Botanical Garden',
    'Begumpet Lifestyle Hub'
  ]
};
