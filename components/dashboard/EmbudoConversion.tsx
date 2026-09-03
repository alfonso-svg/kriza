"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmbudoTablaQuiebre } from "./EmbudoTablaQuiebre"
import { EmbudoTablaMensual } from "./EmbudoTablaMensual"
import { FunnelCompareChart } from "@/components/charts/FunnelCompareChart"
import { EMBUDO_TITULAR, EMBUDO_BAJADA, EMBUDO_NOTA_METODO, FUNNEL_COMPARADO } from "@/lib/data/embudo"

function StatTile({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg border border-red-100 bg-red-50/40 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      <p className="text-xl font-bold mt-0.5" style={{ color: "#dc2626" }}>{value}</p>
      <p className="text-[11px] text-gray-500 mt-0.5">{sub}</p>
    </div>
  )
}

export function EmbudoConversion() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-1 pt-4 px-5">
        <CardTitle className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Embudo de conversión · jun–ago 2026
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 pt-1 space-y-5">

        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-snug">{EMBUDO_TITULAR}</h3>
          <p className="mt-1.5 text-sm text-gray-600 leading-relaxed max-w-3xl">{EMBUDO_BAJADA}</p>
        </div>

        {/* Tabla 1 — embudo mensual completo */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Embudo mensual
          </p>
          <EmbudoTablaMensual />
        </div>

        {/* Gráfico comparado */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Embudo comparado · julio vs agosto (base 100 visitas)
          </p>
          <FunnelCompareChart
            data={FUNNEL_COMPARADO}
            breakStep="Carritos"
            breakLabel="6,58% → 4,49% de fichas a carrito (−32%)"
          />
        </div>

        {/* Tabla 2 — dónde se rompe, la tabla importante */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#dc2626" }}>
            Dónde se rompe exactamente
          </p>
          <EmbudoTablaQuiebre />
        </div>

        {/* Impacto destacado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatTile label="Carritos perdidos"              value="721"    sub="si julio se hubiera sostenido" />
          <StatTile label="Compras perdidas (aprox.)"       value="~130"   sub="al ratio carrito→compra de agosto" />
          <StatTile label="Facturación perdida (aprox.)"    value="~$4.700" sub="ticket promedio $36,22" />
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          Si la tasa ficha→carrito de julio (6,58%) se hubiera sostenido en agosto, con 34.443 fichas vistas
          habrían salido 2.266 carritos en vez de 1.545.
        </p>

        <p className="text-[10px] text-gray-400 leading-relaxed border-t border-gray-50 pt-3">
          {EMBUDO_NOTA_METODO}
        </p>

      </CardContent>
    </Card>
  )
}
