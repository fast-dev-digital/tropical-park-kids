import { mediaAssets, type MediaAsset } from './media'

export type Chapter = {
  id: string
  number: string
  label: string
  // 1 mídia hero por capítulo + 2-4 mídias de apoio em grid
  hero: MediaAsset
  // Hero alternativo pra mobile. Quando definido, substitui o hero no breakpoint < md.
  // Útil quando o vídeo funciona melhor que a foto no celular (mais movimento).
  heroMobile?: MediaAsset
  support: MediaAsset[]
  // Microfrase opcional. Cada capítulo carrega 0 ou 1 frase — nunca parágrafo.
  whisper?: string
  // Cor de acento do capítulo (chip + linha decorativa)
  accent: 'coral' | 'sun' | 'grass' | 'sky' | 'grape'
}

// A esteira visual é o coração da v2.2.
// Cada capítulo é uma vitrine: mídia hero domina, apoios complementam, copy quase zero.
// TODO: ASSET REAL — Ricardo vai enviar fotos da fachada/estacionamento + vídeos curtos da
// Centopeia e dos bichinhos motorizados em movimento. Substituir as mídias placeholder
// abaixo conforme o Drive for liberado.
export const chapters: Chapter[] = [
  {
    id: 'entrada',
    number: '01',
    label: 'Entrada',
    // TODO: ASSET REAL — fachada do complexo + estacionamento privativo (foto aérea ou
    // panorâmica do portão). Hoje usa decoração da entrada do salão como aproximação.
    hero: mediaAssets.entradaSalao,
    // Mobile prioriza vídeo da entrada decorada (mais movimento que a foto do hall).
    heroMobile: mediaAssets.entradaDecoradaVideo,
    support: [
      mediaAssets.decoracaoFazendinhaAzul,
      mediaAssets.entradaFazendinha,
      mediaAssets.decoracaoFazendinhaDoces,
      mediaAssets.salaoInfantil,
    ],
    whisper: 'O MELHOR DA REGIÃO!',
    accent: 'sky',
  },
  {
    id: 'atracoes',
    number: '02',
    label: 'Atrações',
    // TODO: ASSET REAL — vídeo em movimento da Centopeia circulando ao vivo.
    hero: mediaAssets.centopeiaSalaoStar,
    support: [
      mediaAssets.carrosselParqueVideo,
      mediaAssets.brinquedaoVideo,
      // TODO: ASSET REAL — vídeo dos bichinhos motorizados (Dragão, Banguela, Patrulha)
      // estilo shopping em movimento. Hoje usa fotos estáticas dos carrinhos.
      mediaAssets.carrinhosSalaoVideo,
      mediaAssets.centopeiaQuadraNoite,
    ],
    whisper: 'Centopeia, bichinhos motorizados, brinquedão.',
    accent: 'coral',
  },
  {
    id: 'gastronomia',
    number: '03',
    label: 'Gastronomia',
    hero: mediaAssets.mesaPostaStar,
    support: [
      mediaAssets.buffetFartura,
      mediaAssets.buffetServico,
      mediaAssets.menuKids,
      mediaAssets.menuCoquetelTabua,
    ],
    whisper: 'Servimos até o último convidado.',
    accent: 'sun',
  },
  {
    id: 'decoracao',
    number: '04',
    label: 'Decoração',
    hero: mediaAssets.decoracaoTematicaStar,
    support: [
      mediaAssets.decoracaoTematicaVideo,
      mediaAssets.decoracaoPatrulhaCaninaVideo,
      mediaAssets.lembrancinhasDecoracaoVideo,
      mediaAssets.salaoMesas01,
    ],
    whisper: 'Tema, mesa e lembrancinha — sob medida.',
    accent: 'grape',
  },
  {
    id: 'campo',
    number: '05',
    label: 'Ar livre',
    // Trocado de futebolCriancasVideo (qualidade ruim + bordas Reels) pra
    // quadraRecreacao (landscape limpo). Ambos com cropScale 1.12-1.18.
    hero: mediaAssets.quadraRecreacao,
    support: [
      mediaAssets.centopeiaChacara,
      mediaAssets.centopeiaQuadraNoite,
      mediaAssets.futebolCriancasSquare,
    ],
    whisper: 'Quadra 12×18 e área externa integrada.',
    accent: 'grass',
  },
]
