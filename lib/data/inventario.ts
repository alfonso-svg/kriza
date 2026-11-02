// Datos de inventario — Kriza. Capital muerto: septiembre 2026 (octubre pendiente del CSV de Shopify).
// Fuente: "Instantánea de inventario al final del mes - 2026-09-01 - 2026-09-30.csv" (stock diario de Shopify).
// Rotación = pares vendidos en el mes / stock promedio del mes.
// Pares vendidos = suma de las bajas diarias de stock de hasta 5 pares. Las bajas mayores en un solo día
// se tratan como salidas de stock (traspaso/retiro), no ventas: el 24 sep salieron 141 pares de golpe
// (ROXANA, DALILA-II, CARISSA, MIA-V, IVES, GALA, MORAN) y el 18 sep 30 pares de HERA.
// La columna "Valor del inventario al final" vino en 0 en el export, por eso no se calcula capital en $.

// Catálogo agotado: productos bloqueados por falta de stock sobre el total del catálogo.
// Fuente: conteo manual de Alfonso (no sale del CSV de inventario). Agregar una fila por cada corte nuevo.
export type CatalogoAgotadoRow = {
  fecha:      string
  bloqueados: number
  total:      number
  actual?:    boolean // corte más reciente
}

export const CATALOGO_AGOTADO: CatalogoAgotadoRow[] = [
  { fecha: "2 sep", bloqueados: 191, total: 702 },
  { fecha: "9 oct", bloqueados: 215, total: 654 },
  { fecha: "2 nov", bloqueados: 521, total: 982, actual: true },
]

export const CATALOGO_AGOTADO_TITULAR = "El catálogo se desbordó. 53% agotado."

export const CATALOGO_AGOTADO_BAJADA =
  "En dos meses el catálogo pasó de 702 a 982 productos y los bloqueados casi se triplicaron (de 191 a 521). Más de la mitad del catálogo que alimenta los anuncios de catálogo (Ad 93, Ad 99 y Ad 100, el 97% de la inversión de octubre) está sin stock."

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
