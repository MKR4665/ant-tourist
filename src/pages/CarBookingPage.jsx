import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaCalendarAlt, FaCarSide, FaChevronDown, FaStar } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import carPreviewImage from '../image/car.jpg'

const defaultTitle = 'Comfortable Car Rental Service For Delhi To Jaipur Tour'
const bookingSteps = [
  { number: 1, label: 'Travelling Details', active: true },
  { number: 2, label: 'Passenger Details', active: false },
  { number: 3, label: 'Summary', active: false },
]

const fieldBase =
  'h-14 w-full rounded-xl border-[0.4px] border-[#4D4D4D] bg-white px-4 text-[15px] font-normal leading-6 text-[#4D4D4D] outline-none transition focus:border-[#748E36] focus:ring-2 focus:ring-[#748E36]/15 sm:text-[16px]'

function FloatingField({ label, children, className = '' }) {
  return (
    <label className={`relative block ${className}`}>
      <span className="absolute -top-[9px] left-3 z-10 bg-white px-1 text-[12px] font-normal leading-[18px] text-[#4A5D23]">
        {label}
      </span>
      {children}
    </label>
  )
}

function SelectField({ label, value, className = '' }) {
  return (
    <FloatingField label={label} className={className}>
      <select defaultValue={value} className={`${fieldBase} appearance-none pr-10 text-[#4D4D4D]`}>
        <option>{value}</option>
      </select>
      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-[#4D4D4D]" />
    </FloatingField>
  )
}

function TextField({ label, value, placeholder, muted = false, calendar = false }) {
  return (
    <FloatingField label={label}>
      <input
        defaultValue={value}
        placeholder={placeholder}
        className={`${fieldBase} ${muted ? 'text-[#4D4D4D]/60 placeholder:text-[#4D4D4D]/60' : ''} ${
          calendar ? 'pr-11' : ''
        }`}
      />
      {calendar && (
        <FaCalendarAlt className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[15px] text-[#4D4D4D]" />
      )}
    </FloatingField>
  )
}

function TimePicker({ label }) {
  return (
    <FloatingField label={label}>
      <div className="grid grid-cols-3 gap-[7px]">
        {['1', '00', 'AM'].map((value) => (
          <div key={`${label}-${value}`} className="relative">
            <select
              defaultValue={value}
              className="h-14 w-full appearance-none rounded-xl border-[0.4px] border-[#4D4D4D] bg-white px-4 text-center text-[15px] leading-6 text-[#4D4D4D] outline-none focus:border-[#748E36] focus:ring-2 focus:ring-[#748E36]/15 sm:text-[16px]"
            >
              <option>{value}</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#4D4D4D]" />
          </div>
        ))}
      </div>
    </FloatingField>
  )
}

function RouteSummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[10px] font-medium uppercase leading-4 text-white">{label}</span>
      <span className="rounded-lg bg-white/10 px-2 py-1 text-right text-[10px] font-bold leading-[15px] text-white">
        {value}
      </span>
    </div>
  )
}

function FareRow({ label, value, oldValue }) {
  return (
    <div className="flex items-center justify-between gap-4 text-white">
      <span className="text-[13px] font-normal leading-5 sm:text-[14px]">{label}</span>
      <span className="text-right text-[13px] font-normal leading-5 sm:text-[14px]">
        {oldValue && <span className="mr-1 text-[12px] line-through opacity-80">{oldValue}</span>}
        {value}
      </span>
    </div>
  )
}

export default function CarBookingPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = location.state?.pageTitle || defaultTitle

  return (
    <div className="min-h-screen bg-[#f6f7f7] text-[#4D4D4D]">
      <FigmaNavbar />

      <main>
        <section className="flex h-24 w-full items-center justify-center bg-[#f6f7f7] px-4">
          <h1 className="flex h-24 w-full max-w-[1280px] items-center justify-center text-center text-[22px] font-bold leading-[31px] capitalize text-[#4D4D4D] md:text-[26px] md:leading-[35px]">
            {title}
          </h1>
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-10 pt-0">
          <div className="mx-auto flex w-full max-w-[768px] items-center justify-between overflow-x-auto">
            {bookingSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex h-16 shrink-0 flex-col items-center gap-2">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-[16px] font-bold leading-6 text-white ${
                      step.active
                        ? 'bg-[#748E36] shadow-[0_10px_15px_-3px_rgba(249,115,22,0.2),0_4px_6px_-4px_rgba(249,115,22,0.2)]'
                        : 'bg-[#4D4D4D]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className={`text-center text-[12px] leading-4 ${step.active ? 'font-semibold text-[#748E36]' : 'font-medium text-[#4D4D4D]'}`}>
                    {step.label}
                  </span>
                </div>
                {index < bookingSteps.length - 1 && (
                  <div className="mx-6 h-px min-w-[120px] flex-1 bg-[#334155] sm:min-w-[180px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-16">
          <div className="mx-auto grid w-full max-w-[1216px] gap-8 lg:grid-cols-[minmax(0,800px)_389px]">
            <div className="rounded-[24px] border-[0.4px] border-[#4D4D4D] bg-white p-5 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] sm:p-8">
              <h2 className="mb-8 flex items-center gap-2 text-[20px] font-bold leading-8 text-[#444444] sm:text-[24px]">
                <FaCarSide className="text-[18px] text-[#748E36]" />
                Configure Your Journey
              </h2>

              <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField label="From City" value="Delhi NCR" muted />
                  <SelectField label="Destination" value="Jaipur (1 Night 2 Days)" />
                  <SelectField label="Vehicle Type" value="Car / SUV / Sedan" />
                  <SelectField label="Vehicle Name" value="Swift Dezire 4 PAX" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <TextField label="Departure Date" value="24/03/2026" calendar />
                  <TimePicker label="Departure Time" />
                  <TextField label="Arrival Date" value="24/03/2026" calendar />
                  <TimePicker label="Arrival Time" />
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <input placeholder="Enter Pickup Point" className={`${fieldBase} placeholder:text-[#4D4D4D]/60`} />
                    <button type="button" className="absolute right-4 top-full mt-1 text-[10px] font-medium leading-3 text-red-500">
                      Remove
                    </button>
                  </div>
                  <div className="pt-4">
                    <input placeholder="Add Pickup Point" className={`${fieldBase} placeholder:text-[#4D4D4D]/60`} />
                  </div>
                  <div className="flex justify-end">
                    <button type="button" className="text-[12px] font-normal leading-5 text-[#4D4D4D]">
                      add another pickup
                    </button>
                  </div>
                  <p className="text-right text-[14px] font-normal leading-5 text-[#4D4D4D]">
                    Maximum 3 Pickup Point
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="relative overflow-hidden rounded-[20px]">
                <img
                  src={carPreviewImage}
                  alt="Swift Dezire 4 PAX"
                  className="h-[220px] w-full rounded-[20px] object-cover shadow-[0_18px_30px_rgba(0,0,0,0.08)] sm:h-[299px]"
                />
                <span className="absolute left-4 top-4 inline-flex h-7 items-center gap-1 rounded-full bg-[#556B2F] px-3 text-[12px] font-bold uppercase text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                  <FaStar className="text-[12px]" />
                  Premium
                </span>
              </div>

              <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(95.34deg,#748E36_5.05%,#384616_94.05%)] p-5 shadow-[0_20px_25px_-5px_rgba(15,23,41,0.3)]">
                <div className="space-y-2">
                  <RouteSummaryRow label="Departure From" value="Delhi NCR" />
                  <RouteSummaryRow label="Destination" value="Delhi to Jaipur (Roundtrip)" />
                  <RouteSummaryRow label="Duration" value="2 Days 1 Night" />
                </div>
              </div>

              <div className="rounded-[24px] bg-[#4D4D4D] p-6 shadow-[0_20px_25px_-5px_rgba(15,23,41,0.3),0_8px_10px_-6px_rgba(15,23,41,0.3)]">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-[12px] font-medium uppercase leading-4 tracking-[1.2px] text-white">
                    Fare Details
                  </h3>
                  <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-bold leading-[15px] text-white">
                    INR
                  </span>
                </div>
                <div className="space-y-3">
                  <FareRow label="Base Fare" oldValue={'\u20B954,500'} value={'\u20B950,500'} />
                  <FareRow label="Helper + Driver Charges" value={'\u20B9N/A'} />
                  <FareRow label="Toll/Fastag" value={'\u20B9N/A'} />
                  <FareRow label="Road Tax" value={'\u20B9N/A'} />
                  <FareRow label="Parking Charge" value={'\u20B9N/A'} />
                </div>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[1218px] flex-col items-center justify-between gap-5 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-[50px] w-[104.17px] items-center justify-center rounded-[24px] border border-[#334155] bg-white/40 px-8 text-center text-[16px] font-semibold leading-6 text-[#94A3B8]"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() =>
                navigate('/rent-car/routes/view-buses/detail/book-now/passenger-details', {
                  state: { pageTitle: title },
                })
              }
              className="flex h-[51px] w-full max-w-[355.1px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-8 text-center text-[16px] font-bold leading-6 text-white shadow-[0_20px_25px_-5px_rgba(249,115,22,0.3),0_8px_10px_-6px_rgba(249,115,22,0.3)] sm:px-12"
            >
              Continue to Passenger Details
              <FaArrowRight className="text-[16px]" />
            </button>
          </div>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
