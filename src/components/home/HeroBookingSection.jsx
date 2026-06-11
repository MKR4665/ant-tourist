import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaBus,
  FaShuttleVan,
  FaCarSide,
  FaTicketAlt,
  FaSearch,
  FaCalendarAlt,
  FaUsers,
  FaChevronDown,
  FaArrowRight,
} from 'react-icons/fa'
import heroBusImage from '../../image/2.png'

const BOOKING_TABS = [
  { id: 'bus', label: 'Rent Bus', icon: FaBus },
  { id: 'traveller', label: 'Rent Traveller', icon: FaShuttleVan },
  { id: 'car', label: 'Rent Car', icon: FaCarSide },
  { id: 'ticket', label: 'Bus Tickets', icon: FaTicketAlt },
]

export default function HeroBookingSection() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('bus')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)

    if (tabId === 'traveller') {
      navigate('/rent-traveller')
    } else if (tabId === 'car') {
      navigate('/rent-car')
    } else if (tabId === 'ticket') {
      navigate('/bus-ticket')
    }
  }

  return (
    <section className="relative bg-white" id="home">
      {/* Hero Background */}
      <div className="relative w-full overflow-hidden bg-[#101215]">
        <img src={heroBusImage} alt="ANT luxury bus fleet" className="block h-auto w-full" />
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero Copy */}
        <div className="absolute left-[5%] top-[16%] max-w-[680px] text-white">
          <p className="inline-flex rounded-full bg-[rgba(255,255,255,0.18)] px-5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em]">
            Premium Travel Simplified
          </p>
          <h1 className="mt-4 text-[42px] font-extrabold leading-[1.06] md:text-[64px]">
            <span className="text-[#f0eded]">Your Journey,</span>
            <br />
            <span className="text-[#8ab336]">Our Priority.</span>
          </h1>
          <p className="mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#dde0e2] md:text-[18px]">
            Experience the pinnacle of comfort and safety with our fleet of luxury buses and private rentals across the nation.
          </p>
          <button
            type="button"
            onClick={() => navigate('/send-enquiry')}
            className="mt-6 inline-flex items-center gap-2 rounded-[12px] bg-[#789736] px-8 py-3 text-[15px] font-bold text-white shadow-lg transition-all hover:bg-[#6a8530] hover:shadow-xl"
          >
            Book Now <FaArrowRight />
          </button>
        </div>

        {/* Center bottom text - Figma: Book the Perfect Bus */}
        <div className="absolute inset-x-0 bottom-[15%] hidden text-center text-white lg:block">
          <p className="text-[32px] font-bold drop-shadow-lg">Book the Perfect Bus for Your Trip.</p>
          <span className="mx-auto mt-2 block h-[5px] w-[80px] rounded-full bg-white opacity-80" />
        </div>
      </div>

      {/* Booking Glass Card - Figma: Main Booking Glass Card */}
      <div
        id="booking-panel"
        className="relative z-20 mx-auto -mt-[90px] w-[94%] max-w-[1232px] overflow-hidden rounded-[24px] border border-white/40 bg-[#eaeaea] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md"
      >
        {/* Tabs */}
        <div className="flex min-h-[54px] gap-0 overflow-x-auto border-b border-white/20">
          {BOOKING_TABS.map((tab) => {
            const Icon = tab.icon
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`group flex h-[53.5px] min-w-[205px] flex-1 items-center justify-center gap-2 border-b-2 px-6 pb-[17px] pt-[16.5px] text-[14px] font-bold leading-5 whitespace-nowrap transition-all focus-visible:border-[#748E36] focus-visible:text-[#4d4d4d] focus-visible:outline-none ${
                  active
                    ? 'border-[#748E36] text-[#4d4d4d]'
                    : 'border-transparent text-[#4d4d4d]/70 hover:border-[#748E36] hover:text-[#4d4d4d]'
                }`}
              >
                <Icon className={`text-[14px] ${active ? 'text-[#4d4d4d]' : 'text-[#4d4d4d]/70 group-hover:text-[#4d4d4d]'}`} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 items-stretch gap-4 px-6 py-6 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.3fr_1fr_1fr]">
          {/* Destination */}
          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/10 px-3">
            <select
              defaultValue=""
              className="h-full w-full appearance-none bg-transparent pr-8 text-[16px] text-[#4d4d4d]/60 outline-none md:text-[20px]"
            >
              <option value="" disabled>Destination</option>
              <option value="delhi">Delhi</option>
              <option value="jaipur">Jaipur</option>
              <option value="agra">Agra</option>
              <option value="manali">Manali</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 text-[15px] text-[#4d4d4d]/60" />
          </label>

          {/* Bus Type */}
          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/10 px-3">
            <select
              defaultValue=""
              className="h-full w-full appearance-none bg-transparent pr-8 text-[16px] text-[#4d4d4d]/60 outline-none md:text-[20px]"
            >
              <option value="" disabled>Bus Type</option>
              <option value="standard">Standard Bus</option>
              <option value="luxury">Luxury Bus</option>
              <option value="sleeper">Sleeper Bus</option>
              <option value="mini">Mini Bus</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 text-[15px] text-[#4d4d4d]/60" />
          </label>

          {/* Date */}
          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/10 px-4">
            <FaCalendarAlt className="absolute left-5 text-[22px] text-[#748E36]" />
            <input
              type="text"
              onFocus={(event) => { event.currentTarget.type = 'date' }}
              onBlur={(event) => {
                if (!event.currentTarget.value) event.currentTarget.type = 'text'
              }}
              placeholder="Departure Date"
              className="h-full w-full bg-transparent pl-11 text-[16px] text-[#4d4d4d]/60 outline-none placeholder:text-[#4d4d4d]/60 md:text-[20px]"
            />
          </label>

          {/* Passengers */}
          <label className="relative flex h-14 items-center rounded-[12px] border border-[#4d4d4d]/35 bg-white/10 px-4">
            <FaUsers className="absolute left-5 text-[24px] text-[#748E36]" />
            <select className="h-full w-full appearance-none bg-transparent pl-11 text-[16px] text-[#4d4d4d]/60 outline-none md:text-[20px]">
              <option value="">Passenger</option>
              {[1,2,3,4,5,6,7,8,9,10,15,20,30,40,50].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </label>

          {/* Search CTA */}
          <button
            type="button"
            onClick={() => navigate('/send-enquiry')}
            className="flex h-14 items-center justify-center gap-3 rounded-[12px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-5 text-[16px] font-bold text-white transition-all hover:brightness-110 md:text-[20px]"
          >
            <FaSearch className="text-[22px]" />
            Search Buses
          </button>
        </div>
      </div>
    </section>
  )
}
