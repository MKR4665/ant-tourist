import React from 'react'
import {
  LuBus,
  LuCar,
  LuClipboardCheck,
  LuFileText,
  LuGauge,
  LuKey,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuLogOut,
  LuNetwork,
  LuRoute,
  LuSlidersHorizontal,
  LuTicket,
  LuTriangleAlert,
  LuUserRound,
  LuUsers,
  LuX,
} from 'react-icons/lu'

const NAV_GROUPS = [
  {
    label: 'Main',
    items: [
      { id: 'dashboard',     label: 'Dashboard',          icon: LuLayoutDashboard },
      { id: 'admin-control', label: 'Admin Control',       icon: LuKey },
      { id: 'admin-alerts',  label: 'Admin Alerts',        icon: LuTriangleAlert },
      { id: 'user-dashboard',label: 'User Dashboard',      icon: LuGauge },
    ],
  },
  {
    label: 'Management',
    items: [
      { id: 'employees',   label: 'Manage Employee',   icon: LuUsers },
      { id: 'master',      label: 'Master',             icon: LuClipboardCheck },
      { id: 'vehicles',    label: 'Manage Vehicles',    icon: LuBus },
      { id: 'operator',    label: 'Operator',           icon: LuRoute },
    ],
  },
  {
    label: 'Services',
    items: [
      { id: 'bus-hire',    label: 'Bus Hire',           icon: LuBus },
      { id: 'bus-tour',    label: 'Bus Tour',            icon: LuBus },
      { id: 'bus-car',     label: 'Bus Car',             icon: LuCar },
      { id: 'bus-ticket',  label: 'Bus Ticket',          icon: LuTicket },
      { id: 'operations',  label: 'Operation & Booking', icon: LuSlidersHorizontal },
      { id: 'account',     label: 'Account',             icon: LuNetwork },
      { id: 'pages',       label: 'Pages',               icon: LuFileText },
      { id: 'rent-traveller', label: 'Rent Traveller',   icon: LuUserRound },
    ],
  },
]

function NavItem({ item, active, onClick }) {
  const Icon = item.icon
  return (
    <button
      type="button"
      onClick={() => onClick(item.id)}
      aria-pressed={active}
      className={`flex h-[42px] w-full items-center gap-3 rounded-xl px-3 text-left text-[13.5px] font-semibold transition-all ${
        active
          ? 'bg-[#6b8e23] text-white shadow-[0_4px_12px_rgba(107,142,35,0.35)]'
          : 'text-[#5c6b7a] hover:bg-[#f0f4e8] hover:text-[#4a6b1b]'
      }`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-white' : 'text-[#7a9040]'}`} />
      <span>{item.label}</span>
    </button>
  )
}

function SidebarContent({ activeNavId, onNavChange, logoImage, onCloseMobile }) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 pb-4 pt-5">
        <div>
          <img src={logoImage} alt="ANT Travels" className="h-auto w-[132px] object-contain" />
          <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6b8e23]">
            Admin Console
          </p>
        </div>
        {onCloseMobile && (
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg bg-[#f0f4f8] text-[#5c6b7a] xl:hidden"
            aria-label="Close navigation"
            onClick={onCloseMobile}
          >
            <LuX className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-[#e8edf2]" />

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Admin navigation">
        {NAV_GROUPS.map(group => (
          <div key={group.label} className="mb-2">
            <p className="mb-1 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#9aa4b2]">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map(item => (
                <NavItem
                  key={item.id}
                  item={item}
                  active={item.id === activeNavId}
                  onClick={(id) => {
                    onNavChange(id)
                    if (onCloseMobile) onCloseMobile()
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Divider */}
      <div className="mx-5 h-px bg-[#e8edf2]" />

      {/* Bottom utility */}
      <div className="space-y-0.5 px-3 py-3">
        <button
          type="button"
          className="flex h-[42px] w-full items-center gap-3 rounded-xl px-3 text-[13.5px] font-semibold text-[#5c6b7a] transition-colors hover:bg-[#f0f4e8] hover:text-[#4a6b1b]"
        >
          <LuLifeBuoy className="h-4 w-4 text-[#7a9040]" />
          Support
        </button>
        <button
          type="button"
          className="flex h-[42px] w-full items-center gap-3 rounded-xl px-3 text-[13.5px] font-semibold text-[#5c6b7a] transition-colors hover:bg-[#fde8e8] hover:text-[#b71c1c]"
        >
          <LuLogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default function AdminSidebar({
  navItems,
  activeNavId,
  onNavChange,
  logoImage,
  isMobileOpen,
  onMobileClose,
}) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden border-r border-[#e8edf2] bg-white xl:flex xl:min-h-screen xl:w-[260px] xl:flex-col xl:flex-shrink-0">
        <SidebarContent
          activeNavId={activeNavId}
          onNavChange={onNavChange}
          logoImage={logoImage}
        />
      </aside>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity xl:hidden ${
          isMobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMobileOpen}
        onClick={onMobileClose}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] max-w-[88vw] border-r border-[#e8edf2] bg-white shadow-[4px_0_32px_rgba(0,0,0,0.12)] transition-transform duration-200 xl:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isMobileOpen}
      >
        <SidebarContent
          activeNavId={activeNavId}
          onNavChange={onNavChange}
          logoImage={logoImage}
          onCloseMobile={onMobileClose}
        />
      </aside>
    </>
  )
}
