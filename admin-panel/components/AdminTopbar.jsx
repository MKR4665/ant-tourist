import React from 'react'
import { LuBell, LuMenu, LuMoon, LuSearch, LuSettings, LuX } from 'react-icons/lu'

export default function AdminTopbar({ activeNavLabel, isMobileNavOpen, onToggleMobileNav }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e8edf2] bg-white/95 backdrop-blur-sm">
      <div className="flex h-[64px] items-center gap-3 px-4 xl:px-6">
        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#dde2ea] bg-[#f5f7fa] text-[#5c6b7a] xl:hidden"
          aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileNavOpen}
          onClick={onToggleMobileNav}
        >
          {isMobileNavOpen ? <LuX className="h-4 w-4" /> : <LuMenu className="h-4 w-4" />}
        </button>

        {/* Search bar */}
        <label className="flex h-10 flex-1 max-w-[500px] items-center gap-2.5 rounded-xl border border-[#e0e7f0] bg-[#f5f7fa] px-3.5 cursor-text">
          <LuSearch className="h-4 w-4 shrink-0 text-[#9aa4b2]" />
          <input
            type="text"
            placeholder="Search reservations, fleets, or drivers..."
            className="w-full min-w-0 border-0 bg-transparent text-[13.5px] text-[#1a2432] placeholder:text-[#9aa4b2] focus:outline-none"
          />
        </label>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative grid h-9 w-9 place-items-center rounded-xl border border-[#e0e7f0] bg-[#f5f7fa] text-[#5c6b7a] hover:bg-[#eef4df] hover:text-[#6b8e23] transition-colors"
          >
            <LuBell className="h-4 w-4" />
            {/* Badge */}
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#e53935]" />
          </button>

          {/* Theme */}
          <button
            type="button"
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[#e0e7f0] bg-[#f5f7fa] text-[#5c6b7a] hover:bg-[#eef4df] hover:text-[#6b8e23] transition-colors"
          >
            <LuMoon className="h-4 w-4" />
          </button>

          {/* Settings */}
          <button
            type="button"
            aria-label="Settings"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[#e0e7f0] bg-[#f5f7fa] text-[#5c6b7a] hover:bg-[#eef4df] hover:text-[#6b8e23] transition-colors"
          >
            <LuSettings className="h-4 w-4" />
          </button>

          {/* Vertical divider */}
          <div className="mx-1 h-7 w-px bg-[#e0e7f0]" />

          {/* User profile */}
          <button
            type="button"
            className="flex items-center gap-2.5 rounded-xl border border-[#e0e7f0] bg-[#f5f7fa] px-3 py-1.5 transition-colors hover:bg-[#eef4df]"
          >
            {/* Avatar */}
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#6b8e23] to-[#3d5514] text-[12px] font-bold text-white shadow-sm">
              AU
            </span>
            <div className="hidden text-left sm:block">
              <p className="text-[13px] font-bold leading-none text-[#1a2432]">Admin User</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.07em] text-[#7a8496]">
                Profile Settings
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
