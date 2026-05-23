# CONTEXT.md - ECOSSISTEMA DE VENDAS TROPICAL PARK KIDS

## 1. VISÃO GERAL DO PROJETO & CONTEXTO DA EMPRESA

A **Fast Development** está desenvolvendo um ecossistema digital de alta performance para a **Tropical Park Kids**, um buffet de eventos e chácara de alto padrão (Premium) localizado na região de Catanduva - SP.

### O Problema Comercial

* O cliente possui um ticket médio elevado (mínimo de **R$ 4.500,00** por evento) quando comparado à concorrência regional, que costuma praticar leilão de preços na faixa de R$ 3.500,00.


* O tempo do proprietário (Ricardo) estava sendo consumido por leads desqualificados ou curiosos que buscavam apenas o menor preço.


* O cliente teve uma experiência prévia frustrante com uma automação legada (bot de fluxograma rígido) que sofria com instabilidade e gerava perda de dados/mensagens ("mensagens que não chegavam").



### A Solução Proposta

Uma abordagem integrada dividida em duas camadas complementares:

1. 
**Vitrine Digital (Landing Page):** Um site de altíssima conversão visual focado em gerar percepção de valor e desejo pelas instalações físicas e brinquedos da chácara, com a regra estrita de **não exibir preços publicamente**.


2. 
**Concierge de IA (WhatsApp Automation via WABA + Chatwoot):** Um agente inteligente baseado em IA generativa (e não em fluxos numéricos engessados) que processa regras de precificação altamente dinâmicas, qualifica o lead e agenda visitas presenciais.



---

## 2. STACK TECNOLÓGICA E INTEGRAÇÕES

* **Frontend (Landing Page):** React, TypeScript e Tailwind CSS (Padrão Fast Development de alta performance e SEO focado em buscas geo-localizadas).
* **Engine de Automação / Orquestração:** n8n.
* 
**Infraestrutura de Mensageria:** API Oficial do WhatsApp (WABA) integrada via Chatwoot para interface de transbordo humano.


* **Base de Conhecimento / Logs:** Supabase para persistência de dados das conversas e histórico de leads para evitar qualquer perda de informação.

---

## 3. ESPECIFICAÇÕES DA LANDING PAGE (VITRINE DIGITAL)

O objetivo principal da página é filtrar o público por qualidade visual e forçar a conversão de clique para o WhatsApp.

### Seções Obrigatórias:

* **Hero Section:** Proposta de valor clara com foco na exclusividade, infraestrutura da chácara e transformação de eventos em experiências inesquecíveis.
* 
**Galeria de Mídia de Alta Resolução:** Seção dinâmica otimizada para carregar vídeos e fotos com foco na chácara decorada e no catálogo de brinquedos modernos de grande porte.


* 
**Módulo de Segmentação:** Apresentação visual dos tipos de eventos atendidos (Casamentos, Festas Infantis, Festas de Adulto, Confraternizações Corporativas, Formaturas, Seminários).


* 
**Regra de Negócio Crucial (No Price Tag):** Nenhum valor monetário ou preço de cardápio deve ser exposto no código ou na interface pública. O único caminho para obter orçamento é o clique no botão flutuante/ações de CTA.


* 
**CTA Principal:** Direcionamento direto via link personalizado para o WhatsApp do Concierge de IA.



---

## 4. ENGENHARIA DA IA (CONCIERGE DE WHATSAPP)

O agente de IA precisa agir como um consultor de vendas refinado, simpático e filtrador. Ele deve seguir a jornada de qualificação abaixo sem parecer um robô mecânico de menus numéricos.

### Fluxo Lógico de Atendimento:

1. **Saudação Contextual:** Identificar o período do dia, saudar o cliente pelo nome e introduzir-se como o Concierge Digital da Tropical Park Kids.
2. 
**Identificação do Evento (Qualificação Básica):** Descobrir qual o tipo de festa o lead deseja realizar (Infantil, 15 Anos, Adulto, Casamento, Corporativo, Formatura, Seminário).


3. 
**Mídia Contextual Dinâmica:** Assim que o cliente indicar o tipo de festa, a IA deve disparar um link/vídeo ou foto específico daquela modalidade de evento para engajamento imediato.


4. 
**Dimensionamento do Evento:** Coletar a quantidade estimada de convidados, dividindo obrigatoriamente em **Número de Adultos** e **Número de Crianças**.


* 
*Nota de Configuração:* A IA deve usar como base os pacotes padrão da chácara para ancorar a conversa: **40 adultos + 25 crianças**, **60 adultos + 25 crianças**, **80 adultos + 25 crianças**, ou formatos customizados acima disso.




5. 
**Verificação de Reconhecimento:** Perguntar se o lead já conhece a estrutura física da chácara. Se não conhecer, reforçar o convite para uma visita sem compromisso.



### Matriz de Precificação Complexa (Core Logic do Prompt da IA)

A IA terá acesso a uma base de dados interna com **5 cardápios distintos**, onde cada cardápio possui regras de preços flutuantes baseadas na data pretendida. O prompt deve cruzar três variáveis para formular o orçamento:

* 
**Variação 1 (Dias Úteis):** Eventos ocorridos de segunda a quinta-feira (Menor tarifa).


* 
**Variação 2 (Transição):** Eventos ocorridos nas sextas-feiras e feriados oficiais (Tarifa intermediária).


* 
**Variação 3 (Pico):** Eventos ocorridos aos finais de semana (Sábados e Domingos - Tarifa cheia/Premium).



### Critério de Saída (Transbordo Humano)

* Se o lead for identificado como qualificado (aceita as condições e demonstra real interesse no perfil do buffet), a IA executa a oferta irresistível de **Agendamento de Visita Presencial** coletando a preferência de dia e período (manhã ou tarde).


* Os dados consolidados são empurrados para o Chatwoot e um log de segurança é salvo no Supabase, notificando o Ricardo para o fechamento humano tradicional.

---

## 5. DIRETRIZES DE COMPORTAMENTO PARA A IA CODING AGENT

Ao ler este contexto, você (IA Dev) deve focar em gerar componentes React performáticos e limpos utilizando Tailwind CSS para a Landing Page, garantindo estruturas sem quebras de layout. Nas integrações de backend/n8n, certifique-se de tratar erros de timeout em requisições de LLM para que a conversa no WhatsApp nunca fique travada caso a API de IA sofra oscilações, mantendo a robustez exigida no contrato.
