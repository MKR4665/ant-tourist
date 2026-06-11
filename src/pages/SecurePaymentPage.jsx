import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaInfo, FaLock, FaMapMarkerAlt, FaRegHandshake } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'

const paymentOptions = {
  full: 'full',
  custom: 'custom',
}

function StatusPill() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
      <span className="flex h-[26px] items-center gap-2 rounded-full border border-[#748E36] bg-[#748E36]/10 px-3 text-[12px] font-semibold uppercase leading-4 tracking-[0.6px] text-[#748E36]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#748E36]" />
        Partially Paid
      </span>
      <span className="flex h-[26px] items-center rounded-full border border-[#E5E7EB] bg-white px-3 text-[12px] font-semibold leading-4 text-[#748E36]">
        Booking ID:- ANT-2026-01
      </span>
    </div>
  )
}

function PaymentRadio({ checked }) {
  return checked ? (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#748E36] bg-[#748E36] text-white">
      <FaCheck className="text-[11px]" />
    </span>
  ) : (
    <span className="h-6 w-6 shrink-0 rounded-full border-2 border-[#4D4D4D]/20" />
  )
}

export default function SecurePaymentPage() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(paymentOptions.full)

  return (
    <div className="min-h-screen bg-[#f4f6f4] text-[#4D4D4D]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <FigmaNavbar />

      <main className="mx-auto w-full max-w-[1168px] px-4 py-16">
        <header className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/50 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <FaRegHandshake className="text-[24px] text-[#748E36]" />
            </div>
            <h1 className="pl-3 text-center text-[30px] font-bold leading-9 tracking-[-0.75px] text-[#748E36]">
              Secure Payment
            </h1>
          </div>
          <StatusPill />
        </header>

        <section className="mt-8 rounded-[24px] border border-white/40 bg-white/70 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.07)] backdrop-blur-md">
          <div className="grid gap-8 border-b border-[#4D4D4D]/5 pb-8 md:grid-cols-3">
            <div>
              <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-[#4D4D4D]/40">
                Destination
              </p>
              <p className="mt-2 flex items-center gap-2 text-[14px] font-semibold leading-5 text-[#4D4D4D]">
                <FaMapMarkerAlt className="text-[#748E36]" />
                Delhi <span className="text-[#748E36]">-&gt;</span> Jaipur
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-[#4D4D4D]/40">
                Service Type
              </p>
              <p className="mt-2 text-[14px] font-semibold leading-5 text-[#4D4D4D]">Bus Tour</p>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-[#4D4D4D]/40">
                Vehicle Type
              </p>
              <p className="mt-2 text-[14px] font-semibold leading-5 text-[#4D4D4D]">47 Seater Ac Luxury</p>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-[12px] font-normal leading-4 text-[#4D4D4D]/50">Total Amount Payable</p>
            <p className="mt-1 text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#4D4D4D]">{'\u20B975,000.00'}</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="px-2 text-[14px] font-bold uppercase leading-5 tracking-[1.4px] text-[#4D4D4D]/60">
            Choose Payment Option
          </h2>

          <div className="mt-4 space-y-4">
            <button
              type="button"
              onClick={() => setSelectedOption(paymentOptions.full)}
              className={`w-full rounded-2xl border bg-white/90 p-6 text-left transition ${
                selectedOption === paymentOptions.full
                  ? 'border-[#748E36] shadow-[0_10px_30px_-10px_rgba(26,60,110,0.2)]'
                  : 'border-[#1A3C6E]/10'
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <PaymentRadio checked={selectedOption === paymentOptions.full} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[18px] font-bold leading-7 text-[#1A3C6E]">Pay in Full</h3>
                      <span className="rounded border border-[#748E36] bg-[#748E36]/10 px-2 py-0.5 text-[10px] font-bold uppercase leading-[15px] text-[#748E36]">
                        Recommended
                      </span>
                    </div>
                    <p className="mt-[3px] text-[14px] font-normal leading-[23px] text-[#4D4D4D]/60">
                      Instant confirmation - No hidden charges - Priority Support
                    </p>
                  </div>
                </div>
                <span className="text-right text-[18px] font-bold leading-7 text-[#4D4D4D]">{'\u20B950,000'}</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedOption(paymentOptions.custom)}
              className={`w-full rounded-2xl border bg-white/70 p-6 text-left backdrop-blur-md transition ${
                selectedOption === paymentOptions.custom ? 'border-[#748E36]' : 'border-[#1A3C6E]/10'
              }`}
            >
              <div className="flex gap-4">
                <PaymentRadio checked={selectedOption === paymentOptions.custom} />
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold leading-7 text-[#4D4D4D]">Custom Payment</h3>
                  <p className="mt-1 text-[14px] font-normal leading-5 text-[#4D4D4D]/60">
                    Enter Booking Amount Minimum 25%
                  </p>
                </div>
              </div>
              <div className="mt-4 flex h-[62px] items-center rounded-xl border border-[#4D4D4D]/10 bg-white/50 px-4">
                <span className="pl-0 text-[16px] font-semibold leading-6 text-[#4D4D4D]/40">{'\u20B9'}</span>
                <input
                  placeholder="Enter Amount"
                  className="h-full min-w-0 flex-1 bg-transparent px-3 text-[18px] text-[#4D4D4D] outline-none placeholder:text-[#4D4D4D]/20"
                />
              </div>
            </button>
          </div>
        </section>

        <section className="mt-8 flex items-center gap-4 rounded-2xl border border-[#748E36] bg-[#748E36]/10 p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#748E36] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <FaInfo className="text-[16px]" />
          </span>
          <p className="text-[10px] font-normal leading-[22px] tracking-[0.02em] text-[#4D4D4D]">
            Remaining balance must be cleared at least 7 days before the tour.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.02)] backdrop-blur-md">
          <button
            type="button"
            onClick={() => navigate('/popular-routes/view-buses/detail/book-now/passenger-details/summary/payment/confirmed')}
            className="flex h-[68px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-6 text-[18px] font-bold leading-7 text-white"
          >
            Proceed to Pay {selectedOption === paymentOptions.full ? '\u20B950,000' : ''}
            <FaArrowRight className="text-[20px]" />
          </button>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="rounded-sm bg-white px-1 text-[11px] font-bold leading-4 text-[#1A3C6E] shadow">VISA</span>
            <span className="h-5 w-5 rounded-full bg-[#EB001B]" />
            <span className="-ml-3 h-5 w-5 rounded-full bg-[#F79E1B]" />
            <span className="rounded-full bg-[#F4A51C] px-1 text-[10px] font-bold text-[#111]">UPI</span>
          </div>
          <p className="mt-7 flex items-center justify-center gap-2 text-[10px] font-medium leading-4 tracking-[0.02em] text-[#7E7E7E]">
            <FaLock className="text-[#4D4D4D]/30" />
            100% Secure Checkout
          </p>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
