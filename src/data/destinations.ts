import { DestinationCity } from '@/types/booking';

export const DESTINATIONS: DestinationCity[] = [
  {
    id: 'dest-delhi',
    name: 'New Delhi',
    country: 'India',
    airportName: 'Indira Gandhi International (DEL)',
    airportCode: 'DEL',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    startingFare: 28,
    avgTransferTime: '30 mins',
    fleetCount: 450
  },
  {
    id: 'dest-mumbai',
    name: 'Mumbai',
    country: 'India',
    airportName: 'Chhatrapati Shivaji Maharaj (BOM)',
    airportCode: 'BOM',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    startingFare: 26,
    avgTransferTime: '25 mins',
    fleetCount: 380
  },
  {
    id: 'dest-bangalore',
    name: 'Bengaluru',
    country: 'India',
    airportName: 'Kempegowda International (BLR)',
    airportCode: 'BLR',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    startingFare: 38,
    avgTransferTime: '45 mins',
    fleetCount: 520
  },
  {
    id: 'dest-hyderabad',
    name: 'Hyderabad',
    country: 'India',
    airportName: 'Rajiv Gandhi International (HYD)',
    airportCode: 'HYD',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
    startingFare: 32,
    avgTransferTime: '35 mins',
    fleetCount: 290
  },
  {
    id: 'dest-pune',
    name: 'Pune',
    country: 'India',
    airportName: 'Pune International Airport (PNQ)',
    airportCode: 'PNQ',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
    startingFare: 24,
    avgTransferTime: '30 mins',
    fleetCount: 210
  },
  {
    id: 'dest-chennai',
    name: 'Chennai',
    country: 'India',
    airportName: 'Chennai International Airport (MAA)',
    airportCode: 'MAA',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    startingFare: 27,
    avgTransferTime: '30 mins',
    fleetCount: 260
  },
  {
    id: 'dest-kolkata',
    name: 'Kolkata',
    country: 'India',
    airportName: 'Netaji Subhash Chandra Bose (CCU)',
    airportCode: 'CCU',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
    startingFare: 25,
    avgTransferTime: '35 mins',
    fleetCount: 190
  },
  {
    id: 'dest-dubai',
    name: 'Dubai',
    country: 'UAE',
    airportName: 'Dubai International (DXB)',
    airportCode: 'DXB',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    startingFare: 49,
    avgTransferTime: '20 mins',
    fleetCount: 240
  }
];
