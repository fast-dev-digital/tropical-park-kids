# Pre-Launch Polish + Performance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prepare the Tropical Park Kids landing page for Firebase Hosting, performance testing, and a client-facing prototype that feels premium, fast, and trustworthy.

**Architecture:** Keep the current React/Vite/Tailwind editorial-botanical design system. Improve runtime weight, Firebase cache behavior, SEO/local discovery, proof of trust, gallery usability, and visual polish without changing the official section order or WhatsApp section IDs.

**Tech Stack:** React 19, Vite 8, TypeScript, Tailwind CSS, Framer Motion, Firebase Hosting, local `ffmpeg`, existing `scripts/check-no-price-leak.mjs`.

---

## Specs

### Spec 1: Performance And Media Weight

The project should not ship original video files that are not referenced by the landing page. Runtime media should come from optimized assets only, with posters for videos and cache-friendly filenames.

**Acceptance Criteria**

- `public/gallery/videos/` is ignored by Git and not required for local dev, build, or Firebase deploy.
- No source file references `/gallery/videos`.
- Hero video sources remain under `/gallery/optimized`.
- Posters remain under `/gallery/posters`.
- `npm run build` succeeds after media changes.
- Browser QA confirms the Hero and gallery still render videos.

### Spec 2: Firebase Hosting Readiness

Firebase Hosting should be configured for a Vite SPA with strong cache rules for immutable static assets and no aggressive cache for `index.html`.

**Acceptance Criteria**

- `firebase.json` exists at project root.
- SPA fallback rewrites all routes to `/index.html`.
- Long cache headers apply to `/assets/**`, `/gallery/optimized/**`, `/gallery/posters/**`, and `/gallery/photos/**`.
- `index.html`, `robots.txt`, and `sitemap.xml` are not cached aggressively.
- A preview channel deploy command is documented.

### Spec 3: SEO, Local Search, And Social Sharing

The prototype should share well on WhatsApp/social platforms and communicate local relevance for Catanduva and region.

**Acceptance Criteria**

- `index.html` has title, description, canonical, Open Graph, Twitter card, theme color, and favicon references.
- A real OG image exists under `public/og/`.
- JSON-LD describes the business as an event venue/local business.
- `public/robots.txt` exists.
- `public/sitemap.xml` exists with the Firebase production or preview URL placeholder clearly named.
- Copy avoids price leaks and keeps the premium positioning.

### Spec 4: Proof Social And Trust

The page should include a short, credible trust section without inventing reviews or numbers.

**Acceptance Criteria**

- A new proof/trust content block exists near the lower half of the page, preferably before FAQ or Location.
- It uses an editorial layout, not generic SaaS cards.
- If real testimonials are unavailable, the section uses neutral proof language and clearly replaceable data objects.
- No fake ratings, fake names, or invented Google Reviews.
- The section keeps the existing visual direction: Fraunces, DM Sans, mono numbering, hairlines, parchment/forest palette.

### Spec 5: Gallery Curation And Filters

The gallery carousel should stay compact but allow users to browse the media by context.

**Acceptance Criteria**

- The current compact carousel remains the main gallery experience.
- Filters exist for `Destaques`, `Centopeia`, `Chácara`, `Buffet`, `Decoração`, and `Quadra`.
- `Destaques` shows `star` and `featured` assets first.
- Changing filters updates the selected media safely.
- Lightbox navigation uses the currently filtered media list.
- Mobile has no horizontal page overflow.

### Spec 6: Premium Interaction Polish

The page should feel refined in interaction details without increasing visual noise.

**Acceptance Criteria**

- Carousel transitions feel smooth and respect `prefers-reduced-motion`.
- Lightbox has focus management, clearer captions, and robust keyboard behavior.
- Header indicates the active section without distracting from the Hero.
- WhatsApp FAB does not cover important content on mobile.
- The page has no framework overlay, console errors, or obvious text/media overlap in desktop and mobile QA.

---

## File Map

### Existing Files Likely To Modify

- `.gitignore`: ensure original videos are ignored.
- `firebase.json`: create or update Firebase Hosting config.
- `index.html`: SEO, Open Graph, JSON-LD, favicon/theme metadata.
- `public/robots.txt`: crawler policy.
- `public/sitemap.xml`: sitemap for hosting URL.
- `public/og/tropical-park-og.webp`: social sharing image.
- `src/data/media.ts`: media tags, priority, filter metadata.
- `src/data/gallery.ts`: gallery export if filter grouping is separated.
- `src/components/sections/Structure.tsx`: filtered carousel behavior.
- `src/components/ui/Lightbox.tsx`: focus and keyboard improvements.
- `src/components/layout/Header.tsx`: active section treatment.
- `src/components/cta/WhatsAppFAB.tsx`: mobile spacing/polish if needed.
- `src/components/sections/FAQ.tsx` or `src/components/sections/Location.tsx`: insertion point context for proof section.
- `src/components/sections/TrustBadges.tsx`: may evolve into or sit next to the proof social block.
- `src/data/socialProof.ts`: create if proof content deserves its own data module.
- `src/components/sections/SocialProof.tsx`: create if a new section is chosen.

### Files Not To Move

- `AGENTS.md`, `CLAUDE.md`, `README.md`, and `context/*.md` stay in place because they are project instructions/context, not improvement backlog.
- `public/gallery/MEDIA_NAMING_PLAN.md` stays in place because it documents the gallery migration beside the assets.

---

## Tasks

### Task 1: Confirm Original Videos Are Not Part Of Runtime

**Files**

- Modify: `.gitignore`
- Inspect: `src/data/media.ts`
- Inspect: `src/components/sections/Hero.tsx`
- Inspect: `src/components/sections/Structure.tsx`

- [ ] **Step 1: Add original videos to `.gitignore`**

Add this exact line if it is not present:

```gitignore
public/gallery/videos/
```

- [ ] **Step 2: Verify no runtime reference exists**

Run:

```bash
rg -n "/gallery/videos|gallery/videos|/videos/" src public index.html
```

Expected:

```text
public/gallery/MEDIA_NAMING_PLAN.md
```

Only documentation may mention `public/gallery/videos`.

- [ ] **Step 3: Verify build**

Run:

```bash
npm run check:price
npm run lint
npm run build
```

Expected:

```text
check-no-price-leak: nenhum vazamento detectado
eslint exits with no errors
vite build exits successfully
```

### Task 2: Recompress Heavy Optimized Videos

**Files**

- Modify generated assets under: `public/gallery/optimized/`
- Modify generated posters only if video framing changes: `public/gallery/posters/`
- Inspect: `src/data/media.ts`

- [ ] **Step 1: Record current sizes**

Run:

```bash
node -e "const fs=require('fs'); const path=require('path'); const dir='public/gallery/optimized'; for (const f of fs.readdirSync(dir)) { const s=fs.statSync(path.join(dir,f)).size/1024/1024; console.log(s.toFixed(2)+' MB', f); }"
```

Expected: output lists the current optimized video sizes.

- [ ] **Step 2: Recompress Hero desktop MP4**

Run:

```bash
ffmpeg -y -i public/gallery/optimized/hero-centopeia-desktop.mp4 -an -vf "scale=1600:-2" -c:v libx264 -preset veryfast -crf 29 -movflags +faststart public/gallery/optimized/hero-centopeia-desktop.tmp.mp4
```

Then compare visually before replacing:

```bash
ffprobe -v error -show_entries stream=width,height,duration -of json public/gallery/optimized/hero-centopeia-desktop.tmp.mp4
```

Expected: video remains landscape and suitable for desktop Hero.

- [ ] **Step 3: Recompress Hero mobile MP4**

Run:

```bash
ffmpeg -y -i public/gallery/optimized/hero-centopeia-mobile.mp4 -an -vf "scale=640:-2" -c:v libx264 -preset veryfast -crf 29 -movflags +faststart public/gallery/optimized/hero-centopeia-mobile.tmp.mp4
```

Expected: video remains vertical and suitable for mobile Hero.

- [ ] **Step 4: Recompress gallery support videos**

For each support video larger than 4 MB in `public/gallery/optimized`, run:

```bash
ffmpeg -y -i INPUT.mp4 -an -vf "scale='if(gt(a,1),960,-2)':'if(gt(a,1),-2,960)'" -c:v libx264 -preset veryfast -crf 30 -movflags +faststart OUTPUT.tmp.mp4
```

Replace `INPUT.mp4` and `OUTPUT.tmp.mp4` with the actual file paths.

Expected: each support video stays visually acceptable in carousel/lightbox preview use.

- [ ] **Step 5: Replace only approved tmp files**

After checking local playback, replace originals:

```bash
move /Y public\gallery\optimized\hero-centopeia-desktop.tmp.mp4 public\gallery\optimized\hero-centopeia-desktop.mp4
move /Y public\gallery\optimized\hero-centopeia-mobile.tmp.mp4 public\gallery\optimized\hero-centopeia-mobile.mp4
```

For support videos, apply the same `move /Y` pattern only after visual inspection.

- [ ] **Step 6: Verify media still loads**

Run the app:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

Expected:

- Hero video plays.
- Gallery carousel video previews still work.
- Lightbox opens videos.

### Task 3: Add Firebase Hosting Configuration

**Files**

- Create or modify: `firebase.json`
- Optional create: `.firebaserc` only after project ID is known

- [ ] **Step 1: Create `firebase.json`**

Create this file:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/assets/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "/gallery/optimized/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "/gallery/posters/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "/gallery/photos/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "/index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      },
      {
        "source": "/robots.txt",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      },
      {
        "source": "/sitemap.xml",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      }
    ]
  }
}
```

- [ ] **Step 2: Build before hosting**

Run:

```bash
npm run build
```

Expected: `dist/` is generated and build passes.

- [ ] **Step 3: Document preview deploy command**

Add this note to `README.md` under a short `Firebase preview` section:

```markdown
## Firebase preview

Build before deploying:

```bash
npm run build
```

Deploy to a preview channel:

```bash
firebase hosting:channel:deploy preview
```
```

Expected: future handoff has a clear deploy path.

### Task 4: Add SEO, Open Graph, Robots, Sitemap, And JSON-LD

**Files**

- Modify: `index.html`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/og/tropical-park-og.webp`

- [ ] **Step 1: Generate OG image from real media**

Use a real gallery asset, preferably `public/gallery/photos/centopeia-quadra-noite-01.webp` or `public/gallery/posters/hero-centopeia-poster.webp`.

Run:

```bash
mkdir public\og
ffmpeg -y -i public/gallery/posters/hero-centopeia-poster.webp -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630" public/og/tropical-park-og.webp
```

Expected: `public/og/tropical-park-og.webp` exists and is readable.

- [ ] **Step 2: Update `index.html` metadata**

Add or update these tags in `<head>`:

```html
<title>Tropical Park Kids | Chácara para eventos em Catanduva</title>
<meta
  name="description"
  content="Chácara para festas infantis, casamentos e eventos em Catanduva, com Centopeia, quadra de recreação, estacionamento privativo e buffet por fartura."
/>
<meta name="theme-color" content="#1F3A2B" />
<link rel="canonical" href="https://SEU-DOMINIO-FIREBASE.web.app/" />

<meta property="og:type" content="website" />
<meta property="og:title" content="Tropical Park Kids | Chácara para eventos em Catanduva" />
<meta
  property="og:description"
  content="Uma chácara de eventos com atrações exclusivas, área aberta, quadra e buffet por fartura para festas memoráveis."
/>
<meta property="og:image" content="https://SEU-DOMINIO-FIREBASE.web.app/og/tropical-park-og.webp" />
<meta property="og:url" content="https://SEU-DOMINIO-FIREBASE.web.app/" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Tropical Park Kids | Chácara para eventos em Catanduva" />
<meta
  name="twitter:description"
  content="Festas infantis, casamentos e eventos em uma chácara com experiência completa em Catanduva."
/>
<meta name="twitter:image" content="https://SEU-DOMINIO-FIREBASE.web.app/og/tropical-park-og.webp" />
```

Replace `https://SEU-DOMINIO-FIREBASE.web.app/` only when the Firebase URL is known.

- [ ] **Step 3: Add JSON-LD**

Add this script in `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Tropical Park Kids",
  "description": "Chácara para festas infantis, casamentos e eventos em Catanduva, com atrações exclusivas, quadra de recreação, estacionamento privativo e buffet por fartura.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Catanduva",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": ["Catanduva", "Região de Catanduva"],
  "url": "https://SEU-DOMINIO-FIREBASE.web.app/",
  "image": "https://SEU-DOMINIO-FIREBASE.web.app/og/tropical-park-og.webp"
}
</script>
```

Expected: valid JSON and no price-like strings.

- [ ] **Step 4: Create `robots.txt`**

Create:

```txt
User-agent: *
Allow: /

Sitemap: https://SEU-DOMINIO-FIREBASE.web.app/sitemap.xml
```

- [ ] **Step 5: Create `sitemap.xml`**

Create:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://SEU-DOMINIO-FIREBASE.web.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 6: Verify**

Run:

```bash
npm run check:price
npm run build
```

Expected: both pass.

### Task 5: Add Credible Social Proof Section

**Files**

- Create: `src/data/socialProof.ts`
- Create: `src/components/sections/SocialProof.tsx`
- Modify: `src/App.tsx`
- Optional modify: `src/lib/whatsapp.ts` and `src/components/cta/WhatsAppFAB.tsx` only if adding a new section ID to WhatsApp context

- [ ] **Step 1: Decide section placement**

Place `SocialProof` after `TrustBadges` and before `FAQ`.

Expected section order:

```tsx
<TrustBadges />
<SocialProof />
<FAQ />
```

- [ ] **Step 2: Create social proof data**

Create `src/data/socialProof.ts`:

```ts
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
    id: 'substituir',
    label: 'Depoimentos',
    text: 'Espaço reservado para avaliações reais do Google ou mensagens de famílias atendidas pelo Tropical Park Kids.',
  },
]
```

- [ ] **Step 3: Create `SocialProof.tsx`**

Create an editorial section with hairlines, mono numbering, and no fake review stars:

```tsx
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { EditorialMark } from '../ui/EditorialMark'
import { socialProofItems } from '../../data/socialProof'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function SocialProof() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="proof" className="section-padding bg-forest text-parchment relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden="true" />
      <Container>
        <EditorialMark
          number="07"
          kicker="Confiança"
          tone="light"
          title={
            <>
              Antes de escolher, a família precisa{' '}
              <em className="italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}>
                sentir
              </em>{' '}
              o lugar.
            </>
          }
          lede="Esta seção está pronta para receber depoimentos reais. Enquanto isso, ela reforça provas concretas da experiência sem inventar avaliações."
        />

        <ol className="mt-20 md:mt-28">
          {socialProofItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="grid grid-cols-12 gap-6 md:gap-10 border-t border-parchment/15 py-8 md:py-10 last:border-b last:border-parchment/15"
            >
              <span
                className="col-span-2 md:col-span-1 font-mono text-number uppercase text-parchment/55"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="col-span-10 md:col-span-4 font-display font-light text-parchment text-2xl md:text-3xl leading-[1.08]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                {item.label}
              </h3>
              <p className="col-span-12 md:col-span-7 text-parchment/80 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
```

- [ ] **Step 4: Import and render in `App.tsx`**

Add:

```tsx
import { SocialProof } from './components/sections/SocialProof'
```

Render:

```tsx
<TrustBadges />
<SocialProof />
<FAQ />
```

- [ ] **Step 5: Verify**

Run:

```bash
npm run check:price
npm run lint
npm run build
```

Expected: all pass.

### Task 6: Add Gallery Filters To The Compact Carousel

**Files**

- Modify: `src/data/media.ts`
- Modify: `src/components/sections/Structure.tsx`
- Test manually in browser

- [ ] **Step 1: Define filter type**

In `src/data/media.ts`, add:

```ts
export type GalleryFilter = 'destaques' | 'centopeia' | 'chacara' | 'buffet' | 'decoracao' | 'quadra'
```

- [ ] **Step 2: Add filter map**

In `src/data/media.ts`, add:

```ts
export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: 'destaques', label: 'Destaques' },
  { id: 'centopeia', label: 'Centopeia' },
  { id: 'chacara', label: 'Chácara' },
  { id: 'buffet', label: 'Buffet' },
  { id: 'decoracao', label: 'Decoração' },
  { id: 'quadra', label: 'Quadra' },
]
```

- [ ] **Step 3: Add filter predicate in `Structure.tsx`**

Implement:

```ts
const matchesFilter = (item: GalleryItem, filter: GalleryFilter) => {
  if (filter === 'destaques') return item.priority === 'star' || item.priority === 'featured'
  if (filter === 'centopeia') return item.id.includes('centopeia')
  if (filter === 'chacara') return item.sectionTags.includes('differentials') || item.id.includes('entrada')
  if (filter === 'buffet') return item.id.includes('buffet') || item.sectionTags.includes('menus')
  if (filter === 'decoracao') return item.id.includes('decoracao') || item.id.includes('mesa')
  if (filter === 'quadra') return item.id.includes('quadra')
  return true
}
```

- [ ] **Step 4: Use filtered list**

Replace carousel references from `gallery` to `filteredGallery`, except when the full gallery is explicitly intended.

Required state:

```ts
const [activeFilter, setActiveFilter] = useState<GalleryFilter>('destaques')
const filteredGallery = gallery.filter((item) => matchesFilter(item, activeFilter))
const selected = filteredGallery[selectedIndex] ?? filteredGallery[0] ?? gallery[0]
```

When changing filter:

```ts
setActiveFilter(filter.id)
setSelectedIndex(0)
```

Lightbox should receive `filteredGallery`.

- [ ] **Step 5: Render filter controls**

Use editorial text buttons, not pills:

```tsx
<div className="mt-12 flex gap-5 overflow-x-auto border-y border-ink/15 py-4">
  {galleryFilters.map((filter) => (
    <button
      key={filter.id}
      type="button"
      onClick={() => {
        setActiveFilter(filter.id)
        setSelectedIndex(0)
      }}
      className={`font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
        activeFilter === filter.id ? 'text-forest' : 'text-ink-muted hover:text-forest'
      }`}
    >
      {filter.label}
    </button>
  ))}
</div>
```

- [ ] **Step 6: Verify**

Run:

```bash
npm run check:price
npm run lint
npm run build
```

Manual browser checks:

- Click each filter.
- Selected plate resets to the first filtered item.
- Next/previous works inside the filter.
- Lightbox opens filtered item.
- Mobile thumbnails scroll horizontally.

### Task 7: Improve Lightbox Accessibility

**Files**

- Modify: `src/components/ui/Lightbox.tsx`

- [ ] **Step 1: Add close button focus**

Use a ref:

```tsx
const closeRef = useRef<HTMLButtonElement | null>(null)

useEffect(() => {
  closeRef.current?.focus()
}, [])
```

Add `ref={closeRef}` to the close button.

- [ ] **Step 2: Add visible media type to dialog label**

Compute:

```ts
const mediaType = current.type === 'video' ? 'vídeo' : 'imagem'
```

Use:

```tsx
aria-label={`Visualização ampliada de ${mediaType}: ${current.caption}`}
```

- [ ] **Step 3: Improve caption**

Render caption and alt:

```tsx
<div className="mt-4 max-w-[82vw] text-center">
  <p className="font-display italic text-base text-white/90">{current.caption}</p>
  <p className="mt-1 font-body text-sm text-white/60">{current.alt}</p>
</div>
```

- [ ] **Step 4: Verify keyboard behavior**

Manual browser checks:

- Open lightbox.
- Focus starts on close.
- `Escape` closes.
- Arrow left/right navigate.
- Video item displays controls.

### Task 8: Header Active Section Polish

**Files**

- Modify: `src/components/layout/Header.tsx`
- Reuse: `src/hooks/useActiveSection.ts`

- [ ] **Step 1: Inspect current header nav IDs**

Confirm nav anchors match official section IDs:

```text
hero
attractions
differentials
structure
menus
faq
location
```

- [ ] **Step 2: Add active section state**

Use:

```ts
const active = useActiveSection(['hero', 'attractions', 'differentials', 'structure', 'events', 'menus', 'trust', 'faq', 'location'], 'hero')
```

- [ ] **Step 3: Apply subtle active treatment**

For each nav link, compare `href.replace('#', '')` to `active`.

Use:

```tsx
className={`group inline-flex items-center gap-2 transition-colors ${
  isActive ? 'text-forest' : 'text-ink-muted hover:text-forest'
}`}
```

On transparent Hero header, keep active treatment readable with existing header scroll state.

- [ ] **Step 4: Verify**

Manual browser checks:

- Scroll through sections.
- Active nav changes.
- Header remains readable over Hero and parchment sections.
- No layout shift.

### Task 9: WhatsApp FAB Mobile Polish

**Files**

- Modify: `src/components/cta/WhatsAppFAB.tsx`

- [ ] **Step 1: Reduce mobile footprint**

Use smaller mobile dimensions:

```tsx
className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full ..."
```

Set icon size responsively if needed:

```tsx
<MessageCircle size={24} className="relative text-white md:h-7 md:w-7" />
```

- [ ] **Step 2: Move slightly inward only on desktop**

Use:

```tsx
className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 ..."
```

- [ ] **Step 3: Verify**

Manual mobile checks:

- FAB does not cover important CTA text.
- Bubble does not exceed viewport width.
- Reduced motion still disables pulsing behavior.

### Task 10: Final QA And Firebase Preview Checklist

**Files**

- Inspect all changed files
- Verify generated `dist/`

- [ ] **Step 1: Run required checks**

Run:

```bash
npm run check:price
npm run lint
npm run build
```

Expected: all pass.

- [ ] **Step 2: Browser QA desktop**

Open:

```text
http://127.0.0.1:5173/
```

Desktop checks:

- Hero video loads.
- No blank first viewport.
- Header readable.
- Gallery carousel compact.
- Gallery filters work.
- Lightbox keyboard behavior works.
- Social proof section does not look like fake reviews.
- FAQ opens and closes.
- Maps lazy load works.
- Console has no relevant errors.

- [ ] **Step 3: Browser QA mobile**

Use viewport:

```text
390x844
```

Mobile checks:

- No horizontal overflow.
- Hero CTA is visible.
- WhatsApp FAB does not cover key content.
- Gallery thumbnails scroll horizontally.
- Filter controls do not wrap awkwardly.
- Text does not overlap media.

- [ ] **Step 4: Firebase preview**

Run:

```bash
npm run build
firebase hosting:channel:deploy preview
```

Expected: Firebase returns a preview URL.

- [ ] **Step 5: Run Lighthouse on preview URL**

Use Chrome Lighthouse or PageSpeed Insights.

Record:

```markdown
## Lighthouse Snapshot

- URL:
- Performance:
- Accessibility:
- Best Practices:
- SEO:
- Notes:
```

Place this note in `improvements/firebase-preview-results.md` after the first preview deploy.

---

## Implementation Order

1. Task 1: Confirm original videos are not runtime assets.
2. Task 2: Recompress heavy optimized videos.
3. Task 3: Add Firebase Hosting configuration.
4. Task 4: Add SEO, Open Graph, robots, sitemap, and JSON-LD.
5. Task 5: Add credible social proof section.
6. Task 6: Add gallery filters.
7. Task 7: Improve lightbox accessibility.
8. Task 8: Header active section polish.
9. Task 9: WhatsApp FAB mobile polish.
10. Task 10: Final QA and Firebase preview checklist.

---

## TDD Notes

This project currently relies more on lint/build/manual browser QA than automated component tests. For implementation, follow this practical TDD pattern:

1. Add a small failing static check when possible.
2. Run the check and confirm it fails for the expected reason.
3. Implement the smallest change.
4. Run `npm run check:price`, `npm run lint`, and `npm run build`.
5. Validate the visible behavior in the browser.

Good candidates for lightweight checks:

- A script that asserts no `/gallery/videos` references exist in `src`.
- A script that asserts required SEO tags exist in `index.html`.
- A script that asserts `firebase.json` contains required cache headers.
- A script that asserts all media paths referenced by `src/data/media.ts` exist under `public`.

Do not add a large test framework only for this polish pass unless the project is about to keep growing after client approval.
