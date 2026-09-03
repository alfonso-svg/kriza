"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Reposicion } from "./Reposicion"
import { CapitalMuerto } from "./CapitalMuerto"
import { INVENTARIO_CIERRE_PREFIJO, INVENTARIO_CIERRE_DESTACADO } from "@/lib/data/inventario"

export function InventarioPar() {
  return (
    <div className="space-y-4">
      <Card className="border-0 shadow-sm">
        <CardContent className="px-5 py-5">
          <Reposicion />
        </CardContent>
      </Card>

      <div className="rounded-lg px-5 py-4" style={{ backgroundColor: "#18181B" }}>
        <p className="text-sm leading-relaxed text-gray-200">
          {INVENTARIO_CIERRE_PREFIJO}{" "}
          <span className="font-bold" style={{ color: "#A78BFA" }}>{INVENTARIO_CIERRE_DESTACADO}</span>
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="px-5 py-5">
          <CapitalMuerto />
        </CardContent>
      </Card>
    </div>
  )
}
