// Datos del módulo "Embudo de conversión" — jun-oct 2026.
// Fuente: Meta API/MCP a nivel cuenta (outbound clicks, landing page views, view content,
// add to cart, initiated checkout, purchase ROAS) · actualizado 2 nov 2026.
// Los porcentajes de la Tabla 2 se corresponden con los conteos de la Tabla 1
// (ej: 1.230 carritos / 26.739 fichas = 4,60% en octubre).

export type EmbudoMensualRow = {
  metrica:   string
  jun:       string
  jul:       string
  ago:       string
  sep:       string
  oct:       string
  vsPrev:    string
  highlight: "up" | "down" | "neutral"
}

export const EMBUDO_MENSUAL: EmbudoMensualRow[] = [
  { metrica: "Inversión",                  jun: "$969,27",   jul: "$1.116,58", ago: "$1.132,81", sep: "$1.183,34", oct: "$1.110,96", vsPrev: "−6,1%",  highlight: "neutral" },
  { metrica: "Impresiones",                jun: "1.001.731", jul: "966.385",   ago: "976.748",   sep: "1.058.928", oct: "947.839",   vsPrev: "−10,5%", highlight: "neutral" },
  { metrica: "Clics salientes",            jun: "22.022",    jul: "23.908",    ago: "29.329",    sep: "25.710",    oct: "24.303",    vsPrev: "−5,5%",  highlight: "down"    },
  { metrica: "Visitas a la web",           jun: "15.729",    jul: "17.855",    ago: "23.365",    sep: "21.215",    oct: "20.153",    vsPrev: "−5,0%",  highlight: "down"    },
  { metrica: "Fichas de producto vistas",  jun: "28.145",    jul: "29.118",    ago: "34.443",    sep: "30.477",    oct: "26.739",    vsPrev: "−12,3%", highlight: "down"    },
  { metrica: "Carritos",                   jun: "1.671",     jul: "1.915",     ago: "1.545",     sep: "1.202",     oct: "1.230",     vsPrev: "+2,3%",  highlight: "up"      },
  { metrica: "Pagos iniciados",            jun: "871",       jul: "1.147",     ago: "884",       sep: "708",       oct: "616",       vsPrev: "−13,0%", highlight: "down"    },
  { metrica: "Compras",                    jun: "276",       jul: "343",       ago: "280",       sep: "206",       oct: "185",       vsPrev: "−10,2%", highlight: "down"    },
  { metrica: "Costo por carrito",          jun: "$0,58",     jul: "$0,58",     ago: "$0,73",     sep: "$0,98",     oct: "$0,90",     vsPrev: "−8,3%",  highlight: "neutral" },
  { metrica: "ROAS",                       jun: "10,74×",    jul: "11,08×",    ago: "8,96×",     sep: "6,44×",     oct: "5,71×",     vsPrev: "−11,4%", highlight: "down"    },
]

export type EmbudoQuiebreRow = {
  paso:   string
  jun:    string
  jul:    string
  ago:    string
  sep:    string
  oct:    string
  estado: string
  tone:   "alert" | "neutral"
}

export const EMBUDO_QUIEBRE: EmbudoQuiebreRow[] = [
  { paso: "Fichas vistas por visita", jun: "1,79",  jul: "1,63",  ago: "1,47",  sep: "1,44",  oct: "1,33",  estado: "↓",           tone: "neutral" },
  { paso: "Ficha → carrito",          jun: "5,94%", jul: "6,58%", ago: "4,49%", sep: "3,94%", oct: "4,60%", estado: "↑ (+17%)",    tone: "neutral" },
  { paso: "Carrito → pago iniciado",  jun: "52,1%", jul: "59,9%", ago: "57,2%", sep: "58,9%", oct: "50,1%", estado: "ROTO (−15%)", tone: "alert"   },
]

export const EMBUDO_TITULAR = "El quiebre se movió al checkout: de carrito a pago iniciado cayó a 50,1% en octubre."

export const EMBUDO_BAJADA =
  "Ficha a carrito se recuperó (4,60%, +17% contra septiembre) y entraron más carritos que el mes anterior con menos inversión: el costo por carrito bajó a $0,90. Pero la mitad de los que agregan al carrito no inician el pago (en septiembre era 58,9%), así que las compras bajaron a 185 y el ROAS a 5,71×."
