import React from 'react'
import {
  FaCheck,
  FaChevronUp,
  FaClock,
  FaDownload,
  FaPhoneAlt,
  FaReceipt,
  FaWhatsapp,
} from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'

function ReceiptButton({ icon: Icon, children }) {
  return (
    <button
      type="button"
      className="flex h-[50px] items-center justify-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-8 text-[14px] font-bold leading-5 text-[#334155] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
    >
      <Icon className="text-[18px]" />
      {children}
    </button>
  )
}

function BookingInfo({ label, value, align = 'left' }) {
  return (
    <div className={align === 'right' ? 'text-left sm:text-right' : 'text-left'}>
      <p className="text-[14px] font-normal leading-5 text-[#4D4D4D]/60">{label}</p>
      <p className="mt-1 text-[14px] font-semibold leading-5 text-[#4D4D4D]">{value}</p>
    </div>
  )
}

export default function BookingConfirmedPage({ variant = 'bus' }) {
  const isTraveller = variant === 'traveller'
  const vehicleLabel = isTraveller ? 'Vehicle Name' : 'Vehicle Type'
  const vehicleValue = isTraveller ? '12 Seater (2+1) Force Traveller' : '45 Seater (2+2)AC Luxury Coach'

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <FigmaNavbar />

      <section className="bg-[linear-gradient(180deg,#ECFDF5_0%,#FFFFFF_100%)] px-4 pb-20 pt-24">
        <div className="mx-auto flex w-full max-w-[896px] flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3.7px] border-[#10B981] text-[#10B981]">
            <FaCheck className="text-[44px]" />
          </div>
          <h1 className="mt-8 text-center text-[36px] font-extrabold leading-[42px] tracking-[-1.2px] text-[#0F172A] md:text-[48px] md:leading-[48px]">
            Booking Confirmed 🎉
          </h1>
          <p className="mt-4 max-w-[672px] text-center text-[18px] font-normal leading-8 text-[#475569] md:text-[20px]">
            Your journey is secured. Complete your final payment to finalize your premium travel experience.
          </p>
        </div>
      </section>

      <main className="-mt-10 px-4 pb-24">
        <div className="mx-auto flex w-full max-w-[896px] flex-col gap-10">
          <section className="rounded-[24px] border border-[#F1F5F9] bg-white shadow-[0_25px_50px_-12px_rgba(226,232,240,0.5)]">
            <div className="flex flex-col items-center gap-10 p-8 md:p-14">
              <h2 className="text-center text-[12px] font-bold uppercase leading-4 tracking-[2.4px] text-[#4D4D4D]">
                Payment Summary
              </h2>

              <div className="grid w-full max-w-[782px] gap-8 text-center md:grid-cols-3 md:text-left">
                <div className="hidden md:block" />
                <div className="border-[#F8FAFC] md:border-r md:px-8">
                  <p className="text-[20px] font-semibold leading-5 text-[#4D4D4D]">Paid Amount</p>
                  <p className="mt-1 text-[32px] font-semibold leading-8 text-[#748E36]">{'\u20B950,000'}</p>
                </div>
                <div className="hidden md:block" />
              </div>

              <div className="w-full max-w-[672px]">
                <div className="mb-3 flex items-center justify-between gap-4 text-[12px] font-bold uppercase leading-4 tracking-[0.6px] text-[#4D4D4D]">
                  <span>12% Secured</span>
                  <span>Final Milestone</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#F1F5F9]">
                  <div className="h-full w-full rounded-full bg-[#748E36]" />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between gap-4 p-6">
              <h2 className="text-[16px] font-bold leading-6 text-[#1E293B]">
                Booking Details <span className="text-[#748E36]">(Booking ID:- ANT2026)</span>
              </h2>
              <FaChevronUp className="text-[18px] text-[#94A3B8]" />
            </div>

            <div className="grid gap-6 px-6 pb-8 sm:grid-cols-2">
              <BookingInfo label="Destination" value="Delhi to Jaipur (Roundtrip)" />
              <BookingInfo label={vehicleLabel} value={vehicleValue} align="right" />
              <BookingInfo label="Departure" value="10 FEB 2026, 8:30 PM" />
              <BookingInfo label="Arrival" value="14 FEB 2026, 7:30 PM" align="right" />
            </div>
          </section>

          <section className="flex flex-col items-center gap-8">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ReceiptButton icon={FaDownload}>Booking Receipt</ReceiptButton>
              <ReceiptButton icon={FaClock}>Payment Receipt</ReceiptButton>
            </div>

            <div className="w-full rounded-[24px] border border-[#F1F5F9] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:p-10">
              <p className="text-center text-[16px] font-medium leading-6 text-[#64748B]">
                Need professional assistance? Our concierge is available 24/7
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+919899941402"
                  className="flex h-[50px] items-center justify-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-10 text-[14px] font-bold leading-5 text-[#334155] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  <FaPhoneAlt />
                  Call Customer Support
                </a>
                <a
                  href="https://wa.me/919899941402"
                  className="flex h-[50px] items-center justify-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-10 text-[14px] font-bold leading-5 text-[#334155] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  <FaWhatsapp className="text-[20px] text-[#10B981]" />
                  WhatsApp Concierge
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
