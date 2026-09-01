// Resultados de Agosto 2026 obtenidos via Meta API (1/8–31/8 · actualizado 1 sep 2026)
// Visitas y carritos no disponibles a nivel de ad en la API
// Ads con mismo nombre corriendo en varias campañas se consolidan (spend/compras/valor sumados, ctr ponderado por impresiones)
// "Ad 93 - Carrusel - All/Nuevo" es un anuncio de catálogo dinámico dentro de Advantage+ (sin
// una única pieza fija) — la imagen es una captura representativa del carrusel.
// "Ad 96 - Carrusel - Todo Terra" no tuvo delivery en agosto (0 gasto) — pieza recién subida,
// sin resultados todavía para este período.

import type { AdResult } from "./adsJulio"
export type { AdResult }

export const adsAgosto: AdResult[] = [
  {
    name:    "Ad 93 · Carrusel · All/Nuevo",
    image:   "/Ads Kriza/Ad 93 - Catálogo - All.png",
    spend:   370.14,
    ctr:       4.66,
    compras:    107,
    valor:  3470.79,
    roas:      9.38,
  },
  {
    name:    "Ad 68 · Catálogo · Nueva Colección Abril",
    image:   "/Ads Kriza/Ad 68 - Catálogo - Nueva Colección Abril.png",
    spend:   369.26,
    ctr:       5.00,
    compras:     78,
    valor:  2954.81,
    roas:      8.00,
  },
  {
    name:    "Ad 79 · Video · Nueva Colección 2",
    image:   "/Ads Kriza/Ad 79 - Video - NuevaColección2.png",
    spend:   101.07,
    ctr:       5.88,
    compras:     27,
    valor:  1181.56,
    roas:     11.69,
  },
  {
    name:    "Ad 56 · Catálogo · Colección 26",
    image:   "/Ads Kriza/Ad 56 - Catálogo - Colección 26.png",
    spend:    90.94,
    ctr:       3.64,
    compras:     26,
    valor:   843.80,
    roas:      9.28,
  },
  {
    name:    "Ad 76 · Video · Terra",
    image:   "/Ads Kriza/Ad 76 - Video - Terra.png",
    spend:    27.78,
    ctr:       3.81,
    compras:      4,
    valor:   130.09,
    roas:      4.68,
  },
  {
    name:    "Ad 92 · Carrusel · Uniformes",
    image:   "/Ads Kriza/Ad 92 - Carrusel - Uniformes.png",
    spend:    20.90,
    ctr:       2.58,
    compras:     10,
    valor:   342.92,
    roas:     16.41,
  },
  {
    name:    "Ad 95 · Carrusel · Terra",
    image:   "/Ads Kriza/Ad 95 - Carrusel Terra.png",
    spend:    11.72,
    ctr:       2.66,
    compras:      3,
    valor:   129.12,
    roas:     11.02,
  },
  {
    name:    "Ad 96 · Carrusel · Todo Terra",
    image:   "/Ads Kriza/Ad 96 - Carrusel - Todo Terra.png",
    spend:     0.00,
    ctr:       0.00,
    compras:      0,
    valor:     0.00,
    roas:      0.00,
  },
]
