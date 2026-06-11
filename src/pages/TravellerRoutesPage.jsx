import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaClock } from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import { DESTINATIONS } from '../components/home/homeConstants'

const SORT_OPTIONS = ['Popular', 'Cheapest', 'Weekend', 'Hill Station', 'Pilgrimage Tour']

const ROUTE_DETAILS = [
  { title: 'Delhi to Jaipur Traveller Rental', category: 'Weekend' },
  { title: 'Delhi to Agra Traveller Rental', category: 'Cheapest' },
  { title: 'Delhi to Chandigarh Traveller Rental', category: 'Weekend' },
  { title: 'Delhi to Manali Traveller Rental', category: 'Hill Station' },
  { title: 'Delhi to Haridwar Traveller Rental', category: 'Pilgrimage Tour' },
  { title: 'Delhi to Shimla Traveller Rental', category: 'Hill Station' },
  { title: 'Delhi to Amritsar Traveller Rental', category: 'Weekend' },
  { title: 'Delhi to Mathura Traveller Rental', category: 'Pilgrimage Tour' },
  { title: 'Delhi to Ayodhya Traveller Rental', category: 'Pilgrimage Tour' },
  { title: 'Delhi to Jim Corbett Traveller Rental', category: 'Weekend' },
  { title: 'Delhi to Nainital Traveller Rental', category: 'Hill Station' },
  { title: 'Delhi to Rishikesh Traveller Rental', category: 'Pilgrimage Tour' },
  { title: 'Delhi to Mussoorie Traveller Rental', category: 'Hill Station' },
  { title: 'Delhi to Udaipur Traveller Rental', category: 'Weekend' },
]

const pageTitle = 'Popular Destination Traveller Rental from Delhi NCR | Agra, Jaipur, Haridwar, Manali Bus Hire'
const premiumDescriptionTitle = 'Popular Destination Traveller Rental From Delhi NCR For Group Travel'
const premiumDescription =
  'Looking for reliable and comfortable luxury bus rental in Delhi NCR? ANT Travels offers premium AC bus hire services for Delhi Airport and Jewar Airport transfers, local city tours, and outstation group travel. Whether you are planning a wedding event, corporate outing, school trip, or family tour, we provide well-maintained luxury buses to match your needs. Our fleet includes top-quality buses from Volvo, Bharat Benz, and Ashok Leyland**, ensuring smooth, safe, and comfortable journeys. From Delhi, Noida, Greater Noida, Ghaziabad, and Gurugram, you can easily book buses for airport transfers, local sightseeing, and long-distance tours.'

export default function TravellerRoutesPage() {
  const navigate = useNavigate()
  const [activeSort, setActiveSort] = useState('Popular')
  const [visibleCount, setVisibleCount] = useState(8)

  const routes = useMemo(() => {
    const imagePool = DESTINATIONS.map((destination) => destination.image)

    return ROUTE_DETAILS.map((route, index) => ({
      ...route,
      image: imagePool[index % imagePool.length],
    }))
  }, [])

  const visibleRoutes =
    activeSort === 'Popular' ? routes : routes.filter((route) => route.category === activeSort)
  const pagedRoutes = visibleRoutes.slice(0, visibleCount)
  const canLoadMore = visibleCount < visibleRoutes.length

  const handleSortChange = (option) => {
    setActiveSort(option)
    setVisibleCount(8)
  }

  return (
    <div className="min-h-screen bg-[#ececec] text-[#1a1c22]">
      <FigmaNavbar />

      <main>
        <section className="flex min-h-[142px] items-center justify-center bg-[#ececec] px-4 py-10">
          <h1 className="w-full max-w-[1165px] text-center text-[22px] font-bold leading-7 text-[#4D4D4D] md:text-[26px]">
            {pageTitle}
          </h1>
        </section>

        <section className="bg-[#ececec] px-4 pb-8 pt-0">
          <div className="mx-auto flex w-full max-w-[1225px] flex-col gap-4 border-b border-[#4D4D4D] pb-4 md:h-[51px] md:flex-row md:items-center md:justify-between md:gap-6">
            <h2 className="text-[20px] font-bold leading-7 text-[#4D4D4D]">
              {visibleRoutes.length} Destination Found
            </h2>

            <div className="flex flex-wrap items-center gap-2">
              <span className="pr-2 text-[14px] font-normal leading-5 text-[#4D4D4D]">Sort by:</span>
              {SORT_OPTIONS.map((option) => {
                const active = activeSort === option

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSortChange(option)}
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
        </section>

        <section className="bg-[#ececec] px-4 pb-16 pt-0">
          <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-[66px]">
            <div className="grid gap-x-6 gap-y-[66px] sm:grid-cols-2 xl:grid-cols-4">
              {pagedRoutes.map((route, index) => (
                <article
                  key={`${route.title}-${index}`}
                  className="min-h-[367.5px] overflow-hidden rounded-[12px] bg-white transition-transform hover:-translate-y-1"
                >
                  <div className="relative h-[192px] overflow-hidden">
                    <img src={route.image} alt={route.title} className="h-full w-full object-cover" />
                    {index % 4 === 0 && (
                      <span className="absolute right-4 top-4 flex h-6 items-center rounded-full bg-[#748E36] px-3 text-[12px] font-bold leading-4 text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="flex min-h-[175.5px] flex-col items-start gap-[3.5px] p-6">
                    <h3 className="w-full truncate text-[18px] font-bold leading-7 text-[#4D4D4D]">
                      {route.title}
                    </h3>
                    <div className="flex h-[32.5px] items-center gap-1 pb-[12.5px] text-[14px] font-normal leading-5 text-[#4D4D4D]/50">
                      <FaClock className="text-[11.67px]" />
                      <span>5 Night 2 Days</span>
                    </div>

                    <div className="flex h-[60px] w-full items-center justify-between gap-4 border-t border-[#748E36] pt-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase leading-[15px] text-[#4D4D4D]">Starts from</p>
                        <p className="text-[18px] font-black leading-7 text-[#4D4D4D]">{'\u20B9'}25,000</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => navigate('/send-enquiry', { state: { routeTitle: route.title } })}
                        className="flex h-9 min-w-[124px] shrink-0 items-center justify-center whitespace-nowrap rounded-[12px] bg-[#748E36] px-4 text-[14px] font-bold leading-5 text-[#F1F5F9] hover:bg-[#647b2f]"
                      >
                        View Buses
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {canLoadMore && (
              <div className="flex justify-center pt-3.5">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + 8)}
                  className="flex h-[50px] w-[210.39px] items-center justify-center rounded-[24px] border border-[#4D4D4D] bg-transparent px-8 text-center text-[16px] font-bold leading-6 text-[#4D4D4D] hover:border-[#748E36] hover:bg-white hover:text-[#748E36]"
                >
                  Load More Results
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="flex min-h-[598px] items-center justify-center bg-white px-4 pb-[38px] pt-16 md:px-20">
          <div className="flex w-full max-w-280 flex-col items-center gap-8 text-center text-[#4D4D4D]">
            <h2 className="m-0 flex w-full max-w-[1096px] items-center justify-center text-center text-[24px] font-black leading-[1.18] capitalize text-[#4D4D4D] md:h-[105px] md:text-[32px] md:leading-[35px]">
              {premiumDescriptionTitle}
            </h2>
            <p className="m-0 flex w-full max-w-280 items-center justify-center text-center text-[18px] font-medium leading-9 text-[#4D4D4D] md:h-[384px] md:text-[24px] md:leading-[48px]">
              {premiumDescription}
            </p>
          </div>
        </section>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
