"use client"

import { EMBUDO_QUIEBRE } from "@/lib/data/embudo"

export function EmbudoTablaQuiebre() {
  return (
    <div className="overflow-x-auto rounded-lg border-2 border-red-100">
      <table className="w-full text-sm min-w-[600px]">
        <thead className="bg-red-50/60 border-b border-red-100">
          <tr>
            <th className="text-left  px-4 py-3 font-semibold text-gray-600">Paso del embudo</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Junio</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Julio</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Agosto</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Septiembre</th>
            <th className="text-right px-4 py-3 font-semibold text-gray-600">Estado</th>
          </tr>
        </thead>
        <tbody>
          {EMBUDO_QUIEBRE.map(row => {
            const alert = row.tone === "alert"
            return (
              <tr key={row.paso} className={alert ? "bg-red-50" : "border-t border-gray-50"}>
                <td className={`px-4 py-3 ${alert ? "font-bold text-red-700" : "font-medium text-gray-700"}`}>
                  {row.paso}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${alert ? "font-bold text-red-700" : "text-gray-500"}`}>
                  {row.jun}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${alert ? "font-bold text-red-700" : "text-gray-500"}`}>
                  {row.jul}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${alert ? "font-bold text-red-700" : "text-gray-500"}`}>
                  {row.ago}
                </td>
                <td className={`px-4 py-3 text-right tabular-nums ${alert ? "text-base font-extrabold text-red-700" : "font-medium text-gray-700"}`}>
                  {row.sep}
                </td>
                <td className="px-4 py-3 text-right">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={alert ? { color: "#dc2626", backgroundColor: "#fee2e2" } : { color: "#6b7280", backgroundColor: "#f3f4f6" }}
                  >
                    {alert && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#dc2626" }} />}
                    {row.estado}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
