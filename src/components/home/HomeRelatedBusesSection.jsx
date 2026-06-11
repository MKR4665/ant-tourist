import React from 'react'
import { Link } from 'react-router-dom'
import { FaSnowflake, FaStar, FaSuitcase, FaTint, FaWheelchair } from 'react-icons/fa'
import luxuryBusImage from '../../image/2.png'
import acBusImage from '../../assets/tttttt6.jpg'

const LUXURY_BUSES = Array.from({ length: 3 }, () => ({
  title: 'Luxury Volvo Bus',
  seats: '21 Seats',
  ac: 'AC',
  luggage: '30 Luggage',
  water: 'Water Bottle',
  desc: 'Travel together, travel better with comfort and safety-premium bus rentals for corporate events, weddings, group travel, and more. Book your ride today for a smooth, stress-free journey.',
}))

const AC_SEATER_BUSES = Array.from({ length: 3 }, () => ({
  title: '21 Seater 2+1 AC Deluxe Coach',
  seats: '21 Seats',
  ac: 'AC',
  luggage: '30 Luggage',
  water: 'Water Bottle',
  desc: 'Perfect for corporate groups and wedding transportation, outstation, airport pickup & drop with ultimate comfort.',
}))

const AC_SLEEPER_BUSES = Array.from({ length: 3 }, () => ({
  title: '21 Sleeper 2+1 AC Deluxe Coach',
  seats: '21 Seats',
  ac: 'AC',
  luggage: '30 Luggage',
  water: 'Water Bottle',
  desc: 'Perfect for corporate groups and wedding transportation, outstation, airport pickup & drop with ultimate comfort.',
}))

const FEATURES = [
  { key: 'seats', icon: FaWheelchair },
  { key: 'ac', icon: FaSnowflake },
  { key: 'luggage', icon: FaSuitcase },
  { key: 'water', icon: FaTint },
]

function PriceLine({ label, oldPrice, price, suffix = '' }) {
  return (
    <p className="flex flex-wrap items-center gap-1 text-[14px] font-semibold leading-5 text-[#4d4d4d]">
      <span>{label}</span>
      <span>-</span>
      <span className="text-[12px] font-medium text-[#4d4d4d]/40 line-through">{oldPrice}</span>
      <span className="text-[16px] font-bold leading-8 text-[#748E36]">{price}</span>
      {suffix ? <span className="text-[12px] font-normal text-[#9ca3af]">{suffix}</span> : null}
    </p>
  )
}

function SleeperPriceBlock() {
  return (
    <div className="mt-5 border-t border-[#4d4d4d]/5 pt-6 text-center">
      <p className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-[#4d4d4d]">
        OUTSTATION- MIN 300KM/DAY
      </p>
      <p className="mt-1 flex items-center justify-center gap-1 text-[#4d4d4d]">
        <span className="text-[12px] font-medium line-through">₹15,000</span>
        <span className="text-[24px] font-bold leading-8 text-[#748E36]">₹60</span>
        <span className="text-[12px] font-normal">/Per km</span>
      </p>
    </div>
  )
}

function BusCard({ bus, image, imageAlt, showBadge = true, pricing = 'standard' }) {
  return (
    <article className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_24px_rgba(25,28,30,0.06)]">
      <div className="relative h-[257px] overflow-hidden rounded-t-[16px]">
        <img src={image} alt={imageAlt || bus.title} className="h-full w-full object-cover" />
        {showBadge && (
          <span className="absolute left-[18px] top-[22px] inline-flex h-7 items-center gap-1.5 rounded-full bg-[#ffdc7e] px-4 text-[12px] font-bold uppercase leading-4 tracking-[0.6px] text-[#78600a] shadow">
            <FaStar className="text-[12px]" />
            Premium
          </span>
        )}
      </div>

      <div className="px-4 pb-[22px] pt-6">
        <h3 className="font-['Manrope'] text-[24px] font-bold leading-8 text-[#111]">
          {bus.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {FEATURES.map(({ key, icon: Icon }) => (
            <span
              key={key}
              className="inline-flex h-6 items-center gap-1 rounded-full bg-[#edeef0] px-3 text-[12px] font-semibold leading-4 text-[#3e4943]"
            >
              <Icon className="text-[13px]" />
              {bus[key]}
            </span>
          ))}
        </div>

        <p className="mt-6 text-[12px] leading-5 text-[#4d4d4d]/60">
          {bus.desc}
        </p>

        {pricing === 'sleeper' ? (
          <SleeperPriceBlock />
        ) : (
          <div className="mt-5 space-y-0">
            <PriceLine label="Local Price Starting 4hr/40km" oldPrice="₹9500" price="₹9500" />
            <PriceLine label="Outstation Price Min 300km/Day" oldPrice="₹70/km" price="₹60" suffix="/per km" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#4d4d4d]/20 px-4 py-[18px]">
        <Link
          to="/send-enquiry"
          className="flex h-[45px] min-w-[136px] items-center justify-center rounded-full border border-[#4d4d4d] px-6 text-[14px] font-bold leading-5 text-[#191c1e] hover:bg-[#f4f4f4]"
        >
          View Details
        </Link>
        <Link
          to="/send-enquiry"
          className="flex h-[46px] min-w-[135px] items-center justify-center rounded-full bg-[#748E36] px-8 text-[14px] font-bold leading-5 text-white shadow-[0_10px_15px_-3px_rgba(0,100,69,0.1),0_4px_6px_-4px_rgba(0,100,69,0.1)] hover:bg-[#647b2f]"
        >
          Book Now
        </Link>
      </div>
    </article>
  )
}

function RentalSection({ title, subtitle, children, className = '', headerClassName = 'mb-8' }) {
  return (
    <div className={className}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 md:py-16">
        <header className={headerClassName}>
          <h2 className="text-[32px] font-black leading-10 text-[#4d4d4d] md:text-[36px]">
            {title}
          </h2>
          <p className="mt-2 text-[16px] leading-6 text-[#4d4d4d]">
            {subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-[11px] lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function HomeRelatedBusesSection() {
  return (
    <section id="related-buses" className="bg-[#ececec]">
      <RentalSection
        title="Luxury Bus Rental"
        subtitle="Hire top-tier vehicles for your group or individual needs."
        className="bg-[#ececec]"
        headerClassName="mb-10"
      >
        {LUXURY_BUSES.map((bus, index) => (
          <BusCard key={`${bus.title}-${index}`} bus={bus} image={luxuryBusImage} />
        ))}
      </RentalSection>

      <RentalSection
        title="AC Seater Bus Rental"
        subtitle="Choose the perfect seater bus for your comfortable group travel"
        className="bg-[#748E36]/10"
      >
        {AC_SEATER_BUSES.map((bus, index) => (
          <BusCard
            key={`${bus.title}-${index}`}
            bus={bus}
            image={acBusImage}
            imageAlt="21 seater AC deluxe coach"
            showBadge={false}
          />
        ))}
      </RentalSection>

      <RentalSection
        title="AC Sleeper Bus Rental"
        subtitle="Relax and travel long distances with comfortable sleeper beds"
        className="bg-[#ececec]"
      >
        {AC_SLEEPER_BUSES.map((bus, index) => (
          <BusCard
            key={`${bus.title}-${index}`}
            bus={bus}
            image={acBusImage}
            imageAlt="AC sleeper bus rental"
            showBadge={false}
            pricing="sleeper"
          />
        ))}
      </RentalSection>
    </section>
  )
}
