import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaSnowflake, FaStar, FaSuitcase, FaTint, FaUsers } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import carImage from '../image/car.jpg'

const defaultTitle = 'Comfortable Car Rental Service For Delhi To Jaipur Tour'
const sortOptions = ['Best', 'Cheapest']
const vehicleTypeFilters = ['All', 'Luxury Bus Rental', 'AC Sleeper Bus', 'AC Seater Bus']
const amenityFilters = [
  'All',
  'Wi-Fi',
  'Charging Point',
  'Water Bottle',
  'Toilet',
  'Seat Cover',
  'LED Tv',
  'Ice box & First ai box',
  'Music with bluetooth mic',
  'Live Tracking',
]

const carListings = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'Swift Dezire 4 PAX',
  rating: '4.8',
  reviews: '(120 verified reviews)',
  copy:
    'Luxury traveller perfect for family trips, corporate outings & special occasions. Experience AC comfort, plush seating and a seamless travel experience.',
  features: ['4 Seats', 'AC', '4 Luggage', 'Water Bottle'],
  price: '\u20B960',
  oldPrice: '\u20B970/km',
}))

const buildTourTitle = (routeTitle = '') => {
  const cleanRoute = routeTitle.replace(/\s+Car\s+Rental$/i, '').trim()
  return cleanRoute ? `Comfortable Car Rental Service For ${cleanRoute} Tour` : defaultTitle
}

export default function CarBusesPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = buildTourTitle(location.state?.routeTitle)
  const [activeSort, setActiveSort] = useState('Best')
  const [activeVehicleType, setActiveVehicleType] = useState('All')
  const [activeAmenity, setActiveAmenity] = useState('All')
  const [visibleCount, setVisibleCount] = useState(3)
  const visibleListings = carListings.slice(0, visibleCount)
  const canLoadMore = visibleCount < carListings.length

  const clearFilters = () => {
    setActiveVehicleType('All')
    setActiveAmenity('All')
  }

  const openCarDetail = () => {
    navigate('/rent-car/routes/view-buses/detail', { state: { pageTitle: title } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#ececec] text-[#4D4D4D]">
      <FigmaNavbar />

      <main>
        <section className="flex min-h-[112px] items-center justify-center bg-[#ececec] px-4 py-10">
          <h1 className="flex h-auto w-full max-w-[1181px] items-center justify-center text-center text-[22px] font-bold leading-[31px] capitalize text-[#4D4D4D] md:h-[31px] md:text-[26px] md:leading-[35px]">
            {title}
          </h1>
        </section>

        <section className="bg-[#ececec] px-4 pb-20 pt-0 md:px-6">
          <div className="mx-auto grid w-full max-w-[1171px] gap-8 lg:grid-cols-[318px_821px]">
            <aside className="flex flex-col items-start gap-8 text-[#4D4D4D]">
              <div className="flex w-full items-center justify-between">
                <h3 className="m-0 text-[18px] font-bold leading-7">Filters</h3>
                <button type="button" onClick={clearFilters} className="text-[14px] font-medium leading-5 text-[#748E36]">
                  Clear all
                </button>
              </div>

              <div className="flex w-full flex-col gap-4">
                <h4 className="m-0 text-[14px] font-bold uppercase leading-5 tracking-[0.7px]">Bus Type</h4>
                <div className="flex flex-col gap-3">
                  {vehicleTypeFilters.map((item) => {
                    const selected = activeVehicleType === item
                    return (
                      <label key={item} className="flex h-5 cursor-pointer items-center gap-[11px] text-[14px] font-normal leading-5">
                        <input
                          type="radio"
                          name="car-type-filter"
                          value={item}
                          checked={selected}
                          onChange={() => setActiveVehicleType(item)}
                          className="sr-only"
                        />
                        <span
                          className={`flex h-[18px] w-[18px] items-center justify-center rounded-[8px] border border-[#748E36] ${
                            selected ? 'bg-[#748E36]' : 'bg-transparent'
                          }`}
                        >
                          {selected && <span className="h-2 w-2 rounded-full bg-white" />}
                        </span>
                        {item}
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="flex w-full max-w-[279px] flex-col gap-4">
                <h4 className="m-0 text-[14px] font-bold uppercase leading-5 tracking-[0.7px]">Price Range</h4>
                <div className="px-2">
                  <div className="h-[6px] rounded-[16px] bg-[#748E36]" />
                  <div className="mt-3 flex items-center justify-between text-[12px] font-medium leading-4">
                    <span>{'\u20B9'}60,000</span>
                    <span>{'\u20B9'}2,00,000</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4">
                <h4 className="m-0 text-[14px] font-bold uppercase leading-5 tracking-[0.7px]">Amenities</h4>
                <div className="flex flex-col gap-3">
                  {amenityFilters.map((item) => {
                    const selected = activeAmenity === item
                    return (
                      <label key={item} className="flex h-5 cursor-pointer items-center gap-3 text-[14px] font-normal leading-5">
                        <input
                          type="radio"
                          name="car-amenity-filter"
                          value={item}
                          checked={selected}
                          onChange={() => setActiveAmenity(item)}
                          className="sr-only"
                        />
                        <span
                          className={`h-3 w-3 rounded-[8px] border border-[#748E36] ${
                            selected ? 'bg-[#748E36]' : 'bg-transparent'
                          }`}
                        />
                        {item}
                      </label>
                    )
                  })}
                </div>
              </div>
            </aside>

            <section className="min-w-0">
              <div className="mb-[30px] flex w-full flex-col gap-4 border-b border-[#4D4D4D] pb-4 sm:h-[51px] sm:flex-row sm:items-center sm:justify-between">
                <h2 className="m-0 text-[20px] font-bold leading-7 text-[#4D4D4D]">14 Buses found</h2>
                <div className="flex items-center gap-2">
                  <span className="pr-2 text-[14px] font-normal leading-5">Sort by:</span>
                  {sortOptions.map((option) => {
                    const active = activeSort === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setActiveSort(option)}
                        className={`flex h-[34px] items-center justify-center rounded-[16px] px-4 text-[14px] leading-5 ${
                          active
                            ? 'border border-[#748E36] bg-[#748E36] font-semibold text-white'
                            : 'border border-[#4D4D4D] bg-transparent font-medium text-[#4D4D4D] hover:bg-white'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-[30px]">
                {visibleListings.map((car) => (
                  <article
                    key={car.id}
                    className="flex min-h-[314px] w-full flex-col overflow-hidden rounded-[20px] border border-[#4D4D4D]/40 bg-white lg:h-[314px] lg:flex-row"
                  >
                    <div className="relative h-[240px] w-full shrink-0 overflow-hidden lg:h-[314px] lg:w-[357px]">
                      <img src={carImage} alt={car.title} className="h-full w-full object-cover lg:rounded-l-[20px]" />
                      <span className="absolute left-4 top-4 flex h-6 items-center rounded-full bg-[#748E36] px-3 text-[11px] font-bold uppercase tracking-[1px] text-white">
                        Premium
                      </span>
                    </div>

                    <div className="flex w-full flex-col justify-center gap-3 p-5 lg:w-[464px] lg:px-6">
                      <div>
                        <h3 className="m-0 text-[20px] font-bold leading-7 text-[#4D4D4D]">{car.title}</h3>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="inline-flex h-5 items-center gap-1 rounded-[4px] bg-[#556B2F]/10 px-2 text-[12px] font-bold leading-6 text-[#556B2F]">
                            <FaStar className="text-[#748E36]" /> {car.rating}
                          </span>
                          <span className="text-[12px] font-medium leading-5">{car.reviews}</span>
                        </div>
                      </div>

                      <p className="m-0 max-w-[400px] text-[12px] font-normal leading-[17px] text-[#4D4D4D]">
                        {car.copy}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {car.features.map((feature, index) => {
                          const icons = [FaUsers, FaSnowflake, FaSuitcase, FaTint]
                          const Icon = icons[index]
                          return (
                            <span
                              key={feature}
                              className="inline-flex h-6 items-center gap-1 rounded-full bg-[#EDEEF0] px-3 text-[12px] font-semibold leading-4 text-[#3E4943]"
                            >
                              <Icon className="text-[12px]" /> {feature}
                            </span>
                          )
                        })}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[12px] font-bold leading-5 text-[#4D4D4D]">Outstation Price Min 300km/Day -</span>
                        <span className="text-[12px] font-medium leading-8 text-[#4D4D4D]/40 line-through">
                          {car.oldPrice}
                        </span>
                        <span className="text-[20px] font-bold leading-8 text-[#748E36]">
                          {car.price}
                          <span className="text-[12px] font-medium text-[#748E36]"> /km</span>
                        </span>
                      </div>

                      <div className="flex min-h-[42px] w-full flex-wrap items-center justify-between gap-3 py-px lg:flex-nowrap">
                        <button
                          type="button"
                          onClick={openCarDetail}
                          className="flex h-[38px] min-w-[126.83px] items-center justify-center whitespace-nowrap rounded-[8px] border border-[#4D4D4D] bg-white px-5 text-center text-[14px] font-bold leading-5 text-[#4D4D4D] shadow-sm hover:bg-[#f7f7f7]"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={openCarDetail}
                          className="flex h-10 min-w-[119px] items-center justify-center whitespace-nowrap rounded-[8px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-5 text-center text-[14px] font-bold leading-5 text-white shadow-[0_2px_6px_rgba(0,0,0,0.16)] hover:brightness-105"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {canLoadMore && (
                <div className="flex justify-center pt-[44px]">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((count) => count + 3)}
                    className="flex h-[50px] w-[210.39px] items-center justify-center rounded-[24px] border border-[#4D4D4D] bg-transparent px-8 text-center text-[16px] font-bold leading-6 text-[#4D4D4D] hover:bg-white"
                  >
                    Load More Results
                  </button>
                </div>
              )}
            </section>
          </div>
        </section>

        <section className="flex min-h-[630px] items-center justify-center bg-white px-4 py-[72px] md:px-20 md:pb-[76px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 text-center text-[#4D4D4D]">
            <h2 className="max-w-[857px] text-[24px] font-black leading-[31px] md:text-[32px] md:leading-[35px]">
              Luxury Car Rental in Delhi NCR for Delhi to Jaipur Tour
            </h2>
            <p className="max-w-[1120px] text-[18px] font-medium leading-9 md:text-[24px] md:leading-[48px]">
              ANT Travels offers Luxury Bus Hire from Delhi NCR to Jaipur for group tours, corporate trips, family
              vacations, wedding travel and school tours. Our fleet includes AC Volvo buses, luxury coaches and tempo
              travellers that provide a comfortable and safe journey from Delhi, Noida, Greater Noida, Ghaziabad and
              Gurugram to Jaipur.
              <br />
              <br />
              We provide convenient pickup from Home, Hotel, Delhi Airport, Railway Station and Jewar Airport. Our buses
              are equipped with pushback seats, air conditioning, music system, charging points and spacious luggage
              storage to ensure a smooth and enjoyable travel experience.
            </p>
          </div>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
