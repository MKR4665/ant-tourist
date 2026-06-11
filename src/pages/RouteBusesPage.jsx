import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaClock, FaSnowflake, FaStar, FaSuitcase, FaTint, FaUsers } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import busImage from '../image/2.png'

const defaultTitle = 'Comfortable Bus Hire Service For Delhi To Jaipur Tour'
const defaultRouteName = 'Delhi to jaipur'
const sortOptions = ['Best', 'Cheapest']
const busTypeFilters = ['All', 'Luxury Bus Rental', 'AC Sleeper Bus', 'AC Seater Bus']
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
const busListings = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: '22 Sleeper Luxury Coach Hire',
  duration: '2 Day 1 Night',
  rating: '4.8',
  reviews: '(120 verified reviews)',
  copy:
    'Luxury 22-seater coach perfect for weddings, corporate trips & weekend travel. Enjoy AC comfort, premium seats and a smooth ride.',
  features: ['22 Seats', 'AC', '30 Luggage', 'Water Bottle'],
  places: ['Hawa Mahal', 'Amber Fort', 'Jal Mahal'],
  price: '\u20B925000',
  oldPrice: '\u20B929,999',
}))

const buildTourTitle = (routeTitle = '') => {
  const cleanRoute = routeTitle.replace(/\s+Bus\s+Rental$/i, '').trim()
  return cleanRoute ? `Comfortable Bus Hire Service For ${cleanRoute} Tour` : defaultTitle
}

const getRouteName = (routeTitle = '') => routeTitle.replace(/\s+Bus\s+Rental$/i, '').trim() || defaultRouteName

export default function RouteBusesPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = buildTourTitle(location.state?.routeTitle)
  const routeName = getRouteName(location.state?.routeTitle)
  const [activeSort, setActiveSort] = useState('Best')
  const [visibleCount, setVisibleCount] = useState(3)
  const visibleListings = busListings.slice(0, visibleCount)
  const canLoadMore = visibleCount < busListings.length
  const openBusDetail = () => {
    navigate('/popular-routes/view-buses/detail', { state: { pageTitle: title } })
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

        <section className="bg-[#ececec] px-4 pb-[165px] pt-0 md:px-6">
          <div className="mx-auto grid w-full max-w-[1171px] gap-8 lg:grid-cols-[318px_821px]">
            <aside className="flex flex-col items-start gap-8 text-[#4D4D4D]">
              <div className="flex w-full items-center justify-between">
                <h3 className="m-0 text-[18px] font-bold leading-7">Filters</h3>
                <button type="button" className="text-[14px] font-medium leading-5 text-[#748E36]">
                  Clear all
                </button>
              </div>

              <div className="flex w-full flex-col gap-4">
                <h4 className="m-0 text-[14px] font-bold uppercase leading-5 tracking-[0.7px]">Bus Type</h4>
                <div className="flex flex-col gap-3">
                  {busTypeFilters.map((item, index) => (
                    <label key={item} className="flex h-5 cursor-pointer items-center gap-[11px] text-[14px] font-normal leading-5">
                      <span
                        className={`flex h-[18px] w-[18px] items-center justify-center rounded-[8px] border border-[#748E36] ${
                          index === 0 ? 'bg-[#748E36]' : 'bg-transparent'
                        }`}
                      >
                        {index === 0 && <span className="h-2 w-2 rounded-full bg-white" />}
                      </span>
                      {item}
                    </label>
                  ))}
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
                  {amenityFilters.map((item, index) => (
                    <label key={item} className="flex h-5 cursor-pointer items-center gap-3 text-[14px] font-normal leading-5">
                      <span
                        className={`h-3 w-3 rounded-[8px] border border-[#748E36] ${
                          index === 0 ? 'bg-[#748E36]' : 'bg-transparent'
                        }`}
                      />
                      {item}
                    </label>
                  ))}
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
                {visibleListings.map((bus) => (
                  <article
                    key={bus.id}
                    className="flex min-h-[334px] w-full flex-col overflow-hidden rounded-[20px] border border-[#4D4D4D]/40 bg-white lg:h-[334px] lg:flex-row lg:items-center lg:gap-[21px]"
                  >
                    <div className="h-[240px] w-full shrink-0 overflow-hidden lg:h-[334px] lg:w-[337px]">
                      <img src={busImage} alt={bus.title} className="h-full w-full object-cover lg:rounded-l-[20px]" />
                    </div>

                    <div className="flex w-full flex-col gap-2 p-5 lg:h-[291px] lg:w-[444px] lg:p-0">
                      <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col gap-1.5">
                          <h3 className="m-0 text-[20px] font-bold leading-7 text-[#4D4D4D]">{bus.title}</h3>
                          <div className="flex items-center gap-1 text-[14px] font-normal leading-5 text-[#4D4D4D]/50">
                            <FaClock className="text-[11.67px]" />
                            <span>{bus.duration}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-5 items-center gap-1 rounded-[4px] bg-[#556B2F]/10 px-2 text-[12px] font-bold leading-6 text-[#556B2F]">
                              <FaStar className="text-[#748E36]" /> {bus.rating}
                            </span>
                            <span className="text-[12px] font-medium leading-5">{bus.reviews}</span>
                          </div>
                        </div>
                        <p className="m-0 max-w-[359px] text-[12px] font-normal leading-[17px] text-[#4D4D4D]">
                          {bus.copy}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {bus.features.map((feature, index) => {
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

                      <div className="flex flex-wrap gap-2">
                        {bus.places.map((place) => (
                          <span
                            key={place}
                            className="flex h-[33px] items-center rounded-[12px] border border-[#C4C8C0] px-4 text-[10px] font-medium leading-5 text-[#434842]"
                          >
                            {place}
                          </span>
                        ))}
                        <span className="flex h-[33px] items-center rounded-[12px] bg-[#E2E2E2] px-4 text-[10px] font-medium leading-5 text-[#434842]">
                          +2
                        </span>
                      </div>

                      <div className="flex flex-col gap-[6px]">
                        <div className="flex h-8 items-center gap-2">
                          <span className="text-[12px] font-medium leading-8 text-[#4D4D4D]/40 line-through">
                            {bus.oldPrice}
                          </span>
                          <span className="text-[20px] font-bold leading-8 text-[#748E36]">
                            {bus.price} <span className="text-[12px] font-medium text-[#4D4D4D]/70">/1 day tour</span>
                          </span>
                        </div>
                        <div className="flex min-h-[42px] w-full flex-wrap items-center justify-between gap-3 py-px lg:w-[415.83px] lg:flex-nowrap lg:gap-4">
                          <button
                            type="button"
                            onClick={openBusDetail}
                            className="flex h-[38px] min-w-[126.83px] items-center justify-center whitespace-nowrap rounded-[8px] border border-[#4D4D4D] bg-white px-5 text-center text-[14px] font-bold leading-5 text-[#4D4D4D] shadow-sm hover:bg-[#f7f7f7]"
                          >
                            View Details
                          </button>
                          <button
                            type="button"
                            onClick={openBusDetail}
                            className="flex h-10 min-w-[119px] items-center justify-center whitespace-nowrap rounded-[8px] bg-[linear-gradient(95.07deg,#748E36_1.52%,#43531D_100%)] px-5 text-center text-[14px] font-bold leading-5 text-white shadow-[0_2px_6px_rgba(0,0,0,0.16)] hover:brightness-105"
                          >
                            Book Now
                          </button>
                        </div>
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

        <section className="bg-white px-4 py-14 md:py-[67px]">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 text-center text-[#4D4D4D] md:h-[461px]">
            <h2 className="m-0 flex w-full max-w-[882px] items-center justify-center text-center text-[24px] font-black leading-[1.18] text-[#4D4D4D] md:h-[35px] md:text-[32px] md:leading-[35px]">
              Comfortable Bus Rental Services for {routeName} tour
            </h2>
            <p className="m-0 flex w-full max-w-[1120px] items-center justify-center text-center text-[18px] font-medium leading-9 text-[#4D4D4D] md:h-[384px] md:text-[24px] md:leading-[48px]">
              ANT Travels offers Luxury Bus Hire from Delhi NCR to Jaipur for group tours, corporate trips,
              family vacations, wedding travel and school tours. Our fleet includes AC Volvo buses, luxury
              coaches and tempo travellers that provide a comfortable and safe journey from Delhi, Noida,
              Greater Noida, Ghaziabad and Gurugram to Jaipur.
              <br />
              <br />
              We provide convenient pickup from Home, Hotel, Delhi Airport, Railway Station and Jewar Airport.
              Our buses are equipped with pushback seats, air conditioning, music system, charging points and
              spacious luggage storage to ensure a smooth and enjoyable travel experience.
            </p>
          </div>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
