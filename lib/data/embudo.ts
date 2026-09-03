// Datos del módulo "Embudo de conversión" — jun-ago 2026.
// Valores tomados directamente del reporte de negocio (Meta Ads + Shopify).
// Los porcentajes de la Tabla 2 se corresponden con los conteos de la Tabla 1
// (ej: 1.915 carritos / 29.118 fichas = 6,58% en julio).

export type EmbudoMensualRow = {
  metrica:   string
  jun:       string
  jul:       string
  ago:       string
  vsJul:     string
  highlight: "up" | "down" | "neutral"
}

export const EMBUDO_MENSUAL: EmbudoMensualRow[] = [
  { metrica: "Inversión",                  jun: "$969,27",   jul: "$1.116,58", ago: "$1.132,81", vsJul: "+1,5%",  highlight: "neutral" },
  { metrica: "Impresiones",                jun: "1.001.731", jul: "966.385",   ago: "976.748",   vsJul: "+1,1%",  highlight: "neutral" },
  { metrica: "Clics salientes",            jun: "22.022",    jul: "23.908",    ago: "29.329",    vsJul: "+22,7%", highlight: "up"      },
  { metrica: "Visitas a la web",           jun: "15.729",    jul: "17.855",    ago: "23.365",    vsJul: "+30,9%", highlight: "up"      },
  { metrica: "Fichas de producto vistas",  jun: "28.145",    jul: "29.118",    ago: "34.443",    vsJul: "+18,3%", highlight: "up"      },
  { metrica: "Carritos",                   jun: "1.671",     jul: "1.915",     ago: "1.545",     vsJul: "−19,3%", highlight: "down"    },
  { metrica: "Pagos iniciados",            jun: "871",       jul: "1.147",     ago: "884",       vsJul: "−22,9%", highlight: "down"    },
  { metrica: "Costo por carrito",          jun: "$0,58",     jul: "$0,58",     ago: "$0,73",     vsJul: "+25,9%", highlight: "neutral" },
  { metrica: "ROAS",                       jun: "10,74×",    jul: "11,08×",    ago: "8,96×",     vsJul: "−19,1%", highlight: "down"    },
]

export type EmbudoQuiebreRow = {
  paso:   string
  jun:    string
  jul:    string
  ago:    string
  estado: string
  tone:   "alert" | "neutral"
}

export const EMBUDO_QUIEBRE: EmbudoQuiebreRow[] = [
  { paso: "Fichas vistas por visita", jun: "1,79",  jul: "1,63",  ago: "1,47",           estado: "↓",           tone: "neutral" },
  { paso: "Ficha → carrito",          jun: "5,94%", jul: "6,58%", ago: "4,49%",          estado: "ROTO (−32%)", tone: "alert"   },
  { paso: "Carrito → pago iniciado",  jun: "52,1%", jul: "59,9%", ago: "57,2%",          estado: "Sano",        tone: "neutral" },
]

export const EMBUDO_TITULAR = "El tráfico subió 31%. La tasa de ficha a carrito cayó 32%."

export const EMBUDO_BAJADA =
  "El quiebre está en un solo escalón. De carrito en adelante el embudo está sano: 57,2% de conversión a pago iniciado, casi igual que julio. La gente llega, mira el zapato y no lo quiere."

// Normalizado a 100 visitas a la web — para el gráfico comparado jul vs ago.
// fichas = fichas/visita × 100 · carritos = fichas × tasa ficha→carrito · pagos = carritos × tasa carrito→pago
export const FUNNEL_COMPARADO = [
  { paso: "Visitas",         jul: 100,   ago: 100  },
  { paso: "Fichas vistas",   jul: 163,   ago: 147  },
  { paso: "Carritos",        jul: 10.7,  ago: 6.6  },
  { paso: "Pagos iniciados", jul: 6.4,   ago: 3.8  },
] as const

export const EMBUDO_IMPACTO = {
  carritosEsperados:   2266,
  carritosPerdidos:    721,
  comprasPerdidas:     130,
  facturacionPerdida:  4700,
  fugaPautaComparativa: 147,
  multiplo:            32,
}

export const EMBUDO_NOTA_METODO =
  "Método: carritos esperados de agosto = fichas vistas (34.443) × tasa ficha→carrito de julio (6,58%) = 2.266. " +
  "Carritos perdidos = 2.266 esperados − 1.545 reales = 721. Compras perdidas = carritos perdidos × tasa carrito→compra de agosto (18,1%) ≈ 130. " +
  "Facturación perdida = compras perdidas × ticket promedio ($36,22) ≈ $4.700."
