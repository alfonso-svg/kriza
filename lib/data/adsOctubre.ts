// Resultados de Octubre 2026 obtenidos via Meta API/MCP (1/10–31/10 · actualizado 2 nov 2026)
// Visitas y carritos no disponibles a nivel de ad en la API
// Ads con mismo nombre corriendo en varias campañas se consolidan (spend/compras/valor sumados, ctr ponderado por impresiones):
// "Ad 100 - Catálogo - Descuentos" corre en Tráfico Caliente y Advantage+, "Ad 99 - Catálogo - Octubre" también.
// "Yule" y "Ridícula" son publicaciones de IG impulsadas en "STP - Tráfico IG" (sin compras: optimizan a clics).
// image = null hasta tener la captura en /public/Ads Kriza.

import type { AdResult } from "./adsJulio"
export type { AdResult }

export const adsOctubre: AdResult[] = [
  {
    name:    "Ad 93 · Catálogo · All/Nuevo",
    image:   "/Ads Kriza/Ad 93 - Catálogo - All.png",
    spend:   834.68,
    ctr:       4.04,
    compras:    131,
    valor:  4611.69,
    roas:      5.53,
  },
  {
    name:    "Ad 100 · Catálogo · Descuentos",
    image:   null,
    spend:   152.39,
    ctr:       2.87,
    compras:     34,
    valor:   937.33,
    roas:      6.15,
  },
  {
    name:    "Ad 99 · Catálogo · Octubre",
    image:   null,
    spend:    90.59,
    ctr:       2.69,
    compras:     19,
    valor:   693.29,
    roas:      7.65,
  },
  {
    name:    "Yule · Tráfico IG",
    image:   null,
    spend:    21.15,
    ctr:       5.16,
    compras:      0,
    valor:     0.00,
    roas:      0.00,
  },
  {
    name:    "Ridícula · Tráfico IG",
    image:   null,
    spend:     9.17,
    ctr:      11.20,
    compras:      0,
    valor:     0.00,
    roas:      0.00,
  },
  {
    name:    "Ad 97 · Imagen · Orquidea",
    image:   "/Ads Kriza/Ad 97 - Orquidea.png",
    spend:     2.98,
    ctr:       2.35,
    compras:      1,
    valor:    96.97,
    roas:     32.54,
  },
]
