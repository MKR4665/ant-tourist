import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FaBus,
  FaCarSide,
  FaChevronDown,
  FaHeadset,
  FaShuttleVan,
  FaTicketAlt,
  FaBars,
  FaTimes,
  FaPhone,
} from 'react-icons/fa'
import logoImage from '../../assets/Logo.png'
import { scrollToSectionById } from '../../utils/scrollToHash'

const NAV_ITEMS = [
  { label: 'Rent Bus', icon: FaBus, href: '/', sectionId: 'booking-panel' },
  { label: 'Rent Traveller', icon: FaShuttleVan, href: '/rent-traveller' },
  { label: 'Rent Car', icon: FaCarSide, href: '/rent-car' },
  { label: 'Bus Ticket', icon: FaTicketAlt, href: '/bus-ticket' },
  { label: 'Bus Tour', icon: FaBus, href: '/bus-tour' },
  { label: 'Support', icon: FaHeadset, href: '/', sectionId: 'contact' },
]

export default function FigmaNavbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [manageMenuOpen, setManageMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (item.sectionId) {
      if (location.pathname !== '/') {
        navigate({ pathname: '/', hash: item.sectionId })
        return
      }
      window.history.replaceState({}, '', `#${item.sectionId}`)
      scrollToSectionById(item.sectionId)
      return
    }

    if (item.href) {
      navigate(item.href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`figma-home-nav sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1c22]/98 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-[6px]'
          : 'bg-[#1a1c22] backdrop-blur-[6px]'
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1470px] items-center justify-between gap-4 px-5 lg:px-8">
        <button
          type="button"
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="shrink-0"
        >
          <img src={logoImage} alt="ANT Tourist" className="h-auto w-[110px] md:w-[130px]" />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive =
              item.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.href)

            return (
              <button
                key={item.label}
                type="button"
                onClick={(e) => handleNavClick(e, item)}
                className={`inline-flex items-center gap-1.5 rounded-[8px] px-3 py-2 text-[13px] font-semibold transition-all ${
                  isActive
                    ? 'bg-[#789736]/20 text-[#a3c455]'
                    : 'text-[#c8ccd2] hover:bg-[#2c2f36] hover:text-white'
                }`}
              >
                <Icon className="text-[14px]" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setManageMenuOpen(true)}
            onMouseLeave={() => setManageMenuOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#3a3f48] bg-[#2c2f36] px-4 py-2 text-[13px] font-semibold text-[#c8ccd2] transition-all hover:border-[#789736] hover:text-white"
            >
              Manage Booking
              <FaChevronDown className={`text-[11px] transition-transform ${manageMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {manageMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-[220px] overflow-hidden rounded-[12px] border border-[#3a3f48] bg-[#22252d] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                {['Show My Booking', 'Change Travel Date', 'Cancel Booking', 'Login / Signup'].map((label, idx, arr) => (
                  <button
                    key={label}
                    type="button"
                    className={`block w-full px-4 py-3 text-left text-[13px] font-medium text-[#c8ccd2] transition-colors hover:bg-[#2c2f36] hover:text-white ${
                      idx < arr.length - 1 ? 'border-b border-[#2c2f36]' : ''
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => { navigate('/send-enquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#789736] px-5 py-2 text-[13px] font-bold text-white shadow-md transition-all hover:bg-[#6a8530] hover:shadow-lg"
          >
            Send Enquiry
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#2c2f36] text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#2c2f36] bg-[#4D4D4D] px-4 pb-4 pt-3 lg:hidden">
          <a
            href="tel:+919999999999"
            className="mb-3 flex items-center gap-2 rounded-[10px] bg-[#14161b] px-4 py-2.5 text-[14px] font-semibold text-[#a3c455]"
          >
            <FaPhone className="text-[12px]" />
            +91 99999 99999
          </a>

          <nav className="grid gap-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex w-full items-center gap-2 rounded-[10px] bg-[#22252d] px-4 py-3 text-[14px] font-semibold text-[#c8ccd2] hover:bg-[#2c2f36] hover:text-white"
                >
                  <Icon className="text-[15px] text-[#789736]" />
                  {item.label}
                </button>
              )
            })}
            <button
              type="button"
              onClick={() => { navigate('/send-enquiry'); setMobileMenuOpen(false) }}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#789736] px-4 py-3 text-[14px] font-bold text-white hover:bg-[#6a8530]"
            >
              Send Enquiry
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
