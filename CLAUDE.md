# TROPICAL PARK KIDS - FRONTEND DESIGN SYSTEM & IMPLEMENTATION

Este documento atua como a especificação mestre de design e implementação para a **Vitrine Digital (Landing Page)** da Tropical Park Kids. O agente de IA **deve** usar a skill `/frontend-design` para planejar, validar e executar qualquer alteração na interface, garantindo fidelidade visual e consistência arquitetural.

---

## 1. IDENTIDADE VISUAL & PALETA DE CORES (LOGO-DRIVEN)

A identidade visual é baseada na logo oficial (`public/logo-tropical-park.png`), que apresenta uma estética tridimensional, lúdica e multicolorida (*rainbow/balloon style*). Para manter o posicionamento **Premium (ticket R$ 4.500+)** e a versatilidade para eventos adultos/casamentos, a interface adotará uma abordagem de **Paleta Institucional Dominante** com **Acentos Lúdicos Pontuais**.

### 1.1. Paleta Institucional (Estrutura e Navegação)

* **Verde Tropical (Dominante):** `#0F743A` (Tailwind: `brand-green`) — Utilizado em hovers, ícones de destaque e elementos estruturais secundários.


* **Amarelo Ouro (Conversão/CTA):** `#FBB017` (Tailwind: `brand-gold`) — Cor exclusiva para botões de ação principal (CTA) e elementos de urgência/pulsação.


* **Azul Royal (Tipografia/Contraste):** `#2A549E` (Tailwind: `brand-royal`) — Utilizado para títulos (H1, H2), heros institucionais e seções corporativas.


* **Fundo Base:** `#FFFFFF` (Branco Puro) alternado com `#F8FAFC` (Slate-50) para seções secundárias.


* **Texto Base:** `#1E293B` (Slate-800) para corpo de texto, garantindo legibilidade e contraste mínimos (WCAG AA).



### 1.2. Paleta Lúdica (Acentos Seções Infantis)

As cores vivas da logo devem ser injetadas estritamente em propriedades de hover, ilustrações, badges e nos cards específicos de "Festa Infantil":

* **Coral:** `#FF5A5F` (`playful-coral`)


* **Ciano/Sky:** `#5BC0EB` (`playful-sky`)


* **Verde Limão:** `#9BC53D` (`playful-lime`)



### 1.3. Tipografia (Direção Editorial-Botânica)

A tipografia é protagonista, não decoração. A direção comprometida é uma matéria editorial premium de hotelaria boutique — onde o serif variável puxa o olho, a numeração mono organiza o ritmo, e o sans-serif sustenta o corpo sem competir.

* **Display & Serif Accent:** `Fraunces` (variable serif, Google Fonts) — usar com `font-variation-settings` ajustando `opsz` (9–144) e `SOFT` (0–100). Padrão: `opsz: 144, SOFT: 30` em títulos; `opsz: 144, SOFT: 70` em itálicos enfáticos. Substitui Montserrat E Poiret One — o eixo SOFT do Fraunces já cobre o range tipográfico de impacto + elegância sem duas famílias.


* **Body & UI:** `DM Sans` (Google Fonts) em pesos 400–500. Quente, neutra, não-Inter — escolhida pra evitar o clichê AI-SaaS.


* **Numeração editorial & kickers:** `JetBrains Mono` (pesos 400/500) com `font-feature-settings: 'tnum'`. Usada em numerações de seção ("01 — Atrações"), kickers de caixa alta e detalhes técnicos (capítulos de footer, plates de galeria).


* **Proibição:** Não reintroduzir Inter, Montserrat, Roboto, Poppins, Open Sans, Lato ou qualquer fonte recorrente em landing pages SaaS. A direção é editorial, não corporativa.



---

## 2. DIFERENCIAIS EXCLUSIVOS DO BUFFET (DADOS PARA COPYWRITING)

A cópia e os componentes devem destacar os diferenciais competitivos únicos da chácara que o Ricardo apontou:

* **Estacionamento Próprio e Privativo:** **Único** buffet da região de Catanduva localizado dentro de uma chácara que oferece estacionamento privativo interno (fator decisivo de segurança e comodidade).


* **Infraestrutura de Chácara Ampla:** Espaço físico aberto integrado à natureza, fugindo do formato de "galpão fechado" dos concorrentes.


* **Quadra Poliesportiva / Campo de Recreação:** Área esportiva de **12x18 metros** dedicada à recreação infantil e dinâmica de esportes.


* **Atrações Exclusivas (UAU Factor):**
* **Trenzinho Centopeia:** Atração mecânica exclusiva (vagões de tambor iluminados) que circula pelo salão e chácara, gerando alta experiência e engajamento para crianças e adultos.


* **Bichinhos do Shopping (China Imports):** Animais pelúcia motorizados exclusivos (Dragão, Banguela, Patrulha Canina), trazendo a experiência de shopping para dentro da festa.




* **Serviço por Fartura e Abundância:** Modelo de buffet focado em fartura contínua, diferenciando-se de concorrentes que economizam em insumos.



---

## 3. ARQUITETURA DE COMPONENTES & FLUXO DA LANDING PAGE

A página deve ser construída como uma Single-Page Application (SPA) com navegação fluida por âncoras (scroll).

```
src/components/
├── layout/
│   ├── Header.tsx        # Transparente na Hero -> Blur/Branco com Scroll
│   └── Footer.tsx        # Links âncora, redes sociais, copyright 2026
├── sections/
│   ├── Hero.tsx          # Background de vídeo adaptativo, manchete e CTA primário
│   ├── Structure.tsx     # Grid responsivo de fotos/vídeos com Lightbox nativo
│   ├── EventTypes.tsx    # 4 cards (Infantil, Casamento, Corporativo, 15 anos)
│   ├── Menus.tsx         # Apresentação sofisticada dos 5 cardápios (SEM PREÇOS)
│   └── Location.tsx      # Embed do Google Maps em modo Lazy Load
├── ui/
│   ├── Button.tsx        # Botão reutilizável com variante 'pulse-soft'
│   ├── Container.tsx     # Limitador de largura responsivo padrão
│   └── Lightbox.tsx      # Modal leve para visualização de mídias
└── cta/
    └── WhatsAppFAB.tsx   # Botão flutuante com mensageria contextual

```

---

## 4. REGRAS DE IMPLEMENTAÇÃO MANDATÓRIAS (MÉTODO FAST PRESET)

### 4.1. Proteção de Negócio (No-Price-Leak)

* **Proibição Absoluta:** É terminantemente proibido renderizar strings contendo o caractere `R$`, padrões de moeda brasileiros (`\d+,\d{2}`) ou os valores reais dos pacotes (ex: 4.590, 6.150, 7.955, etc.) nos arquivos da aplicação.


* **Disclaimer Obrigatório na Seção de Menus:** Exibir em destaque o texto: *"Consulte nosso Concierge Digital para obter o orçamento personalizado com base na data do seu evento e número de convidados."*


### 4.2. CTA Contextual Baseado em Visibilidade (Sugestão de Melhoria #1)

O componente `WhatsAppFAB` deve escutar o viewport através de um `IntersectionObserver` ou hook personalizado (`useActiveSection`). Dependendo da seção visível na tela, a URL do WhatsApp (`wa.me`) deve alterar dinamicamente a mensagem pré-preenchida para o Chatwoot receber o lead no contexto correto:

* *Na Seção Hero / Geral:* "Olá! Conheci o buffet pelo site e gostaria de simular um orçamento."


* *Na Seção Structure:* "Olá! Vi as fotos da chácara e da Centopeia, gostaria de agendar uma visita presencial."


* *Na Seção Menus:* "Olá! Gostaria de receber os detalhes dos 5 cardápios disponíveis para o meu evento."



### 4.3. Vídeo Adaptativo e Otimização de Mídia (Sugestão de Melhoria #2)

* O componente `Hero.tsx` deve renderizar um elemento `<video>` com propriedades `muted playInline autoPlay loop`.


* Deve conter duas tags `<source>` internas (WebM e MP4) com tratamento de `media` query para carregar arquivos mais leves em dispositivos móveis.
* Uso obrigatório de uma imagem borrada de baixa qualidade (LQIP) como atributo `poster` para evitar quebras visuais e flashes brancos durante a renderização inicial do vídeo, otimizando o LCP.



### 4.4. Acessibilidade e Redução de Movimento

* Se o usuário possuir a flag `prefers-reduced-motion: reduce` ativa no sistema operacional, o vídeo do Hero deve ser automaticamente substituído por uma imagem estática (`src/assets/hero.png`), e as animações do Framer Motion devem ser desativadas. Utilize o hook `usePrefersReducedMotion.ts` para esta validação.



---

## 5. FLUXO DE VALIDAÇÃO DO AGENTE DE IA

O agente de IA deve rodar `npm run build` e certificar-se de que o empacotamento do Vite ocorre sem erros. Nenhuma menção a preços deve passar pelas validações de lint adotadas para o projeto.

O script `scripts/check-no-price-leak.mjs` é executado automaticamente no `prebuild` (configurado em `package.json`). Ele falha o build se encontrar `R$`, valores monetários no formato BR (`\d+,\d{2}`), números com separador de milhar (`\d{1,3}\.\d{3}`) ou os valores conhecidos dos pacotes do cliente (4590, 6150, 7955, etc.). Pode ser rodado manualmente com `npm run check:price`.

---

## 6. POSICIONAMENTO DE COPYWRITING (FILTRO POR EXPERIÊNCIA)

A landing page **não** vende festa para quem procura preço. Vende para quem se importa com uma **festa inesquecível**. Toda copy escrita ou reescrita pelo agente deve respeitar este princípio.

### 6.1. Princípios não-negociáveis

* **Linguagem aspiracional, não funcional.** Em vez de "infraestrutura completa para festas", escrever "o tipo de festa que a turma da escola comenta por meses".
* **Diferencial como protagonista.** Trenzinho Centopeia, bichinhos motorizados, estacionamento privativo, quadra 12x18, chácara aberta e fartura — apresentar como ESTRELAS, não como bullets escondidos.
* **Comparação implícita com galpão.** Quando relevante, posicionar a chácara em contraste com o "galpão fechado" do concorrente — sem nominar concorrente.
* **CTA sempre orientado a experiência.** "Agendar visita guiada", "Quero essa experiência no meu evento", "Solicitar orçamento personalizado" — nunca "Ver preços", "Tabela de valores", "Pacotes a partir de".
* **Disclaimer §4.1 obrigatório em Menus.** O texto literal "Consulte nosso Concierge Digital para obter o orçamento personalizado com base na data do seu evento e número de convidados." deve permanecer visível na seção de cardápios.

### 6.2. Ordem oficial das seções

```
Header
Hero
ExclusiveAttractions   (Trenzinho Centopeia + Bichinhos do Shopping)
Differentials          (Estacionamento, Quadra 12x18, Chácara aberta, Fartura)
Structure              (Galeria + Lightbox)
EventTypes             (4 cards aspiracionais)
Menus                  (5 cardápios + disclaimer)
TrustBadges            (números agregados — eventos, anos, quadra, concierge)
FAQ                    (perguntas de filtro premium, sem valores)
Location               (Maps lazy, info, CTA)
Footer
WhatsAppFAB            (mensagens contextuais por seção)
```

Mudanças nesta ordem exigem atualização do `useActiveSection` consumido pelo `WhatsAppFAB` e do dicionário em `src/lib/whatsapp.ts`.

### 6.3. Verificação rápida pré-merge

1. `npm run check:price` retorna verde.
2. Toda nova animação Framer Motion passa por `usePrefersReducedMotion`.
3. Toda nova seção registra `id` correspondente em `SectionContext` (`src/lib/whatsapp.ts`) e em `sectionIds` (`src/components/cta/WhatsAppFAB.tsx`).
4. Toda nova imagem usa `loading="lazy" decoding="async"`. Iframes externos (Maps) são carregados sob demanda via `IntersectionObserver`.

---

## 7. DIREÇÃO VISUAL (EDITORIAL-BOTÂNICA)

A landing **não** é uma página de SaaS premium. É uma matéria editorial sobre uma chácara — referências mentais: Aman Resorts, Babylonstoren, Singita, Kinfolk, Cereal Magazine.

### 7.1. O que evitar (cara de IA)

* Cards com `rounded-2xl` / `rounded-3xl`, gradientes coloridos suaves e shadows genéricas
* Ícones Lucide dentro de quadrados tintados (`bg-brand-x/10 text-brand-x`)
* Botões pill-shaped com `animate-pulse-soft`
* Eyebrow pills de cor sólida com texto branco
* Paleta azul royal de fundo institucional
* Section titles centrados em "Eyebrow / Título / Subtítulo" padrão SaaS
* Mais de uma cor de destaque competindo na mesma tela

### 7.2. O que praticar

* **Hairlines** (`border-t border-ink/15`) em vez de cards. Listas numeradas em vez de grids de cards.
* **Numeração editorial** em mono (`01`, `02`, `03`) em todas as seções e CTAs principais.
* **EditorialMark** (`src/components/ui/EditorialMark.tsx`) como cabeçalho padrão de seção — número + kicker + título serifa com itálico expressivo.
* **Paleta:** `parchment` (`#F5EFE3`) e `parchment-deep` como fundos dominantes; `forest` (`#1F3A2B`) como tinta institucional; `ember` (`#B47A2E`) como acento único e raro; `brand-gold` (`#FBB017`) só em momentos genuinamente celebrativos.
* **Tipografia gestual:** Fraunces com itálico variável (eixo SOFT 70) para palavras-chave dentro dos títulos serifa — não negrito, não maiúscula.
* **Animações refinadas:** entrada `fade-up` com `cubic-bezier(0.2,0.65,0.3,1)`, duração 0.7–0.9s. Sem pulse, sem bounce, sem hover dramático.
* **Componentes assimétricos:** grids 12-col com offsets, citações editoriais em itálico ocupando metade da largura, áreas de foto com aspect-ratio variado.

### 7.3. Hierarquia de cores

| Token | Hex | Uso |
|-------|-----|-----|
| `parchment` | `#F5EFE3` | Fundo dominante |
| `parchment-deep` | `#EBE2CE` | Fundo secundário, alternado |
| `forest` | `#1F3A2B` | Tinta institucional, fundos contrastantes, botões sólidos |
| `forest-deep` | `#142519` | Hover do forest |
| `ink` | `#1A1F1A` | Texto corpo |
| `ink-soft` | `#2F3A30` | Parágrafos largos |
| `ink-muted` | `#5B665D` | Captions, kickers, mono |
| `ember` | `#B47A2E` | Acento único e raro — numeração de destaque, badge |
| `brand-green` / `brand-gold` / `brand-royal` | spec original | **Reservado**. Só usar se a spec original §1.1 exigir explicitamente. |