"use client"

import { useState } from "react"
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronDown, ChevronRight } from "lucide-react"
import {
  CAPITAL_MUERTO, CAPITAL_MUERTO_TITULAR, CAPITAL_MUERTO_BAJADA, CAPITAL_MUERTO_VIGILANCIA,
} from "@/lib/data/inventario"

type SortKey = "pares" | "rotacion"
type SortDir = "asc" | "desc"

const VISIBLE = 10

const fmtRot = (n: number) => `${n.toFixed(2).replace(".", ",")}×`

function SortBtn({
  active, dir, onClick, children,
}: { active: boolean; dir: SortDir; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-0.5 ml-auto text-[11px] font-semibold uppercase tracking-wide select-none hover:text-foreground transition-colors ${active ? "text-foreground" : "text-gray-500"}`}
    >
      {children}
      {active
        ? dir === "asc"
          ? <ArrowUp size={11} style={{ color: "#8B5CF6" }} />
          : <ArrowDown size={11} style={{ color: "#8B5CF6" }} />
        : <ArrowUpDown size={11} className="opacity-30" />
      }
    </button>
  )
}

export function CapitalMuerto() {
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({ key: "pares", dir: "desc" })
  const [showVigilancia, setShowVigilancia] = useState(false)
  const [showAll, setShowAll] = useState(false)

  function toggle(key: SortKey) {
    setSort(prev => prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" })
  }

  const sorted = [...CAPITAL_MUERTO].sort((a, b) => {
    const m = sort.dir === "asc" ? 1 : -1
    return m * (a[sort.key] - b[sort.key])
  })

  const visibleRows  = showAll ? sorted : sorted.slice(0, VISIBLE)
  const hiddenCount   = sorted.length - VISIBLE

  return (
    <div className="space-y-3">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Capital muerto
        </p>
        <h3 className="text-base font-bold text-gray-900">{CAPITAL_MUERTO_TITULAR}</h3>
      </div>

      <div className="overflow-x-auto rounded-md border border-gray-100">
        <table className="w-full text-xs min-w-[420px]">
          <thead className="bg-gray-50/60 border-b border-gray-100">
            <tr>
              <th className="text-left  px-3 py-2.5 font-semibold text-gray-500">Modelo</th>
              <th className="text-right px-3 py-2.5">
                <SortBtn active={sort.key === "pares"} dir={sort.dir} onClick={() => toggle("pares")}>
                  Pares 31 ago
                </SortBtn>
              </th>
              <th className="text-right px-3 py-2.5 font-semibold text-gray-500 whitespace-nowrap">Vendidos ago</th>
              <th className="text-right px-3 py-2.5">
                <SortBtn active={sort.key === "rotacion"} dir={sort.dir} onClick={() => toggle("rotacion")}>
                  Rotación
                </SortBtn>
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map(row => (
              <tr key={row.modelo} className={`border-t border-gray-50 ${row.cero ? "bg-red-50/50" : ""}`}>
                <td className={`px-3 py-2.5 font-semibold whitespace-nowrap ${row.cero ? "text-red-700" : "text-gray-800"}`}>
                  {row.modelo}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums font-medium text-gray-700">{row.pares}</td>
                <td className={`px-3 py-2.5 text-right tabular-nums ${row.cero ? "font-bold text-red-700" : "text-gray-500"}`}>
                  {row.vendidos}
                </td>
                <td className={`px-3 py-2.5 text-right tabular-nums ${row.cero ? "font-bold text-red-700" : "text-gray-500"}`}>
                  {fmtRot(row.rotacion)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(v => !v)}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold text-gray-400 hover:text-gray-600 transition-colors border-t border-gray-100"
          >
            {showAll ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            {showAll ? "Mostrar menos" : `Ver los otros ${hiddenCount} modelos`}
          </button>
        )}
      </div>

      {/* En vigilancia — colapsable */}
      <div className="rounded-md border border-gray-100">
        <button
          onClick={() => setShowVigilancia(v => !v)}
          className="w-full flex items-center justify-between px-3 py-2 text-[11px] font-semibold text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            {showVigilancia ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            En vigilancia ({CAPITAL_MUERTO_VIGILANCIA.length})
          </span>
          <span className="font-normal">4–7 pares vendidos · no crítico aún</span>
        </button>
        {showVigilancia && (
          <table className="w-full text-xs border-t border-gray-50">
            <tbody>
              {CAPITAL_MUERTO_VIGILANCIA.map(row => (
                <tr key={row.modelo} className="border-t border-gray-50 text-gray-400">
                  <td className="px-3 py-2 whitespace-nowrap">{row.modelo}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{row.pares} pares</td>
                  <td className="px-3 py-2 text-right tabular-nums">{row.vendidos} vendidos</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{CAPITAL_MUERTO_BAJADA}</p>
    </div>
  )
}
