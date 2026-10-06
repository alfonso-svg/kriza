// Datos de rotación de inventario — Kriza, septiembre 2026.
// Fuente: "Instantánea de inventario al final del mes - 2026-09-01 - 2026-09-30.csv" (stock diario de Shopify).
// Rotación = pares vendidos en el mes / stock promedio del mes.
// Pares vendidos = suma de las bajas diarias de stock de hasta 5 pares. Las bajas mayores en un solo día
// se tratan como salidas de stock (traspaso/retiro), no ventas: el 24 sep salieron 141 pares de golpe
// (ROXANA, DALILA-II, CARISSA, MIA-V, IVES, GALA, MORAN) y el 18 sep 30 pares de HERA.
// La columna "Valor del inventario al final" vino en 0 en el export, por eso no se calcula capital en $.

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
  { modelo: "AMAPOLA-II",  rotacion: 1.62, stockInicio: 11, stockFin: 20, situacion: "Se repuso y siguió vendiendo",    critico: false, alerta: false },
  { modelo: "ORQUIDEA-II", rotacion: 1.53, stockInicio: 15, stockFin: 10, situacion: "Segundo mes seguido arriba de 1,5", critico: false, alerta: false },
  { modelo: "ZHENITH",     rotacion: 1.14, stockInicio: 23, stockFin: 21, situacion: "28 pares vendidos, top del mes",  critico: false, alerta: false },
  { modelo: "ROXANA",      rotacion: 0.99, stockInicio: 28, stockFin: 0,  situacion: "En 0 desde 24 sep",               critico: true,  alerta: false },
  { modelo: "DYER",        rotacion: 0.79, stockInicio: 20, stockFin: 29, situacion: "Repuesto, rota estable",          critico: false, alerta: false },
  { modelo: "GALA",        rotacion: 0.76, stockInicio: 31, stockFin: 9,  situacion: "Quedan 9 pares",                  critico: false, alerta: true  },
  { modelo: "MORAN",       rotacion: 0.72, stockInicio: 32, stockFin: 3,  situacion: "Quedan 3 pares",                  critico: false, alerta: true  },
]

export const REPOSICION_BAJADA =
  "Solo tres modelos rotaron por encima de 1,0 en septiembre (en agosto fueron siete). AMAPOLA-II y ORQUIDEA-II repiten arriba y ZHENITH fue el más vendido. ROXANA, GALA y MORAN quedaron en cero o casi por una salida de stock el 24 sep, no solo por ventas: si siguen en catálogo, hay que reponerlos."

export type CapitalMuertoRow = {
  modelo:   string
  pares:    number
  vendidos: number
  rotacion: number
  cero:     boolean // 0 ventas en el mes
}

export const CAPITAL_MUERTO: CapitalMuertoRow[] = [
  { modelo: "MIEL",      pares: 49, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "NURY",      pares: 32, vendidos: 1, rotacion: 0.05, cero: false },
  { modelo: "GIA",       pares: 31, vendidos: 3, rotacion: 0.09, cero: false },
  { modelo: "MILENA",    pares: 31, vendidos: 2, rotacion: 0.06, cero: false },
  { modelo: "ISLA",      pares: 28, vendidos: 2, rotacion: 0.07, cero: false },
  { modelo: "NACARID",   pares: 28, vendidos: 1, rotacion: 0.04, cero: false },
  { modelo: "VIDIA",     pares: 27, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "ZULAY",     pares: 27, vendidos: 2, rotacion: 0.07, cero: false },
  { modelo: "CARMEN-II", pares: 26, vendidos: 3, rotacion: 0.11, cero: false },
  { modelo: "TOÑA RMC9", pares: 26, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "MARGARET",  pares: 25, vendidos: 3, rotacion: 0.11, cero: false },
  { modelo: "CLARION",   pares: 25, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "ATENEA",    pares: 21, vendidos: 3, rotacion: 0.26, cero: false },
  { modelo: "MAYA",      pares: 21, vendidos: 2, rotacion: 0.09, cero: false },
  { modelo: "KZ-1899",   pares: 18, vendidos: 0, rotacion: 0.00, cero: true  },
  { modelo: "KZ-1939",   pares: 15, vendidos: 2, rotacion: 0.13, cero: false },
  { modelo: "KZ-1933",   pares: 14, vendidos: 1, rotacion: 0.07, cero: false },
  { modelo: "KZ-1937",   pares: 13, vendidos: 3, rotacion: 0.23, cero: false },
  { modelo: "KZ-1902",   pares: 11, vendidos: 3, rotacion: 0.25, cero: false },
  { modelo: "YULE",      pares: 10, vendidos: 2, rotacion: 0.20, cero: false },
]

export const CAPITAL_MUERTO_TITULAR = "~480 pares parados, 41% del inventario"

export const CAPITAL_MUERTO_BAJADA =
  "Veinte modelos vendieron 3 pares o menos en todo septiembre (en agosto eran quince). MIEL, TOÑA RMC9 y CLARION siguen sin vender y ATENEA, el más vendido de agosto, se repuso y vendió solo 3. Siguen dentro del product set principal, así que consumen impresiones y presupuesto que deberían ir a los modelos que rotan."

export type WatchlistRow = { modelo: string; pares: number; vendidos: number }

export const CAPITAL_MUERTO_VIGILANCIA: WatchlistRow[] = [
  { modelo: "LALA WH-W06", pares: 45, vendidos: 6 },
  { modelo: "MORA BF2414", pares: 40, vendidos: 4 },
  { modelo: "SALOME",      pares: 38, vendidos: 6 },
  { modelo: "LIENZO",      pares: 35, vendidos: 6 },
  { modelo: "PILIN",       pares: 29, vendidos: 5 },
  { modelo: "BECKY",       pares: 28, vendidos: 7 },
  { modelo: "MADELYN",     pares: 27, vendidos: 6 },
  { modelo: "BRISA",       pares: 25, vendidos: 5 },
  { modelo: "ZARA",        pares: 25, vendidos: 4 },
  { modelo: "MIA-IV",      pares: 20, vendidos: 6 },
]

export const INVENTARIO_CIERRE_PREFIJO =
  "Se vende lo que gusta y se agota, queda lo que no gusta mes tras mes. El catálogo se está volviendo un stock que nadie quiso y eso es lo que la clienta encuentra cuando llega desde el anuncio. Se debería"

export const INVENTARIO_CIERRE_DESTACADO =
  "evaluar con urgencia hacer promociones y descuentos de esos modelos."
