import React from 'react'
import { LuArrowLeft, LuTrash2 } from 'react-icons/lu'

export default function AdminToolbar({ activeNavLabel, onGoToPublicForm, onClearAdminData }) {
  return (
    <section className="flex flex-col justify-between gap-4 rounded-2xl border border-[#e4eaf2] bg-white p-5 shadow-sm lg:flex-row lg:items-center">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-[#9aa4b2]">
          ANT Travels &rsaquo; {activeNavLabel}
        </p>
        <h2 className="mt-1.5 text-[22px] font-bold leading-none text-[#1a2432]">{activeNavLabel}</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#dde2ea] bg-[#f5f7fa] px-4 text-[13px] font-semibold text-[#2d3a4a] transition-colors hover:bg-[#eef4df] hover:text-[#4a6b1b]"
          onClick={onGoToPublicForm}
        >
          <LuArrowLeft className="h-4 w-4" />
          Open Public Form
        </button>
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#ffd0d0] bg-[#fff5f5] px-4 text-[13px] font-semibold text-[#b71c1c] transition-colors hover:bg-[#fde8e8]"
          onClick={onClearAdminData}
        >
          <LuTrash2 className="h-4 w-4" />
          Clear Enquiry Data
        </button>
      </div>
    </section>
  )
}
