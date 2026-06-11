import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import iphoneMockup from '../../assets/iphone-mockup.png'

export default function HomeAppPromotionSection() {
  return (
    <section className="bg-[#ececec] px-5 py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 overflow-hidden rounded-[24px] bg-white px-6 py-12 shadow-[0_18px_50px_rgba(25,28,30,0.08)] md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-0">
        <div className="max-w-[650px] lg:py-24">
          <p className="text-[13px] font-bold uppercase tracking-[1.8px] text-[#748e36]">
            ANT Travel App
          </p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.18] text-[#4d4d4d] md:text-[40px]">
            Get 10% Off Discount on Your First Booking with ANT App
          </h2>
          <p className="mt-6 max-w-[540px] text-[16px] leading-7 text-[#4d4d4d]/65">
            Book bus tickets, rent a bus, rent a car, or reserve a traveller from one place and enjoy a smoother booking experience.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex h-12 items-center gap-3 rounded-[12px] bg-[#748e36] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#63792e]"
            >
              <FaGooglePlay className="text-[20px]" />
              Google Play
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center gap-3 rounded-[12px] bg-[#191c1e] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#2c3135]"
            >
              <FaApple className="text-[22px]" />
              App Store
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-end justify-center lg:min-h-[528px]">
          <div className="absolute bottom-10 h-[250px] w-[250px] rounded-full bg-[rgba(116,142,54,0.15)] blur-[36px]" />
          <img
            src={iphoneMockup}
            alt="ANT Travel mobile app preview"
            className="relative z-10 max-h-[440px] w-auto object-contain drop-shadow-[0_24px_40px_rgba(25,28,30,0.25)]"
          />
        </div>
      </div>
    </section>
  )
}
