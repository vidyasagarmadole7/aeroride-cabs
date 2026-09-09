export interface AirportHubConfig {
  id: string;
  name: string;
  code: string;
  city: string;
  state: string;
  terminals: string[];
  image: string;
  description: string;
  startingFare: number;
}

export interface VehicleConfig {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'premium' | 'luxury';
  models: string;
  passengerCapacity: number;
  luggageCapacity: number;
  ac: boolean;
  baseFare: number;
  ratePerKm: number;
  image: string;
  features: string[];
  tag: string;
}

export const SITE_CONFIG = {
  brandName: 'AeroGlide Cabs',
  tagline: 'Reliable Airport Taxi & Executive Chauffeur Services',
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '919876543210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20AeroGlide%20Cabs%2C%20I%20would%20like%20to%20book%20an%20airport%20cab.',
  email: 'support@aeroglidecabs.com',
  corporateEmail: 'corporate@aeroglidecabs.com',
  address: 'Terminal 3 Aviation Boulevard, Aerocity, New Delhi, 110037',
  gstRate: 0.05, // 5% GST
  airportEntryToll: 150, // INR
  stateTollsAvg: 100, // INR
  freeWaitingMins: 60,
  
  socialLinks: {
    instagram: 'https://instagram.com/aeroglidecabs',
    facebook: 'https://facebook.com/aeroglidecabs',
    linkedin: 'https://linkedin.com/company/aeroglidecabs',
    whatsapp: 'https://wa.me/919876543210'
  },

  // 10 Major Indian Airport Hubs
  airports: [
    {
      id: 'pnq',
      name: 'Pune International Airport',
      code: 'PNQ',
      city: 'Pune',
      state: 'Maharashtra',
      terminals: ['Terminal 1 (New Integrated Terminal)', 'Terminal 2'],
      image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
      description: 'Direct airport cabs to Hinjewadi IT Park, Magarpatta, Baner, Kothrud & Pimpri-Chinchwad.',
      startingFare: 699
    },
    {
      id: 'bom',
      name: 'Chhatrapati Shivaji Maharaj International Airport',
      code: 'BOM',
      city: 'Mumbai',
      state: 'Maharashtra',
      terminals: ['Terminal 2 (Intl & Domestic - Sahar)', 'Terminal 1 (Domestic - Santacruz)'],
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
      description: 'Seamless transfers via Coastal Road & Sea Link to BKC, Nariman Point, Navi Mumbai & Thane.',
      startingFare: 799
    },
    {
      id: 'del',
      name: 'Indira Gandhi International Airport',
      code: 'DEL',
      city: 'Delhi NCR',
      state: 'Delhi',
      terminals: ['Terminal 3 (International & Domestic)', 'Terminal 1 (Domestic)', 'Terminal 2'],
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
      description: 'Express highway airport cabs to Gurugram CyberCity, Noida, Connaught Place & Faridabad.',
      startingFare: 849
    },
    {
      id: 'blr',
      name: 'Kempegowda International Airport',
      code: 'BLR',
      city: 'Bengaluru',
      state: 'Karnataka',
      terminals: ['Terminal 2 (Garden Terminal)', 'Terminal 1'],
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
      description: 'Fast-track airport taxi service to Whitefield Tech Corridor, Electronic City & Koramangala.',
      startingFare: 999
    },
    {
      id: 'hyd',
      name: 'Rajiv Gandhi International Airport',
      code: 'HYD',
      city: 'Hyderabad',
      state: 'Telangana',
      terminals: ['Main Passenger Terminal'],
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
      description: 'Direct PVNR Elevated Expressway airport transfers to HITEC City, Gachibowli & Jubilee Hills.',
      startingFare: 749
    },
    {
      id: 'maa',
      name: 'Chennai International Airport',
      code: 'MAA',
      city: 'Chennai',
      state: 'Tamil Nadu',
      terminals: ['Terminal 1 (Domestic)', 'Terminal 2 (International)', 'Terminal 4'],
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      description: 'Reliable airport pickups & drops to OMR IT Corridor, Guindy, Anna Nagar & ECR.',
      startingFare: 699
    },
    {
      id: 'ccu',
      name: 'Netaji Subhash Chandra Bose International Airport',
      code: 'CCU',
      city: 'Kolkata',
      state: 'West Bengal',
      terminals: ['Integrated Passenger Terminal'],
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
      description: 'Pre-booked airport taxis to Salt Lake Sector V, New Town, Park Street & Howrah.',
      startingFare: 649
    },
    {
      id: 'amd',
      name: 'Sardar Vallabhbhai Patel International Airport',
      code: 'AMD',
      city: 'Ahmedabad',
      state: 'Gujarat',
      terminals: ['Terminal 1 (Domestic)', 'Terminal 2 (International)'],
      image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
      description: 'Express transfers to GIFT City, Gandhinagar, SG Highway & Sanand Industrial Zone.',
      startingFare: 599
    },
    {
      id: 'goi',
      name: 'Goa International Airports (Mopa & Dabolim)',
      code: 'GOX/GOI',
      city: 'Goa',
      state: 'Goa',
      terminals: ['Manohar Intl Airport Mopa (GOX)', 'Dabolim Airport (GOI)'],
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      description: 'Fixed-rate airport taxi transfers to North Goa (Calangute, Candolim) & South Goa resorts.',
      startingFare: 1199
    },
    {
      id: 'jai',
      name: 'Jaipur International Airport',
      code: 'JAI',
      city: 'Jaipur',
      state: 'Rajasthan',
      terminals: ['Terminal 2 (Integrated Terminal)', 'Terminal 1'],
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      description: 'Heritage & business transfers to Tonk Road, C-Scheme, Sitapura Industrial Area & Amer.',
      startingFare: 549
    }
  ] as AirportHubConfig[],

  // 4 Core Fleet Categories
  vehicles: [
    {
      id: 'sedan',
      name: 'Sedan (Dzire / Amaze)',
      category: 'sedan',
      models: 'Maruti Dzire / Honda Amaze / Hyundai Aura',
      passengerCapacity: 4,
      luggageCapacity: 2,
      ac: true,
      baseFare: 699,
      ratePerKm: 14,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      features: ['Air Conditioned', 'Clean & Sanitized', 'Luggage Assistance', 'Flight Tracking'],
      tag: 'Most Popular'
    },
    {
      id: 'suv-muv',
      name: 'SUV / MUV (Ertiga)',
      category: 'suv',
      models: 'Maruti Ertiga / Kia Carens / Renault Triber',
      passengerCapacity: 6,
      luggageCapacity: 4,
      ac: true,
      baseFare: 999,
      ratePerKm: 18,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      features: ['Extra Legroom', 'Spacious Boot for 4 Bags', 'Dual AC', 'Family Friendly'],
      tag: 'Family Choice'
    },
    {
      id: 'premium',
      name: 'Premium (Innova Crysta)',
      category: 'premium',
      models: 'Toyota Innova Crysta / Innova Hycross',
      passengerCapacity: 6,
      luggageCapacity: 5,
      ac: true,
      baseFare: 1499,
      ratePerKm: 23,
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      features: ['Executive Captain Seats', 'Top Rated Senior Driver', 'Bottled Water', 'Inside Meet & Greet'],
      tag: 'Executive Travel'
    },
    {
      id: 'luxury',
      name: 'Luxury (Mercedes / BMW / Audi)',
      category: 'luxury',
      models: 'Mercedes-Benz E-Class / BMW 5 Series / Audi A6',
      passengerCapacity: 3,
      luggageCapacity: 3,
      ac: true,
      baseFare: 3499,
      ratePerKm: 55,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      features: ['Uniformed Chauffeur', 'VIP Placard Meet & Greet', 'Acoustic Soundproofing', 'Perrier Water & Mints'],
      tag: 'VIP Luxury'
    }
  ] as VehicleConfig[],

  hourlyPackages: [
    { hours: 4, kms: 40, label: '4 Hours / 40 km' },
    { hours: 8, kms: 80, label: '8 Hours / 80 km (Full Day)' },
    { hours: 12, kms: 120, label: '12 Hours / 120 km (Extended Day)' }
  ]
};

