import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import skylineImage from '../assets/bg-bottom.png'

const TRAVEL_GROUPS = [
  {
    category: 'Pilgrimage Tours',
    links: [
      'Delhi to Ayodhya Bus Rental',
      'Delhi to Varanasi Bus Rental',
      'Delhi to Prayagraj Bus Rental',
      'Delhi to Ujjain Bus Rental',
      'Delhi to Chitrakoot Bus Rental',
      'Delhi to Khatu Shyam Bus Rental',
      'Delhi to Salasar Balaji Bus Rental',
      'Delhi to Vaishno Devi Bus Rental',
    ],
  },
  {
    category: 'Hill Station Tours',
    links: [
      'Delhi to Manali Bus Rental',
      'Delhi to Shimla Bus Rental',
      'Delhi to Mussoorie Bus Rental',
      'Delhi to Nainital Bus Rental',
      'Delhi to Ranikhet Bus Rental',
      'Delhi to Jim Corbett Bus Rental',
      'Delhi to Dehradun Bus Rental',
      'Delhi to Srinagar Bus Rental',
    ],
  },
  {
    category: 'Rajasthan Tours',
    links: [
      'Delhi to Jaipur Bus Rental',
      'Delhi to Jodhpur Bus Rental',
      'Delhi to Udaipur Bus Rental',
      'Delhi to Jaisalmer Bus Rental',
      'Delhi to Bikaner Bus Rental',
      'Delhi to Ranikhet Bus Rental',
      'Delhi to Jim Corbett Bus Rental',
      'Delhi to Orchha Bus Rental',
    ],
  },
  {
    category: 'Corporate & Event Rentals',
    links: [
      'Bus Rental for Corporate Events',
      'Wedding Bus Rental Service',
      'School / College Trip Bus Hire',
      'Airport / Station Transfer',
      'Outstation Group Tours Bus Rental',
    ],
  },
]

function SectionHeader() {
  return (
    <>
      <p className="m-0 text-center text-[24px] leading-[28px] font-medium tracking-[0px] text-black uppercase max-[480px]:text-[18px]">
        QUICK TRAVEL LINKS
      </p>
      <h2 className="mx-0 mt-[10px] mb-0 text-center text-[48px] leading-[28px] font-bold tracking-[0px] text-[#748E36] max-[768px]:text-[36px] max-[768px]:leading-[1.2] max-[480px]:text-[28px]">
        Explore Destination
      </h2>
    </>
  )
}

function CategoryPill({ category, active = false, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex min-h-[36px] w-auto items-center justify-center whitespace-normal rounded-[30px] border border-[#748E36] px-[16px] py-[8px] text-center text-[16px] leading-tight font-medium text-black max-[768px]:text-[14px] max-[480px]:w-full ${
        active ? 'bg-[#748E36] text-white' : 'bg-transparent'
      }`}
      aria-pressed={active}
    >
      {category}
    </button>
  )
}

function DestinationLink({ label }) {
  return (
    <Link
      to="/send-enquiry"
      className="flex items-start gap-[12px] text-[16px] leading-[24px] font-medium text-[#4D4D4D] no-underline transition-colors duration-200 ease-in hover:text-[#748E36]"
    >
      <span className="mt-[10px] size-[5px] shrink-0 rounded-full bg-[#4D4D4D]" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  )
}

function DestinationColumn({ links }) {
  return (
    <div className="flex flex-col gap-[16px]">
      {links.map((link) => (
        <DestinationLink key={link} label={link} />
      ))}
    </div>
  )
}

export default function QuickTravelLinks() {
  const [activeCategory, setActiveCategory] = useState(TRAVEL_GROUPS[0].category)

  const activeGroup = useMemo(
    () => TRAVEL_GROUPS.find((g) => g.category === activeCategory) ?? TRAVEL_GROUPS[0],
    [activeCategory],
  )

  return (
    <section
      id="quick-travel-links"
      className="relative flex w-full flex-col items-center overflow-hidden bg-white px-0 pt-[80px] pb-0 max-[480px]:pt-[60px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-[20px] py-0 text-center max-[768px]:px-[16px]">
        <SectionHeader />

        <div className="mt-[40px] mb-[48px] grid grid-cols-4 gap-[25px] max-[1200px]:gap-[40px] max-[768px]:mt-[30px] max-[768px]:grid-cols-2 max-[768px]:gap-[20px] max-[480px]:mb-[34px] max-[480px]:grid-cols-1 max-[480px]:gap-[12px]">
          {TRAVEL_GROUPS.map((item) => (
            <CategoryPill
              key={item.category}
              category={item.category}
              active={item.category === activeCategory}
              onSelect={() => setActiveCategory(item.category)}
            />
          ))}
        </div>

        <div className="mb-[60px] hidden text-left max-[768px]:block max-[480px]:px-[20px]">
          <DestinationColumn links={activeGroup.links} />
        </div>

        <div className="mb-[60px] grid grid-cols-4 gap-[25px] text-left max-[1024px]:grid-cols-2 max-[1024px]:px-[40px] max-[768px]:hidden max-[480px]:grid-cols-1 max-[480px]:px-[20px]">
          {TRAVEL_GROUPS.map((group) => (
            <DestinationColumn key={group.category} links={group.links} />
          ))}
        </div>
      </div>

      <div className="relative bottom-0 left-0 z-[1] mt-[40px] w-full leading-[0]">
        <img src={skylineImage} alt="City skyline" className="block h-auto max-h-[240px] w-full object-cover opacity-100" />
      </div>
    </section>
  )
}
