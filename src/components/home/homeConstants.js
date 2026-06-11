import {
  FaBolt,
  FaBus,
  FaCarSide,
  FaCheckCircle,
  FaFireAlt,
  FaHeadset,
  FaRupeeSign,
  FaShieldAlt,
  FaShuttleVan,
  FaTicketAlt,
} from 'react-icons/fa'

import jaipurImage from '../../assets/figma/dest_jaipur.png'
import agraImage from '../../assets/figma/dest_agra.png'
import chandigarhImage from '../../assets/figma/dest_chandigarh.png'
import manaliImage from '../../assets/figma/dest_manali.png'

export const BOOKING_TABS = [
  { id: 'bus', label: 'Rent Bus', icon: FaBus },
  { id: 'traveller', label: 'Rent Traveller', icon: FaShuttleVan },
  { id: 'car', label: 'Rent Car', icon: FaCarSide },
  { id: 'ticket', label: 'Bus Tickets', icon: FaTicketAlt },
]

export const TRUST_POINTS = [
  { title: 'Best Price', copy: 'Unbeatable rates for luxury travel experiences.', icon: FaRupeeSign },
  { title: 'Instant Booking', copy: 'Confirm your travel plans in just a few clicks.', icon: FaBolt },
  { title: 'Verified Drivers', copy: 'Professional and vetted background checked staff.', icon: FaShieldAlt },
  { title: '24/7 Support', copy: 'Always here to help you with your journey.', icon: FaHeadset },
]

export const DEALS = [
  {
    badge: 'NEW USER SPECIAL',
    title: 'Flat 25% OFF',
    copy: 'Use code FIRSTSWIFT on your first booking.',
    cta: 'Claim Now',
    classes: 'bg-[#081637] text-white',
    ctaClasses: 'bg-[#789736] text-white hover:bg-[#6f8a30]',
  },
  {
    badge: 'LUXURY TRAVEL',
    title: '15% OFF',
    copy: 'On premium Volvo sleeper coaches. Use code WEEKENDGO.',
    cta: 'Claim Now',
    classes: 'bg-linear-to-br from-[#7e90f8] to-[#334392] text-white',
    ctaClasses: 'bg-white text-[#2d3f93] hover:bg-[#f2f2f2]',
  },
  {
    badge: 'WEEKEND VIBE',
    title: 'Buy 1 Get 1 Free',
    copy: 'Valid for group rentals on weekends. Use code WEEKENDDUO.',
    cta: 'Claim Now',
    classes: 'bg-[#6f8f22] text-white',
    ctaClasses: 'bg-[#07163b] text-white hover:bg-[#0e245a]',
  },
]

export const PREMIUM_SERVICES = [
  {
    title: 'Bus Tickets',
    copy: 'Book seats on thousands of routes with our verified luxury bus partners.',
    icon: FaTicketAlt,
    cta: 'Book Now',
    href: '/bus-ticket',
  },
  {
    title: 'Group Rentals',
    copy: 'Need a whole bus? Rent for weddings, corporate, or family trips.',
    icon: FaBus,
    cta: 'Rent Now',
    href: '/send-enquiry',
  },
  {
    title: 'Private Cars',
    copy: 'Luxury SUVs and sedans for premium solo travel.',
    icon: FaCarSide,
    cta: 'Rent Now',
    href: '/rent-car',
  },
  {
    title: 'Traveller',
    copy: 'Comfortable tempo travellers for family weekend trips.',
    icon: FaShuttleVan,
    cta: 'Rent Now',
    href: '/send-enquiry',
  },
]

// Figma: Traveller Tour - Popular Destination section
export const DESTINATIONS = [
  { title: 'Delhi to Jaipur Traveller Rental', image: jaipurImage, popular: true, price: '₹25,000' },
  { title: 'Delhi to Agra Traveller Rental', image: agraImage, popular: false, price: '₹25,000' },
  { title: 'Delhi to Chandigarh Traveller Rental', image: chandigarhImage, popular: false, price: '₹25,000' },
  { title: 'Delhi to Manali Traveller Rental', image: manaliImage, popular: false, price: '₹25,000' },
]

// Figma: Bus destinations
export const BUS_DESTINATIONS = [
  { title: 'Delhi to Jaipur Bus Rental', image: jaipurImage, popular: true, price: '₹25,000' },
  { title: 'Delhi to Agra Bus Rental', image: agraImage, popular: false, price: '₹25,000' },
  { title: 'Delhi to Chandigarh Bus Rental', image: chandigarhImage, popular: false, price: '₹25,000' },
  { title: 'Delhi to Manali Bus Rental', image: manaliImage, popular: false, price: '₹25,000' },
]

export const TRUST_LIST = [
  'Wide range of buses for every travel need',
  'Professional drivers with proven experience',
  'Flexible travel plans tailored to your needs',
  '24/7 support for a hassle-free experience',
]

export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: ['Bus Rental', 'Car Rental', 'Tempo Traveller', 'Bus Tickets'],
  },
  {
    title: 'Popular Routes',
    links: ['Delhi - Jaipur', 'Delhi - Agra', 'Delhi - Chandigarh', 'Delhi - Manali'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact', 'Privacy Policy', 'Terms & Conditions'],
  },
]

// Figma: Vehicle Rental Section - Traveller Tour
export const TRAVELLER_VEHICLES = [
  {
    name: '9 Seater Tempo Traveller',
    seats: 9,
    ac: true,
    luggage: true,
    image: null,
    localPrice: '₹4,500',
    outstationPrice: '₹18/km',
  },
  {
    name: '12 Seater Tempo Traveller',
    seats: 12,
    ac: true,
    luggage: true,
    image: null,
    localPrice: '₹5,500',
    outstationPrice: '₹20/km',
  },
  {
    name: '14 Seater Tempo Traveller',
    seats: 14,
    ac: true,
    luggage: true,
    image: null,
    localPrice: '₹6,000',
    outstationPrice: '₹22/km',
  },
  {
    name: '17 Seater Force Traveller',
    seats: 17,
    ac: true,
    luggage: true,
    image: null,
    localPrice: '₹7,500',
    outstationPrice: '₹25/km',
  },
]

// Figma: Bus Listing (Sleeper Bus page)
export const BUS_LISTINGS = [
  {
    name: 'Ant Travel Premium',
    type: 'AC Sleeper 2+1 (Luxury Class)',
    rating: 4.5,
    reviews: 128,
    departureTime: '22:00',
    departure: 'Delhi (ISBT Kashmiri Gate)',
    duration: '05h 30m',
    isNonStop: true,
    arrivalTime: '03:30',
    arrival: 'Jaipur (Sindhi Camp Bus Stand)',
    originalPrice: '₹1,299',
    price: '₹899',
    verified: true,
  },
  {
    name: 'Ant Travel Premium',
    type: 'AC Sleeper 2+1 (Luxury Class)',
    rating: 4.5,
    reviews: 128,
    departureTime: '23:00',
    departure: 'Delhi (ISBT Kashmiri Gate)',
    duration: '05h 30m',
    isNonStop: true,
    arrivalTime: '04:30',
    arrival: 'Jaipur (Sindhi Camp Bus Stand)',
    originalPrice: '₹1,299',
    price: '₹999',
    verified: true,
  },
  {
    name: 'Ant Travel Premium',
    type: 'AC Sleeper 2+1 (Luxury Class)',
    rating: 4.5,
    reviews: 128,
    departureTime: '00:00',
    departure: 'Delhi (ISBT Kashmiri Gate)',
    duration: '05h 30m',
    isNonStop: false,
    arrivalTime: '05:30',
    arrival: 'Jaipur (Sindhi Camp Bus Stand)',
    originalPrice: '₹1,299',
    price: '₹799',
    verified: true,
  },
  {
    name: 'Ant Travel Premium',
    type: 'AC Sleeper 2+1 (Luxury Class)',
    rating: 4.5,
    reviews: 128,
    departureTime: '01:00',
    departure: 'Delhi (ISBT Kashmiri Gate)',
    duration: '05h 30m',
    isNonStop: true,
    arrivalTime: '06:30',
    arrival: 'Jaipur (Sindhi Camp Bus Stand)',
    originalPrice: '₹1,299',
    price: '₹899',
    verified: true,
  },
]
