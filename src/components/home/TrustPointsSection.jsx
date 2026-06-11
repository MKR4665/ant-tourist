import React from 'react'
import { FaRupeeSign, FaBolt, FaShieldAlt, FaHeadset } from 'react-icons/fa'

const POINTS = [
  { icon: FaRupeeSign, title: 'Best Price', copy: 'Unbeatable rates for luxury travel experiences.' },
  { icon: FaBolt, title: 'Instant Booking', copy: 'Confirm your plans in just a few clicks.' },
  { icon: FaShieldAlt, title: 'Verified Drivers', copy: 'Professional and vetted background checked staff.' },
  { icon: FaHeadset, title: '24/7 Support', copy: 'Always here to help with your journey.' },
]

export default function TrustPointsSection() {
  return (
    <section id="why-choose-us" className="bg-white px-4 pb-24 pt-14">
      <div className="mx-auto w-full max-w-[1248px]">
        <div className="grid grid-cols-1 justify-center gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((pt) => {
            const Icon = pt.icon
            return (
              <div
                key={pt.title}
                className="flex min-h-[164px] flex-col items-center text-center"
              >
                <div className="mb-9 flex size-20 items-center justify-center rounded-full bg-[#748E36]/10 text-[#748E36] sm:size-16">
                  <Icon className="text-[28px] sm:text-[25px]" />
                </div>
                <h3 className="text-[24px] font-bold leading-7 text-[#4d4d4d] sm:text-[20px]">
                  {pt.title}
                </h3>
                <p className="mt-4 max-w-[250px] text-[18px] leading-7 text-[#4d4d4d]/60 sm:mt-3 sm:text-[14px] sm:leading-5">
                  {pt.copy}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
