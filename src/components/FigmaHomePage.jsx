import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FigmaNavbar from './figma/FigmaNavbar'
import EnquiryFooter from './EnquiryFooter'
import HeroBookingSection from './home/HeroBookingSection'
import TrustPointsSection from './home/TrustPointsSection'
import PremiumServicesSection from './home/PremiumServicesSection'
import PopularDestinationsSection from './home/PopularDestinationsSection'
import DealsSection from './home/DealsSection'
import TrustedBusSection from './home/TrustedBusSection'
import HomeRelatedBusesSection from './home/HomeRelatedBusesSection'
import HomeRentBusIntroSection from './home/HomeRentBusIntroSection'
import HomeWhyChooseSection from './home/HomeWhyChooseSection'
import HomeTravelerStoriesSection from './home/HomeTravelerStoriesSection'
import HomeContactSection from './home/HomeContactSection'
import HomeAppPromotionSection from './home/HomeAppPromotionSection'
import HomeFaqSection from './home/HomeFaqSection'
import QuickTravelLinks from './QuickTravelLinks'
import FloatingCTA from './ui/FloatingCTA'
import { scrollToSectionById } from '../utils/scrollToHash'

export default function FigmaHomePage() {
  const location = useLocation()

  useLayoutEffect(() => {
    const raw = location.hash?.replace(/^#/, '')
    if (!raw) return undefined
    const scrollOnce = () => scrollToSectionById(raw)
    scrollOnce()
    const timer = window.setTimeout(scrollOnce, 160)
    return () => window.clearTimeout(timer)
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-[#ececec] text-[#1a1c22]">
      <FigmaNavbar />

      <main>
        {/* 1. Hero + Booking Panel */}
        <HeroBookingSection />

        {/* 2. Trust Points strip (dark) */}
        <TrustPointsSection />

        {/* 3. Exclusive Deals */}
        <DealsSection />

        {/* 4. Premium Services (Bus Tickets / Group / Car / Traveller) */}
        <PremiumServicesSection />

        {/* 5. Trusted Bus Section (About + Trust list) */}
        <TrustedBusSection />

        {/* 6. Popular Destinations - Traveller Tour (from Figma) */}
        <PopularDestinationsSection />

        {/* 7. Luxury Bus Rental / AC Bus Rental cards */}
        <HomeRelatedBusesSection />

        {/* 8. Rent Bus with ANT */}
        <HomeRentBusIntroSection />

        {/* 9. Why Choose ANT */}
        <HomeWhyChooseSection />

        {/* 10. Traveller Stories + Stats */}
        <HomeTravelerStoriesSection />

        {/* 11. Contact Section (dark) */}
        <HomeContactSection />

        {/* App Promotion Section */}
        <HomeAppPromotionSection />

        {/* 12. FAQ */}
        <HomeFaqSection />

        {/* 13. Quick Travel Links */}
        <QuickTravelLinks />
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
