import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PREMIUM_SERVICES } from './homeConstants'

// Figma: Vehicle Rental Section (from Traveller Tour page)
// "Our Premium Services" heading with service cards
export default function PremiumServicesSection() {
  const navigate = useNavigate()

  return (
    <section id="premium-services" className="bg-[#ececec] py-16">
      <div className="mx-auto w-[92%] max-w-[1470px]">
        {/* Section Header - Figma exact */}
        <header className="text-center">
          <h2 className="text-[28px] font-bold text-[#1a1c22] md:text-[36px]">Our Premium Services</h2>
          <p className="mx-auto mt-2 max-w-[680px] text-[15px] leading-relaxed text-[#6b6f77] md:text-[16px]">
            Travel smarter with our top-quality transport and booking services.
          </p>
          <span className="mx-auto mt-4 block h-[4px] w-[72px] rounded-full bg-[#789736]" />
        </header>

        {/* 4-column service cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PREMIUM_SERVICES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[20px] border border-[#e2e8d6] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(120,151,54,0.18)]"
              >
                <div className="flex size-[56px] items-center justify-center rounded-[16px] bg-[#ecf2df] text-[#789736] transition-transform group-hover:scale-110">
                  <Icon className="text-[24px]" />
                </div>
                <h3 className="mt-6 text-[20px] font-bold text-[#1a1c22]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#6b6f77]">{item.copy}</p>
                <button
                  type="button"
                  onClick={() => navigate(item.href)}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#789736] transition-colors hover:text-[#5a7228]"
                >
                  {item.cta}
                  <FaArrowRight className="text-[13px]" />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
