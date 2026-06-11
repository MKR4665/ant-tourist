import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaClock } from 'react-icons/fa'
import { DESTINATIONS } from './homeConstants'

export default function PopularDestinationsSection() {
  const navigate = useNavigate()

  return (
    <section id="popular-destination" className="bg-[#748E36]/10 px-4 pb-24 pt-[38px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[381px]">
            <h2 className="text-[32px] font-black leading-9 text-[#4d4d4d] md:text-[36px]">Popular Destination</h2>
            <p className="mt-2 text-[16px] leading-6 text-[#4d4d4d]/80">
              Top destinations frequently chosen for Bus rentals
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/popular-routes')}
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
                  alt={item.title.replace('Traveller Rental', 'Bus Rental')}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-[#748E36] px-3 py-1 text-[12px] font-bold leading-4 text-white">
                  Popular
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-[16px] font-bold leading-7 text-[#4d4d4d]">
                  {item.title.replace('Traveller Rental', 'Bus Rental')}
                </h3>

                <div className="flex h-[32.5px] items-center gap-1 pb-3 text-[14px] leading-5 text-[#4d4d4d]/50">
                  <FaClock className="text-[12px] text-[#4d4d4d]/50" />
                  <span>5 Night 2 Days</span>
                </div>

                <div className="flex h-[60px] items-center justify-between gap-3 border-t border-[#748E36] pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-[15px] text-[#4d4d4d]">Starts from</p>
                    <p className="text-[18px] font-black leading-7 text-[#4d4d4d]">₹25,000</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/send-enquiry')}
                    className="flex h-9 min-w-[112px] items-center justify-center rounded-[12px] bg-[#748E36] px-4 text-[14px] font-bold leading-5 text-[#f1f5f9] hover:bg-[#647b2f]"
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
