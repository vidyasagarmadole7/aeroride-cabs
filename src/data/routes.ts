import { PopularRoute } from '@/types/booking';

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: 'del-gurgaon',
    from: 'Indira Gandhi Airport (DEL)',
    to: 'CyberCity & Golf Course Rd, Gurgaon',
    airportCode: 'DEL',
    city: 'Gurgaon',
    distanceKm: 14,
    durationText: '20-30 mins',
    startingFare: 28,
    popularTag: 'Corporate Hub',
    image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'del-cp',
    from: 'Indira Gandhi Airport (DEL)',
    to: 'Connaught Place & Lutyens Delhi',
    airportCode: 'DEL',
    city: 'New Delhi',
    distanceKm: 18,
    durationText: '35-45 mins',
    startingFare: 32,
    popularTag: 'Diplomatic Enclave',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bom-south',
    from: 'Mumbai Airport (BOM T2)',
    to: 'Nariman Point & Marine Drive, South Mumbai',
    airportCode: 'BOM',
    city: 'Mumbai',
    distanceKm: 26,
    durationText: '40-50 mins (Sea Link)',
    startingFare: 39,
    popularTag: 'Sea Link Express',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bom-bkc',
    from: 'Mumbai Airport (BOM T2)',
    to: 'Bandra Kurla Complex (BKC Financial)',
    airportCode: 'BOM',
    city: 'Mumbai',
    distanceKm: 9,
    durationText: '20-25 mins',
    startingFare: 26,
    popularTag: 'Financial Hub',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blr-whitefield',
    from: 'Bengaluru Airport (BLR T1/T2)',
    to: 'Whitefield ITPL & EPIP Corridor',
    airportCode: 'BLR',
    city: 'Bengaluru',
    distanceKm: 39,
    durationText: '50-65 mins',
    startingFare: 42,
    popularTag: 'Tech Park Corridor',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hyd-hitec',
    from: 'Hyderabad Airport (HYD)',
    to: 'HITEC City & Gachibowli Financial',
    airportCode: 'HYD',
    city: 'Hyderabad',
    distanceKm: 32,
    durationText: '35-45 mins (ORR)',
    startingFare: 36,
    popularTag: 'ORR Expressway',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pnq-hinjewadi',
    from: 'Pune Airport (PNQ)',
    to: 'Hinjewadi IT Park Phase 1-3',
    airportCode: 'PNQ',
    city: 'Pune',
    distanceKm: 25,
    durationText: '40-50 mins',
    startingFare: 28,
    popularTag: 'IT Tech Zone',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maa-omr',
    from: 'Chennai Airport (MAA)',
    to: 'OMR IT Expressway & Guindy',
    airportCode: 'MAA',
    city: 'Chennai',
    distanceKm: 16,
    durationText: '30-40 mins',
    startingFare: 29,
    popularTag: 'IT Expressway',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
  }
];
