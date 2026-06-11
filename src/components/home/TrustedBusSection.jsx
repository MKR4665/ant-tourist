import React from 'react'
import { FaArrowRight, FaBus, FaCheckCircle, FaHeadset, FaUserTie } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import trustedImage from '../../image/b24a56c1ae66ee2fe820cbc8f91ad5882d58bef6.jpg'
import { TRUST_LIST } from './homeConstants'

const TRUST_ICONS = [FaBus, FaUserTie, FaCheckCircle, FaHeadset]

export default function TrustedBusSection() {
  const navigate = useNavigate()
  return (
    <section id="trusted-section" className="bg-[#e5e5e5] px-4 py-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid items-center gap-10 rounded-[30px] bg-white px-5 py-6 lg:min-h-[579px] lg:grid-cols-[minmax(420px,616px)_minmax(0,620px)] lg:gap-[76px] lg:px-[38px] lg:pb-[22px] lg:pt-[17px]">
          <div className="h-[360px] overflow-hidden rounded-[20px] lg:h-[480px] lg:w-full">
            <img
              src={trustedImage}
              alt="ANT luxury fleet"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex max-w-[620px] flex-col items-start gap-1.5">
            <p className="inline-flex rounded-full bg-[#748E36]/20 px-4 py-1.5 text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-[#748E36]">
              Our Visionary Approach
            </p>
            <h2 className="mt-5 max-w-[620px] text-[30px] font-black leading-tight text-[#4d4d4d] md:text-[48px] md:leading-[60px]">
              <span className="md:whitespace-nowrap">Your Trusted Bus Rental</span>
              <br />
              <span className="md:whitespace-nowrap">Service in Delhi NCR</span>
            </h2>
            <p className="mt-2 max-w-[487px] text-[16px] font-medium leading-[29px] text-[#4d4d4d]">
              We provide reliable and comfortable bus rental services for every occasion. With a premium fleet, professional drivers, and customer-first approach, we ensure a smooth and stress-free travel experience every time.
            </p>
            <ul className="mt-4 grid gap-2">
              {TRUST_LIST.map((item, index) => {
                const Icon = TRUST_ICONS[index] || FaCheckCircle
                return (
                  <li key={item} className="flex min-h-10 items-center gap-4 text-[14px] font-semibold leading-5 text-[#4d4d4d]">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#748E36]/20 text-[#748E36]">
                      <Icon className="text-[22px]" />
                    </span>
                    {item}
                  </li>
                )
              })}
            </ul>
            <button
              type="button"
              onClick={() => navigate('/send-enquiry')}
              className="mt-7 inline-flex h-14 items-center gap-3 rounded-[16px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-8 text-[16px] font-black text-white shadow-md transition-all hover:brightness-110"
            >
              Learn More About Us
              <FaArrowRight className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
