import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaClock, FaShieldAlt, FaStar } from 'react-icons/fa'
import busImage from '../../image/2.png'

const BADGES = ['Verified fleet', 'Best price', 'Instant booking', 'Free cancellation']

const FEATURE_CARDS = [
  {
    icon: FaShieldAlt,
    title: 'Trusted Fleet',
    desc: 'Premium buses maintained for comfort, safety, and reliable group travel.',
    color: '#006445',
  },
  {
    icon: FaClock,
    title: 'Quick Booking',
    desc: 'Book buses from Delhi NCR quickly with transparent pricing and support.',
    color: '#745B04',
  },
  {
    icon: FaCheckCircle,
    title: 'Smart Autofill',
    desc: 'Fill details in seconds with smart enquiry support for faster planning.',
    color: '#1A7F5A',
  },
]

export default function HomeRentBusIntroSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white px-4 py-14 md:py-16" id="rent-bus-ant">
      <div className="mx-auto w-full max-w-[1140px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,610px)_minmax(360px,418px)] lg:gap-16">
          <div>
            <h2 className="text-[42px] font-bold leading-tight text-[#4d4d4d] md:text-[60px]">
              Rent Bus with ANT
            </h2>
            <p className="mt-4 max-w-[576px] text-[18px] leading-8 text-[#3E4943] md:text-[20px]">
              Now, book your buses on A N T and make your bus booking experience easier and more affordable. A N T lets you book buses from anywhere in Delhi/NCR at the lowest prices.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/send-enquiry')}
                className="inline-flex h-[68px] items-center justify-center rounded-full bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-10 text-[18px] font-bold text-white shadow-[0_20px_25px_-5px_rgba(0,100,69,0.1),0_8px_10px_-6px_rgba(0,100,69,0.1)]"
              >
                Book Your Bus Now
              </button>
              <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[#3E4943]">
                <FaCheckCircle className="text-[#748E36]" />
                Lowest fare guarantee
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3px] text-[#444]/60">
              {BADGES.map((badge, index) => (
                <React.Fragment key={badge}>
                  {index > 0 && <span className="size-1 rounded-full bg-[#4d4d4d]" />}
                  <span>{badge}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="relative rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,100,69,0.08)]">
            <div className="absolute -left-6 -top-6 z-10 hidden w-[270px] items-center gap-3 rounded-[16px] bg-white/90 p-3 shadow-[0_25px_50px_-12px_rgba(25,28,30,0.08)] backdrop-blur md:flex">
              <div className="flex -space-x-2">
                <span className="size-8 rounded-full border-2 border-white bg-[#7DD8AD]" />
                <span className="size-8 rounded-full border-2 border-white bg-[#FFE08D]" />
                <span className="size-8 rounded-full border-2 border-white bg-[#E5E2E1]" />
              </div>
              <div>
                <p className="flex items-center gap-1 text-[14px] font-bold text-[#745B04]">
                  <FaStar className="text-[12px]" />
                  Premium
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[-0.2px] text-[#3E4943]">
                  Luxury coach fleet
                </p>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[32px] md:h-[522px]">
              <img src={busImage} alt="Premium luxury coach" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,100,69,0.36)_0%,rgba(0,100,69,0)_70%)] mix-blend-multiply" />
              <div className="absolute inset-x-6 bottom-6 rounded-[16px] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">
                <h3 className="font-['Manrope'] text-[18px] font-bold leading-7">
                  Signature Class Fleet
                </h3>
                <p className="mt-1 text-[14px] leading-5 text-white/80">
                  Experience the gold standard in group transportation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURE_CARDS.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-[24px] border border-[#748E36]/15 bg-white/40 p-8 shadow-sm backdrop-blur-sm"
              >
                <span className="flex size-14 items-center justify-center rounded-full" style={{ backgroundColor: `${feature.color}0D` }}>
                  <Icon className="text-[22px]" style={{ color: feature.color }} />
                </span>
                <h3 className="mt-6 font-['Manrope'] text-[20px] font-bold leading-7 text-[#191C1E]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[23px] text-[#3E4943]">
                  {feature.desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
