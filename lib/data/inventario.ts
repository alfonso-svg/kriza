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

export const INVENTARIO_CIERRE_PREFIJO =
  "Se vende lo que gusta y se agota, queda lo que no gusta mes tras mes. El catálogo se está volviendo un stock que nadie quiso y eso es lo que la clienta encuentra cuando llega desde el anuncio. Se debería"

export const INVENTARIO_CIERRE_DESTACADO =
  "evaluar con urgencia hacer promociones y descuentos de esos modelos."

// Reposición de stock (7 nov 2026): 5 días vs 5 días, campañas de venta (Advantage+ y Tráfico Caliente), sin Tráfico IG.
// Fuente: API de Meta Ads, cuenta 468008112481921.
export type ReposicionRow = { metrica: string; antes: string; despues: string; var: string; alerta?: boolean }

export const REPOSICION: ReposicionRow[] = [
  { metrica: "Inversión",        antes: "$182,24", despues: "$193,07", var: "+5,9%" },
  { metrica: "Compras",          antes: "32",      despues: "69",      var: "+115,6%" },
  { metrica: "CPA",              antes: "$5,70",   despues: "$2,80",   var: "−50,9%",  alerta: true },
  { metrica: "ROAS",             antes: "6,70x",   despues: "13,60x",  var: "+103,0%", alerta: true },
  { metrica: "Visitas",          antes: "3.705",   despues: "6.241",   var: "+68,4%" },
  { metrica: "Carritos",         antes: "255",     despues: "575",     var: "+125,5%" },
  { metrica: "Visita → carrito", antes: "6,88%",   despues: "9,21%",   var: "+33,9%" },
]

export const REPOSICION_TITULAR = "La reposición bajó el CPA a la mitad en 48 horas"

export const REPOSICION_BAJADA =
  "El 7 de noviembre entró stock nuevo al catálogo. Con una inversión prácticamente igual, las compras se duplicaron y el CPA cayó de $5,70 a $2,80. La tasa de visita a carrito subió de 6,88% a 9,21%: la gente no empezó a llegar más barata, empezó a encontrar lo que buscaba. Es la confirmación directa de lo que viene señalando este reporte desde junio. Cuando el catálogo se vacía el CPA sube y el ROAS cae; cuando se repone, el rendimiento vuelve solo, sin tocar un dólar de pauta."

export const REPOSICION_DESTACADO = "Contra el CPA de octubre ($5,84), la mejora es del 52,1%."
export const REPOSICION_DESTACADO_DETALLE =
  "Y con los $193,07 de esos cinco días, al CPA anterior habrían salido 34 compras en lugar de 69."

export const REPOSICION_METODO =
  "Comparativa de 5 días contra 5 días sobre las campañas de venta (Advantage+ y Tráfico Caliente); excluye Tráfico IG. Fuente: API de Meta Ads, cuenta 468008112481921. Ventana corta y atribución aún en curso: leer como señal temprana, no como resultado consolidado."
