import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function HomeContactSection() {
  const navigate = useNavigate()

  return (
    <section id="contact" className="bg-[#1a1c22] py-16">
      <div className="mx-auto w-[92%] max-w-[1470px]">
        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Heading + CTAs */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#789736]/20 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-[#a3c455]">
              ✅ 24×7 Available
            </span>
            <h2 className="mt-4 text-[28px] font-bold leading-snug text-white md:text-[36px]">
              24×7 Bus Booking<br />
              <span className="text-[#a3c455]">Contact ANT Travels</span>
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#9ca0a8]">
              Need instant booking for bus hire in Delhi NCR? Contact us now for a quick response and the best pricing. Our team is always ready to help you plan the perfect journey.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href="tel:+919999999999"
                className="flex flex-col items-center gap-2 rounded-[16px] border border-[#2c2f36] bg-[#22252d] p-5 text-center transition-all hover:border-[#789736] hover:shadow-[0_4px_20px_rgba(120,151,54,0.2)]"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#789736]/20 text-[#a3c455]">
                  <FaPhoneAlt className="text-[18px]" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#789736]">Call Us</p>
                <p className="text-[14px] font-bold text-white">+91 99999 99999</p>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-[16px] border border-[#2c2f36] bg-[#22252d] p-5 text-center transition-all hover:border-[#25a244] hover:shadow-[0_4px_20px_rgba(37,162,68,0.2)]"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#25a244]/20 text-[#25a244]">
                  <FaWhatsapp className="text-[20px]" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#25a244]">WhatsApp</p>
                <p className="text-[14px] font-bold text-white">Chat Now</p>
              </a>

              <a
                href="mailto:info@anttravel.in"
                className="flex flex-col items-center gap-2 rounded-[16px] border border-[#2c2f36] bg-[#22252d] p-5 text-center transition-all hover:border-[#789736] hover:shadow-[0_4px_20px_rgba(120,151,54,0.2)]"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#789736]/20 text-[#a3c455]">
                  <FaEnvelope className="text-[18px]" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#789736]">Email Us</p>
                <p className="text-[14px] font-bold text-white">info@anttravel.in</p>
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/send-enquiry')}
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#789736] px-7 py-3 text-[14px] font-bold text-white shadow-md hover:bg-[#6a8530]"
              >
                Book Now →
              </button>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[12px] border border-[#25a244] bg-transparent px-7 py-3 text-[14px] font-bold text-[#25a244] hover:bg-[#25a244]/10"
              >
                <FaWhatsapp className="text-[16px]" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Quick Enquiry Form */}
          <div className="rounded-[24px] border border-[#2c2f36] bg-[#22252d] p-7">
            <h3 className="text-[20px] font-bold text-white">Quick Enquiry</h3>
            <p className="mt-1 text-[13px] text-[#9ca0a8]">Get a callback within 5 minutes</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/send-enquiry') }}>
              <div>
                <label className="mb-1 block text-[12px] font-semibold uppercase tracking-wider text-[#9ca0a8]">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-[10px] border border-[#3a3f48] bg-[#2c2f36] px-4 py-3 text-[14px] text-white placeholder:text-[#555] focus:border-[#789736] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[12px] font-semibold uppercase tracking-wider text-[#9ca0a8]">Phone Number</label>
                <div className="flex overflow-hidden rounded-[10px] border border-[#3a3f48] bg-[#2c2f36] focus-within:border-[#789736]">
                  <span className="flex items-center bg-[#22252d] px-3 text-[14px] font-semibold text-[#789736]">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    className="flex-1 bg-transparent px-3 py-3 text-[14px] text-white placeholder:text-[#555] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[12px] font-semibold uppercase tracking-wider text-[#9ca0a8]">Service Needed</label>
                <select className="w-full rounded-[10px] border border-[#3a3f48] bg-[#2c2f36] px-4 py-3 text-[14px] text-white focus:border-[#789736] focus:outline-none">
                  <option value="">Select a service</option>
                  <option>Rent Bus</option>
                  <option>Rent Traveller</option>
                  <option>Rent Car</option>
                  <option>Bus Ticket</option>
                  <option>Bus Tour</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-[12px] bg-[#789736] py-3.5 text-[15px] font-bold text-white shadow-md hover:bg-[#6a8530]"
              >
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
