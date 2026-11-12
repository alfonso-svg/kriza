"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CatalogoAgotado } from "./CatalogoAgotado"
import { Reposicion } from "./Reposicion"

export function InventarioPar() {
  return (
    <div className="space-y-4">
      <Card className="border-0 shadow-sm">
        <CardContent className="px-5 py-5">
          <CatalogoAgotado />
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="px-5 py-5">
          <Reposicion />
        </CardContent>
      </Card>
    </div>
  )
}
