import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FaArrowLeft,
  FaArrowRight,
  FaEnvelope,
  FaMinus,
  FaMobileAlt,
  FaPlus,
  FaRegCommentDots,
  FaRegUser,
} from 'react-icons/fa'
import { MdAirplanemodeActive, MdChildCare, MdContactMail, MdLanguage, MdLocalDrink } from 'react-icons/md'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'

const defaultTitle = 'Comfortable Bus Hire Service For Delhi To Jaipur Tour'
const passengerSteps = [
  { number: 1, label: 'Travelling Details', active: true },
  { number: 2, label: 'Passenger Details', active: true },
  { number: 3, label: 'Summary', active: false },
]

const contactInputClass =
  'h-[62px] w-full rounded-lg border border-[#E2E8F0] bg-white px-4 pr-11 text-[15px] leading-5 text-[#4D4D4D] outline-none placeholder:capitalize placeholder:text-[#4D4D4D]/60 focus:border-[#748E36] focus:ring-2 focus:ring-[#748E36]/15 sm:text-[16px]'

const billingInputClass =
  'h-[54px] w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-[14px] leading-4 text-[#4D4D4D] outline-none placeholder:text-[#4D4D4D]/70 focus:border-[#748E36] focus:ring-2 focus:ring-[#748E36]/15'

const extraOptions = [
  {
    title: 'Bisleri 500 ML Packaged Drinking Water',
    price: 250,
    qty: 0,
    icon: MdLocalDrink,
    iconColor: '#2563EB',
    iconBg: '#DBEAFE',
  },
  {
    title: 'Tour Guide (For Multiple Languages)',
    price: 3000,
    qty: 0,
    icon: MdLanguage,
    iconColor: '#EA580C',
    iconBg: '#FFEDD5',
  },
  {
    title: 'Tour Guide (For Hindi & English)',
    price: 1000,
    qty: 1,
    icon: MdLanguage,
    iconColor: '#EA580C',
    iconBg: '#FFEDD5',
  },
  {
    title: 'Airport Assistance',
    price: 350,
    qty: 1,
    icon: MdAirplanemodeActive,
    iconColor: '#059669',
    iconBg: '#D1FAE5',
  },
  {
    title: 'Child Seat',
    price: 350,
    qty: 1,
    icon: MdChildCare,
    iconColor: '#9333EA',
    iconBg: '#F3E8FF',
  },
]

function BookingStepper() {
  return (
    <div className="mx-auto flex w-full max-w-[768px] items-center justify-between overflow-x-auto">
      {passengerSteps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex h-16 shrink-0 flex-col items-center gap-2">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full text-[16px] font-bold leading-6 text-white ${
                step.active ? 'bg-[#748E36]' : 'bg-[#4D4D4D]'
              }`}
            >
              {step.number}
            </span>
            <span
              className={`text-center text-[12px] leading-4 ${
                step.active ? 'font-semibold text-[#748E36]' : 'font-medium text-[#4D4D4D]'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < passengerSteps.length - 1 && (
            <div className="mx-6 h-px min-w-[120px] flex-1 bg-[#94A3B8] sm:min-w-[180px]" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

function IconInput({ placeholder, icon: Icon, className = '', textarea = false }) {
  if (textarea) {
    return (
      <div className={`relative ${className}`}>
        <textarea
          placeholder={placeholder}
          className="h-[102px] w-full resize-none rounded-lg border border-[#E2E8F0] bg-white px-4 py-4 pr-11 text-[15px] leading-5 text-[#4D4D4D] outline-none placeholder:capitalize placeholder:text-[#4D4D4D]/60 focus:border-[#748E36] focus:ring-2 focus:ring-[#748E36]/15 sm:text-[16px]"
        />
        <Icon className="absolute right-4 top-4 text-[15px] text-[#4D4D4D]/60" />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <input placeholder={placeholder} className={contactInputClass} />
      <Icon className="absolute right-4 top-4 text-[15px] text-[#4D4D4D]/60" />
    </div>
  )
}

function BillingToggle({ enabled, setEnabled }) {
  return (
    <button
      type="button"
      onClick={() => setEnabled((value) => !value)}
      className={`relative h-6 w-11 rounded-full transition ${enabled ? 'bg-[#748E36]' : 'bg-[#E2E8F0]'}`}
      aria-label="Toggle billing information"
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full border border-[#D1D5DB] bg-white transition ${
          enabled ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  )
}

function QuantityControl({ value, onChange }) {
  return (
    <div className="flex h-6 w-20 items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        className="flex h-6 w-6 items-center justify-center rounded-md border border-[#E2E8F0] bg-white text-[#4D4D4D]/60"
      >
        <FaMinus className="text-[8px]" />
      </button>
      <span className="flex h-5 w-4 items-center justify-center text-center text-[14px] font-bold leading-5 text-[#4D4D4D]">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="flex h-6 w-6 items-center justify-center rounded-md border border-[#E2E8F0] bg-white text-[#4D4D4D]/60"
      >
        <FaPlus className="text-[8px]" />
      </button>
    </div>
  )
}

function ExtraOptionCard({ option, value, onChange }) {
  const Icon = option.icon

  return (
    <div className="flex min-h-[74px] items-center gap-4 rounded-xl border border-[#F1F5F9] bg-[#F8FAFC]/50 p-3">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: option.iconBg }}
      >
        <Icon className="text-[21px]" style={{ color: option.iconColor }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-medium leading-[15px] text-black">{option.title}</p>
        <p className="text-[12px] font-bold leading-4 text-[#748E36]">{`\u20B9${option.price.toLocaleString('en-IN')}`}</p>
      </div>
      <QuantityControl value={value} onChange={onChange} />
    </div>
  )
}

export default function PassengerDetailsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = location.state?.pageTitle || defaultTitle
  const [billingEnabled, setBillingEnabled] = useState(false)
  const [quantities, setQuantities] = useState(() => extraOptions.map((option) => option.qty))

  const extraTotal = useMemo(
    () => extraOptions.reduce((sum, option, index) => sum + option.price * quantities[index], 0),
    [quantities]
  )

  const updateQuantity = (index, value) => {
    setQuantities((current) => current.map((qty, itemIndex) => (itemIndex === index ? value : qty)))
  }

  return (
    <div
      className="min-h-screen bg-[#f6f7f7] text-[#4D4D4D]"
      style={{ fontFamily: "'Public Sans', Inter, sans-serif" }}
    >
      <FigmaNavbar />

      <main>
        <section className="flex h-24 w-full items-center justify-center bg-[#f6f7f7] px-4">
          <h1 className="flex h-24 w-full max-w-[1280px] items-center justify-center text-center text-[18px] font-bold leading-7 capitalize text-[#4D4D4D] md:text-[22px]">
            {title}
          </h1>
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-10">
          <BookingStepper />
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-10">
          <div className="mx-auto grid w-full max-w-[1216px] gap-8 lg:grid-cols-[minmax(0,600px)_minmax(0,586px)]">
            <section className="rounded-2xl border border-[#F1F5F9] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="p-5 sm:p-8 sm:pb-12">
                <div className="mb-8">
                  <h2 className="flex items-center gap-2 text-[20px] font-bold leading-7 text-[#4D4D4D]">
                    <MdContactMail className="text-[24px] text-[#748E36]" />
                    Contact Details
                  </h2>
                  <p className="mt-1 text-[12px] font-normal leading-5 text-[#4D4D4D] sm:text-[14px]">
                    Booking confirmation and important updates will be sent here.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <IconInput placeholder="Full Name" icon={FaRegUser} />
                    <IconInput placeholder="Mobile Number" icon={FaMobileAlt} />
                  </div>
                  <IconInput placeholder="Email Address" icon={FaEnvelope} />
                  <IconInput placeholder="Message/Notes" icon={FaRegCommentDots} textarea />

                  <div className="border-t border-[#F1F5F9] pt-6">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-[16px] font-bold leading-6 text-[#4D4D4D]">Billing Information</h3>
                        <p className="text-[12px] font-normal leading-4 text-[#4D4D4D]">
                          Add GST details for business tax invoice
                        </p>
                      </div>
                      <BillingToggle enabled={billingEnabled} setEnabled={setBillingEnabled} />
                    </div>

                    <div className={`grid gap-6 sm:grid-cols-2 ${billingEnabled ? '' : 'opacity-40'}`}>
                      <input placeholder="Company Name" className={billingInputClass} disabled={!billingEnabled} />
                      <input placeholder="GST Number" className={billingInputClass} disabled={!billingEnabled} />
                      <input placeholder="State" className={billingInputClass} disabled={!billingEnabled} />
                      <input placeholder="Registered Address" className={billingInputClass} disabled={!billingEnabled} />
                    </div>
                  </div>
                </form>
              </div>
            </section>

            <section className="rounded-2xl border border-[#F1F5F9] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="p-5 sm:p-6">
                <h2 className="mb-6 flex items-center gap-2 text-[18px] font-bold leading-7 text-[#4D4D4D]">
                  <FaPlus className="text-[16px] text-[#748E36]" />
                  Extra Options
                </h2>

                <div className="space-y-4">
                  {extraOptions.map((option, index) => (
                    <ExtraOptionCard
                      key={option.title}
                      option={option}
                      value={quantities[index]}
                      onChange={(value) => updateQuantity(index, value)}
                    />
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-6 py-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between gap-6 text-white">
                    <span className="text-[14px] font-semibold leading-5 opacity-80">Extra Options Amount</span>
                    <span className="text-[16px] font-bold leading-6">{`\u20B9${extraTotal.toLocaleString('en-IN')}`}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="border-t border-[#E2E8F0] bg-white px-4 py-4 sm:px-8">
          <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center justify-between gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-[52px] w-[114px] items-center justify-center gap-2 rounded-xl border-2 border-[#E2E8F0] bg-white px-6 text-[16px] font-bold leading-6 text-[#475569]"
            >
              <FaArrowLeft className="text-[16px]" />
              Back
            </button>
            <button
              type="button"
              onClick={() =>
                navigate('/popular-routes/view-buses/detail/book-now/passenger-details/summary', {
                  state: { pageTitle: title },
                })
              }
              className="flex h-12 w-full max-w-[263.28px] items-center justify-center gap-2 rounded-xl bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-10 text-[16px] font-bold leading-6 text-white shadow-[0_10px_15px_-3px_rgba(236,91,19,0.25),0_4px_6px_-4px_rgba(236,91,19,0.25)]"
            >
              Continue to Payment
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
