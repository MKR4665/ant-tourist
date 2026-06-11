import React, { useEffect, useMemo, useState } from 'react'
import logoImage from '../src/assets/Logo-green.png'
import AdminSidebar from './components/AdminSidebar'
import AdminTopbar from './components/AdminTopbar'
import AdminToolbar from './components/AdminToolbar'
import DashboardSection from './components/DashboardSection'
import GenericSection from './components/GenericSection'
import {
  DEFAULT_TRANSACTIONS,
  FOOTER_LINKS,
  NAV_ITEMS,
  SECTION_LIBRARY,
} from './config/adminConfig'
import { mapSavedEnquiryToTransaction } from './utils/adminFormatters'

function AdminFooter() {
  return (
    <footer className="mt-1 flex flex-col gap-2 border-t border-[#dce5ee] pt-4 text-[12px] text-[#8793a0] md:flex-row md:items-center md:justify-between">
      <p>\u00A9 2024 Ant Travels Administrator. All Rights Reserved.</p>
      <div className="flex flex-wrap items-center gap-3">
        {FOOTER_LINKS.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </div>
    </footer>
  )
}

export default function AdminPanelView({
  savedEnquiries = [],
  formatAdminDateTime,
  getRouteSummary,
  onGoToPublicForm,
  onClearAdminData,
}) {
  const [activeNavId, setActiveNavId] = useState('dashboard')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const activeNav = NAV_ITEMS.find((item) => item.id === activeNavId) || NAV_ITEMS[0]

  const transactions = useMemo(() => {
    if (!savedEnquiries.length) {
      return DEFAULT_TRANSACTIONS
    }

    return savedEnquiries
      .slice(0, 8)
      .map((enquiry, index) =>
        mapSavedEnquiryToTransaction({
          enquiry,
          index,
          formatAdminDateTime,
          getRouteSummary,
        })
      )
  }, [savedEnquiries, formatAdminDateTime, getRouteSummary])

  const selectedSection = SECTION_LIBRARY[activeNavId]

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (!isMobileNavOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileNavOpen])

  useEffect(() => {
    if (!isMobileNavOpen || typeof window === 'undefined') {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileNavOpen])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileNavOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f0f3f8] text-[#1a2432]">
      <div className="mx-auto min-h-screen max-w-[1920px] xl:flex">
        <AdminSidebar
          navItems={NAV_ITEMS}
          activeNavId={activeNavId}
          onNavChange={setActiveNavId}
          logoImage={logoImage}
          isMobileOpen={isMobileNavOpen}
          onMobileClose={() => setIsMobileNavOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <AdminTopbar
            activeNavLabel={activeNav.label}
            isMobileNavOpen={isMobileNavOpen}
            onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)}
          />

          <main className="flex flex-col gap-6 p-5 md:p-6 xl:p-8">
            {activeNavId === 'dashboard' ? (
              <DashboardSection transactions={transactions} />
            ) : (
              <>
                <AdminToolbar
                  activeNavLabel={activeNav.label}
                  onGoToPublicForm={onGoToPublicForm}
                  onClearAdminData={onClearAdminData}
                />
                <GenericSection section={selectedSection} />
              </>
            )}

            <AdminFooter />
          </main>
        </div>
      </div>
    </div>
  )
}
