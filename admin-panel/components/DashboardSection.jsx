import React from 'react'
import {
  LuArrowUpRight,
  LuBus,
  LuCalendar,
  LuCar,
  LuEllipsisVertical,
  LuFileText,
  LuKey,
  LuTicket,
  LuTrendingUp,
  LuWrench,
} from 'react-icons/lu'
import {
  BALANCE_ROWS,
  DASHBOARD_DESCRIPTION,
  DASHBOARD_EXPENSE,
  DASHBOARD_INCOME,
  DASHBOARD_TITLE,
  DEFAULT_DATE_LABEL,
  STATUS_TONE,
  TRANSACTION_TABLE_ACTION,
  TRANSACTION_TABLE_TITLE,
} from '../config/adminConfig'

/* ─── Color palette (matches Figma fills exactly) ─── */
const CARD_ICON_BG = {
  olive:  { wrap: '#eef4db', icon: '#6b8e23' },
  blue:   { wrap: '#ddeeff', icon: '#2563eb' },
  amber:  { wrap: '#fff3d6', icon: '#d97706' },
  red:    { wrap: '#ffe4e4', icon: '#dc2626' },
}

const STATUS_STYLE = {
  Booked:   { bg: '#e6f4e1', text: '#2e7d32', dot: '#4caf50' },
  Pending:  { bg: '#fff8e1', text: '#856404', dot: '#ffc107' },
  Finished: { bg: '#e3f0ff', text: '#1565c0', dot: '#2196f3' },
  Failed:   { bg: '#fde8e8', text: '#b71c1c', dot: '#f44336' },
}

/* ─── KPI Cards ─── */
const KPI_CARDS = [
  { id: 'total-bookings',   label: 'Total Bookings',        value: '1,284', tag: '+12%',  tagColor: '#e6f4e1', tagText: '#2e7d32', icon: LuTicket,   tone: 'olive'  },
  { id: 'active-booking',   label: 'Active Booking',        value: '42',    tag: 'Active', tagColor: '#e6f4e1', tagText: '#2e7d32', icon: LuKey,     tone: 'blue'   },
  { id: 'today-departure',  label: 'Today Departure',       value: '18',    tag: 'Active', tagColor: '#fff3d6', tagText: '#d97706', icon: LuBus,     tone: 'amber', note: 'Out of 230 total units' },
  { id: 'today-arrival',    label: 'Today Arrival',         value: '18',    tag: 'Active', tagColor: '#fff3d6', tagText: '#d97706', icon: LuBus,     tone: 'amber', note: 'Out of 230 total units' },
  { id: 'total-vehicle',    label: 'Total Vehicle',         value: '50',    leftHint: 'Active - 50', leftColor: '#2e7d32', rightHint: 'Deactive - 10', rightColor: '#b71c1c', icon: LuBus, tone: 'olive' },
  { id: 'vehicle-doc',      label: 'Vehicle Document',      value: '42',    leftHint: 'Expiring This Month', leftColor: '#b71c1c', icon: LuFileText, tone: 'blue' },
  { id: 'upcoming-service', label: 'Upcoming Vehicle Service', value: '18', icon: LuCar, tone: 'amber' },
  { id: 'maintenance',      label: 'Today Maintenance',     value: '₹18000', leftHint: 'Today ₹3000', leftColor: '#b71c1c', icon: LuWrench, tone: 'red' },
]

function KpiCard({ card }) {
  const Icon = card.icon
  const palette = CARD_ICON_BG[card.tone] || CARD_ICON_BG.olive

  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
      {/* Top row: icon + tag */}
      <div className="flex items-start justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl"
          style={{ background: palette.wrap }}
        >
          <Icon className="h-5 w-5" style={{ color: palette.icon }} />
        </span>
        {card.tag && (
          <span
            className="rounded-md px-2 py-0.5 text-[11px] font-semibold"
            style={{ background: card.tagColor, color: card.tagText }}
          >
            {card.tag}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#7a8496]">{card.label}</p>

      {/* Value */}
      <h3 className="text-[34px] font-bold leading-none text-[#0f5f49]">{card.value}</h3>

      {/* Hints / note */}
      {card.note ? (
        <p className="text-[12px] text-[#9aa4b2]">{card.note}</p>
      ) : card.leftHint ? (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold uppercase">
          {card.leftHint && <span style={{ color: card.leftColor }}>{card.leftHint}</span>}
          {card.rightHint && <span style={{ color: card.rightColor }}>{card.rightHint}</span>}
        </div>
      ) : null}
    </article>
  )
}

/* ─── Balance Sheet (Monthly) Chart — original style ─── */
function RevenueChart() {
  const maxTotal = Math.max(...BALANCE_ROWS.map((row) => row.credit + row.debit), 1)
  const horizontalGrid = [25, 50, 75]
  const verticalGrid   = [20, 40, 60, 80]

  return (
    <section className="overflow-hidden rounded-[28px] border border-[#dfe4ea] bg-white p-5 shadow-[0_14px_30px_rgba(23,30,42,0.06)] md:p-7">
      {/* Header */}
      <header className="flex flex-wrap items-center gap-6 pb-5">
        <h2 className="text-[28px] font-bold leading-none text-[#1a2432] md:text-[34px]">
          Balance Sheet (Monthly)
        </h2>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#ff8100]">
            <i className="h-6 w-6 rounded-[3px] bg-[#ff8100]" />
            Credit
          </span>
          <span className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#769236]">
            <i className="h-6 w-6 rounded-[3px] bg-[#769236]" />
            Debit
          </span>
        </div>
      </header>

      {/* Chart area */}
      <div className="overflow-x-auto">
        <div className="relative min-w-[1100px] pb-3 pt-6">
          {/* Dashed grid lines */}
          <div className="pointer-events-none absolute bottom-16 left-10 right-3 top-8">
            {horizontalGrid.map((step) => (
              <span
                key={`h-${step}`}
                className="absolute left-0 right-0 border-t border-dashed border-[#c7cbd1]"
                style={{ bottom: `${step}%` }}
              />
            ))}
            {verticalGrid.map((step) => (
              <span
                key={`v-${step}`}
                className="absolute bottom-0 top-0 border-l border-dashed border-[#d2d5da]"
                style={{ left: `${step}%` }}
              />
            ))}
          </div>

          {/* Y-axis line */}
          <div className="pointer-events-none absolute bottom-16 left-10 top-8 w-px bg-[#a5aab1]" />
          {/* X-axis line */}
          <div className="pointer-events-none absolute bottom-16 left-10 right-3 h-px bg-[#a5aab1]" />

          {/* Bars */}
          <div className="relative flex items-end gap-4 pb-2 pl-14 pr-4 pt-10">
            {BALANCE_ROWS.map((row) => {
              const debitH  = Math.max((row.debit  / maxTotal) * 280, 16)
              const creditH = Math.max((row.credit / maxTotal) * 280, 16)
              return (
                <article key={row.month} className="flex w-[76px] flex-col items-center">
                  {/* Values above bar */}
                  <div className="mb-2 space-y-0.5 text-[10px] font-semibold leading-tight text-[#101217]">
                    <p>Credit = {row.credit.toLocaleString('en-IN')}</p>
                    <p>Debit = {row.debit.toLocaleString('en-IN')}</p>
                  </div>

                  {/* Stacked bar: debit (green) bottom, credit (orange) top */}
                  <div className="flex w-[60px] flex-col overflow-hidden rounded-t-[3px]">
                    <span className="block bg-[#769236]" style={{ height: `${debitH}px` }} />
                    <span className="block bg-[#ff8100]" style={{ height: `${creditH}px` }} />
                  </div>

                  {/* Month label */}
                  <p className="mt-3 text-[12px] font-bold leading-none text-[#171b20]">{row.month}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Recent Transactions Table ─── */

/* Status config — exact Figma colors */
const STATUS_CFG = {
  Booked:   { dot: '#22c55e', text: '#16a34a', weight: 'font-semibold' },
  Pending:  { dot: '#f97316', text: '#ea580c', weight: 'font-semibold' },
  Finished: { dot: '#94a3b8', text: '#64748b', weight: 'font-normal'   },
  Failed:   { dot: '#ef4444', text: '#dc2626', weight: 'font-semibold' },
}

function StatusCell({ status }) {
  const cfg = STATUS_CFG[status] || { dot: '#94a3b8', text: '#64748b', weight: 'font-normal' }
  return (
    <span className={`inline-flex items-center gap-2 text-[13px] ${cfg.weight}`} style={{ color: cfg.text }}>
      <i className="h-[9px] w-[9px] shrink-0 rounded-full" style={{ background: cfg.dot }} />
      {status}
    </span>
  )
}

function TransactionsTable({ rows }) {
  return (
    <section className="overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
      {/* Card header */}
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-[22px] font-bold text-[#0f5f49]">{TRANSACTION_TABLE_TITLE}</h2>
        <button type="button" className="text-[14px] font-bold text-[#16a34a] hover:underline">
          {TRANSACTION_TABLE_ACTION}
        </button>
      </div>

      {/* Mobile cards */}
      <div className="grid gap-3 p-4 md:hidden">
        {rows.map((row, i) => (
          <article key={`mob-${i}`} className="rounded-xl border border-[#e8edf2] bg-[#f9fbf6] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[13px] font-semibold text-[#1a2432]">{row.customer}</p>
                <p className="text-[11px] text-[#7a8496]">{row.email}</p>
              </div>
              <StatusCell status={row.status} />
            </div>
            <div className="mt-3 grid gap-1 text-[12px] text-[#4b5f6e]">
              <p><strong className="font-semibold">Service:</strong> {row.service}</p>
              <p><strong className="font-semibold">Txn ID:</strong> {row.transactionId}</p>
              <p className="text-[#94a3b8]">{row.timestamp}</p>
              <p><strong className="font-semibold">Amount:</strong> {row.amount}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#f1f5f9]">
              {['CUSTOMER', 'SERVICE', 'TRANSACTION ID', 'STATUS', 'AMOUNT', 'ACTION'].map(col => (
                <th
                  key={col}
                  className="bg-[#f8fafb] px-6 py-3.5 text-left text-[11px] font-bold tracking-[0.08em] text-[#94a3b8]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`desk-${i}`}
                className="border-b border-[#f1f5f9] transition-colors hover:bg-[#fafbfc]"
              >
                {/* Customer — name + email, no avatar */}
                <td className="px-6 py-4">
                  <p className="text-[13px] font-semibold text-[#1a2432]">{row.customer}</p>
                  <p className="mt-0.5 text-[11px] text-[#94a3b8]">{row.email}</p>
                </td>

                {/* Service */}
                <td className="px-6 py-4 text-[13px] text-[#334155]">{row.service}</td>

                {/* Transaction ID + date */}
                <td className="px-6 py-4">
                  <p className="text-[13px] text-[#334155]">{row.transactionId}</p>
                  <p className="mt-0.5 text-[11px] text-[#94a3b8]">{row.timestamp}</p>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <StatusCell status={row.status} />
                </td>

                {/* Amount */}
                <td className="px-6 py-4 text-[13px] font-medium text-[#1a2432]">{row.amount}</td>

                {/* Action — 3-dot menu */}
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="grid h-8 w-8 place-items-center rounded-lg text-[#94a3b8] hover:bg-[#f1f5f9]"
                    aria-label="Row actions"
                  >
                    <LuEllipsisVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}


/* ─── Main Export ─── */
export default function DashboardSection({ transactions }) {
  return (
    <>
      {/* Page Header */}
      <section className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-tight text-[#1a2432]">
            {DASHBOARD_TITLE}
          </h1>
          <p className="mt-1.5 text-[14px] text-[#7a8496]">{DASHBOARD_DESCRIPTION}</p>
        </div>
        <button
          type="button"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#dde2ea] bg-white px-5 text-[14px] font-semibold text-[#2d3a4a] shadow-sm hover:bg-[#f5f7fa]"
        >
          <LuCalendar className="h-5 w-5 text-[#6b8e23]" />
          {DEFAULT_DATE_LABEL}
        </button>
      </section>

      {/* KPI Row 1 — Booking KPIs (first 4) */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KPI_CARDS.slice(0, 4).map(card => (
          <KpiCard key={card.id} card={card} />
        ))}
      </section>

      {/* Financial Summary Cards */}
      <section className="grid gap-4 lg:grid-cols-2">
        {/* Monthly Income — green gradient */}
        <article className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#6b8e23] via-[#5a7a1d] to-[#3a5213] p-7 text-white shadow-[0_8px_32px_rgba(107,142,35,0.35)]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/75">
            {DASHBOARD_INCOME.title}
          </p>
          <h2 className="mt-3 text-[clamp(36px,4vw,56px)] font-bold leading-none">
            {DASHBOARD_INCOME.amount}
          </h2>
          <div className="absolute right-6 top-6 text-white/20">
            <LuTrendingUp className="h-16 w-16" />
          </div>
          <hr className="my-5 border-white/20" />
          <div className="flex items-center justify-between gap-3">
            <span className="text-[15px] text-white/80">{DASHBOARD_INCOME.previous}</span>
            <strong className="inline-flex h-7 items-center rounded-full bg-white/20 px-3 text-[13px] font-semibold">
              {DASHBOARD_INCOME.growth}
            </strong>
          </div>
        </article>

        {/* Monthly Expenses — white card */}
        <article className="rounded-[28px] border border-[#eef1f5] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7a8496]">
            {DASHBOARD_EXPENSE.title}
          </p>
          <h2 className="mt-3 text-[clamp(36px,4vw,56px)] font-bold leading-none text-[#e53935]">
            {DASHBOARD_EXPENSE.amount}
          </h2>
          <div className="mt-6 grid grid-cols-2 divide-x divide-[#eef1f5]">
            <div className="pr-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa4b2]">
                {DASHBOARD_EXPENSE.creditLabel}
              </p>
              <strong className="mt-2 block text-[26px] font-bold text-[#2e7d32]">
                {DASHBOARD_EXPENSE.credit}
              </strong>
            </div>
            <div className="pl-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa4b2]">
                {DASHBOARD_EXPENSE.debitLabel}
              </p>
              <strong className="mt-2 block text-[26px] font-bold text-[#e53935]">
                {DASHBOARD_EXPENSE.debit}
              </strong>
            </div>
          </div>
        </article>
      </section>

      {/* KPI Row 2 — Vehicle/Operations KPIs (last 4) */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KPI_CARDS.slice(4).map(card => (
          <KpiCard key={card.id} card={card} />
        ))}
      </section>

      {/* Balance Sheet (Monthly) — Revenue vs Debit Chart */}
      <RevenueChart />

      {/* Recent Transactions */}
      <TransactionsTable rows={transactions} />
    </>
  )
}
