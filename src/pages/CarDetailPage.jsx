import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaClock, FaFilePdf, FaSnowflake, FaStar, FaSuitcase, FaTint, FaUsers } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import carImage from '../image/car.jpg'
import carAltImage from '../image/car2.jpg'
import carInteriorImage from '../image/car4.png'

const defaultTitle = 'Comfortable Car Rental Service For Delhi To Jaipur Tour'
const galleryImages = [carImage, carAltImage, carImage, carInteriorImage, carInteriorImage]
const features = [
  { label: '27 Seats', icon: FaUsers },
  { label: 'AC', icon: FaSnowflake },
  { label: '18 Luggage', icon: FaSuitcase },
  { label: 'Water Bottle', icon: FaTint },
]

export default function CarDetailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = location.state?.pageTitle || defaultTitle

  const handleBookNow = () => {
    navigate('/rent-car/routes/view-buses/detail/book-now', { state: { pageTitle: title } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#4D4D4D]">
      <FigmaNavbar />

      <main>
        <section className="flex h-24 w-full items-center justify-center bg-[#f5f7f7] px-4">
          <h1 className="flex h-24 w-full max-w-[1280px] items-center justify-center text-center text-[20px] font-bold leading-[31px] capitalize text-[#4D4D4D] md:text-[26px] md:leading-[35px]">
            {title}
          </h1>
        </section>

        <section className="bg-[#f5f7f7] px-4 pb-14 pt-0">
          <div className="mx-auto grid w-full max-w-[1216px] gap-8 lg:grid-cols-[669px_530px] lg:items-start">
            <div>
              <p className="mb-2 mt-0 text-[13px] font-semibold text-white">Left Gallery</p>
              <div className="relative h-[250px] overflow-hidden rounded-[20px] bg-[#E2E8F0] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] md:h-[391px]">
                <img src={carImage} alt="Swift Dezire 4 PAX" className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 inline-flex h-7 items-center gap-1 rounded-full bg-[#556B2F] px-3 text-[12px] font-bold uppercase text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                  <FaStar className="text-[12px]" />
                  Premium
                </span>
              </div>

              <div className="mt-8 flex w-full max-w-[669px] items-start gap-4 overflow-x-auto pb-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
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
              <h2 className="m-0 text-[24px] font-extrabold leading-[34px] text-[#444444] md:text-[28px]">
                Swift Dezire 4 PAX
              </h2>

              <div className="mt-4 flex items-center gap-1 text-[14px] leading-5 text-[#4D4D4D]/50">
                <FaClock className="text-[12px]" />
                <span>2 Day 1 Night</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[14px] font-bold leading-6 text-[#556B2F]">
                  <FaStar className="text-[#556B2F]" /> 4.8
                </span>
                <span className="text-[12px] font-medium leading-5 text-[#4D4D4D]">(120 verified reviews)</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {features.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex h-[30px] items-center gap-1 rounded-full bg-[#EDEEF0] px-3 text-[12px] font-semibold leading-4 text-[#3E4943]"
                  >
                    <Icon className="text-[12px]" /> {label}
                  </span>
                ))}
              </div>

              <p className="mt-5 max-w-[530px] text-[16px] font-normal leading-[26px] text-[#4D4D4D]">
                Luxury traveller perfect for family trips, corporate outings & special occasions. Experience AC comfort,
                plush seating and a seamless travel experience.
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
