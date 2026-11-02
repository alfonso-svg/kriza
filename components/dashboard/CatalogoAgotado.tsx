"use client"

import { CATALOGO_AGOTADO, CATALOGO_AGOTADO_TITULAR, CATALOGO_AGOTADO_BAJADA } from "@/lib/data/inventario"

const fmtNum = (n: number) => new Intl.NumberFormat("es-ES").format(n)

export function CatalogoAgotado() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Catálogo agotado
        </p>
        <h3 className="text-base font-bold text-gray-900">{CATALOGO_AGOTADO_TITULAR}</h3>
      </div>

      <div className="overflow-x-auto rounded-md border border-gray-100">
        <table className="w-full text-xs min-w-[480px]">
          <thead className="bg-gray-50/60 border-b border-gray-100">
            <tr>
              <th className="text-left  px-3 py-2.5 font-semibold text-gray-500">Fecha</th>
              <th className="text-right px-3 py-2.5 font-semibold text-gray-500">Bloqueados</th>
              <th className="text-left  px-3 py-2.5 font-semibold text-gray-500 w-1/2">% del catálogo</th>
            </tr>
          </thead>
          <tbody>
            {CATALOGO_AGOTADO.map(row => {
              const pct   = row.bloqueados / row.total
              const color = row.actual ? "#dc2626" : "#8B5CF6"
              return (
                <tr key={row.fecha} className={row.actual ? "bg-red-50" : "border-t border-gray-50"}>
                  <td className={`px-3 py-2.5 whitespace-nowrap ${row.actual ? "font-bold text-red-700" : "font-semibold text-gray-800"}`}>
                    {row.actual ? `Hoy · ${row.fecha}` : row.fecha}
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-gray-600 whitespace-nowrap">
                    {fmtNum(row.bloqueados)} de {fmtNum(row.total)}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct * 100}%`, backgroundColor: color }} />
                      </div>
                      <span className="w-10 text-right font-bold tabular-nums" style={{ color }}>
                        {Math.round(pct * 100)}%
                      </span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{CATALOGO_AGOTADO_BAJADA}</p>
    </div>
  )
}
