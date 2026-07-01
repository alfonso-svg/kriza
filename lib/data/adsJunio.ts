// Resultados de Junio 2026 obtenidos via Meta API (1/6–28/6 · actualizado 28 jun 2026)
// Visitas y carritos no disponibles a nivel de ad en la API
// Ad 68, Ad 56 y AD 67 tienen dos variantes; se consolidan (spend/compras/valor sumados, ctr ponderado por impresiones)

export type AdResult = {
  name:    string
  image:   string   // path relativo a /public
  spend:   number
  ctr:     number
  compras: number
  valor:   number
  roas:    number
}

export const adsJunio: AdResult[] = [
  {
    name:    "Ad 68 · Catálogo · Nueva Colección Abril",
    image:   "/Ads Kriza/Ad 68 - Catálogo - Nueva Colección Abril.png",
    spend:   558.09,
    ctr:       4.81,
    compras:    168,
    valor:   6776.23,
    roas:      12.14,
  },
  {
    name:    "Ad 56 · Catálogo · Colección 26",
    image:   "/Ads Kriza/Ad 56 - Catálogo - Colección 26.png",
    spend:   200.08,
    ctr:       3.18,
    compras:     63,
    valor:   2099.58,
    roas:      10.49,
  },
  {
    name:    "AD 67 · Imagen · Laura",
    image:   "/Ads Kriza/AD 67 - Imagen - Laura.png",
    spend:   115.46,
    ctr:       2.02,
    compras:     26,
    valor:    800.29,
    roas:       6.93,
  },
  {
    name:    "Ad 75 · Carrusel · NC Junio",
    image:   "/Ads Kriza/Ad 75 - Carrusel - NC Junio.png",
    spend:    32.82,
    ctr:       2.67,
    compras:      7,
    valor:    297.68,
    roas:       9.07,
  },
  {
    name:    "Ad 73 · Nueva Colección JUN · RL",
    image:   "/Ads Kriza/Ad 73 - Nueva Colección JUN - RL.png",
    spend:    15.03,
    ctr:       2.56,
    compras:      7,
    valor:    235.82,
    roas:      15.69,
  },
  {
    name:    "AD 71 · Carrusel · Nueva Colección Mayo",
    image:   "/Ads Kriza/AD 71 - Carrusel - Nueva Colección Mayo.png",
    spend:    10.57,
    ctr:       2.24,
    compras:      3,
    valor:    110.99,
    roas:      10.50,
  },
]
