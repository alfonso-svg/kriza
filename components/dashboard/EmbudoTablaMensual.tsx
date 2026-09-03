"use client"

import { EMBUDO_MENSUAL, type EmbudoMensualRow } from "@/lib/data/embudo"

const HIGHLIGHT_COLOR: Record<EmbudoMensualRow["highlight"], string> = {
  up:      "#16a34a",
  down:    "#dc2626",
  neutral: "#6b7280",
}

export function EmbudoTablaMensual() {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-100">
      <table className="w-full text-xs min-w-[560px]">
        <thead className="bg-gray-50/60 border-b border-gray-100">
          <tr>
            <th className="text-left  px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Métrica</th>
            <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Junio</th>
            <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Julio</th>
            <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Agosto</th>
            <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Ago vs Jul</th>
          </tr>
        </thead>
        <tbody>
          {EMBUDO_MENSUAL.map(row => (
            <tr key={row.metrica} className="border-t border-gray-50">
              <td className="px-3 py-2.5 font-medium text-gray-700 whitespace-nowrap">{row.metrica}</td>
              <td className="px-3 py-2.5 text-right text-gray-500 tabular-nums">{row.jun}</td>
              <td className="px-3 py-2.5 text-right text-gray-500 tabular-nums">{row.jul}</td>
              <td className="px-3 py-2.5 text-right font-semibold text-gray-700 tabular-nums">{row.ago}</td>
              <td
                className="px-3 py-2.5 text-right font-semibold tabular-nums"
                style={{ color: HIGHLIGHT_COLOR[row.highlight] }}
              >
                {row.vsJul}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
