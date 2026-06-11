import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaBus, FaUserTie, FaMapMarkerAlt, FaShieldAlt,
  FaHandshake, FaHeadset, FaArrowRight,
} from 'react-icons/fa'

const FEATURES = [
  { icon: FaBus, title: 'Elite Fleet', desc: 'Volvo & Bharat Benz luxury coaches — well-maintained and sanitized' },
  { icon: FaUserTie, title: 'Professional Chauffeurs', desc: 'Trained, courteous & experienced drivers on every journey' },
  { icon: FaMapMarkerAlt, title: 'On Time Pickup', desc: 'Prompt service from NCR, airports, hotels & railway stations' },
  { icon: FaShieldAlt, title: 'Safe & Verified', desc: 'GPS-tracked vehicles with background-checked drivers' },
  { icon: FaHandshake, title: 'No Hidden Charges', desc: 'Transparent billing with all-inclusive pricing upfront' },
  { icon: FaHeadset, title: '24/7 Support', desc: 'Round-the-clock customer care for any travel assistance' },
]

export default function HomeWhyChooseSection() {
  const navigate = useNavigate()
  return (
    <section id="why-choose-ant" className="bg-[#ececec] py-14">
      <div className="mx-auto w-[92%] max-w-[1470px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#789736]">
              <span className="h-px w-8 bg-[#789736]" />
              Elite Experience
            </span>
            <h2 className="mt-3 text-[28px] font-bold leading-snug text-[#1a1c22] md:text-[36px]">
              Why Choose<br />
              <span className="text-[#789736]">ANT Travels?</span>
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#6b6f77]">
              ANT Travels has been Delhi NCR's most trusted bus rental partner for over a decade — known for punctuality, premium vehicles, and transparent pricing.
            </p>
            {/* Trust proof */}
            <div className="mt-6 inline-flex items-center gap-4 rounded-[16px] border border-[#e0e8d0] bg-white p-4 shadow-sm">
              <div className="flex -space-x-3">
                {['RK', 'PS', 'AM'].map((init, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[12px] font-bold text-white"
                    style={{ backgroundColor: ['#789736', '#4a54e8', '#e8804a'][i] }}
                  >
                    {init}
                  </div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#1a1c22] text-[11px] font-bold text-white">
                  10k+
                </div>
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1a1c22]">Trusted by 10,000+</p>
                <p className="text-[13px] text-[#6b6f77]">Travellers across India</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/send-enquiry')}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-[12px] bg-[#789736] px-7 py-3 text-[14px] font-bold text-white shadow-md hover:bg-[#6a8530]"
            >
              Book Now <FaArrowRight />
            </button>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <article
                  key={f.title}
                  className="rounded-[18px] border border-[#e0e4d8] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#789736]/50 hover:shadow-md"
                >
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-[#ecf2df] text-[#789736]">
                    <Icon className="text-[20px]" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-[#1a1c22]">{f.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#6b6f77]">{f.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
