import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaSnowflake, FaSuitcase, FaArrowRight, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import travImage from '../assets/tttttt6.jpg'

// Figma: rent traveller page data
const TRAVELLERS = [
  { name: '9 Seater Tempo Traveller', seats: 9, ac: true, luggage: 'Large Boot', localPrice: '₹4,500', outstationRate: '₹18/km', minKm: '300 km/day', image: travImage },
  { name: '12 Seater Tempo Traveller', seats: 12, ac: true, luggage: 'Large Boot', localPrice: '₹5,500', outstationRate: '₹20/km', minKm: '300 km/day', image: travImage },
  { name: '14 Seater Force Traveller', seats: 14, ac: true, luggage: 'Large Boot', localPrice: '₹6,000', outstationRate: '₹22/km', minKm: '300 km/day', image: travImage },
  { name: '17 Seater Force Traveller', seats: 17, ac: true, luggage: 'Large Boot', localPrice: '₹7,500', outstationRate: '₹25/km', minKm: '300 km/day', image: travImage },
]

const POPULAR_ROUTES = [
  { from: 'Delhi', to: 'Jaipur', distance: '280 km', time: '5h', price: '₹18,000' },
  { from: 'Delhi', to: 'Agra', distance: '230 km', time: '4h', price: '₹15,000' },
  { from: 'Delhi', to: 'Chandigarh', distance: '260 km', time: '5h', price: '₹16,500' },
  { from: 'Delhi', to: 'Manali', distance: '540 km', time: '12h', price: '₹32,000' },
]

export default function RentTravellerPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#ececec]">
      <FigmaNavbar />

      {/* Hero */}
      <div className="relative h-[380px] overflow-hidden">
        <img src={travImage} alt="Rent Traveller" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,17,22,0.85)_0%,rgba(15,17,22,0.40)_100%)]" />
        <div className="absolute left-[5%] top-[50%] -translate-y-1/2 text-white">
          <p className="inline-flex rounded-full bg-white/20 px-4 py-1 text-[12px] font-bold uppercase tracking-widest">
            Luxury Traveller/Minivan Rental
          </p>
          <h1 className="mt-3 text-[32px] font-extrabold leading-tight md:text-[48px]">
            Rent a <span className="text-[#a3c455]">Tempo Traveller</span>
          </h1>
          <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#dde0e2]">
            Perfect travellers for group travel, tours, and long-distance journeys.
            Comfortable 9 to 17 seater options with professional drivers.
          </p>
          <button
            onClick={() => navigate('/send-enquiry')}
            className="mt-5 inline-flex items-center gap-2 rounded-[12px] bg-[#789736] px-7 py-3 text-[15px] font-bold text-white hover:bg-[#6a8530]"
          >
            Get Instant Quote <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Vehicle Cards - Figma: Vehicle Rental Section */}
      <section className="py-14">
        <div className="mx-auto w-[92%] max-w-[1470px]">
          <div className="mb-10 text-center">
            <h2 className="text-[28px] font-bold text-[#1a1c22] md:text-[36px]">Our Traveller Fleet</h2>
            <p className="mt-2 text-[15px] text-[#6b6f77]">Choose from our well-maintained tempo travellers for any group size</p>
            <span className="mx-auto mt-4 block h-[4px] w-[60px] rounded-full bg-[#789736]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TRAVELLERS.map((v) => (
              <article key={v.name} className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
                <div className="h-[180px] overflow-hidden">
                  <img src={v.image} alt={v.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-bold text-[#1a1c22]">{v.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ecf2df] px-2.5 py-1 text-[12px] font-semibold text-[#6a8530]">
                      <FaUsers className="text-[10px]" /> {v.seats} Seats
                    </span>
                    {v.ac && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#e0f0ff] px-2.5 py-1 text-[12px] font-semibold text-[#2a6090]">
                        <FaSnowflake className="text-[10px]" /> AC
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#f4f4f4] px-2.5 py-1 text-[12px] font-semibold text-[#555]">
                      <FaSuitcase className="text-[10px]" /> {v.luggage}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1.5 rounded-[12px] bg-[#f5f5f5] p-3">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-semibold text-[#789736]">Local (4hr/40km)</span>
                      <span className="font-bold text-[#1a1c22]">{v.localPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-semibold text-[#789736]">Outstation</span>
                      <span className="font-bold text-[#1a1c22]">{v.outstationRate}</span>
                    </div>
                    <p className="text-[11px] text-[#888]">Min {v.minKm}</p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => navigate('/send-enquiry')}
                      className="flex-1 rounded-[10px] border-2 border-[#789736] py-2 text-[13px] font-bold text-[#789736] hover:bg-[#f4f7ec]"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => navigate('/send-enquiry')}
                      className="flex-1 rounded-[10px] bg-[#789736] py-2 text-[13px] font-bold text-white hover:bg-[#6a8530]"
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

      {/* Popular Routes - Figma: Section - Popular Routes */}
      <section className="bg-white py-14">
        <div className="mx-auto w-[92%] max-w-[1470px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-[26px] font-bold text-[#1a1c22] md:text-[32px]">Popular Traveller Routes</h2>
              <p className="mt-1 text-[14px] text-[#6b6f77]">Most booked tempo traveller routes from Delhi</p>
            </div>
            <button className="rounded-[10px] border-2 border-[#789736] px-5 py-2 text-[13px] font-bold text-[#789736] hover:bg-[#789736] hover:text-white">
              Explore All Routes
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {POPULAR_ROUTES.map(r => (
              <div key={`${r.from}-${r.to}`} className="rounded-[16px] border border-[#e8edda] bg-[#f8faf4] p-5 transition-all hover:border-[#789736] hover:shadow-md">
                <p className="text-[18px] font-bold text-[#1a1c22]">{r.from} → {r.to}</p>
                <p className="mt-1 text-[13px] text-[#888]">{r.distance} · {r.time}</p>
                <p className="mt-3 text-[22px] font-bold text-[#789736]">{r.price}</p>
                <p className="text-[12px] text-[#aaa]">Starts from</p>
                <button
                  onClick={() => navigate('/send-enquiry')}
                  className="mt-4 flex w-full items-center justify-center gap-1 rounded-[10px] bg-[#789736] py-2 text-[13px] font-bold text-white hover:bg-[#6a8530]"
                >
                  Book Now <FaArrowRight className="text-[11px]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14">
        <div className="mx-auto w-[92%] max-w-[1470px]">
          <div className="grid gap-8 rounded-[24px] bg-[#1a1c22] p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-[26px] font-bold text-white md:text-[32px]">Why Rent From ANT Travel?</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[#9ca0a8]">
                We offer the best-in-class traveller rental experience across Delhi NCR with verified vehicles and professional drivers.
              </p>
              <ul className="mt-6 space-y-3">
                {['Well-maintained, air-conditioned travellers', 'Professional & verified drivers', 'GPS-tracked vehicles for safety', 'Flexible booking & free cancellation', '24/7 customer support'].map(it => (
                  <li key={it} className="flex items-center gap-2 text-[14px] text-[#c8ccd2]">
                    <FaCheckCircle className="shrink-0 text-[#789736]" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/send-enquiry')}
                  className="inline-flex items-center gap-2 rounded-[12px] bg-[#789736] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#6a8530]"
                >
                  Get Instant Quote <FaArrowRight />
                </button>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-[12px] border border-[#3a3f48] bg-[#2c2f36] px-6 py-3 text-[14px] font-bold text-white hover:border-[#789736]"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-[20px] border border-[#2c2f36] bg-[#22252d] p-6 text-center">
                <div className="mx-auto flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#25a244]/20">
                  <FaWhatsapp className="text-[40px] text-[#25a244]" />
                </div>
                <h3 className="mt-4 text-[20px] font-bold text-white">Quick WhatsApp Quote</h3>
                <p className="mt-2 text-[13px] text-[#9ca0a8]">Get instant price quote on WhatsApp within minutes</p>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-[12px] bg-[#25a244] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#1f8f3a]"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
