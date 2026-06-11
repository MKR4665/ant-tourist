import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaEdit,
  FaShieldAlt,
} from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import busPreviewImage from '../image/2.png'

const defaultTitle = 'Comfortable Bus Hire Service For Delhi To Jaipur Tour'
const summarySteps = [
  { number: 1, label: 'Travelling Details' },
  { number: 2, label: 'Passenger Details' },
  { number: 3, label: 'Summary' },
]

const rideMetaTop = [
  ['From City', 'Delhi'],
  ['Destination', 'Jaipur (Roundtrip)'],
  ['Vehicle Type', 'AC Seater Buses'],
]

const rideMetaBottom = [
  ['Vehicle Name', '22 Seater Luxury Bus'],
  ['Departure Date & Time', '27 Nov 2026, 8.30 am'],
  ['Arrival Date & Time', '30 Nov 2026, 8.30 am'],
]

const pickupPoints = [
  'B-128, Transport Nagar, Sector-69, Noida, Uttar Pradesh (201301) India',
  'New Delhi Railway Station',
  'HP Petrol Pump Dholakuan Metro Station',
]

const priceRows = [
  ['Base Fare', '\u20B950,000'],
  ['Extra Options', '\u20B9800'],
]

const taxRows = [
  ['SGST (9%)', '\u20B93078.00'],
  ['CGST (9%)', '\u20B93078.00'],
  ['IGST (9%)', 'N/A'],
]

function SummaryStepper() {
  return (
    <div className="mx-auto flex w-full max-w-[768px] items-center justify-between overflow-x-auto">
      {summarySteps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex h-16 shrink-0 flex-col items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#748E36] text-[16px] font-bold leading-6 text-white shadow-[0_10px_15px_-3px_rgba(249,115,22,0.2),0_4px_6px_-4px_rgba(249,115,22,0.2)]">
              {step.number}
            </span>
            <span
              className={`text-center text-[12px] leading-4 ${
                index === 2 ? 'font-medium text-[#4D4D4D]' : 'font-semibold text-[#748E36]'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < summarySteps.length - 1 && (
            <div className="mx-6 h-px min-w-[120px] flex-1 bg-[#334155] sm:min-w-[180px]" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

function SummaryCard({ title, children, className = '', showEdit = true }) {
  return (
    <section
      className={`rounded-2xl border border-[#F9FAFB] bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] ${className}`}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-semibold leading-7 text-[#0F172A]">{title}</h2>
        {showEdit && (
          <button type="button" className="text-[#748E36]" aria-label={`Edit ${title}`}>
            <FaEdit className="text-[14px]" />
          </button>
        )}
      </div>
      {children}
    </section>
  )
}

function MetaGrid({ items }) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <p className="text-[12px] font-medium uppercase leading-4 tracking-[0.6px] text-[#94A3B8]">{label}</p>
          <p className="mt-1 truncate text-[15px] font-medium leading-6 text-[#334155] sm:text-[16px]">{value}</p>
        </div>
      ))}
    </div>
  )
}

function InfoPair({ label, value }) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-medium uppercase leading-4 tracking-[0.5px] text-[#94A3B8]">{label}</p>
      <p className="mt-1 break-words text-[13px] font-medium leading-5 text-[#334155]">{value}</p>
    </div>
  )
}

function PriceRow({ label, value, muted = false, highlight = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${
        highlight ? 'rounded bg-[#748E36]/10 px-[9px] py-1' : ''
      }`}
    >
      <span className={`text-[14px] leading-5 ${muted ? 'text-[#94A3B8]' : 'text-[#475569]'}`}>{label}</span>
      <span className={`text-[14px] font-medium leading-5 ${highlight ? 'font-semibold text-[#748E36]' : 'text-[#252525]'}`}>
        {value}
      </span>
    </div>
  )
}

export default function BookingSummaryPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = location.state?.pageTitle || defaultTitle

  return (
    <div className="min-h-screen bg-[#f6f7f7] text-[#4D4D4D]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <FigmaNavbar />

      <main>
        <section className="flex h-24 w-full items-center justify-center bg-[#f6f7f7] px-4">
          <h1 className="flex h-24 w-full max-w-[1280px] items-center justify-center text-center text-[20px] font-bold leading-[31px] capitalize text-[#4D4D4D] md:text-[26px] md:leading-[35px]">
            {title}
          </h1>
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-8">
          <SummaryStepper />
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-16">
          <div className="mx-auto grid w-full max-w-[1216px] gap-8 lg:grid-cols-[minmax(0,696px)_minmax(360px,488px)]">
            <div className="space-y-6">
              <SummaryCard title="Ride Details">
                <div className="space-y-6">
                  <MetaGrid items={rideMetaTop} />
                  <MetaGrid items={rideMetaBottom} />
                  <div>
                    <p className="text-[12px] font-medium uppercase leading-4 tracking-[0.6px] text-[#94A3B8]">
                      Places Covered
                    </p>
                    <p className="mt-1 text-[14px] font-medium leading-6 text-[#334155]">
                      Jaipur, Jaipur, Jaipur, Hawamhal, Hawamhal, Hawamhal, Hawamhal, Hawamhal
                    </p>
                  </div>
                  <div className="flex gap-4 pt-1">
                    <div className="flex w-3 shrink-0 flex-col items-center py-1">
                      <span className="h-3 w-3 rounded-full border-2 border-[#748E36] bg-white" />
                      <span className="my-1 w-0.5 flex-1 bg-[#E2E8F0]" />
                      <span className="h-3 w-3 rounded-full bg-[#94A3B8]" />
                      <span className="my-1 w-0.5 flex-1 bg-[#E2E8F0]" />
                      <span className="h-3 w-3 rounded-full border-2 border-[#1E293B] bg-white" />
                    </div>
                    <div className="space-y-4">
                      {pickupPoints.map((point, index) => (
                        <div key={point}>
                          <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-[#94A3B8]">
                            Pickup Point {index + 1}
                          </p>
                          <p className="text-[14px] font-normal leading-5 text-[#334155]">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SummaryCard>

              <SummaryCard title="Contact & Billing Details">
                <div className="grid gap-x-16 gap-y-5 sm:grid-cols-2">
                  <InfoPair label="Full Name" value="Isha Thakur" />
                  <InfoPair label="Mobile Number" value="9899941402" />
                  <InfoPair label="Email Address" value="isha63198@gmail.com" />
                  <InfoPair label="Message/Notes" value='"Please ensure the Wi-Fi is active."' />
                </div>
              </SummaryCard>

              <SummaryCard title="GST Information">
                <div className="grid gap-x-16 gap-y-5 sm:grid-cols-2">
                  <InfoPair label="Company Name" value="Ant Travel Pvt Ltd." />
                  <InfoPair label="GST Number" value="857HTBIPB87659" />
                  <InfoPair label="Registered Address" value="27AACMK1234A1Z5" />
                  <InfoPair label="State" value="Delhi" />
                </div>
              </SummaryCard>

              <SummaryCard title="Extra Options" showEdit={false}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-6 text-[16px] leading-6 text-[#334155]">
                    <span>Airport Assistance</span>
                    <span className="font-medium">{'\u20B92,000'}</span>
                  </div>
                  <div className="flex items-center justify-between gap-6 text-[16px] leading-6 text-[#334155]">
                    <span>Child Seat</span>
                    <span className="font-medium">{'\u20B92,000'}</span>
                  </div>
                </div>
              </SummaryCard>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <section className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                <h2 className="mb-4 text-[18px] font-semibold leading-7 text-[#0F172A]">Payment Summary</h2>
                <img
                  src={busPreviewImage}
                  alt="ANT luxury bus"
                  className="h-[197px] w-full rounded-xl object-cover"
                />
                <div className="mt-4 rounded-xl bg-[linear-gradient(95.34deg,#748E36_5.05%,#384616_94.05%)] p-4 text-white">
                  <div className="space-y-2">
                    <div className="flex justify-between gap-4 text-[10px]">
                      <span className="uppercase">Departure From</span>
                      <span className="rounded bg-white/10 px-2 py-1 font-bold">Delhi NCR</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[10px]">
                      <span className="uppercase">Destination</span>
                      <span className="rounded bg-white/10 px-2 py-1 font-bold">Delhi to Jaipur (Roundtrip)</span>
                    </div>
                    <div className="flex justify-between gap-4 text-[10px]">
                      <span className="uppercase">Duration</span>
                      <span className="rounded bg-white/10 px-2 py-1 font-bold">2 Days 1 Night</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {priceRows.map(([label, value]) => (
                    <PriceRow key={label} label={label} value={value} />
                  ))}
                  <div className="border-t border-dashed border-[#E2E8F0]" />
                  <PriceRow label="Sub Total" value={'\u20B950,800'} highlight />
                  {taxRows.map(([label, value]) => (
                    <PriceRow key={label} label={label} value={value} muted />
                  ))}
                  <PriceRow label="Sub Total" value={'\u20B942,800'} highlight />
                  <div className="flex gap-2 pt-2">
                    <input
                      placeholder="Promo code"
                      className="h-[38px] min-w-0 flex-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-[14px] text-[#334155] outline-none placeholder:text-[#94A3B8]"
                    />
                    <button className="h-[38px] rounded-lg border border-[#748E36] px-4 text-[12px] font-bold uppercase tracking-[0.6px] text-[#748E36]">
                      Apply
                    </button>
                  </div>
                  <PriceRow label="Coupon Discount" value={'-\u20B92,000'} />
                  <div className="flex items-center justify-between rounded-lg bg-[#748E36] px-[9px] py-2 text-white">
                    <span className="text-[14px] font-semibold leading-5">Sub Total</span>
                    <span className="text-[14px] font-bold leading-5">{'\u20B959,800'}</span>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] p-6 text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px]">Net Payable</p>
                    <p className="text-[12px] font-normal leading-4">Inclusive of all taxes</p>
                  </div>
                  <p className="text-right text-[24px] font-extrabold leading-[29px]">{'\u20B959,800'}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigate('/popular-routes/view-buses/detail/book-now/passenger-details/summary/payment', {
                      state: { pageTitle: title },
                    })
                  }
                  className="mt-6 flex h-[60px] w-full items-center justify-center gap-3 rounded-xl bg-white text-[18px] font-bold leading-7 text-[#748E36] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
                >
                  Pay & Confirm Booking
                  <FaArrowRight className="text-[20px]" />
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] font-normal uppercase leading-[15px] tracking-[-0.5px]">
                  <FaShieldAlt />
                  100% Secure Payment
                </p>
              </section>
            </aside>
          </div>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
