// Datos del módulo "Embudo de conversión" — jun-sep 2026.
// Fuente: Meta API/MCP a nivel cuenta (outbound clicks, landing page views, view content,
// add to cart, initiated checkout, purchase ROAS) · actualizado 6 oct 2026.
// Los porcentajes de la Tabla 2 se corresponden con los conteos de la Tabla 1
// (ej: 1.202 carritos / 30.477 fichas = 3,94% en septiembre).

export type EmbudoMensualRow = {
  metrica:   string
  jun:       string
  jul:       string
  ago:       string
  sep:       string
  vsPrev:    string
  highlight: "up" | "down" | "neutral"
}

export const EMBUDO_MENSUAL: EmbudoMensualRow[] = [
  { metrica: "Inversión",                  jun: "$969,27",   jul: "$1.116,58", ago: "$1.132,81", sep: "$1.183,34", vsPrev: "+4,5%",  highlight: "neutral" },
  { metrica: "Impresiones",                jun: "1.001.731", jul: "966.385",   ago: "976.748",   sep: "1.058.928", vsPrev: "+8,4%",  highlight: "neutral" },
  { metrica: "Clics salientes",            jun: "22.022",    jul: "23.908",    ago: "29.329",    sep: "25.710",    vsPrev: "−12,3%", highlight: "down"    },
  { metrica: "Visitas a la web",           jun: "15.729",    jul: "17.855",    ago: "23.365",    sep: "21.215",    vsPrev: "−9,2%",  highlight: "down"    },
  { metrica: "Fichas de producto vistas",  jun: "28.145",    jul: "29.118",    ago: "34.443",    sep: "30.477",    vsPrev: "−11,5%", highlight: "down"    },
  { metrica: "Carritos",                   jun: "1.671",     jul: "1.915",     ago: "1.545",     sep: "1.202",     vsPrev: "−22,2%", highlight: "down"    },
  { metrica: "Pagos iniciados",            jun: "871",       jul: "1.147",     ago: "884",       sep: "708",       vsPrev: "−19,9%", highlight: "down"    },
  { metrica: "Costo por carrito",          jun: "$0,58",     jul: "$0,58",     ago: "$0,73",     sep: "$0,98",     vsPrev: "+34,2%", highlight: "neutral" },
  { metrica: "ROAS",                       jun: "10,74×",    jul: "11,08×",    ago: "8,96×",     sep: "6,44×",     vsPrev: "−28,1%", highlight: "down"    },
]

export type EmbudoQuiebreRow = {
  paso:   string
  jun:    string
  jul:    string
  ago:    string
  sep:    string
  estado: string
  tone:   "alert" | "neutral"
}

export const EMBUDO_QUIEBRE: EmbudoQuiebreRow[] = [
  { paso: "Fichas vistas por visita", jun: "1,79",  jul: "1,63",  ago: "1,47",  sep: "1,44",  estado: "↓",           tone: "neutral" },
  { paso: "Ficha → carrito",          jun: "5,94%", jul: "6,58%", ago: "4,49%", sep: "3,94%", estado: "ROTO (−12%)", tone: "alert"   },
  { paso: "Carrito → pago iniciado",  jun: "52,1%", jul: "59,9%", ago: "57,2%", sep: "58,9%", estado: "Sano",        tone: "neutral" },
]

export const EMBUDO_TITULAR = "Ficha a carrito volvió a caer: 3,94% en septiembre, 40% menos que en julio."

export const EMBUDO_BAJADA =
  "Tercer mes seguido con el quiebre en el mismo escalón. De carrito a pago iniciado el embudo sigue sano (58,9%, mejor que agosto). La gente llega, mira el zapato y no lo agrega: el costo por carrito ya va en $0,98 y el ROAS bajó a 6,44×."
