import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      {/* Expanded menu */}
      {open && (
        <div className="flex flex-col items-end gap-2">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all hover:scale-105"
          >
            <span className="text-[13px] font-semibold text-[#333]">Call Now</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#789736] text-white">
              <FaPhone className="text-[14px]" />
            </div>
          </a>
          <a
            href="mailto:info@anttravel.in"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all hover:scale-105"
          >
            <span className="text-[13px] font-semibold text-[#333]">Email Us</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4a54e8] text-white">
              <FaEnvelope className="text-[14px]" />
            </div>
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all hover:scale-105"
          >
            <span className="text-[13px] font-semibold text-[#333]">WhatsApp</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25a244] text-white">
              <FaWhatsapp className="text-[16px]" />
            </div>
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full shadow-[0_6px_24px_rgba(37,162,68,0.45)] transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: open ? '#e8534a' : '#25a244' }}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
      >
        {open ? (
          <FaTimes className="text-[20px] text-white" />
        ) : (
          <>
            <FaWhatsapp className="text-[24px] text-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25a244] opacity-30" />
          </>
        )}
      </button>
    </div>
  )
}
