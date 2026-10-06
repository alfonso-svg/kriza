"use client"

import { REPOSICION, REPOSICION_BAJADA } from "@/lib/data/inventario"

const fmtRot = (n: number) => `${n.toFixed(2).replace(".", ",")}×`

export function Reposicion() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Qué reponer
        </p>
        <h3 className="text-base font-bold text-gray-900">Lo que se agotó rápido</h3>
      </div>

      <div className="overflow-x-auto rounded-md border border-gray-100">
        <table className="w-full text-xs min-w-[560px]">
          <thead className="bg-gray-50/60 border-b border-gray-100">
            <tr>
              <th className="text-left  px-3 py-2.5 font-semibold text-gray-500">#</th>
              <th className="text-left  px-3 py-2.5 font-semibold text-gray-500">Modelo</th>
              <th className="text-right px-3 py-2.5 font-semibold text-gray-500">Rotación</th>
              <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Stock 1 sep</th>
              <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Stock 30 sep</th>
              <th className="text-left  px-3 py-2.5 font-semibold text-gray-500">Situación</th>
            </tr>
          </thead>
          <tbody>
            {REPOSICION.map((row, i) => (
              <tr key={row.modelo} className="border-t border-gray-50">
                <td className="px-3 py-2.5 text-gray-400">{i + 1}</td>
                <td className="px-3 py-2.5 font-semibold text-gray-800 whitespace-nowrap">{row.modelo}</td>
                <td className="px-3 py-2.5 text-right">
                  <span className="font-bold tabular-nums" style={{ color: "#8B5CF6" }}>{fmtRot(row.rotacion)}</span>
                </td>
                <td className="px-3 py-2.5 text-right text-gray-500 tabular-nums">{row.stockInicio}</td>
                <td
                  className="px-3 py-2.5 text-right tabular-nums font-medium"
                  style={{ color: row.stockFin === 0 ? "#dc2626" : "#374151" }}
                >
                  {row.stockFin}
                </td>
                <td className="px-3 py-2.5">
                  {row.critico ? (
                    <span
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
                      style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#dc2626" }} />
                      {row.situacion}
                    </span>
                  ) : row.alerta ? (
                    <span
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
                      style={{ color: "#d97706", backgroundColor: "#fef3c7" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#d97706" }} />
                      {row.situacion}
                    </span>
                  ) : (
                    <span className="text-[11px] text-gray-500">{row.situacion}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{REPOSICION_BAJADA}</p>
    </div>
  )
}
