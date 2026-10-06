"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmbudoTablaQuiebre } from "./EmbudoTablaQuiebre"
import { EmbudoTablaMensual } from "./EmbudoTablaMensual"
import { EMBUDO_TITULAR, EMBUDO_BAJADA } from "@/lib/data/embudo"

export function EmbudoConversion() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-1 pt-4 px-5">
        <CardTitle className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Embudo de conversión · jun–sep 2026
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

        {/* Tabla 2 — dónde se rompe, la tabla importante */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#dc2626" }}>
            Dónde se rompe exactamente
          </p>
          <EmbudoTablaQuiebre />
        </div>

      </CardContent>
    </Card>
  )
}
