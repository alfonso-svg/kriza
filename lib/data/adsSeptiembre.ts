// Resultados de Septiembre 2026 obtenidos via Meta API/MCP (1/9–30/9 · actualizado 5 oct 2026)
// Visitas y carritos no disponibles a nivel de ad en la API
// Ads con mismo nombre corriendo en varias campañas se consolidan (spend/compras/valor sumados, ctr ponderado por impresiones)
// "Ad 93 - Catálogo/Carrusel - All/Nuevo" es un anuncio de catálogo dinámico dentro de
// Advantage+ (sin una única pieza fija) — la imagen es una captura representativa.
// Dos piezas nuevas este mes (cargadas en /public): "Ad 97 - Imagen - Orquidea" y
// "Ad 98 - Imagen - Gala" (nombres reales en Meta).

import type { AdResult } from "./adsJulio"
export type { AdResult }

export const adsSeptiembre: AdResult[] = [
  {
    name:    "Ad 93 · Catálogo/Carrusel · All/Nuevo",
    image:   "/Ads Kriza/Ad 93 - Catálogo - All.png",
    spend:   852.45,
    ctr:       3.80,
    compras:    163,
    valor:  5781.28,
    roas:      6.78,
  },
  {
    name:    "Ad 97 · Imagen · Orquidea",
    image:   "/Ads Kriza/Ad 97 - Orquidea.png",
    spend:    93.49,
    ctr:       3.55,
    compras:     22,
    valor:   869.62,
    roas:      9.30,
  },
  {
    name:    "Ad 95 · Carrusel · Terra",
    image:   "/Ads Kriza/Ad 95 - Carrusel Terra.png",
    spend:    63.13,
    ctr:       1.89,
    compras:      5,
    valor:   216.87,
    roas:      3.44,
  },
  {
    name:    "Ad 96 · Carrusel · Todo Terra",
    image:   "/Ads Kriza/Ad 96 - Carrusel - Todo Terra.png",
    spend:    50.54,
    ctr:       2.54,
    compras:      4,
    valor:   259.14,
    roas:      5.13,
  },
  {
    name:    "Ad 76 · Video · Terra",
    image:   "/Ads Kriza/Ad 76 - Video - Terra.png",
    spend:    18.58,
    ctr:       2.24,
    compras:      0,
    valor:     0.00,
    roas:      0.00,
  },
  {
    name:    "Ad 98 · Imagen · Gala",
    image:   "/Ads Kriza/Ad 98 - Gala.png",
    spend:    15.43,
    ctr:       3.93,
    compras:      4,
    valor:   178.06,
    roas:     11.54,
  },
]
