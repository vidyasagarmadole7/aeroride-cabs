import { AirportService } from '@/types/booking';

export const AIRPORT_SERVICES: AirportService[] = [
  {
    id: 'airport-pickup',
    title: 'Airport Pickup Transfer',
    iconName: 'PlaneLanding',
    badge: 'Chauffeur Awaits',
    shortDesc: 'Guaranteed executive car waiting at the terminal when your flight touches down.',
    longDesc: 'Our chauffeur tracks your flight in real time, adjusts for delays, and waits at the terminal with a 60-minute complimentary grace period. No waiting in taxi queues.',
    bullets: [
      'Real-time flight arrival monitoring',
      '60 minutes complimentary waiting post-landing',
      'Inside-terminal Meet & Greet with personalized placard',
      'Guaranteed fixed flat fares with zero surge'
    ],
    ctaText: 'Reserve Pickup',
    href: '/book?type=pickup'
  },
  {
    id: 'airport-drop',
    title: 'Airport Drop / Departure',
    iconName: 'PlaneTakeoff',
    badge: '15-Min Early Arrival',
    shortDesc: 'Punctual home or hotel doorstep pickup with guaranteed on-time airport arrival.',
    longDesc: 'Never miss a flight. We schedule optimal departure times based on live traffic trends, dispatching top-rated chauffeurs to your doorstep with 15-minute advance arrival.',
    bullets: [
      'Chauffeur arrives 15 minutes before scheduled pickup',
      'Complete luggage porterage assistance',
      'Direct departure terminal curbside drop-off',
      'Automated SMS & WhatsApp driver tracking updates'
    ],
    ctaText: 'Reserve Departure',
    href: '/book?type=drop'
  },
  {
    id: 'round-trip',
    title: 'Round Trip Transfers',
    iconName: 'Repeat',
    badge: 'Priority Fleet',
    shortDesc: 'Pre-schedule both legs of your journey with guaranteed priority vehicle allocation.',
    longDesc: 'Save time and money with pre-scheduled roundtrip airport rides. Lock in flat discounted rates for both legs of your journey and relax knowing your return cab is secured.',
    bullets: [
      'Exclusive 15% discount on the return airport transfer',
      'Free flexible reschedule if return flight details change',
      'Consolidated single GST invoice for corporate expense claims',
      'Dedicated driver allocation on return leg'
    ],
    ctaText: 'Book Round Trip',
    href: '/book?type=roundtrip'
  },
  {
    id: 'corporate-transfer',
    title: 'Corporate Transfers',
    iconName: 'Briefcase',
    badge: 'Enterprise',
    shortDesc: 'Dedicated premium fleet management for business leaders, teams & executive clients.',
    longDesc: 'Streamlined airport logistics for enterprise teams. Enjoy centralized monthly billing, GST invoices, dedicated account managers, and executive sedans & SUVs.',
    bullets: [
      'Automated monthly GST consolidated invoicing',
      'Executive fleet (Mercedes-Benz, BMW, Innova Crysta)',
      '24/7 dedicated enterprise dispatch manager',
      'Custom travel policy management & cost-center billing'
    ],
    ctaText: 'Corporate Solutions',
    href: '/corporate'
  },
  {
    id: 'intercity-transfer',
    title: 'Intercity Airport Transfers',
    iconName: 'Navigation',
    badge: 'Outstation',
    shortDesc: 'Direct airport to outstation city transfer without changing vehicles or trains.',
    longDesc: 'Land at the airport and head straight to nearby tourist getaways, hill stations, or business corridors in total comfort with seasoned highway drivers.',
    bullets: [
      'Experienced long-distance highway chauffeurs',
      'All toll taxes, state permits, and fuel included',
      'Custom refreshment stops along scenic routes',
      'One-way or multi-day return packages available'
    ],
    ctaText: 'Explore Intercity',
    href: '/book?type=roundtrip'
  },
  {
    id: 'hourly-chauffeur',
    title: 'Hourly Chauffeur',
    iconName: 'Clock',
    badge: 'By-The-Hour',
    shortDesc: 'Retain your dedicated executive vehicle & chauffeur for multi-stop day itineraries.',
    longDesc: 'Ideal for travelers with day-long business meetings, client visits, or city sightseeing before catching an evening connecting flight.',
    bullets: [
      'Flexible 4-Hour / 8-Hour / 12-Hour rental packages',
      'Chauffeur stays on standby throughout your stops',
      'Safe luggage storage inside car during meetings',
      'Easy extension of hours directly via our dispatch desk'
    ],
    ctaText: 'Reserve By The Hour',
    href: '/book?type=hourly'
  }
];
