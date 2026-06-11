import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaClock, FaArrowRight } from 'react-icons/fa'
import dest_jaipur from '../../assets/figma/dest_jaipur.png'
import dest_agra from '../../assets/figma/dest_agra.png'
import dest_chandigarh from '../../assets/figma/dest_chandigarh.png'
import dest_manali from '../../assets/figma/dest_manali.png'

// Figma: Bus Rental Popular Destinations section (BUS_DESTINATIONS)
const BUS_DESTINATIONS = [
  { title: 'Delhi to Jaipur Bus Rental', image: dest_jaipur, popular: true, price: '₹25,000', duration: '5 Night 2 Days' },
  { title: 'Delhi to Agra Bus Rental', image: dest_agra, popular: false, price: '₹18,000', duration: '1 Day' },
  { title: 'Delhi to Chandigarh Bus Rental', image: dest_chandigarh, popular: false, price: '₹22,000', duration: '2 Days' },
  { title: 'Delhi to Manali Bus Rental', image: dest_manali, popular: false, price: '₹45,000', duration: '5 Days' },
]

export default function HomeDestinationsGridSection() {
  const navigate = useNavigate()
  return (
    <section id="destinations" className="bg-white py-14">
      <div className="mx-auto w-[92%] max-w-[1470px]">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-[26px] font-bold text-[#1a1c22] md:text-[34px]">Bus Rental Popular Destinations</h2>
            <p className="mt-1 text-[14px] text-[#6b6f77]">Top destinations frequently chosen for bus rentals</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/send-enquiry')}
            className="rounded-[10px] border-2 border-[#789736] px-5 py-2 text-[13px] font-bold text-[#789736] transition-colors hover:bg-[#789736] hover:text-white"
          >
            Explore All Routes
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {BUS_DESTINATIONS.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[20px] border border-[#e8edda] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.14)]"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {item.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#789736] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold leading-snug text-[#1a1c22]">{item.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#8a8d92]">
                  <FaClock className="text-[#789736]" />
                  <span>{item.duration}</span>
                </div>
                <hr className="my-4 border-[#eee]" />
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#999]">Starts from</p>
                    <p className="text-[20px] font-bold text-[#1a1c22]">{item.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/send-enquiry')}
                    className="flex items-center gap-1 rounded-[10px] bg-[#789736] px-4 py-2 text-[12px] font-bold text-white hover:bg-[#6a8530]"
                  >
                    View Buses <FaArrowRight className="text-[10px]" />
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
