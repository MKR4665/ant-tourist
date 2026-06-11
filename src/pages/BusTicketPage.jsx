import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaStar, FaWifi, FaBolt, FaCouch, FaSnowflake, FaArrowRight, FaArrowLeft, FaFilter, FaTimes } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'

// Figma: bus ticket page - Body frame (120:1731)
const BUS_LIST = [
  { id: 1, name: 'Ant Travel Premium', type: 'AC Sleeper 2+1 (Luxury Class)', rating: 4.5, reviews: 128, departure: '22:00', from: 'Delhi (ISBT Kashmiri Gate)', duration: '05h 30m', nonStop: true, arrival: '03:30', to: 'Jaipur (Sindhi Camp Bus Stand)', originalPrice: 1299, price: 899, amenities: ['WiFi', 'AC', 'Charging', 'Water'], verified: true, seatType: 'Sleeper' },
  { id: 2, name: 'Ant Travel Premium', type: 'AC Seater (Semi-Luxury)', rating: 4.2, reviews: 96, departure: '23:00', from: 'Delhi (ISBT Kashmiri Gate)', duration: '05h 30m', nonStop: true, arrival: '04:30', to: 'Jaipur (Sindhi Camp Bus Stand)', originalPrice: 999, price: 749, amenities: ['AC', 'Charging', 'Water'], verified: true, seatType: 'Seater' },
  { id: 3, name: 'Ant Travel Premium', type: 'AC Sleeper 2+1 (Luxury Class)', rating: 4.7, reviews: 204, departure: '00:00', from: 'Delhi (ISBT Kashmiri Gate)', duration: '05h 30m', nonStop: false, arrival: '05:30', to: 'Jaipur (Sindhi Camp Bus Stand)', originalPrice: 1299, price: 799, amenities: ['WiFi', 'AC', 'Charging', 'Water'], verified: true, seatType: 'Sleeper' },
  { id: 4, name: 'Ant Travel Premium', type: 'AC Seater / Sleeper Combo', rating: 4.1, reviews: 67, departure: '01:00', from: 'Delhi (ISBT Kashmiri Gate)', duration: '05h 30m', nonStop: true, arrival: '06:30', to: 'Jaipur (Sindhi Camp Bus Stand)', originalPrice: 1299, price: 899, amenities: ['AC', 'Water'], verified: false, seatType: 'Seater' },
  { id: 5, name: 'Ant Travel Premium', type: 'AC Sleeper 2+1 (Luxury Class)', rating: 4.8, reviews: 312, departure: '21:00', from: 'Delhi (ISBT Kashmiri Gate)', duration: '05h 30m', nonStop: true, arrival: '02:30', to: 'Jaipur (Sindhi Camp Bus Stand)', originalPrice: 1499, price: 1099, amenities: ['WiFi', 'AC', 'Charging', 'Water', 'Blanket'], verified: true, seatType: 'Sleeper' },
]

const AMENITY_ICONS = { WiFi: FaWifi, AC: FaSnowflake, Charging: FaBolt, Water: null, Blanket: FaCouch }

export default function BusTicketPage() {
  const navigate = useNavigate()
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeSort, setActiveSort] = useState('Best')
  const [departureFilters, setDepartureFilters] = useState([])
  const [busTypeFilters, setBusTypeFilters] = useState([])

  const toggleFilter = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  return (
    <div className="min-h-screen bg-[#ececec]">
      <FigmaNavbar />

      {/* Search Bar */}
      <div className="sticky top-[72px] z-40 border-b border-[#d8d8d8] bg-white shadow-sm">
        <div className="mx-auto flex w-[92%] max-w-[1470px] flex-wrap items-center gap-3 py-3">
          <div className="flex flex-1 items-center gap-2 rounded-[10px] border border-[#e0e0e0] bg-[#f9f9f9] px-3 py-2">
            <FaMapMarkerAlt className="shrink-0 text-[#789736]" />
            <input defaultValue="Delhi" className="w-full bg-transparent text-[14px] outline-none" placeholder="From" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-[10px] border border-[#e0e0e0] bg-[#f9f9f9] px-3 py-2">
            <FaMapMarkerAlt className="shrink-0 text-red-400" />
            <input defaultValue="Jaipur" className="w-full bg-transparent text-[14px] outline-none" placeholder="To" />
          </div>
          <div className="flex items-center gap-2 rounded-[10px] border border-[#e0e0e0] bg-[#f9f9f9] px-3 py-2">
            <FaCalendarAlt className="text-[#789736]" />
            <input type="date" className="bg-transparent text-[14px] outline-none" />
          </div>
          <button className="flex items-center gap-2 rounded-[10px] bg-[#789736] px-5 py-2.5 text-[14px] font-bold text-white hover:bg-[#6a8530]">
            <FaSearch /> Search
          </button>
        </div>
      </div>

      <div className="mx-auto w-[92%] max-w-[1470px] py-8">
        <div className="flex gap-6">

          {/* Sidebar Filter - Figma: Aside with filters */}
          <aside className="hidden w-[280px] shrink-0 lg:block">
            <div className="sticky top-[140px] rounded-[20px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[16px] font-bold text-[#1a1c22]">Filters</h3>
                <button className="text-[13px] font-semibold text-[#789736] hover:underline">Clear all</button>
              </div>

              {/* Departure Time */}
              <div className="mb-6">
                <p className="mb-3 text-[14px] font-bold text-[#1a1c22]">Departure Time</p>
                <div className="flex flex-wrap gap-2">
                  {['Early Morning', 'Morning', 'Afternoon', 'Evening/Night'].map(t => (
                    <button
                      key={t}
                      onClick={() => toggleFilter(departureFilters, setDepartureFilters, t)}
                      className={`rounded-full border px-3 py-1 text-[12px] font-semibold transition-all ${
                        departureFilters.includes(t)
                          ? 'border-[#789736] bg-[#789736] text-white'
                          : 'border-[#ddd] bg-white text-[#555] hover:border-[#789736]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bus Type */}
              <div className="mb-6">
                <p className="mb-3 text-[14px] font-bold text-[#1a1c22]">Bus Type</p>
                <div className="space-y-2">
                  {['AC Sleeper', 'AC Seater', 'AC Seater / Sleeper'].map(t => (
                    <label key={t} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={busTypeFilters.includes(t)}
                        onChange={() => toggleFilter(busTypeFilters, setBusTypeFilters, t)}
                        className="h-4 w-4 rounded accent-[#789736]"
                      />
                      <span className="text-[13px] text-[#555]">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <p className="mb-3 text-[14px] font-bold text-[#1a1c22]">Price Range</p>
                <input type="range" min={300} max={5000} defaultValue={2500} className="w-full accent-[#789736]" />
                <div className="mt-1 flex justify-between text-[12px] text-[#888]">
                  <span>₹300</span><span>₹5,000</span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="mb-3 text-[14px] font-bold text-[#1a1c22]">Amenities</p>
                <div className="space-y-2">
                  {['Wi-Fi', 'Charging Point', 'Water Bottle'].map(a => (
                    <label key={a} className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded accent-[#789736]" />
                      <span className="text-[13px] text-[#555]">{a}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#e0e0e0] pb-4">
              <h2 className="text-[18px] font-bold text-[#1a1c22]">{BUS_LIST.length} Buses found</h2>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#888]">Sort by:</span>
                {['Best', 'Cheapest'].map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveSort(s)}
                    className={`rounded-full border px-4 py-1.5 text-[13px] font-semibold transition-all ${
                      activeSort === s
                        ? 'border-[#789736] bg-[#789736] text-white'
                        : 'border-[#ccc] bg-white text-[#555] hover:border-[#789736]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
                <button onClick={() => setFilterOpen(!filterOpen)} className="flex items-center gap-1.5 rounded-full border border-[#ddd] bg-white px-4 py-1.5 text-[13px] font-semibold text-[#555] lg:hidden">
                  <FaFilter className="text-[12px]" /> Filters
                </button>
              </div>
            </div>

            {/* Bus Cards - Figma: Group 14-18 bus cards */}
            <div className="space-y-4">
              {BUS_LIST.map((bus) => (
                <article
                  key={bus.id}
                  className="overflow-hidden rounded-[20px] border border-[#e0e0e0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_6px_28px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left: Bus Info */}
                    <div className="flex-1 p-5 md:p-6">
                      {/* Operator */}
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-[16px] font-bold text-[#1a1c22]">{bus.name}</h3>
                            {bus.verified && (
                              <span className="rounded-[6px] bg-[#e8f4e8] px-2 py-0.5 text-[11px] font-bold text-[#4a7c2f]">
                                ✓ Verified
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-[13px] text-[#888]">{bus.type}</p>
                        </div>
                        <div className="flex items-center gap-1 rounded-[8px] bg-[#789736] px-2.5 py-1">
                          <FaStar className="text-[11px] text-white" />
                          <span className="text-[13px] font-bold text-white">{bus.rating}</span>
                          <span className="text-[11px] text-white/80">({bus.reviews})</span>
                        </div>
                      </div>

                      {/* Route Timeline */}
                      <div className="mt-4 flex items-center gap-3">
                        <div className="text-center">
                          <p className="text-[22px] font-bold text-[#1a1c22]">{bus.departure}</p>
                          <p className="mt-0.5 text-[11px] leading-tight text-[#888]">{bus.from.split('(')[0]}</p>
                          <p className="text-[10px] text-[#aaa]">{bus.from.match(/\(([^)]+)\)/)?.[1]}</p>
                        </div>
                        <div className="flex flex-1 flex-col items-center">
                          <p className="text-[13px] font-semibold text-[#555]">{bus.duration}</p>
                          <div className="relative my-1 flex w-full items-center">
                            <div className="h-[2px] flex-1 bg-[#e0e0e0]" />
                            <div className="mx-1 h-[6px] w-[6px] rounded-full bg-[#789736]" />
                            <div className="h-[2px] flex-1 bg-[#e0e0e0]" />
                          </div>
                          <span className={`text-[11px] font-semibold ${bus.nonStop ? 'text-[#789736]' : 'text-[#e08030]'}`}>
                            {bus.nonStop ? 'Non-stop' : '1 Stop'}
                          </span>
                        </div>
                        <div className="text-center">
                          <p className="text-[22px] font-bold text-[#1a1c22]">{bus.arrival}</p>
                          <p className="mt-0.5 text-[11px] leading-tight text-[#888]">{bus.to.split('(')[0]}</p>
                          <p className="text-[10px] text-[#aaa]">{bus.to.match(/\(([^)]+)\)/)?.[1]}</p>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {bus.amenities.map(a => {
                          const Icon = AMENITY_ICONS[a]
                          return (
                            <span key={a} className="inline-flex items-center gap-1 rounded-full bg-[#f4f7ec] px-2.5 py-1 text-[11px] font-semibold text-[#6a8530]">
                              {Icon && <Icon className="text-[10px]" />}
                              {a}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Right: Pricing - Figma: Frame 21 */}
                    <div className="flex flex-col items-center justify-center gap-3 border-t border-[#f0f0f0] bg-[#fafafa] p-5 md:w-[180px] md:border-l md:border-t-0">
                      <div className="text-center">
                        <p className="text-[14px] text-[#aaa] line-through">₹{bus.originalPrice.toLocaleString()}</p>
                        <p className="text-[26px] font-bold text-[#1a1c22]">₹{bus.price.toLocaleString()}</p>
                        <p className="text-[11px] text-[#888]">per seat</p>
                      </div>
                      <button
                        onClick={() => navigate('/send-enquiry')}
                        className="w-full rounded-[12px] bg-[#789736] py-2.5 text-[14px] font-bold text-white shadow-sm transition-all hover:bg-[#6a8530] hover:shadow-md"
                      >
                        Select Seat
                      </button>
                      <button className="text-[12px] font-semibold text-[#789736] hover:underline">
                        📷 Photos
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
