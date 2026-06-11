import React from 'react'

export default function SectionTable({ columns, rows, className = '' }) {
  return (
    <div className={`${className}`}>
      {/* Mobile cards */}
      <div className="grid gap-3 p-4 md:hidden">
        {rows.map((row, rowIndex) => (
          <article key={`mob-${rowIndex}`} className="rounded-xl border border-[#e4eaf2] bg-[#f9fbfc] p-4">
            <div className="grid gap-1.5">
              {columns.map((column, cellIndex) => (
                <p key={`mob-cell-${rowIndex}-${cellIndex}`} className="text-[12px] text-[#4b5f6e]">
                  <strong className="font-semibold text-[#1a2432]">{column}:</strong>{' '}
                  {row[cellIndex]}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden w-full overflow-x-auto md:block">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="bg-[#f3f6f9] px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.07em] text-[#5a6475]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`} className="border-b border-[#eef1f5] hover:bg-[#fafbfc] transition-colors">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}`}
                    className="px-5 py-3.5 text-[13px] text-[#2d3a4a]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
