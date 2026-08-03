// Resultados de Julio 2026 obtenidos via Meta API (1/7–31/7 · actualizado 3 ago 2026)
// Visitas y carritos no disponibles a nivel de ad en la API
// Ads con mismo nombre corriendo en varias campañas se consolidan (spend/compras/valor sumados, ctr ponderado por impresiones)

export type AdResult = {
  name:    string
  image:   string   // path relativo a /public
  spend:   number
  ctr:     number
  compras: number
  valor:   number
  roas:    number
}

export const adsJulio: AdResult[] = [
  {
    name:    "Ad 68 · Catálogo · Nueva Colección Abril",
    image:   "/Ads Kriza/Ad 68 - Catálogo - Nueva Colección Abril.png",
    spend:   676.87,
    ctr:       5.18,
    compras:    193,
    valor:  6726.27,
    roas:      9.94,
  },
  {
    name:    "Ad 56 · Catálogo · Colección 26",
    image:   "/Ads Kriza/Ad 56 - Catálogo - Colección 26.png",
    spend:   148.39,
    ctr:       2.78,
    compras:     62,
    valor:  2197.97,
    roas:     14.81,
  },
  {
    name:    "Ad 79 · Video · Nueva Colección 2",
    image:   "/Ads Kriza/Ad 79 - Video - NuevaColección2.png",
    spend:    25.12,
    ctr:       6.10,
    compras:      9,
    valor:   406.96,
    roas:     16.20,
  },
  {
    name:    "Ad 73 · Nueva Colección JUN · RL",
    image:   "/Ads Kriza/Ad 73 - Nueva Colección JUN - RL.png",
    spend:    20.50,
    ctr:       3.02,
    compras:      2,
    valor:    72.81,
    roas:      3.55,
  },
  {
    name:    "Ad 92 · Carrusel · Uniformes",
    image:   "/Ads Kriza/Ad 92 - Carrusel - Uniformes.png",
    spend:    11.53,
    ctr:       2.10,
    compras:      3,
    valor:   173.94,
    roas:     15.09,
  },
  {
    name:    "Ad 78 · Catálogo · Uniformes",
    image:   "/Ads Kriza/Ad 78 - Catálogo - Uniformes.png",
    spend:    13.74,
    ctr:       2.48,
    compras:      2,
    valor:    75.74,
    roas:      5.51,
  },
]
