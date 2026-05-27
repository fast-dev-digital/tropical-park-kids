# TROPICAL PARK KIDS — FRONTEND v2.2 (ESTEIRA VISUAL MOBILE-FIRST)

A v2.2 evolui a v2.1 com **reorganização radical de fluxo**: a landing deixa de
ser uma sequência de seções tradicionais (atrações, diferenciais, depoimentos,
cardápios…) e passa a ser uma **esteira visual em capítulos**, pensada para a
persona ansiosa que escaneia o site no celular em poucos segundos.

A regra mestra continua sendo o **gatilho de descoberta**: o site mostra "o
quê" (estrutura, atrações em movimento, comida), mas esconde "quanto", "como
funciona em detalhe" e "como reservar exatamente". Quem quiser saber, chama no
WhatsApp.

---

## 1. IDENTIDADE & POSICIONAMENTO

- **Produto:** complexo de eventos em Catanduva/SP, com **festa infantil como
  especialidade**. Eventos adultos (15 anos, casamento, formatura,
  corporativo) seguem como vertentes da mesma estrutura.
- **Posicionamento:** **Complexo de Eventos** / **Chácara Premium** /
  **Estrutura Exclusiva**. Nunca "Chácara" sozinho em copy de venda.
- **Persona:** organizador (mãe, noivo, RH) ansioso, **escaneando o site no
  celular**. Decide pelo visual, complementa pelo skim de FAQ/opcionais, aciona
  WhatsApp por curiosidade.
- **Outcome:** o usuário rola, vê os capítulos passarem, e **abre o WhatsApp
  para descobrir o que não foi entregue mastigado** (datas, valores, encaixes).

---

## 2. PALETA (INALTERADA)

| Token | Hex | Uso |
|---|---|---|
| `cream` / `cream-deep` | `#FFF8EC` / `#FCEFD0` | Fundo dominante e alternado |
| `sun` / `sun-deep` / `sun-soft` | `#FBC02D` / `#E0A810` / `#FFE08A` | CTA primário, badges, Cap. 03 Gastronomia |
| `coral` / `coral-deep` / `coral-soft` | `#E94B3C` / `#C73828` / `#FBC4BE` | Hero, Cap. 02 Atrações, FinalCTA |
| `grass` / `grass-deep` / `grass-soft` | `#5BB04B` / `#3F8830` / `#C1E5B9` | Cap. 05 Ar livre, EventTypes |
| `sky` / `sky-deep` / `sky-soft` | `#3DB2E6` / `#1E8AB8` / `#BDE4F4` | Cap. 01 Entrada |
| `grape` / `grape-deep` / `grape-soft` | `#7B4DC8` / `#5A33A0` / `#D7C7F1` | Cap. 04 Decoração, Opcionais, Hero bg |
| `ink` / `ink-soft` / `ink-mute` | `#2B2533` / `#5A5266` / `#9089A0` | Texto |

Regra continua: **uma cor de destaque por seção**. Na esteira de capítulos a
cor varia entre `sky → coral → sun → grape → grass` em sequência, criando
ritmo cromático sem competir.

---

## 3. TIPOGRAFIA

| Família | Fonte | Pesos | Uso |
|---|---|---|---|
| `font-display` | **Fredoka** | 400, 500, 600, 700 | H1–H4, números de capítulo, CTAs, badges |
| `font-body` | **Nunito** | 300, 400, 600, 700, 800 | Parágrafos, UI |

O efeito "premium minimal" vem de **menos texto e mais espaço em branco**, não
de fonte serif/condensada. Fredoka arredondada é parte da identidade kids.

**Proibido reintroduzir:** Fraunces, DM Sans, JetBrains Mono, Inter, Montserrat,
Roboto, Poppins, Open Sans, Lato, Poiret One, qualquer serif.

---

## 4. DIFERENCIAIS DO BUFFET (FATOS DE NEGÓCIO)

- **Trenzinho Centopeia** — atração mecânica exclusiva.
- **Bichinhos motorizados estilo shopping** — Dragão, Banguela, Patrulha Canina.
- **Estacionamento privativo interno** — único da região (destaque no Cap. 01).
- **Quadra poliesportiva 12×18 m**.
- **Brinquedão tubular interno** e carrossel mecânico.
- **Estrutura integrada à natureza**.
- **Gastronomia farta**.
- **Localização:** Catanduva/SP.
- **WhatsApp:** `5517997756925` (em `src/lib/whatsapp.ts`).

---

## 5. ARQUITETURA DE SEÇÕES v2.2

```
src/components/
├── layout/
│   ├── Header.tsx        # Nav: Entrada · Atrações · Gastronomia · Eventos · Onde estamos
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx          # Bg lilás + logo transparente, H1 em 2 linhas, CTA "Agendar visita"
│   ├── Chapters.tsx      # ⭐ ESTEIRA VISUAL — renderiza os 5 capítulos de chapters.ts
│   ├── EventTypes.tsx    # Tira horizontal compacta: foto + nome (sem hooks, sem body)
│   ├── Opcionais.tsx     # Chips de descoberta → cada chip abre WhatsApp com pergunta
│   ├── FAQ.tsx           # Acordeão, respostas em 1 frase
│   ├── Location.tsx      # Mapa + endereço + InfoRow
│   └── FinalCTA.tsx      # Logo + headline curta + Agendar visita / Ver localização
├── ui/
│   ├── Button.tsx        # variants: sun, coral, ghost, white
│   ├── Container.tsx
│   └── MediaFrame.tsx
└── cta/
    └── WhatsAppFAB.tsx   # Botão flutuante com bubbles de ação
```

Ordem renderizada em `App.tsx`:

```
Header → Hero → Chapters → EventTypes → Opcionais → FAQ → Location → FinalCTA
       → Footer → WhatsAppFAB
```

### 5.1 Esteira de capítulos (`Chapters.tsx` + `data/chapters.ts`)

Cada capítulo é uma `<section>` com `id` próprio (`entrada`, `atracoes`,
`gastronomia`, `decoracao`, `campo`) — para o FAB contextual e o menu
funcionarem. Estrutura interna:

1. **Header do capítulo:** número grande colorido (`01`, `02`…) + kicker "Capítulo" + título em 1 palavra
2. **Mídia hero** (full-width, aspect 16:10 desktop / 3:4 mobile)
3. **Sobreposição inferior** sobre a hero: 1 frase + chip "Descobrir mais" → WhatsApp
4. **Grid de apoio** (2 cols mobile, 3-4 cols desktop, aspect 3:4)

Sequência atual:
- **Cap. 01 — Entrada** (sky) — estacionamento + fachada
- **Cap. 02 — Atrações** (coral) — Centopeia + bichinhos + carrossel
- **Cap. 03 — Gastronomia** (sun) — mesa posta + buffet em serviço + doces
- **Cap. 04 — Decoração** (grape) — temática, Patrulha Canina, lembrancinhas
- **Cap. 05 — Ar livre** (grass) — campo, quadra, Centopeia ao ar livre

### 5.2 Opcionais (`Opcionais.tsx` + `data/opcionais.ts`)

Chips arredondados em flex-wrap. Cada chip = nome do opcional + seta. Click
abre WhatsApp com pergunta específica (`buildWhatsAppUrlFromText`). **Não
detalhar nada** — esse é o ponto do gatilho de descoberta.

---

## 6. PRINCÍPIOS DE COPY v2.2

- **Headlines:** 1–4 palavras. Frases nominais ("Atrações.", "Gastronomia.").
- **Microcopy de capítulo:** 1 frase, máximo 8 palavras.
- **Opcionais:** label de 2–3 palavras, sem explicação.
- **CTAs primários:** **Agendar visita** / **Conhecer espaço** / **Descobrir
  mais** / **Saber mais** / **Solicitar proposta**.

**Vocabulário banido:**
*concierge, premium-experience, deslumbrante, jornada, curadoria, refinado,
sofisticado, inesquecível, editorial, refúgio, charme, requinte, autoral,
lembrar pra sempre, se lembrar, vai lembrar, vão se lembrar, Fazer orçamento
agora.*

**Vocabulário permitido:**
*complexo, estrutura, exclusivo (só aplicado a atrações), descobrir, conhecer,
agendar, visita, proposta, sob medida, integrado.*

---

## 7. PROTEÇÃO DE NEGÓCIO — NO-PRICE-LEAK

É proibido renderizar `R$`, valores monetários BR (`\d+,\d{2}`), separador de
milhar (`\d{1,3}\.\d{3}`) ou os valores conhecidos.

**O gatilho de descoberta da v2.2 depende da ausência de preço E de cobertura
incompleta dos detalhes operacionais.** O usuário olha as fotos, vê os
opcionais, e *precisa* chamar pra fechar a história.

**Disclaimer atual (em Menus, embora a section tenha sido removida o texto
continua válido para reuso):**
> *"Cada evento é único. Conte sobre a data e o número de convidados —
> preparamos a proposta sob medida."*

`scripts/check-no-price-leak.mjs` roda no `prebuild`. **Não tocar.**

---

## 8. CTA CONTEXTUAL (WHATSAPP FAB)

`WhatsAppFAB` escuta o viewport via `useActiveSection` em
`sectionIds: ['hero', 'entrada', 'atracoes', 'gastronomia', 'decoracao',
'campo', 'events', 'opcionais', 'faq', 'location', 'final']`. Cada id resolve
em uma mensagem diferente em `src/lib/whatsapp.ts`.

**Bubbles flutuantes (verbos de ação):**
*"Descubra os detalhes" · "Pergunte sobre datas" · "Veja como funciona" ·
"Solicite a proposta" · "Marque uma visita" · "Tire suas dúvidas"*

**Mensagens contextuais (extrato):**
- `hero`: *"Olá! Vim pelo site e quero conhecer o complexo."*
- `atracoes`: *"Olá! Quero saber mais sobre a Centopeia e os bichinhos motorizados."*
- `gastronomia`: *"Olá! Quero conhecer as opções de gastronomia."*
- `opcionais`: *"Olá! Quero saber sobre os opcionais para incrementar o evento."*

Para chips com pergunta livre (Opcionais), usa
`buildWhatsAppUrlFromText(text)` em vez do `buildWhatsAppUrl(section)`.

---

## 9. MÍDIA E ACESSIBILIDADE

- **Vídeos** em capítulos: `autoPlay muted loop playsInline`, desativados
  quando `prefers-reduced-motion: reduce`.
- **Imagens** lazy + decoding async em tudo abaixo da dobra. Hero usa
  `fetchPriority="high"`.
- **Iframes externos (Google Maps):** lazy via `IntersectionObserver`.
- **Alt obrigatório**, contraste WCAG AA.
- **Asset placeholders:** todos os nós de mídia com `// TODO: ASSET REAL`
  marcam onde o Drive do Ricardo precisa entrar. Procurar especialmente:
  - Fachada + estacionamento privativo (Cap. 01)
  - Vídeo em movimento da Centopeia ao vivo (Cap. 02)
  - Vídeos dos bichinhos motorizados estilo shopping (Cap. 02)

---

## 10. FLUXO DE VALIDAÇÃO

1. `npm run check:price` — verde.
2. `npm run build` — verde (`tsc -b && vite build` + `prebuild`).
3. `npm run dev` + checagem visual mobile 375×667:
   - Hero: H1 em 2 linhas, CTA **Agendar visita** acima da dobra.
   - Chapters: scrollar os 5 capítulos, vídeos rodando, chip "Descobrir mais"
     no canto inferior direito do hero de cada capítulo.
   - EventTypes: tira horizontal funciona em 2 colunas mobile.
   - Opcionais: chips abrem WhatsApp com pergunta única (inspecionar `href`).
   - FAB contextual altera o `href` ao rolar entre os capítulos.
   - `prefers-reduced-motion: reduce` desativa vídeos e animações.
4. **Grep zero ocorrências** em `src/`:
   *concierge, editorial, parchment, forest, ember, Fraunces, kicker,
   "se lembrar", "vão lembrar", "Fazer orçamento", Poiret, font-poiret.*
5. Screenshots desktop + mobile arquivados antes do review do cliente.

---

## 11. HISTÓRICO DE PIVOTS

- **v1** (descartada): editorial-botânica, paleta forest/parchment, fontes
  Fraunces/DM Sans, tom concierge. Reprovada — "fria, IA genérica".
- **v2**: reset logo-driven (paleta vibrante kids, Fredoka+Nunito). Aprovada
  visualmente mas ainda com copy explicativa demais.
- **v2.1**: minimalist discovery — copy enxuta, kickers caps tracking,
  "Complexo de Eventos" no lugar de "Chácara", CTAs "Agendar visita". Fonte
  Poiret One tentada e revertida (cliente quis manter Fredoka).
- **v2.2** (atual): esteira visual em capítulos. Remove QuickPromise,
  Differentials, SocialProof, Menus, Gallery, Attractions tradicionais — todos
  consolidados em `Chapters`. Adiciona `Opcionais` com chips de descoberta.
  EventTypes vira tira horizontal. Fluxo agora é cinema, não brochura.
