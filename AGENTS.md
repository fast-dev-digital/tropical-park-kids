# TROPICAL PARK KIDS — FRONTEND v2 (BUFFET INFANTIL)

Este documento é a especificação mestre da Landing Page da Tropical Park Kids. **Esta é a v2** — um reset completo da direção visual e de copy. Não há mais referência editorial-botânica, "concierge", paleta `forest`/`parchment`/`ember` ou tipografia `Fraunces`/`DM Sans`/`JetBrains Mono`. Esses tokens foram **removidos do projeto**.

---

## 1. IDENTIDADE & POSICIONAMENTO

**Produto-âncora:** buffet infantil em chácara, em Catanduva/SP. Festas de aniversário de criança são o protagonista absoluto.

**Persona principal:** mãe (28–42 anos) de uma criança de 4–10 anos, rolando o site no celular durante o intervalo do trabalho ou à noite. Ela:
- Não lê parágrafos longos. Lê headlines e olha fotos.
- Quer sentir que o lugar é seguro, divertido e que vai "dar conta" da festa do filho dela.
- Decide pelo emocional — "esse é o lugar onde meu filho vai ser feliz" — e justifica pelo racional (estacionamento, segurança, fartura) depois.
- Aciona o WhatsApp em ≤30s de navegação se a primeira dobra acertar.

**Personas secundárias:** noivos (casamento), 15 anos, formandos, RH corporativo, casais em bodas. **Sempre tratadas como ramificações**, nunca como pares da festa infantil.

**Outcome do site:** levar a mãe ao WhatsApp com a mensagem certa no contexto certo, sem ela precisar ler nada.

---

## 2. PALETA v2 (LOGO-DRIVEN)

A logo (`public/logo-tropical.png`) tem letras 3D balão em vermelho ("TROPICAL"), amarelo ("PARK"), verde + azul ("KIDS"), sobre fundo lilás com confetes coloridos. A paleta nova traz essas cores ao site **com curadoria** — uma cor de destaque por seção, no máximo dois acentos visíveis ao mesmo tempo. Não é arco-íris bagunçado.

| Token | Hex | Origem na logo | Uso |
|---|---|---|---|
| `cream` | `#FFF8EC` | Amarelo do fundo, dessaturado | Fundo dominante, calmo e quente |
| `cream-deep` | `#FCEFD0` | Mais saturado | Fundo alternado de seção |
| `sun` | `#FBC02D` | Letras "PARK" | **CTA primário global**, badges, números |
| `sun-deep` | `#E0A810` | | Hover/active do `sun` |
| `coral` | `#E94B3C` | Letras "TROPICAL" | Acento de calor — lidera Hero e Atrações |
| `grass` | `#5BB04B` | Letras "KIDS" verdes | Lidera Diferenciais e Chácara |
| `sky` | `#3DB2E6` | Letras "KIDS" azuis | Lidera Galeria e elementos secundários |
| `grape` | `#7B4DC8` | Fundo lilás | Apenas em momentos celebrativos (CTA final, badges raros) |
| `ink` | `#2B2533` | | Texto corpo (grafite quente, nunca preto puro) |
| `ink-soft` | `#5A5266` | | Texto secundário |
| `ink-mute` | `#9089A0` | | Captions, placeholders |

Cada token tem variantes `*-soft` (pastel) e `*-deep` (escuro) quando útil para backgrounds e hovers — ver `tailwind.config.js`.

**Regra de aplicação:**
- `sun` é a cor de ação. Todo CTA primário usa `bg-sun text-ink`.
- `coral` é o calor humano. Aparece em Hero, Atrações, FinalCTA.
- `grass` e `sky` se alternam em seções pares/ímpares para criar ritmo sem competir.
- `grape` é raro. Use para a seção FinalCTA ou para um único badge celebrativo no site inteiro.

---

## 3. TIPOGRAFIA v2

| Família | Fonte | Pesos | Uso |
|---|---|---|---|
| `font-display` | **Fredoka** (Google Fonts) | 400, 500, 600, 700 | Headlines (H1–H4), CTAs grandes, números de destaque |
| `font-body` | **Nunito** (Google Fonts) | 400, 600, 700, 800 | Parágrafos, UI, navegação |

**Proibido reintroduzir:** Fraunces, DM Sans, JetBrains Mono, Inter, Montserrat, Roboto, Poppins, Open Sans, Lato — e qualquer fonte serif. Esta versão **não tem mono e não tem serif**. Headlines são `font-display font-semibold` (Fredoka 600), não `font-display italic` com eixos variáveis.

**Sem kickers em caixa alta com tracking 0.22em** — esse era o registro editorial. Aqui os kickers são pílulas coloridas arredondadas (`pill-sun`, `pill-coral` etc.) com texto em peso `font-semibold` minúsculo.

---

## 4. DIFERENCIAIS DO BUFFET (FATOS DO NEGÓCIO)

Estes são fatos que aparecem na copy como pilares concretos — não inventar, não ornar.

- **Trenzinho Centopeia** — atração mecânica exclusiva (vagões de tambor iluminados) que circula pelo salão e pela chácara. Nominar como "Centopeia".
- **Bichinhos motorizados de shopping** — Dragão, Banguela, Patrulha Canina.
- **Estacionamento privativo interno** — único buffet da região de Catanduva dentro de uma chácara com estacionamento próprio cercado.
- **Campo de futebol / quadra poliesportiva 12×18m** — área aberta para recreação infantil.
- **Brinquedão tubular interno** e carrossel mecânico.
- **Chácara aberta, com natureza** — fugindo do "galpão fechado" dos concorrentes (mencionar implicitamente, nunca nominar concorrente).
- **Buffet com fartura** — abundância contínua, não economia de insumos.
- **Localização:** Catanduva/SP.
- **WhatsApp comercial:** 5517997756925 (definido em `src/lib/whatsapp.ts`).

---

## 5. ARQUITETURA DE SEÇÕES v2

```
src/components/
├── layout/
│   ├── Header.tsx        # Logo grande, links coloridos, WhatsApp em pílula amarela
│   └── Footer.tsx        # Colorido, links rápidos, redes, endereço, copyright
├── sections/
│   ├── Hero.tsx          # Mídia cheia, headline curta emocional, 2 CTAs
│   ├── QuickPromise.tsx  # 4 ícones em fileira (Sem preocupação, Fartura, Atrações, Equipe)
│   ├── Attractions.tsx   # Cards com vídeo/foto autoplay e nome (Centopeia, bichinhos, etc.)
│   ├── Gallery.tsx       # Galeria filtrável (Tudo/Festas/Atrações/Buffet/Decoração/Chácara) + lightbox
│   ├── EventTypes.tsx    # Festa Infantil em card grande, depois 15 Anos / Casamento / Formatura / Bodas / Corporativo
│   ├── Menus.tsx         # 5 cardápios visuais + disclaimer §7
│   ├── SocialProof.tsx   # Avaliação Google + depoimentos de mães + números agregados
│   ├── Differentials.tsx # Estacionamento, quadra, chácara, fartura, segurança
│   ├── Location.tsx      # Mapa + endereço + horários + CTA visita
│   ├── FAQ.tsx           # Perguntas reais de mãe
│   └── FinalCTA.tsx      # Bloco emocional grande, 2 botões (WhatsApp + Visita)
├── ui/
│   ├── Button.tsx        # Variantes sun (primário), coral (secundário), ghost (terciário)
│   ├── Container.tsx     # Limitador genérico
│   ├── Lightbox.tsx      # Modal para mídias
│   └── MediaFrame.tsx    # Wrapper para img/video com poster
└── cta/
    └── WhatsAppFAB.tsx   # Botão flutuante com mensageria contextual
```

Ordem renderizada em `App.tsx`:

```
Header
Hero
QuickPromise
Attractions
Gallery
EventTypes
Menus
SocialProof
Differentials
Location
FAQ
FinalCTA
Footer
WhatsAppFAB
```

Toda nova seção registra `id` correspondente em `SectionContext` (em `src/lib/whatsapp.ts`) e em `sectionIds` no `WhatsAppFAB`.

---

## 6. PRINCÍPIOS DE COPY

A landing **não** vende pra quem procura preço. Vende pra mãe que quer ver o filho feliz.

**Não-negociáveis:**
- Headlines de no máximo 12 palavras.
- Segunda pessoa: "você", "seu filho", "sua família".
- Concretude antes de abstração: "campo de futebol 12×18", não "estrutura ampla".
- Foto manda mais que texto. Texto suporta a foto, não compete com ela.

**Vocabulário banido (não usar em nenhum arquivo):**
*concierge, experiência memorável, premium, exclusivo, deslumbrante, jornada, curadoria, refinado, sofisticado, inesquecível, editorial, refúgio, charme, elegância, requinte, autoral.*

**Vocabulário permitido e desejado:**
*brincar, sorrir, alegria, abraço, fartura, segurança, tranquilidade, festa, criança, do jeitinho, sem preocupação, cuidar, receber, dia inteiro, gente que ama festa, casa cheia.*

**Tom de referência** (inspirado em Morango Play e Fun Festa):
- *"Aqui a festa é do jeitinho que ele sonhou."*
- *"A gente cuida pra você só curtir."*
- *"Festa de criança boa é assim."*
- *"Casa cheia, mesa farta, criança feliz."*

---

## 7. PROTEÇÃO DE NEGÓCIO (NO-PRICE-LEAK)

**Inalterado da v1.** É proibido renderizar strings com `R$`, valores monetários BR (`\d+,\d{2}`), números com separador de milhar (`\d{1,3}\.\d{3}`) ou os valores conhecidos dos pacotes (4590, 6150, 7955, etc.).

**Disclaimer obrigatório na seção Menus:**
> *"Cada festa é única. Conta pra gente a data e quantas crianças você espera — a gente monta o orçamento do jeitinho da sua festa."*

O script `scripts/check-no-price-leak.mjs` roda no `prebuild` (configurado em `package.json`). Falha o build se encontrar qualquer padrão proibido. Pode ser rodado manualmente com `npm run check:price`. **Não tocar.**

---

## 8. CTA CONTEXTUAL (WHATSAPP FAB)

O `WhatsAppFAB` escuta o viewport via `useActiveSection` (hook em `src/hooks/useActiveSection.ts`). Conforme a seção visível, a URL `wa.me` recebe uma mensagem pré-preenchida diferente. As mensagens vivem em `src/lib/whatsapp.ts` e devem usar o tom de mãe (passos 1 e 6), nunca "concierge".

Exemplos de tom esperado:
- Hero: *"Oi! Vim pelo site e quero saber sobre a festa do meu filho."*
- Attractions: *"Oi! Vi a Centopeia no site — meu filho vai amar. Como faço pra reservar?"*
- Menus: *"Oi! Queria ver as opções de cardápio pra montar a festa."*
- Final: *"Oi! Quero marcar uma visita na chácara."*

---

## 9. MÍDIA E ACESSIBILIDADE

- **Vídeo Hero adaptativo:** `<video muted playsInline autoPlay loop>` com `<source>` WebM e MP4, `media` query para mobile (arquivos `-mobile.mp4/webm`), e `poster` com LQIP (`-lqip.webp`).
- **`prefers-reduced-motion: reduce`:** desativa autoplay de vídeo (mostra `poster`), desativa animações Framer Motion. Usar `usePrefersReducedMotion` (em `src/hooks/usePrefersReducedMotion.ts`).
- **Imagens:** `loading="lazy" decoding="async"` em tudo abaixo da dobra. Hero usa `fetchPriority="high"`.
- **Iframes externos (Google Maps):** lazy-load via `IntersectionObserver`, nunca eager.
- **Alt obrigatório** em toda imagem informativa.
- **Contraste WCAG AA** — validar `sun` sobre `ink` (sim, passa), `cream` sobre `ink` (sim), `coral` sobre `cream` (sim).

---

## 10. FLUXO DE VALIDAÇÃO

Antes de marcar qualquer tarefa como pronta:

1. `npm run check:price` — verde.
2. `npm run build` — verde (inclui `tsc -b && vite build` + `prebuild`).
3. `npm run dev` + checagem visual com `preview_*`:
   - Hero carrega, headline visível em ≤1 viewport mobile (375×667).
   - FAB contextual muda mensagem WhatsApp ao rolar (validar via `href` inspecionado).
   - Galeria filtra e abre lightbox.
   - Mobile não corta texto, hambúrguer aparece em <lg.
   - `prefers-reduced-motion: reduce` desativa animações.
4. **Buscar zero ocorrências do vocabulário banido** no `src/` (grep por "concierge", "editorial", "parchment", "forest", "ember", "Fraunces", "kicker").
5. Screenshots desktop + mobile pra arquivar antes de pedir review do cliente.
