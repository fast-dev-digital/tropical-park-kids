export type GalleryItem = {
  id: string
  src: string
  thumb: string
  alt: string
  category: 'estrutura' | 'brinquedos' | 'evento'
  span?: 'wide' | 'tall'
}

const placeholder = (seed: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const gallery: GalleryItem[] = [
  {
    id: 'g1',
    src: placeholder('photo-1519741497674-611481863552', 1600, 1000),
    thumb: placeholder('photo-1519741497674-611481863552', 800, 600),
    alt: 'Salão coberto decorado para casamento ao entardecer',
    category: 'estrutura',
    span: 'wide',
  },
  {
    id: 'g2',
    src: placeholder('photo-1530103862676-de8c9debad1d', 1200, 1600),
    thumb: placeholder('photo-1530103862676-de8c9debad1d', 800, 1000),
    alt: 'Brinquedos infláveis modernos de grande porte na área externa',
    category: 'brinquedos',
    span: 'tall',
  },
  {
    id: 'g3',
    src: placeholder('photo-1464366400600-7168b8af9bc3', 1200, 800),
    thumb: placeholder('photo-1464366400600-7168b8af9bc3', 800, 600),
    alt: 'Área verde da chácara com árvores nativas',
    category: 'estrutura',
  },
  {
    id: 'g4',
    src: placeholder('photo-1530023367847-a683933f4172', 1200, 800),
    thumb: placeholder('photo-1530023367847-a683933f4172', 800, 600),
    alt: 'Mesa de buffet sofisticada com arranjo floral',
    category: 'evento',
  },
  {
    id: 'g5',
    src: placeholder('photo-1469371670807-013ccf25f16a', 1600, 1000),
    thumb: placeholder('photo-1469371670807-013ccf25f16a', 800, 600),
    alt: 'Pista de dança iluminada durante recepção noturna',
    category: 'evento',
    span: 'wide',
  },
  {
    id: 'g6',
    src: placeholder('photo-1551845728-6820a30c64e8', 1200, 1600),
    thumb: placeholder('photo-1551845728-6820a30c64e8', 800, 1000),
    alt: 'Tobogã infantil colorido em área kids',
    category: 'brinquedos',
    span: 'tall',
  },
  {
    id: 'g7',
    src: placeholder('photo-1478146059778-26028b07395a', 1200, 800),
    thumb: placeholder('photo-1478146059778-26028b07395a', 800, 600),
    alt: 'Detalhe de decoração de mesa para festa infantil',
    category: 'evento',
  },
  {
    id: 'g8',
    src: placeholder('photo-1567361808960-dec9cb578182', 1200, 800),
    thumb: placeholder('photo-1567361808960-dec9cb578182', 800, 600),
    alt: 'Vista geral da chácara com estrutura coberta e área aberta',
    category: 'estrutura',
  },
]
