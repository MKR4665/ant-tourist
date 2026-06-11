import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBus, FaShuttleVan, FaCarSide, FaTicketAlt, FaArrowRight } from 'react-icons/fa'

const SERVICES = [
  {
    icon: FaBus,
    title: 'Bus Rental',
    desc: 'Charter a full bus for corporate events, weddings, school trips, and outstation travel. We have 20-55 seater AC buses.',
    tags: ['20–55 Seater', 'AC Buses', 'All India'],
    href: '/send-enquiry',
    color: '#789736',
  },
  {
    icon: FaShuttleVan,
    title: 'Tempo Traveller',
    desc: 'Comfortable 9 to 17 seater tempo travellers perfect for family trips, group tours, and airport transfers.',
    tags: ['9–17 Seater', 'AC', 'GPS Tracked'],
    href: '/rent-traveller',
    color: '#4a54e8',
  },
  {
    icon: FaCarSide,
    title: 'Car Rental',
    desc: 'Premium sedans, SUVs and luxury cars for local city travel, outstation journeys, and airport pickups.',
    tags: ['Sedan / SUV', 'Luxury', 'Driver Included'],
    href: '/rent-car',
    color: '#e85a4a',
  },
  {
    icon: FaTicketAlt,
    title: 'Bus Tickets',
    desc: 'Book AC sleeper and seater bus tickets on popular routes from Delhi to Jaipur, Agra, Chandigarh & more.',
    tags: ['AC Sleeper', 'AC Seater', 'Instant Booking'],
    href: '/bus-ticket',
    color: '#e8804a',
  },
]

export default function HomeServicesSection() {
  const navigate = useNavigate()
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto w-[92%] max-w-[1470px]">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-bold text-[#1a1c22] md:text-[34px]">Services We Provide</h2>
          <p className="mt-2 text-[14px] text-[#6b6f77]">Choose the right vehicle as per your group size and journey type</p>
          <span className="mx-auto mt-4 block h-[4px] w-[60px] rounded-full bg-[#789736]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.title}
                className="group overflow-hidden rounded-[20px] border border-[#e8edda] bg-[#fafafa] p-6 transition-all hover:-translate-y-1 hover:border-[#789736] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${s.color}18` }}
                >
                  <Icon className="text-[22px]" style={{ color: s.color }} />
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-[#1a1c22]">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#6b6f77]">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ backgroundColor: `${s.color}15`, color: s.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => navigate(s.href)}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors"
                  style={{ color: s.color }}
                >
                  Book Now <FaArrowRight className="text-[11px]" />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
