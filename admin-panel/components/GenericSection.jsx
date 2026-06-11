import React from 'react'
import { LuCalendar, LuDownload } from 'react-icons/lu'
import SectionTable from './SectionTable'
import { DEFAULT_DATE_LABEL } from '../config/adminConfig'

function SectionStatCard({ card }) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-[#e4eaf2] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <p className="text-[11px] font-bold uppercase tracking-[0.09em] text-[#7a8496]">{card.title}</p>
      <h3 className="text-[36px] font-bold leading-none text-[#0f5f49]">{card.value}</h3>
      <p className="text-[12.5px] text-[#7a8496]">{card.hint}</p>
    </article>
  )
}

export default function GenericSection({ section }) {
  return (
    <>
      {/* Page header */}
      <section className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-[clamp(24px,3vw,40px)] font-bold leading-tight text-[#1a2432]">
            {section.title}
          </h1>
          <p className="mt-1.5 text-[13.5px] text-[#7a8496]">{section.description}</p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#dde2ea] bg-white px-4 text-[13px] font-semibold text-[#2d3a4a] shadow-sm hover:bg-[#f5f7fa]"
        >
          <LuCalendar className="h-4 w-4 text-[#6b8e23]" />
          {DEFAULT_DATE_LABEL}
        </button>
      </section>

      {/* Stat cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((card) => (
          <SectionStatCard key={card.title} card={card} />
        ))}
      </section>

      {/* Table */}
      <section className="overflow-hidden rounded-2xl border border-[#e4eaf2] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <header className="flex flex-col items-start justify-between gap-3 border-b border-[#e4eaf2] px-5 py-4 sm:flex-row sm:items-center">
          <h2 className="text-[18px] font-bold text-[#0f5f49]">Section Activity</h2>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-[#dde2ea] bg-[#f5f7fa] px-3 text-[12px] font-semibold text-[#5a6475] hover:bg-[#eef4df] hover:text-[#4a6b1b]"
          >
            <LuDownload className="h-3.5 w-3.5" />
            Export
          </button>
        </header>

        <SectionTable columns={section.table.columns} rows={section.table.rows} />
      </section>
    </>
  )
}
