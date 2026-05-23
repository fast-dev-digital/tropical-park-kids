# LANDING_PAGE.md - ESPECIFICAÇÃO TÉCNICA UI/UX

## 1. VISÃO GERAL DO FRONTEND

O objetivo é desenvolver uma Landing Page (LP) de alta performance, visualmente *premium* e extremamente persuasiva para a **Tropical Park Kids**. O foco principal é gerar desejo pelas instalações físicas e brinquedos da chácara, justificando o ticket elevado de R$ 4.500,00+, **sem nunca exibir preços**.

### Diretrizes de Design

* **Estilo:** Moderno, Clean, Confiável, Exclusivo. Deve equilibrar a alegria de um buffet infantil com a elegância necessária para casamentos e eventos corporativos.
* **Objetivo de Conversão (CTA):** 100% focado em clique para o WhatsApp do Concierge Digital.
* **Regra de Negócio Crucial (CSS/JS):** Nenhum valor monetário ou preço de cardápio deve estar presente no código fonte, textos ou atributos alt.

---

## 2. PALETA DE CORES (EXTRAÍDA DA LOGO)

Utilizar a logo anexada (`logo-tropical.png`) como fonte primária para a paleta de cores. A LP deve usar as seguintes referências cromáticas via Tailwind CSS config:

### Cores Principais (Marca)

* **Verde Tropical (Dominante):** `#0F743A` (Baseado nas palmeiras/árvores da logo). Utilizar para Hovers, Botões Secundários, Ícones de destaque e bordas sutis.
* **Amarelo Ouro (Acento):** `#FBB017` (Baseado no sol/arco da logo). Utilizar para o CTA Principal (`pulse`), bordas de componentes ativos e destaques de texto.
* **Azul Royal (Acento/Confiabilidade):** `#2A549E` (Baseado no texto 'Tropical Park' da logo). Utilizar para Títulos principais (H1/H2) e fundos de seções institucionais.

### Cores de Suporte (UI Base)

* **Fundo (Base):** `#FFFFFF` (Puro) ou `#F8FAFC` (Slate-50) para seções alternadas.
* **Texto (Corpo):** `#1E293B` (Slate-800) para garantir alta legibilidade.
* **Texto (Suporte):** `#64748B` (Slate-500) para descrições sutis.

---

## 3. TIPOGRAFIA (HIEARQUIA)

A LP deve usar uma combinação moderna de fontes via Google Fonts integrada ao Tailwind config:

* **Títulos (H1, H2, H3):** `Montserrat` (ou similar Geometric Sans-Serif: `Poiret One` para um toque mais *premium* em H1). Peso 700+.
* *Uso:* Títulos de seções, Hero H1.


* **Corpo e UI (P, Span, Buttons):** `Inter` ou `Open Sans`. Peso 400 (corpo), 600 (semibold).
* *Uso:* Descrições, tabelas institucionais, botões.



---

## 4. ESTRUTURA DA LANDING PAGE (COMPONENTES REACT)

A LP será composta pelos seguintes componentes React independentes e componentizados via Tailwind:

### 4.1. Header (Navigation)

* **Estilo:** Transparente em cima da Hero, fixo no topo com fundo branco (`backdrop-blur`) após scroll.
* **Elementos:** Logo à esquerda (otimizada para Web), Menu de navegação à direita (Estrutura, Cardápios, Eventos, Localização, Contato - tudo âncora para scroll).
* **CTA:** Botão 'Orçamento 24h' (Amarelo Ouro com pulsão discreta).

### 4.2. Hero Section (First Fold)

* **Estilo:** Full-height com background-video de alta qualidade da chácara ou carrossel de fotos *premium* em loop. Overlay gradiente para garantir leitura do texto.
* **Texto H1:** "Sua Chácara Exclusiva para Eventos Inesquecíveis em Catanduva."
* **Subtexto:** "Infraestrutura completa, brinquedos modernos e 5 cardápios exclusivos para Casamentos, 15 Anos, Infantil e Corporativo."
* **CTA:** Botão grande 'Conhecer Estrutura' (Amarelo Ouro).

### 4.3. Seção "A Estrutura" (Galeria de Mídia)

* **Estilo:** Grid dinâmico de fotos e vídeos otimizados.
* **Elementos:** Foco nos brinquedos de grande porte, salão coberto, área verde e banheiros institucionais de alto padrão. lightbox/modal para visualização ampliada.

### 4.4. Seção "Tipos de Eventos"

* **Estilo:** Cards responsivos (4 em Desktop, 1 em Mobile) utilizando ícones vetoriais.
* **Cards:** Casamentos, Festa Infantil (destaque para brinquedos), 15 Anos/Adulto, Corporativo/Formaturas.

### 4.5. Seção "Cardápios" (Institucional, Sem Preço)

* **Estilo:** Background Slate-50. Título H2 'Nossas Opções Gastronômicas'.
* **Elementos:** Listagem dos **5 nomes dos cardápios** com descrição resumida e sofisticada dos tipos de pratos/serviço (ex: Coquetel Premium, Jantar Franco-Americano, Churrasco Gourmet).
* **Regra crucial:** Incluir aviso sutil: "*Solicite o orçamento completo ao nosso Concierge Digital para valores baseados na sua data.*"

### 4.6. Footer

* **Elementos:** Logo secundária, Links de Navegação rápida, Informações de Localização (Mapa sutil do Google integrado), Ícones de Redes Sociais, e Copyright: "Copyright © 2026 Tropical Park Kids. Todos os direitos reservados. Desenvolvido por Fast Development."

---

## 5. DIRETRIZES DE COMPORTAMENTO PARA A IA CODING AGENT

Ao codar esta LP, priorize a criação de componentes atômicos e reutilizáveis em React/Tailwind. Garanta que a página seja **mobile-first**. Implemente técnicas de `lazy-loading` para a galeria de vídeos e fotos, garantindo que o LCP (Largest Contentful Paint) seja baixo. Utilize meta-tags dinâmicas e estrutura semântica H1/H2/H3 focada em SEO regional: ex: `<h2>Buffet Infantil Premium em Catanduva e região</h2>`.
