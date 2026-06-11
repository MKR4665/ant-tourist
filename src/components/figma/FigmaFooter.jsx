import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import logoImage from '../../assets/Logo.png'

const SERVICES = [
  { label: 'Rent Bus', href: '/#booking-panel' },
  { label: 'Rent Traveller', href: '/rent-traveller' },
  { label: 'Rent Car', href: '/rent-car' },
  { label: 'Bus Tickets', href: '/bus-ticket' },
  { label: 'Bus Tour', href: '/bus-tour' },
  { label: 'Send Enquiry', href: '/send-enquiry' },
]

const ROUTES = [
  { label: 'Delhi – Jaipur', href: '/send-enquiry' },
  { label: 'Delhi – Agra', href: '/send-enquiry' },
  { label: 'Delhi – Chandigarh', href: '/send-enquiry' },
  { label: 'Delhi – Manali', href: '/send-enquiry' },
  { label: 'Delhi – Haridwar', href: '/send-enquiry' },
  { label: 'Delhi – Shimla', href: '/send-enquiry' },
]

const COMPANY = [
  { label: 'About Us', href: '/' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Privacy Policy', href: '/' },
  { label: 'Terms & Conditions', href: '/' },
  { label: 'Cancellation Policy', href: '/' },
]

export default function FigmaFooter() {
  const navigate = useNavigate()

  return (
    <footer id="site-footer" className="bg-[#14161b] text-white">
      {/* Top section */}
      <div className="mx-auto w-[92%] max-w-[1470px] py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 xl:col-span-1">
            <img src={logoImage} alt="ANT Tourist" className="h-auto w-[130px]" />
            <p className="mt-4 text-[14px] leading-relaxed text-[#9ca0a8]">
              ANT Travels delivers reliable bus, car, and traveller rental services for local, outstation, corporate, wedding, and tour bookings across India.
            </p>
            {/* Contact info */}
            <div className="mt-5 space-y-2">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-[13px] text-[#9ca0a8] hover:text-white">
                <FaPhone className="text-[#789736]" /> +91 99999 99999
              </a>
              <a href="mailto:info@anttravel.in" className="flex items-center gap-2 text-[13px] text-[#9ca0a8] hover:text-white">
                <FaEnvelope className="text-[#789736]" /> info@anttravel.in
              </a>
              <p className="flex items-start gap-2 text-[13px] text-[#9ca0a8]">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#789736]" />
                B-12, Sector 63, Noida, Uttar Pradesh – 201301
              </p>
            </div>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              {[FaFacebook, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22252d] text-[#9ca0a8] transition-all hover:bg-[#789736] hover:text-white">
                  <Icon className="text-[15px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    onClick={() => { navigate(s.href.split('#')[0] || '/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="text-left text-[13px] text-[#9ca0a8] transition-colors hover:text-[#a3c455]"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Popular Routes</h3>
            <ul className="mt-4 space-y-2.5">
              {ROUTES.map((r) => (
                <li key={r.label}>
                  <button
                    type="button"
                    onClick={() => navigate('/send-enquiry')}
                    className="text-left text-[13px] text-[#9ca0a8] transition-colors hover:text-[#a3c455]"
                  >
                    {r.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <button
                    type="button"
                    onClick={() => navigate(c.href.split('#')[0] || '/')}
                    className="text-left text-[13px] text-[#9ca0a8] transition-colors hover:text-[#a3c455]"
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              type="button"
              onClick={() => { navigate('/send-enquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-[#789736] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#6a8530]"
            >
              Send Enquiry →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#22252d]">
        <div className="mx-auto flex w-[92%] max-w-[1470px] flex-wrap items-center justify-between gap-3 py-5 text-[12px] text-[#6b6f77]">
          <p>© 2026 ANT Travel Private Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-[#a3c455]">Privacy Policy</button>
            <button className="hover:text-[#a3c455]">Terms of Service</button>
            <button className="hover:text-[#a3c455]">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
