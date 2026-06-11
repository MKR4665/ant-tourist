import React from 'react'
import { useNavigate } from 'react-router-dom'

const PRICING_TABLE = [
  { type: 'Mini Bus (20 Seater)', local: '₹4,000', outstation: '₹35–40/km', minKm: '250 km/day' },
  { type: 'Deluxe Bus (27 Seater)', local: '₹5,500', outstation: '₹45–50/km', minKm: '300 km/day' },
  { type: 'AC Coach (35 Seater)', local: '₹7,500', outstation: '₹55–65/km', minKm: '300 km/day' },
  { type: 'Luxury Volvo (40 Seater)', local: '₹10,000', outstation: '₹75–85/km', minKm: '350 km/day' },
  { type: 'Luxury Coach (50+ Seater)', local: '₹14,000', outstation: '₹85–100/km', minKm: '400 km/day' },
]

const FACTORS = [
  '📍 Distance (per km rate)', '📅 Number of travel days',
  '🚌 Type of bus (Volvo / AC / Mini Bus)', '🛣️ Toll, parking & driver allowance',
]

export default function HomePricingSection() {
  const navigate = useNavigate()
  return (
    <section id="pricing" className="bg-[#f5f5f5] py-14">
      <div className="mx-auto w-[92%] max-w-[1470px]">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-bold text-[#1a1c22] md:text-[34px]">Bus Hire Charges & Pricing</h2>
          <p className="mt-2 text-[14px] text-[#6b6f77]">Transparent pricing — no hidden charges. Bus rental cost depends on:</p>
          <div className="mx-auto mt-4 flex max-w-[860px] flex-wrap justify-center gap-2">
            {FACTORS.map(f => (
              <span key={f} className="rounded-full border border-[#789736]/40 bg-white px-4 py-1.5 text-[12px] font-semibold text-[#555]">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="overflow-hidden rounded-[20px] border border-[#e0e0e0] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#789736] text-white">
                <tr>
                  <th className="px-5 py-4 text-left text-[13px] font-bold">Bus Type</th>
                  <th className="px-5 py-4 text-center text-[13px] font-bold">Local (4hr/40km)</th>
                  <th className="px-5 py-4 text-center text-[13px] font-bold">Outstation Rate</th>
                  <th className="px-5 py-4 text-center text-[13px] font-bold">Min Distance</th>
                  <th className="px-5 py-4 text-center text-[13px] font-bold">Book</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-t border-[#f0f0f0] transition-colors hover:bg-[#f8faf4] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}
                  >
                    <td className="px-5 py-4 text-[14px] font-semibold text-[#1a1c22]">{row.type}</td>
                    <td className="px-5 py-4 text-center text-[14px] font-bold text-[#789736]">{row.local}</td>
                    <td className="px-5 py-4 text-center text-[14px] font-bold text-[#1a1c22]">{row.outstation}</td>
                    <td className="px-5 py-4 text-center text-[13px] text-[#888]">{row.minKm}</td>
                    <td className="px-5 py-4 text-center">
                      <button
                        onClick={() => navigate('/send-enquiry')}
                        className="rounded-[8px] bg-[#789736] px-4 py-1.5 text-[12px] font-bold text-white hover:bg-[#6a8530]"
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-[#f0f0f0] bg-[#f8faf4] px-5 py-3">
            <p className="text-[12px] text-[#888]">
              * Prices are approximate and may vary by season, route, and availability. GST extra as applicable. Get an exact quote by contacting us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
