import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaClock, FaFilePdf, FaSnowflake, FaStar, FaSuitcase, FaTint, FaUsers } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import heroBusImage from '../image/2.png'
import greenBusImage from '../image/2.png'
import interiorImageOne from '../assets/r1.jpg'
import interiorImageTwo from '../assets/r2.jpg'
import interiorImageThree from '../assets/r3.jpg'

const defaultTitle = 'Comfortable Bus Hire Service For Delhi To Jaipur Tour'
const galleryImages = [heroBusImage, greenBusImage, interiorImageOne, interiorImageTwo, interiorImageThree]
const features = [
  { label: '21 Seats', icon: FaUsers },
  { label: 'AC', icon: FaSnowflake },
  { label: '30 Luggage', icon: FaSuitcase },
  { label: 'Water Bottle', icon: FaTint },
]

export default function BusDetailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = location.state?.pageTitle || defaultTitle
  const handleBookNow = () => {
    navigate('/popular-routes/view-buses/detail/book-now', { state: { pageTitle: title } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#ececec] text-[#4D4D4D]">
      <FigmaNavbar />

      <main>
        <section className="flex h-24 w-full items-center justify-center bg-[#ececec] px-4">
          <h1 className="flex h-24 w-full max-w-[1280px] items-center justify-center text-center text-[22px] font-bold leading-[31px] capitalize text-[#4D4D4D] md:text-[26px] md:leading-[35px]">
            {title}
          </h1>
        </section>

        <section className="bg-[#f6f7f7] px-4 pb-12 pt-0">
          <div className="mx-auto grid w-full max-w-[1216px] gap-8 lg:grid-cols-[696px_530px] lg:items-start">
            <div>
              <p className="mb-2 mt-0 text-[13px] font-semibold text-white">Left Gallery</p>
              <div className="relative overflow-hidden rounded-[14px] shadow-[0_16px_35px_rgba(0,0,0,0.12)]">
                <img src={heroBusImage} alt="22 seater luxury coach" className="h-[250px] w-full object-cover md:h-[385px]" />
                <span className="absolute left-4 top-4 inline-flex h-6 items-center rounded-full bg-[#556B2F] px-3 text-[11px] font-bold uppercase text-white">
                  Premium
                </span>
              </div>

              <div className="mt-8 flex w-full max-w-[696px] items-start gap-4 overflow-x-auto pb-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className="h-[62px] w-[95px] shrink-0 overflow-hidden rounded-[8px] border border-transparent p-0 hover:border-[#748E36]"
                    aria-label={`Gallery thumbnail ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
                <button
                  type="button"
                  className="flex h-[62px] w-[95px] shrink-0 flex-col items-center justify-center rounded-[8px] bg-[rgba(130,130,130,0.2)] text-[#4D4D4D]"
                >
                  <FaFilePdf className="mb-1 text-[20px] text-[#EF5350]" />
                  <span className="text-[10px] font-semibold leading-3">Download PDF</span>
                </button>
              </div>
            </div>

            <div className="pt-1 text-[#4D4D4D]">
              <h2 className="m-0 text-[28px] font-extrabold leading-[38px] text-[#444444] md:text-[30px]">
                22 Seater Luxury Coach Hire
              </h2>

              <div className="mt-4 flex items-center gap-1 text-[14px] leading-5 text-[#4D4D4D]/50">
                <FaClock className="text-[12px]" />
                <span>2 Day 1 Night</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[16px] font-bold leading-6 text-[#556B2F]">
                  <FaStar className="text-[#556B2F]" /> 4.8
                </span>
                <span className="text-[14px] font-medium leading-5 text-[#4D4D4D]">(120 verified reviews)</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {features.map(({ label, icon: Icon }) => (
                  <span key={label} className="inline-flex h-[30px] items-center gap-1 rounded-full bg-[#EDEEF0] px-3 text-[12px] font-semibold leading-4 text-[#3E4943]">
                    <Icon className="text-[12px]" /> {label}
                  </span>
                ))}
              </div>

              <p className="mt-5 max-w-[530px] text-[16px] font-normal leading-[26px] text-[#4D4D4D]">
                Experience unmatched comfort and elegance with our flagship 22-seater luxury coach, designed for those who value both style and reliability. Perfect for corporate events,
              </p>

              <div className="mt-5">
                <p className="m-0 flex items-center gap-2">
                  <span className="text-[16px] font-medium leading-10 text-[#4D4D4D] line-through">{'\u20B9'}35000</span>
                  <span className="text-[34px] font-extrabold leading-10 text-[#748E36]">{'\u20B9'}25000</span>
                </p>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="mt-6 flex h-10 w-[119px] items-center justify-center rounded-[8px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-5 text-[14px] font-bold leading-5 text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
