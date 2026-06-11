import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaBus,
  FaCalendarAlt,
  FaCarSide,
  FaChevronDown,
  FaClock,
  FaSearch,
  FaShieldAlt,
  FaShuttleVan,
  FaSuitcase,
  FaTicketAlt,
  FaUsers,
} from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import TrustPointsSection from '../components/home/TrustPointsSection'
import DealsSection from '../components/home/DealsSection'
import PremiumServicesSection from '../components/home/PremiumServicesSection'
import HomeTravelerStoriesSection from '../components/home/HomeTravelerStoriesSection'
import HomeAppPromotionSection from '../components/home/HomeAppPromotionSection'
import HomeFaqSection from '../components/home/HomeFaqSection'
import QuickTravelLinks from '../components/QuickTravelLinks'
import { DESTINATIONS } from '../components/home/homeConstants'
import travellerHeroImage from '../image/rent.jpg'
import fleetImage from '../image/rent.jpg'
import routeImage from '../image/rent.jpg'

const BOOKING_TABS = [
  { id: 'bus', label: 'Rent Bus', icon: FaBus, href: '/' },
  { id: 'traveller', label: 'Rent Traveller', icon: FaShuttleVan, href: '/rent-traveller' },
  { id: 'car', label: 'Rent Car', icon: FaCarSide, href: '/rent-car' },
  { id: 'ticket', label: 'Bus Tickets', icon: FaTicketAlt, href: '/bus-ticket' },
]

const TRAVELLER_CARDS = [
  { title: 'Premium Traveller', seats: '9-12 Seats', price: 'Rs. 4,500' },
  { title: 'Luxury Traveller', seats: '12-14 Seats', price: 'Rs. 5,500' },
  { title: 'Executive Traveller', seats: '16-17 Seats', price: 'Rs. 7,500' },
]

const TRUST_LIST = [
  'Modern traveller fleet with clean interiors',
  'Verified drivers for local and outstation tours',
  'Flexible pickup from Delhi NCR, airport and hotels',
  'Transparent prices with fast booking support',
]

function TravellerHero() {
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    navigate(tab.href)
  }

  return (
    <section className="relative bg-white" id="traveller-booking">
      <div className="relative h-[525px] overflow-hidden bg-[#101215]">
        <img
          src={travellerHeroImage}
          alt="Tempo traveller rental"
          className="h-full w-full scale-x-[-1] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute left-[3.2%] top-[88px] max-w-[768px] text-white">
          <p className="inline-flex h-7 items-center rounded-full bg-white/10 px-4 text-[12px] font-bold uppercase leading-4 tracking-[1.2px]">
            Premium Travel Simplified
          </p>
          <h1 className="mt-4 max-w-[768px] text-[44px] font-black leading-[1.02] text-[#FFE9E9] md:text-[72px]">
            Your Journey,
            <br />
            Our Priority.
          </h1>
          <p className="mt-4 max-w-[576px] text-[18px] font-medium leading-7 text-white">
            Experience comfort, safety, and reliable traveller rental for family trips, tours, and airport transfers.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-[72px] text-center text-white">
          <p className="text-[24px] font-bold leading-9 md:text-[26px]">
            Reliable Traveller Rental with Professional Drivers.
          </p>
          <span className="mx-auto mt-[13px] block h-1.5 w-20 rounded-full bg-white" />
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-[90px] w-[94%] max-w-[1232px] overflow-hidden rounded-[24px] border border-white/40 bg-[#f2f2f2] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md">
        <div className="flex min-h-[54px] overflow-x-auto border-b border-white/40">
          {BOOKING_TABS.map((tab) => {
            const Icon = tab.icon
            const active = tab.id === 'traveller'
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab)}
                className={`group flex h-[53.5px] min-w-[205px] flex-1 items-center justify-center gap-2 border-b-2 px-6 pb-[17px] pt-[16.5px] text-[14px] font-bold leading-5 whitespace-nowrap transition-all focus-visible:border-[#748E36] focus-visible:text-[#4d4d4d] focus-visible:outline-none ${
                  active
                    ? 'border-[#748E36] bg-white/30 text-[#4d4d4d]'
                    : 'border-transparent text-[#4d4d4d]/65 hover:border-[#748E36] hover:text-[#4d4d4d]'
                }`}
              >
                <Icon className={`text-[14px] ${active ? 'text-[#4d4d4d]' : 'text-[#4d4d4d]/60'}`} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 px-6 py-6 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.3fr_1fr_1fr]">
          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/50 px-3">
            <select defaultValue="" className="h-full w-full appearance-none bg-transparent pr-8 text-[16px] text-[#4d4d4d]/65 outline-none md:text-[20px]">
              <option value="" disabled>Destination</option>
              <option>Delhi to Jaipur</option>
              <option>Delhi to Agra</option>
              <option>Delhi to Manali</option>
              <option>Delhi to Chandigarh</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 text-[15px] text-[#4d4d4d]/60" />
          </label>

          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/50 px-3">
            <select defaultValue="" className="h-full w-full appearance-none bg-transparent pr-8 text-[16px] text-[#4d4d4d]/65 outline-none md:text-[20px]">
              <option value="" disabled>Traveller Type</option>
              <option>9 Seater Tempo Traveller</option>
              <option>12 Seater Tempo Traveller</option>
              <option>17 Seater Force Traveller</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 text-[15px] text-[#4d4d4d]/60" />
          </label>

          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/50 px-4">
            <FaCalendarAlt className="absolute left-5 text-[22px] text-[#748E36]" />
            <input
              type="text"
              onFocus={(event) => { event.currentTarget.type = 'date' }}
              onBlur={(event) => {
                if (!event.currentTarget.value) event.currentTarget.type = 'text'
              }}
              placeholder="Departure Date"
              className="h-full w-full bg-transparent pl-11 text-[16px] text-[#4d4d4d]/65 outline-none placeholder:text-[#4d4d4d]/60 md:text-[20px]"
            />
          </label>

          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/50 px-4">
            <FaUsers className="absolute left-5 text-[24px] text-[#748E36]" />
            <select className="h-full w-full appearance-none bg-transparent pl-11 text-[16px] text-[#4d4d4d]/65 outline-none md:text-[20px]">
              <option value="">Passenger</option>
              {[4, 6, 8, 10, 12, 14, 17].map((n) => (
                <option key={n} value={n}>{n} Passengers</option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => navigate('/send-enquiry')}
            className="flex h-14 items-center justify-center gap-3 rounded-[12px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-5 text-[16px] font-bold text-white transition-all hover:brightness-110 md:text-[20px]"
          >
            <FaSearch className="text-[22px]" />
            Search Traveller
          </button>
        </div>
      </div>
    </section>
  )
}

function TravellerTrustedSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-[#e5e5e5] px-4 py-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid items-center gap-10 rounded-[30px] bg-white px-5 py-6 lg:min-h-[552px] lg:grid-cols-[minmax(420px,616px)_minmax(0,620px)] lg:gap-[76px] lg:px-[38px]">
          <div className="h-[360px] overflow-hidden rounded-[20px] lg:h-[480px]">
            <img src={travellerHeroImage} alt="Luxury tempo traveller" className="h-full w-full scale-x-[-1] object-cover object-center" />
          </div>
          <div className="flex max-w-[620px] flex-col items-start">
            <p className="inline-flex rounded-full bg-[#748E36]/20 px-4 py-1.5 text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-[#748E36]">
              Traveller Rental
            </p>
            <h2 className="mt-5 text-[30px] font-black leading-tight text-[#4d4d4d] md:text-[44px] md:leading-[52px]">
              Your Trusted Traveller Rental Service in Delhi NCR
            </h2>
            <p className="mt-4 max-w-[530px] text-[16px] font-medium leading-[29px] text-[#4d4d4d]">
              Book clean, comfortable tempo travellers for family tours, weddings, airport transfers, and long-distance journeys with professional drivers.
            </p>
            <ul className="mt-5 grid gap-2">
              {TRUST_LIST.map((item) => (
                <li key={item} className="flex min-h-10 items-center gap-4 text-[14px] font-semibold leading-5 text-[#4d4d4d]">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#748E36]/20 text-[#748E36]">
                    <FaShieldAlt className="text-[20px]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => navigate('/send-enquiry')}
              className="mt-7 inline-flex h-14 items-center gap-3 rounded-[16px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-8 text-[16px] font-black text-white shadow-md transition-all hover:brightness-110"
            >
              Learn More About Us
              <FaArrowRight className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TravellerFleetSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-[#ececec] px-4 py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="mb-10">
          <h2 className="text-[32px] font-black leading-10 text-[#4d4d4d] md:text-[36px]">
            Luxury Traveller/Minivan Rental
          </h2>
          <p className="mt-2 text-[16px] leading-6 text-[#4d4d4d]/80">
            Perfect travellers for group travel, tours, and long-distance journeys.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TRAVELLER_CARDS.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-[18px] bg-white shadow-[0_8px_24px_rgba(25,28,30,0.08)]">
              <div className="h-[260px] overflow-hidden">
                <img
                  src={index === 1 ? travellerHeroImage : fleetImage}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[20px] font-bold text-[#4d4d4d]">{item.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2 text-[12px] font-semibold text-[#4d4d4d]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#edeef0] px-3 py-1">
                    <FaUsers /> {item.seats}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#edeef0] px-3 py-1">
                    <FaSuitcase /> Large Boot
                  </span>
                </div>
                <p className="mt-4 text-[14px] leading-6 text-[#4d4d4d]/70">
                  Comfortable traveller with AC, pushback seats, music system, and verified driver support.
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[#4d4d4d]/15 pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-[#4d4d4d]/70">Starts from</p>
                    <p className="text-[22px] font-black text-[#748E36]">{item.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/send-enquiry')}
                    className="rounded-[12px] bg-[#748E36] px-5 py-3 text-[14px] font-bold text-white hover:bg-[#647b2f]"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TravellerPopularDestinationsSection() {
  const navigate = useNavigate()

  return (
    <section id="popular-destination" className="bg-[#748E36]/10 px-4 pb-24 pt-[38px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[430px]">
            <h2 className="text-[32px] font-black leading-9 text-[#4d4d4d] md:text-[36px]">Popular Destination</h2>
            <p className="mt-2 text-[16px] leading-6 text-[#4d4d4d]/80">
              Top destinations frequently chosen for Traveller rentals
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/rent-traveller/routes')}
            className="flex h-11 min-w-[203px] items-center justify-center rounded-[12px] border-2 border-[#748E36] px-6 text-[16px] font-bold leading-6 text-[#748E36] transition-colors hover:bg-[#748E36] hover:text-white"
          >
            Explore All Routes
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {DESTINATIONS.map((item) => (
            <article
              key={item.title}
              className="min-h-[367px] overflow-hidden rounded-[12px] bg-white transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-[#748E36] px-3 py-1 text-[12px] font-bold leading-4 text-white">
                  Popular
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-[16px] font-bold leading-7 text-[#4d4d4d]">
                  {item.title}
                </h3>

                <div className="flex h-[32.5px] items-center gap-1 pb-3 text-[14px] leading-5 text-[#4d4d4d]/50">
                  <FaClock className="text-[12px] text-[#4d4d4d]/50" />
                  <span>5 Night 2 Days</span>
                </div>

                <div className="flex h-[60px] items-center justify-between gap-3 border-t border-[#748E36] pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-[15px] text-[#4d4d4d]">Starts from</p>
                    <p className="text-[18px] font-black leading-7 text-[#4d4d4d]">{'\u20B9'}25,000</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/rent-traveller/routes', {
                        state: { routeTitle: item.title },
                      })
                    }
                    className="flex h-9 min-w-[124px] items-center justify-center rounded-[12px] bg-[#748E36] px-4 text-[14px] font-bold leading-5 text-[#f1f5f9] hover:bg-[#647b2f]"
                  >
                    View Buses
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TravellerAntSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto grid w-full max-w-[1140px] items-center gap-10 lg:grid-cols-[minmax(0,610px)_minmax(360px,418px)] lg:gap-16">
        <div>
          <h2 className="text-[42px] font-bold leading-tight text-[#4d4d4d] md:text-[60px]">
            Rent Traveller with <span className="text-[#748E36]">ANT</span>
          </h2>
          <p className="mt-4 max-w-[576px] text-[18px] leading-8 text-[#3E4943] md:text-[20px]">
            Book a tempo traveller for city tours, outstation trips, weddings, and airport transfers with clean interiors and trained chauffeurs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/send-enquiry')}
              className="inline-flex h-[58px] items-center justify-center rounded-full bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-9 text-[16px] font-bold text-white shadow-[0_20px_25px_-5px_rgba(0,100,69,0.1)]"
            >
              Book Your Traveller Now
            </button>
            <span className="text-[14px] font-medium text-[#3E4943]">Best fare guarantee</span>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,100,69,0.08)]">
          <img src={routeImage} alt="Premium traveller fleet" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,100,69,0.36)_0%,rgba(0,100,69,0)_70%)]" />
          <div className="absolute inset-x-6 bottom-6 rounded-[16px] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">
            <h3 className="font-['Manrope'] text-[18px] font-bold leading-7">Signature Class Fleet</h3>
            <p className="mt-1 text-[14px] leading-5 text-white/80">Experience the gold standard in group transportation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function RentTravellerPage() {
  return (
    <div className="min-h-screen bg-[#ececec] text-[#1a1c22]">
      <FigmaNavbar />
      <main>
        <TravellerHero />
        <TrustPointsSection />
        <DealsSection />
        <PremiumServicesSection />
        <TravellerTrustedSection />
        <TravellerPopularDestinationsSection />
        <TravellerFleetSection />
        <TravellerAntSection />
        <HomeTravelerStoriesSection />
        <HomeAppPromotionSection />
        <HomeFaqSection />
        <QuickTravelLinks />
      </main>
      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
