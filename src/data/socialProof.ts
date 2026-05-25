export type SocialProofItem = {
  id: string
  label: string
  text: string
}

export const socialProofItems: SocialProofItem[] = [
  {
    id: 'visita',
    label: 'Visita guiada',
    text: 'A decisão fica mais simples quando a família caminha pela chácara e entende o tamanho real da estrutura.',
  },
  {
    id: 'experiencia',
    label: 'Experiência real',
    text: 'Centopeia, quadra, salão e buffet aparecem juntos no mesmo evento, sem depender de estrutura terceirizada.',
  },
  {
    id: 'criterio',
    label: 'Critério de escolha',
    text: 'A página não exibe avaliações sem origem confirmada; a visita guiada segue como a principal prova antes da contratação.',
  },
]
