import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFireAlt, FaTag } from 'react-icons/fa'

const DEALS = [
  {
    badge: 'NEW USER SPECIAL',
    title: 'Flat 25% OFF',
    copyBefore: 'Use code',
    code: 'FIRSTSWIFT',
    copyAfter: 'on your first booking.',
    cta: 'Claim Now',
    cardClass: 'bg-[#0F172A] text-white',
    badgeClass: 'bg-[#748E36] text-white',
    bodyClass: 'text-[#94A3B8]',
    ctaClass: 'bg-[#748E36] text-white hover:bg-[#647b2f]',
  },
  {
    badge: 'LUXURY TRAVEL',
    title: '15% OFF',
    copyBefore: 'on Premium Volvo Sleeper. Coaches Use Code',
    code: 'WEEKENDGO',
    copyAfter: '',
    cta: 'Claim Now',
    cardClass: 'bg-[linear-gradient(134.83deg,#7E92FF_0.09%,#0A154D_130.07%)] text-white',
    badgeClass: 'bg-[#0F172A] text-white',
    bodyClass: 'text-[#0F172A]',
    ctaClass: 'bg-white text-[#2B3880] hover:bg-[#edf0ff]',
  },
  {
    badge: 'WEEKEND VIBE',
    title: 'Buy 1 Get 1 Free',
    copyBefore: 'Valid for group rentals on weekends. Use code',
    code: 'WEEKENDGO',
    copyAfter: '',
    cta: 'Claim Now',
    cardClass: 'bg-[linear-gradient(134.83deg,#748E36_0.09%,#3F5900_130.07%)] text-white',
    badgeClass: 'bg-[#0F172A] text-white',
    bodyClass: 'text-[#0F172A]',
    ctaClass: 'bg-[#0F172A] text-white hover:bg-[#1c2740]',
  },
]

export default function DealsSection() {
  const navigate = useNavigate()

  return (
    <section id="deals-section" className="bg-[#e8e8e8] px-4 pt-5">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-2">
        <h2 className="flex min-h-9 items-center gap-3 text-[30px] font-black leading-9 text-[#4d4d4d]">
          <FaFireAlt className="text-[28px] text-[#748E36]" />
          Exclusive Deals
        </h2>

        <div className="grid w-full grid-cols-1 justify-center gap-8 lg:grid-cols-3">
          {DEALS.map((deal) => (
            <article
              key={deal.title}
              className={`relative flex min-h-[280px] overflow-hidden rounded-[32px] p-8 ${deal.cardClass}`}
            >
              <FaTag className="pointer-events-none absolute -top-7 right-2 rotate-12 text-[168px] text-white/20" />

              <div className="relative z-10 flex max-w-full flex-col items-start justify-center">
                <span className={`inline-flex h-5 items-center rounded-full px-3 text-[10px] font-black uppercase leading-[15px] tracking-[1px] ${deal.badgeClass}`}>
                  {deal.badge}
                </span>

                <h3 className="mt-[27px] max-w-full text-[30px] font-black leading-9 text-white">
                  {deal.title}
                </h3>

                <p className={`mt-3 max-w-[330px] text-[16px] font-medium leading-6 ${deal.bodyClass}`}>
                  {deal.copyBefore}{' '}
                  <span className="inline-block border-b border-dashed border-current font-medium text-white">
                    {deal.code}
                  </span>
                  {deal.copyAfter ? ` ${deal.copyAfter}` : ''}
                </p>

                <button
                  type="button"
                  onClick={() => navigate('/send-enquiry')}
                  className={`mt-6 flex h-12 min-w-[148px] items-center justify-center rounded-[12px] px-8 text-[16px] font-bold transition-all ${deal.ctaClass}`}
                >
                  {deal.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
