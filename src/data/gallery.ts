import { mediaAssets, type MediaAsset } from './media'

export type GalleryFilter = 'tudo' | 'atracoes' | 'festas' | 'buffet' | 'decoracao' | 'chacara'

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: 'tudo', label: 'Tudo' },
  { id: 'atracoes', label: 'Atrações' },
  { id: 'festas', label: 'Festas' },
  { id: 'buffet', label: 'Buffet' },
  { id: 'decoracao', label: 'Decoração' },
  { id: 'chacara', label: 'Chácara' },
]

type GalleryEntry = { media: MediaAsset; categories: Exclude<GalleryFilter, 'tudo'>[] }

export const galleryEntries: GalleryEntry[] = [
  { media: mediaAssets.centopeiaSalaoStar, categories: ['atracoes', 'festas'] },
  { media: mediaAssets.centopeiaChacara, categories: ['atracoes', 'chacara'] },
  { media: mediaAssets.centopeiaQuadraNoite, categories: ['atracoes', 'chacara'] },
  { media: mediaAssets.futebolCriancasSquare, categories: ['atracoes', 'chacara'] },
  { media: mediaAssets.quadraRecreacao, categories: ['atracoes', 'chacara'] },
  { media: mediaAssets.brinquedaoVideo, categories: ['atracoes'] },
  { media: mediaAssets.carrosselParqueVideo, categories: ['atracoes'] },
  { media: mediaAssets.carrinhosSalaoVideo, categories: ['atracoes'] },
  { media: mediaAssets.carrinhosCriancas01, categories: ['atracoes', 'festas'] },
  { media: mediaAssets.carrinhosCriancas02, categories: ['atracoes', 'festas'] },
  { media: mediaAssets.carrinhosPista, categories: ['atracoes'] },
  { media: mediaAssets.decoracaoTematicaStar, categories: ['festas', 'decoracao'] },
  { media: mediaAssets.decoracaoEntradaStar, categories: ['decoracao'] },
  { media: mediaAssets.decoracaoTematica, categories: ['decoracao', 'festas'] },
  { media: mediaAssets.decoracaoTematicaVideo, categories: ['decoracao', 'festas'] },
  { media: mediaAssets.decoracaoPatrulhaCaninaVideo, categories: ['decoracao', 'festas'] },
  { media: mediaAssets.entradaDecoradaVideo, categories: ['decoracao'] },
  { media: mediaAssets.entradaSalao, categories: ['decoracao'] },
  { media: mediaAssets.lembrancinhasDecoracaoVideo, categories: ['decoracao'] },
  { media: mediaAssets.mesaPostaStar, categories: ['decoracao', 'buffet'] },
  { media: mediaAssets.mesaPostaVideo, categories: ['decoracao', 'buffet'] },
  { media: mediaAssets.buffetFartura, categories: ['buffet'] },
  { media: mediaAssets.buffetServico, categories: ['buffet'] },
  { media: mediaAssets.menuKids, categories: ['buffet'] },
  { media: mediaAssets.menuCoquetelTabua, categories: ['buffet'] },
  { media: mediaAssets.menuJantarRigatoni, categories: ['buffet'] },
  { media: mediaAssets.menuChurrascoSalada, categories: ['buffet'] },
  { media: mediaAssets.salaoBrinquedaoStar, categories: ['festas', 'chacara'] },
  { media: mediaAssets.salaoInfantil, categories: ['festas'] },
  { media: mediaAssets.salaoMesas01, categories: ['festas'] },
  { media: mediaAssets.salaoMesas02, categories: ['festas'] },
  { media: mediaAssets.salaoConvidados, categories: ['festas'] },
  { media: mediaAssets.salaoCasamento, categories: ['festas'] },
]

export function filterGallery(filter: GalleryFilter): MediaAsset[] {
  if (filter === 'tudo') return galleryEntries.map((e) => e.media)
  return galleryEntries.filter((e) => e.categories.includes(filter)).map((e) => e.media)
}
