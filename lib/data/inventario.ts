// Datos de rotación de inventario — Kriza, agosto 2026.
// Fuente: inventario diario de Shopify. Rotación = pares vendidos en el mes / stock promedio del mes.

export type ReposicionRow = {
  modelo:      string
  rotacion:    number
  stockInicio: number
  stockFin:    number
  situacion:   string
  critico:     boolean // stock 0 a fin de mes
  alerta:      boolean // stock bajo, no crítico aún
}

export const REPOSICION: ReposicionRow[] = [
  { modelo: "PARAISO-II",  rotacion: 2.27, stockInicio: 12, stockFin: 0,  situacion: "Agotado 31 ago",                 critico: true,  alerta: false },
  { modelo: "ATENEA",      rotacion: 2.22, stockInicio: 22, stockFin: 8,  situacion: "49 pares vendidos, top del mes", critico: false, alerta: true  },
  { modelo: "SOFIA-II",    rotacion: 2.07, stockInicio: 23, stockFin: 0,  situacion: "Agotado 18 ago",                 critico: true,  alerta: false },
  { modelo: "PAULA-II",    rotacion: 1.97, stockInicio: 18, stockFin: 0,  situacion: "Agotado 18 ago",                 critico: true,  alerta: false },
  { modelo: "ORQUIDEA-II", rotacion: 1.67, stockInicio: 11, stockFin: 15, situacion: "Rota más rápido de lo que entra", critico: false, alerta: false },
  { modelo: "YULE",        rotacion: 1.38, stockInicio: 29, stockFin: 13, situacion: "Perdió medio stock en el mes",   critico: false, alerta: false },
  { modelo: "AMAPOLA-II",  rotacion: 0.97, stockInicio: 11, stockFin: 12, situacion: "En el límite",                   critico: false, alerta: false },
]

export const REPOSICION_BAJADA =
  "Estos siete modelos rotaron por encima de 1,0 en agosto: se vendieron más de una vez su propio inventario. Tres están en cero. Son los que la clienta sí quería."

export type CapitalMuertoRow = {
  modelo:   string
  pares:    number
  vendidos: number
  rotacion: number
  cero:     boolean // 0 ventas en el mes
}

export const CAPITAL_MUERTO: CapitalMuertoRow[] = [
  { modelo: "MIEL",        pares: 49, vendidos: 1, rotacion: 0.02, cero: false },
  { modelo: "LALA WH-W06", pares: 38, vendidos: 6, rotacion: 0.15, cero: false },
  { modelo: "GIA",         pares: 33, vendidos: 3, rotacion: 0.09, cero: false },
  { modelo: "MILENA",      pares: 32, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "NACARID",     pares: 29, vendidos: 2, rotacion: 0.07, cero: false },
  { modelo: "BRISA",       pares: 28, vendidos: 3, rotacion: 0.10, cero: false },
  { modelo: "ZULAY",       pares: 27, vendidos: 1, rotacion: 0.04, cero: false },
  { modelo: "TOÑA RMC9",   pares: 26, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "CLARION",     pares: 25, vendidos: 3, rotacion: 0.12, cero: false },
  { modelo: "MIA-IV",      pares: 23, vendidos: 1, rotacion: 0.04, cero: false },
  { modelo: "GLISS",       pares: 17, vendidos: 1, rotacion: 0.06, cero: false },
  { modelo: "KZ-1939",     pares: 17, vendidos: 1, rotacion: 0.06, cero: false },
  { modelo: "KZ-1933",     pares: 16, vendidos: 3, rotacion: 0.19, cero: false },
  { modelo: "KZ-1937",     pares: 14, vendidos: 2, rotacion: 0.13, cero: false },
  { modelo: "FRESIA",      pares: 10, vendidos: 2, rotacion: 0.18, cero: false },
]

export const CAPITAL_MUERTO_TITULAR = "~350 pares parados, ~$5.000 inmovilizados, 27% del inventario"

export const CAPITAL_MUERTO_BAJADA =
  "Quince modelos vendieron 3 pares o menos en todo agosto. Siguen dentro del product set principal, así que consumen impresiones y presupuesto que deberían ir a los modelos que rotan."

export type WatchlistRow = { modelo: string; pares: number; vendidos: number }

export const CAPITAL_MUERTO_VIGILANCIA: WatchlistRow[] = [
  { modelo: "VENUS",       pares: 44, vendidos: 7 },
  { modelo: "BECKY",       pares: 33, vendidos: 6 },
  { modelo: "SALOME",      pares: 31, vendidos: 5 },
  { modelo: "CARMEN-II",   pares: 28, vendidos: 5 },
  { modelo: "MORA BF2414", pares: 20, vendidos: 4 },
]

export const INVENTARIO_CIERRE_PREFIJO =
  "Se vende lo que gusta y se agota, queda lo que no gusta mes tras mes. El catálogo se está volviendo un stock que nadie quiso y eso es lo que la clienta encuentra cuando llega desde el anuncio. Se debería"

export const INVENTARIO_CIERRE_DESTACADO =
  "evaluar con urgencia hacer promociones y descuentos de esos modelos."
