import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaSnowflake, FaGasPump, FaArrowRight, FaCheckCircle, FaStar, FaWhatsapp } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import carImage from '../assets/tttttt6.jpg'

// Figma: rent car page
const CARS = [
  { name: 'Sedan (Swift Dzire / Honda Amaze)', type: 'Sedan & Hatchback', seats: 4, ac: true, fuel: 'Petrol/CNG', localPrice: '₹1,800', outstationRate: '₹13/km', minKm: '250 km/day', image: carImage, badge: null },
  { name: 'SUV (Innova / Ertiga)', type: 'SUV Car Rental', seats: 7, ac: true, fuel: 'Diesel', localPrice: '₹2,800', outstationRate: '₹17/km', minKm: '300 km/day', image: carImage, badge: 'Popular' },
  { name: 'Luxury SUV (Fortuner / XUV700)', type: 'Luxury Car Rental', seats: 7, ac: true, fuel: 'Diesel', localPrice: '₹4,500', outstationRate: '₹25/km', minKm: '300 km/day', image: carImage, badge: null },
  { name: 'Premium Sedan (Mercedes / BMW)', type: 'Luxury Car Rental', seats: 4, ac: true, fuel: 'Petrol', localPrice: '₹6,000', outstationRate: '₹35/km', minKm: '250 km/day', image: carImage, badge: 'Premium' },
]

export default function RentCarPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#ececec]">
      <FigmaNavbar />

      {/* Hero */}
      <div className="relative h-[380px] overflow-hidden">
        <img src={carImage} alt="Rent Car" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,17,22,0.85)_0%,rgba(15,17,22,0.40)_100%)]" />
        <div className="absolute left-[5%] top-[50%] -translate-y-1/2 text-white">
          <p className="inline-flex rounded-full bg-white/20 px-4 py-1 text-[12px] font-bold uppercase tracking-widest">
            Luxury Car Rental Service
          </p>
          <h1 className="mt-3 text-[32px] font-extrabold leading-tight md:text-[48px]">
            Rent a <span className="text-[#a3c455]">Car</span> in Delhi
          </h1>
          <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#dde0e2]">
            Sedan, SUV & Luxury cars for every occasion. Airport transfers, outstation trips, local tours — we have it all.
          </p>
          <button onClick={() => navigate('/send-enquiry')} className="mt-5 inline-flex items-center gap-2 rounded-[12px] bg-[#789736] px-7 py-3 text-[15px] font-bold text-white hover:bg-[#6a8530]">
            Get Instant Quote <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Car Cards */}
      <section className="py-14">
        <div className="mx-auto w-[92%] max-w-[1470px]">
          <div className="mb-10 text-center">
            <h2 className="text-[28px] font-bold text-[#1a1c22] md:text-[36px]">Our Car Fleet</h2>
            <p className="mt-2 text-[15px] text-[#6b6f77]">Sedan, SUV & Luxury — choose what fits your journey</p>
            <span className="mx-auto mt-4 block h-[4px] w-[60px] rounded-full bg-[#789736]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {CARS.map((car) => (
              <article key={car.name} className="overflow-hidden rounded-[20px] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
                <div className="relative h-[180px] overflow-hidden">
                  <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
                  {car.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#789736] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
                      {car.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#789736]">{car.type}</p>
                  <h3 className="mt-1 text-[15px] font-bold text-[#1a1c22]">{car.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#ecf2df] px-2.5 py-1 text-[11px] font-semibold text-[#6a8530]">
                      <FaUsers className="text-[10px]" /> {car.seats} Seats
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#e0f0ff] px-2.5 py-1 text-[11px] font-semibold text-[#2a6090]">
                      <FaSnowflake className="text-[10px]" /> AC
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#f4f4f4] px-2.5 py-1 text-[11px] font-semibold text-[#555]">
                      <FaGasPump className="text-[10px]" /> {car.fuel}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1.5 rounded-[12px] bg-[#f5f5f5] p-3">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-semibold text-[#789736]">Local (4hr/40km)</span>
                      <span className="font-bold text-[#1a1c22]">{car.localPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-semibold text-[#789736]">Outstation</span>
                      <span className="font-bold text-[#1a1c22]">{car.outstationRate}</span>
                    </div>
                    <p className="text-[11px] text-[#888]">Min {car.minKm}</p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button onClick={() => navigate('/send-enquiry')} className="flex-1 rounded-[10px] border-2 border-[#789736] py-2 text-[13px] font-bold text-[#789736] hover:bg-[#f4f7ec]">
                      View
                    </button>
                    <button onClick={() => navigate('/send-enquiry')} className="flex-1 rounded-[10px] bg-[#789736] py-2 text-[13px] font-bold text-white hover:bg-[#6a8530]">
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-14">
        <div className="mx-auto w-[92%] max-w-[1470px]">
          <h2 className="mb-8 text-center text-[26px] font-bold text-[#1a1c22] md:text-[32px]">Why Book Car with ANT Travel?</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { icon: '🛡️', title: 'GPS Tracked', desc: 'All vehicles fitted with real-time GPS for your safety' },
              { icon: '🧾', title: 'Transparent Billing', desc: 'No hidden charges. What you see is what you pay.' },
              { icon: '👨‍✈️', title: 'Verified Drivers', desc: 'Background-checked, licensed professional drivers' },
              { icon: '❄️', title: 'Well Maintained AC Cars', desc: 'Regularly serviced, spotlessly clean vehicles' },
              { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer care for any assistance' },
              { icon: '🔄', title: 'Free Cancellation', desc: 'Cancel up to 6 hours before with full refund' },
            ].map(f => (
              <div key={f.title} className="flex items-start gap-4 rounded-[16px] border border-[#e8edda] p-5">
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#ecf2df] text-[24px]">{f.icon}</div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#1a1c22]">{f.title}</h3>
                  <p className="mt-1 text-[13px] text-[#6b6f77]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
