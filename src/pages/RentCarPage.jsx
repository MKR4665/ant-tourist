import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaBolt,
  FaCalendarAlt,
  FaCarSide,
  FaCheck,
  FaChevronDown,
  FaArrowRight,
  FaGasPump,
  FaHeadset,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegStar,
  FaSearch,
  FaShieldAlt,
  FaSnowflake,
  FaStar,
  FaTicketAlt,
  FaUsers,
  FaWallet,
} from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import appMockupImage from '../assets/iphone-mockup.png'
import bottomSkylineImage from '../assets/bg-bottom.png'
import jaipurImage from '../assets/jaipur.jpg'
import agraImage from '../assets/agra.jpg'
import chandigarhImage from '../assets/chandigarh.jpg'
import manaliImage from '../assets/manali.jpg'
import carHeroImage from '../image/car.jpg'
import carAltImage from '../image/car2.jpg'
import sedanImage from '../image/car3.jpg'
import luxuryCarImage from '../image/car4.png'

const searchTabs = [
  { id: 'bus', label: 'Rent Bus', icon: FaCarSide },
  { id: 'traveller', label: 'Rent Traveller', icon: FaCarSide },
  { id: 'car', label: 'Rent Car', icon: FaCarSide },
  { id: 'ticket', label: 'Bus Tickets', icon: FaTicketAlt },
]

const deals = [
  { tag: 'New User Special', title: 'Flat 25% OFF', code: 'FIRSTSWIFT', bg: 'bg-[#0F172A]' },
  { tag: 'Weekend Saver', title: '15% OFF', code: 'CITYRIDE', bg: 'bg-[#3f52a3]' },
  { tag: 'Bundle Offer', title: 'Buy 1 Get 1 Free', code: 'ROADPLUS', bg: 'bg-[#748E36]' },
]

const serviceCards = [
  { title: 'Bus Tickets', desc: 'Book seats on thousands of routes with our verified luxury bus partners.', icon: FaTicketAlt, action: 'Book Now' },
  { title: 'Group Rentals', desc: 'Need a whole bus? Rent for weddings, corporate, or family trips.', icon: FaUsers, action: 'Rent Now' },
  { title: 'Private Cars', desc: 'Luxury SUVs and sedans for premium solo travel.', icon: FaCarSide, action: 'Rent Now' },
  { title: 'Traveller', desc: 'Comfortable tempo travellers for family weekend trips.', icon: FaCarSide, action: 'Rent Now' },
]

const destinations = [
  { title: 'Delhi to Jaipur Car Rental', image: jaipurImage },
  { title: 'Delhi to Agra Car Rental', image: agraImage },
  { title: 'Delhi to Chandigarh Car Rental', image: chandigarhImage },
  { title: 'Delhi to Manali Car Rental', image: manaliImage },
]

const luxuryCars = [
  { name: 'Toyota Innova Crysta', image: carHeroImage, seats: '7 Seats', price: '4500' },
  { name: 'Toyota Fortuner', image: luxuryCarImage, seats: '7 Seats', price: '6500' },
]

const suvCars = [
  { name: 'Toyota Innova Crysta', image: carHeroImage, seats: '7 Seats', price: '4500' },
  { name: 'Maruti Ertiga', image: carAltImage, seats: '6 Seats', price: '3200' },
]

const sedanCars = [
  { name: 'Executive Sedan', image: sedanImage },
  { name: 'Executive Sedan', image: carAltImage },
  { name: 'Executive Sedan', image: sedanImage },
  { name: 'Executive Sedan', image: carAltImage },
]

const quickLinks = [
  'Delhi To Manali Car',
  'Delhi To Dehradun Car',
  'Delhi To Bhuntar Car',
  'Delhi To Dharamshala Car',
  'Delhi To Lucknow Car',
  'Delhi To Shimla Car',
  'Delhi To Nainital Car',
]

function SearchBox({ label, wide = false }) {
  return (
    <button
      type="button"
      className={`flex h-14 items-center justify-between rounded-xl border border-[#4D4D4D]/25 bg-white px-4 text-left text-[16px] text-[#8b8b8b] ${
        wide ? 'min-w-[270px] flex-[1.25]' : 'min-w-[205px] flex-1'
      }`}
    >
      <span className="flex items-center gap-3">
        {label === 'Pickup Date' && <FaCalendarAlt className="text-[#748E36]" />}
        {label}
      </span>
      {label !== 'Pickup Date' && <FaChevronDown className="text-[14px]" />}
    </button>
  )
}

function DealCard({ deal }) {
  return (
    <article className={`relative min-h-[280px] overflow-hidden rounded-[32px] ${deal.bg} p-8 text-white`}>
      <div className="absolute -right-12 top-0 h-full w-40 rounded-full bg-[#748E36] opacity-20 blur-3xl" />
      <div className="relative z-10">
        <span className="inline-flex rounded-full bg-[#748E36] px-3 py-1 text-[10px] font-black uppercase tracking-[1px]">
          {deal.tag}
        </span>
        <h3 className="mt-7 text-[30px] font-black leading-9">{deal.title}</h3>
        <p className="mt-2 text-[16px] font-medium leading-6 text-[#94A3B8]">
          Use code <span className="border-b border-dashed border-white text-white">{deal.code}</span> on your booking
        </p>
        <button className="mt-6 h-12 rounded-xl bg-[#748E36] px-8 text-[16px] font-bold text-white">
          Claim Now
        </button>
      </div>
    </article>
  )
}

function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`${centered ? 'items-center text-center' : 'items-start text-left'} flex flex-col gap-4`}>
      <h2 className="text-[30px] font-black leading-9 text-[#4D4D4D] md:text-[36px] md:leading-10">{title}</h2>
      <p className="text-[16px] leading-6 text-[#4D4D4D]/80">{subtitle}</p>
      {centered && <span className="h-1.5 w-20 rounded-full bg-[#748E36]" />}
    </div>
  )
}

function DestinationCard({ destination }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="relative h-48">
        <img src={destination.image} alt={destination.title} className="h-full w-full object-cover" />
        <span className="absolute right-4 top-4 rounded-full bg-[#748E36] px-4 py-1.5 text-[12px] font-bold text-white">
          Popular
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-[17px] font-bold leading-7 text-[#4D4D4D]">{destination.title}</h3>
        <p className="mt-1 text-[14px] leading-5 text-[#4D4D4D]/50">5 Night 2 Days</p>
        <div className="mt-4 border-t border-[#748E36] pt-4">
          <p className="text-[10px] font-bold uppercase leading-[15px] text-[#4D4D4D]">Starts From</p>
          <div className="flex items-center justify-between gap-4">
            <strong className="text-[18px] font-black leading-7 text-[#4D4D4D]">₹25,000</strong>
            <button className="rounded-xl bg-[#748E36] px-5 py-2 text-[14px] font-bold text-white">View Buses</button>
          </div>
        </div>
      </div>
    </article>
  )
}

function CarCard({ car, compact = false }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <img src={car.image} alt={car.name} className={`w-full object-cover ${compact ? 'h-44' : 'h-56'}`} />
      <div className="p-5">
        <h3 className="text-[17px] font-bold leading-7 text-[#4D4D4D]">{car.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-[#4D4D4D]/70">
          <span className="rounded-full bg-[#f0f2ec] px-3 py-1">{car.seats}</span>
          <span className="rounded-full bg-[#f0f2ec] px-3 py-1">AC</span>
          <span className="rounded-full bg-[#f0f2ec] px-3 py-1">Driver</span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase text-[#4D4D4D]/60">Starts From</p>
            <strong className="text-[20px] font-black text-[#748E36]">₹{car.price}</strong>
          </div>
          <button className="rounded-lg bg-[#748E36] px-5 py-2 text-[13px] font-bold text-white">Book Now</button>
        </div>
      </div>
    </article>
  )
}

function LuxuryCarCard({ car }) {
  return (
    <article className="grid overflow-hidden rounded-[18px] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.05)] md:grid-cols-[311px_1fr]">
      <img src={car.image} alt={car.name} className="h-[283px] w-full object-cover" />
      <div className="flex min-h-[283px] flex-col justify-center px-6 py-5">
        <h3 className="text-[20px] font-bold leading-7 text-[#4D4D4D]">Toyota Innova Crysta</h3>
        <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#748E36]">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#edf1e7] px-3 py-1">
            <FaUsers className="text-[10px]" />
            4 Seats
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#edf1e7] px-3 py-1">
            <FaSnowflake className="text-[10px]" />
            Full AC
          </span>
        </div>
        <p className="mt-4 max-w-[265px] text-[14px] leading-[21px] text-[#4D4D4D]/65">
          Comfortable SUV ideal for family trips, airport pickup & drop, and long distance service.
        </p>
        <div className="mt-5">
          <p className="text-[13px] font-bold text-[#4D4D4D]">
            Per Km :- <span className="text-[26px] font-black text-[#748E36]">₹30</span>
          </p>
          <button className="mt-2 rounded-lg bg-[#748E36] px-6 py-2.5 text-[13px] font-bold text-white">
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}

function LuxuryCarCardClean({ car }) {
  return (
    <article className="grid overflow-hidden rounded-[18px] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.05)] md:grid-cols-[311px_1fr]">
      <img src={car.image} alt={car.name} className="h-[283px] w-full object-cover" />
      <div className="flex min-h-[283px] flex-col justify-center px-6 py-5">
        <h3 className="text-[20px] font-bold leading-7 text-[#4D4D4D]">Toyota Innova Crysta</h3>
        <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#748E36]">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#edf1e7] px-3 py-1">
            <FaUsers className="text-[10px]" />
            4 Seats
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#edf1e7] px-3 py-1">
            <FaSnowflake className="text-[10px]" />
            Full AC
          </span>
        </div>
        <p className="mt-4 max-w-[265px] text-[14px] leading-[21px] text-[#4D4D4D]/65">
          Comfortable SUV ideal for family trips, airport pickup & drop, and long distance service.
        </p>
        <div className="mt-5">
          <p className="text-[13px] font-bold text-[#4D4D4D]">
            Per Km :- <span className="text-[26px] font-black text-[#748E36]">&#8377;30</span>
          </p>
          <button className="mt-2 rounded-lg bg-[#748E36] px-6 py-2.5 text-[13px] font-bold text-white">
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}

function SedanCard({ car }) {
  return (
    <article className="bg-white p-3 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
      <img src={car.image} alt={car.name} className="h-40 w-full rounded-2xl object-cover" />
      <div className="pt-5">
        <h3 className="text-[18px] font-bold leading-7 text-[#4D4D4D]">{car.name}</h3>
        <div className="mt-2 space-y-2">
          <p className="flex items-center gap-2 text-[12px] leading-4 text-[#4D4D4D]/60">
            <FaCheck className="text-[11px] text-[#748E36]" />
            4 Seater, Business Class
          </p>
          <p className="flex items-center gap-2 text-[12px] leading-4 text-[#4D4D4D]/60">
            <FaCheck className="text-[11px] text-[#748E36]" />
            Clean & Sanitized
          </p>
        </div>
        <div className="mt-5">
          <p className="text-[14px] font-bold leading-5 text-[#4D4D4D]">
            Per Km :- <span className="text-[24px] font-black text-[#748E36]">&#8377;800</span>
          </p>
          <div className="mt-3 flex items-center gap-5">
            <button className="h-[38px] w-[118px] rounded-lg border border-[#748E36] text-[12px] font-bold text-[#4D4D4D]">
              Details
            </button>
            <button className="h-[38px] w-[118px] rounded-lg bg-[#748E36] text-[12px] font-bold text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function RentCarPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#e8e9e4]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <FigmaNavbar />

      <section className="relative h-[525px] overflow-visible">
        <img src={carHeroImage} alt="ANT car rental" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-[768px] px-10 pt-[72px] text-white">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[1.2px]">
            Premium Travel Simplified
          </span>
          <h1 className="mt-4 text-[46px] font-black leading-[48px] text-[#FFE9E9] md:text-[72px] md:leading-[72px]">
            Your Journey, Our Priority.
          </h1>
          <p className="mt-4 max-w-[576px] text-[18px] font-medium leading-7 text-white">
            Reliable cars with professional drivers for local, airport, and outstation travel.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-center">
          <h2 className="text-[26px] font-bold leading-9 text-white">Easy car rentals for local and outstation travel.</h2>
          <span className="h-1.5 w-20 rounded-full bg-white" />
        </div>
      </section>

      <section className="relative z-20 -mt-[90px] px-4 pb-20">
        <div className="mx-auto max-w-[1232px] rounded-[24px] bg-[#eeeeee] shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 border-b border-white/60 md:grid-cols-4">
            {searchTabs.map((tab) => {
              const Icon = tab.icon
              const active = tab.id === 'car'
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    if (tab.id === 'bus') navigate('/')
                    if (tab.id === 'traveller') navigate('/rent-traveller')
                    if (tab.id === 'car') navigate('/rent-car')
                    if (tab.id === 'ticket') navigate('/bus-ticket')
                  }}
                  className={`flex h-[64px] items-center justify-center gap-3 border-b-2 px-4 text-[16px] font-bold ${
                    active ? 'border-[#748E36] text-[#4D4D4D]' : 'border-transparent text-[#4D4D4D]/60'
                  }`}
                >
                  <Icon className="text-[18px]" />
                  {tab.label}
                </button>
              )
            })}
          </div>
          <div className="flex flex-wrap gap-4 p-8">
            <SearchBox label="Pickup City" />
            <SearchBox label="Car Type" />
            <SearchBox label="Pickup Date" wide />
            <SearchBox label="Passenger" />
            <button className="flex h-14 min-w-[208px] items-center justify-center gap-3 rounded-xl bg-[#5b6f24] px-8 text-[16px] font-bold text-white">
              <FaSearch className="text-[22px]" />
              Search Cars
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9e4] px-4 py-12">
        <div className="mx-auto max-w-[1248px]">
          <h2 className="mb-8 flex items-center gap-3 text-[30px] font-black leading-9 text-[#4D4D4D]">
            <FaTicketAlt className="text-[#748E36]" />
            Exclusive Deals
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {deals.map((deal) => <DealCard key={deal.title} deal={deal} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e9e9] px-4 py-[72px]">
        <div className="mx-auto max-w-[1248px]">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[36px] font-black leading-10 text-[#4D4D4D]">Our Premium Services</h2>
            <p className="text-[16px] leading-6 text-[#4D4D4D]">
              Travel smarter with our top-quality transport and booking services.
            </p>
            <span className="h-[6px] w-20 rounded-full bg-[#748E36]" />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {serviceCards.map(({ icon: Icon, title, desc, action }) => (
              <article
                key={title}
                className="min-h-[314px] rounded-[24px] bg-[#F6F8F7] px-8 py-8 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#748E36]/20 text-[24px] text-[#748E36]">
                  <Icon />
                </span>
                <h3 className="mt-8 text-[20px] font-bold leading-7 text-[#0F172A]">{title}</h3>
                <p className="mt-4 min-h-[69px] max-w-[205px] text-[14px] leading-[23px] text-[#4D4D4D]">{desc}</p>
                <button className="mt-6 inline-flex items-center gap-1 text-[14px] font-bold leading-5 text-[#748E36]">
                  {action}
                  <FaArrowRight className="text-[12px]" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e9e9] px-0 py-10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-[72px] rounded-[30px] bg-white p-[38px] md:grid-cols-[633px_1fr]">
          <img
            src={carHeroImage}
            alt="Trusted car rental"
            className="h-[454px] w-full rounded-[20px] object-cover"
          />
          <div className="max-w-[455px]">
            <p className="inline-flex rounded-full bg-[#748E36]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[1.2px] text-[#748E36]">
              Our Visionary Approach
            </p>
            <h2 className="mt-2 text-[30px] font-black leading-9 text-[#4D4D4D]">
              Your Trusted Car Rental Service in Delhi NCR
            </h2>
            <p className="mt-3 text-[14px] leading-[26px] text-[#4D4D4D]/80">
              We provide reliable and comfortable car rental services for every occasion. With a premium fleet,
              professional drivers, and customer-first approach, we ensure a smooth and stress-free travel
              experience every time.
            </p>
            <div className="mt-4 space-y-3">
              {[
                { text: 'Wide range of cars for every travel need', icon: FaCarSide },
                { text: 'Professional drivers with proven experience', icon: FaRegStar },
                { text: 'Flexible travel plans tailored to your needs', icon: FaCheck },
                { text: '24/7 support for a hassle-free experience', icon: FaHeadset },
              ].map(({ text, icon: Icon }) => (
                <p key={text} className="flex items-center gap-3 text-[13px] font-semibold text-[#4D4D4D]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#748E36]/15 text-[#748E36]">
                    <Icon className="text-[13px]" />
                  </span>
                  {text}
                </p>
              ))}
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#748E36] px-7 py-3 text-[14px] font-bold text-white">
              Learn More About Us
              <FaArrowRight className="text-[12px]" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#dfe3d8] px-4 py-16">
        <div className="mx-auto max-w-[1248px]">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionTitle title="Popular Destination" subtitle="The most frequented destinations by our Car Rentals" centered={false} />
            <button
              type="button"
              onClick={() => navigate('/rent-car/routes')}
              className="h-11 w-[203px] rounded-xl border-2 border-[#748E36] text-[16px] font-bold text-[#748E36]"
            >
              Explore All Routes
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {destinations.map((destination) => <DestinationCard key={destination.title} destination={destination} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9e4] px-4 py-16">
        <div className="mx-auto max-w-[1248px]">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-[36px] font-black leading-9 text-[#4D4D4D]">Luxury Car Rental</h2>
              <p className="mt-2 text-[16px] leading-6 text-[#4D4D4D]/80">
                Perfect travellers for group travel, tours, and long-distance journeys.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <button className="h-11 rounded-xl border-2 border-[#748E36] px-7 text-[14px] font-bold text-[#748E36]">
                Explore All Routes
              </button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {luxuryCars.map((car) => <LuxuryCarCardClean key={car.name} car={car} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#dfe3d8] px-4 py-16">
        <div className="mx-auto max-w-[1248px]">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-[36px] font-black leading-9 text-[#4D4D4D]">SUV Car Rental</h2>
              <p className="mt-2 text-[16px] leading-6 text-[#4D4D4D]/80">
                Perfect cars for daily travel, airport transfers, and long-distance trips.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <span className="text-[10px] text-white">Button</span>
              <button className="h-11 rounded-xl border-2 border-[#748E36] px-7 text-[14px] font-bold text-[#748E36]">
                Explore All Routes
              </button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {suvCars.map((car) => <LuxuryCarCardClean key={car.name} car={car} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9e4] px-4 py-16">
        <div className="mx-auto max-w-[1248px]">
          <div className="mb-8">
            <h2 className="text-[36px] font-black leading-9 text-[#4D4D4D]">Sedan & Hatchback</h2>
            <p className="mt-2 text-[16px] leading-6 text-[#4D4D4D]/80">
              Perfect travellers for group travel, tours, and long-distance journeys.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {sedanCars.map((car, index) => <SedanCard key={`${car.name}-${index}`} car={car} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-[1092px]">
          <div className="grid items-center gap-16 md:grid-cols-[610px_418px]">
            <div>
              <h2 className="text-[42px] font-black leading-[48px] text-[#4D4D4D]">
                Rent Car with <span className="text-[#748E36]">ANT</span>
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-6 text-[#4D4D4D]/75">
                Now, book your cars on ANT and make your car booking experience easier and more affordable.
                ANT lets you book buses from anywhere in Delhi/NCR at the lowest prices.
                <span className="font-bold text-[#748E36]"> Read More</span>
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#748E36] px-8 py-4 text-[14px] font-bold text-white shadow-[0_14px_24px_rgba(116,142,54,0.24)]">
                  Explore Booking Options
                </button>
                <span className="flex items-center gap-2 text-[12px] font-semibold text-[#4D4D4D]/75">
                  <FaShieldAlt className="text-[#748E36]" />
                  Verified Fleet
                </span>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-[12px] font-medium uppercase tracking-[0.3px] text-[#444]/60">
                <span>No Hidden Charges</span>
                <span className="h-1 w-1 rounded-full bg-[#4D4D4D]" />
                <span>24/7 Support</span>
                <span className="h-1 w-1 rounded-full bg-[#4D4D4D]" />
                <span>Instant Confirmation</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[418px]">
              <img src={luxuryCarImage} alt="Signature class fleet" className="h-[522px] w-full rounded-[32px] object-cover" />
              <div className="absolute -left-6 -top-6 flex h-[59px] w-[270px] items-center gap-3 rounded-2xl bg-white/90 px-5 py-3 shadow-[0_25px_50px_-12px_rgba(25,28,30,0.12)] backdrop-blur-xl">
                <div className="flex w-20">
                  <span className="-mr-2 h-8 w-8 rounded-full border-2 border-white bg-[#7DD8AD]" />
                  <span className="-mr-2 h-8 w-8 rounded-full border-2 border-white bg-[#FFE08D]" />
                  <span className="h-8 w-8 rounded-full border-2 border-white bg-[#E5E2E1]" />
                </div>
                <div>
                  <p className="flex items-center gap-1 text-[14px] font-bold leading-5 text-[#745B04]">
                    <FaStar className="text-[12px]" />
                    4.9 Rating
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[-0.5px] text-[#3E4943]">
                    Trusted by 10k+ travellers
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/35 p-6 text-white backdrop-blur-md">
                <h3 className="text-[18px] font-bold leading-7">Signature Class Fleet</h3>
                <p className="mt-1 text-[14px] leading-5 text-white/80">
                  Experience the gold standard in group transportation.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Wide Range of Buses', icon: FaCarSide, desc: 'From executive sprinters to grand touring coaches, find the perfect fit for your party size.' },
              { title: 'Instant Booking', icon: FaBolt, desc: 'No more waiting for quotes. Our real-time engine provides immediate availability and booking.' },
              { title: 'Smart Autofill', icon: FaRegStar, desc: 'Fill details in seconds with smart autofill and a smoother checkout experience.' },
            ].map(({ title, icon: Icon, desc }) => (
              <article key={title} className="rounded-[24px] border border-[#748E36]/15 bg-white/40 p-8 shadow-sm backdrop-blur-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006445]/5 text-[#006445]">
                  <Icon />
                </span>
                <h3 className="mt-6 text-[20px] font-bold leading-7 text-[#191C1E]">{title}</h3>
                <p className="mt-3 text-[14px] leading-[23px] text-[#3E4943]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9e4] px-4 py-16">
        <div className="mx-auto max-w-[1248px]">
          <div className="text-center">
            <h2 className="text-[30px] font-black leading-9 text-[#4D4D4D]">Traveler Stories</h2>
            <p className="mt-2 text-[16px] leading-6 text-[#4D4D4D]">Every trip has a story, read them here.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="min-h-[245px] rounded-[24px] border border-[#F1F5F9] bg-white p-8">
                <div className="flex h-6 items-center gap-[3px] text-[24px] text-[#FF8000]">
                  {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="mt-4 text-[16px] leading-6 text-[#475569]">
                  "The easiest booking experience I've ever had. The sleeper bus from Delhi was super clean and arrived on time!"
                </p>
                <div className="mt-4 flex items-center gap-4 pt-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfead2] text-[#748E36]">
                    <FaUsers className="text-[14px]" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold leading-6 text-[#0F172A]">Ankit Sharma</h3>
                    <p className="text-[12px] leading-4 text-[#4D4D4D]">Verified on Google</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-[1248px] items-center gap-12 rounded-[24px] bg-white md:grid-cols-[1fr_300px]">
          <div>
            <h2 className="max-w-[651px] text-[36px] font-semibold leading-10 text-[#4D4D4D]">
              Get 10% Off Discount on Your First Booking with ANT App
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-[#4D4D4D]/60">
              Book your bus tickets, rent bus, rent car, rent traveller with the ANT Travel app and enjoy an exclusive 10% discount on your booking.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex h-12 items-center gap-3 rounded-xl bg-[#748E36] px-6 text-[16px] font-bold text-white">
                <FaMobileAlt />
                Google Play
              </button>
              <button className="flex h-12 items-center gap-3 rounded-xl bg-[#748E36] px-6 text-[16px] font-bold text-white">
                <span className="rounded-md border border-white px-1 text-[11px]">ios</span>
                App Store
              </button>
            </div>
          </div>
          <img src={appMockupImage} alt="ANT app" className="mx-auto h-[406px] w-auto rotate-[6deg] object-contain" />
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-[864px]">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[30px] font-black leading-9 text-[#4D4D4D]">Frequently Asked Questions</h2>
            <p className="text-[16px] leading-6 text-[#4D4D4D]/60">
              Everything you need to know about Ant Travel services.
            </p>
            <span className="h-[6px] w-20 rounded-full bg-[#748E36]" />
          </div>
          <div className="mt-10 space-y-4">
            {[
              {
                question: 'How do I cancel my booking and get a refund?',
                answer:
                  'If your booking is eligible under our cancellation policy, the refund will be processed to your original payment method within 5-7 business days. Please note that cancellation charges may apply depending on the time of cancellation and the booking terms. For further assistance, you can contact our customer support team.',
              },
              { question: 'Can I track my bus or rental vehicle in real-time?', answer: 'Yes, live tracking details are shared after booking confirmation where available.' },
              { question: 'What documents are required for car rentals?', answer: 'A valid ID proof and booking confirmation are usually required before pickup.' },
              { question: 'Are there any hidden charges in vehicle rentals?', answer: 'No, all applicable charges are shown clearly before confirmation.' },
              { question: 'Do you provide corporate travel solutions?', answer: 'Yes, we support recurring corporate travel and group transport requirements.' },
            ].map(({ question, answer }, index) => (
              <details
                key={question}
                className="group rounded-[24px] border border-[#4D4D4D]/20 bg-white open:bg-[#4D4D4D]/10"
                open={index === 0}
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="text-[18px] font-bold leading-7 text-[#4D4D4D]">{question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#748E36]/10 text-[#748E36] transition-transform group-open:rotate-180">
                    <FaChevronDown className="text-[12px]" />
                  </span>
                </summary>
                <p className="px-6 pb-5 pr-16 text-[10px] leading-3 text-[#4D4D4D]/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 pb-[150px] pt-14">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="mx-auto flex w-fit flex-col items-center gap-4">
            <p className="text-[24px] font-medium uppercase leading-7 text-black">Quick Travel Links</p>
            <h2 className="text-[48px] font-bold leading-7 text-[#748E36]">Explore Destination</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-[25px]">
            {['Top Bus Routes', 'Popular Bus Routes', 'Buses From Top Cities', 'Top Destination'].map((tab, index) => (
              <button
                key={tab}
                className={`h-9 rounded-full border border-[#748E36] px-5 text-[16px] font-medium leading-7 ${
                  index === 0 ? 'bg-[#748E36] text-white' : 'bg-white text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-4 text-left md:grid-cols-4">
            {[
              [
                'Delhi To Manali Bus',
                'Delhi To Dehradun Bus',
                'Delhi To Bhuntar Bus',
                'Delhi To Dharamshala Bus',
                'Delhi To Lucknow Bus',
                'Delhi To Shimla Bus',
                'Delhi To Nainital Bus',
              ],
              [
                'Delhi To Manali Bus',
                'Delhi To Dehradun Bus',
                'Delhi To Bhuntar Bus',
                'Delhi To Dharamshala Bus',
                'Delhi To Lucknow Bus',
                'Delhi To Shimla Bus',
                'Delhi To Nainital Bus',
              ],
              [
                'Delhi To Manali Bus',
                'Delhi To Dehradun Bus',
                'Delhi To Bhuntar Bus',
                'Delhi To Dharamshala Bus',
                'Delhi To Lucknow Bus',
                'Delhi To Shimla Bus',
                'Delhi To Nainital Bus',
              ],
              [
                'Bangalore To Goa Bus',
                'Bangalore To Madurai Bus',
                'Bangalore To Vijayawada Bus',
                'Bangalore To Dindigul Bus',
                'Bangalore To Guntur Bus',
                'Goa To Mumbai Bus',
                'Nagpur To Pune Bus',
              ],
            ].map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {column.map((link) => (
                  <li key={`${columnIndex}-${link}`} className="list-inside list-disc text-[16px] font-medium leading-7 text-[#4D4D4D]">
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <img
          src={bottomSkylineImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[135px] w-full object-cover opacity-75"
        />
      </section>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
