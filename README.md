# Handoff: Lin Nora — UX Designer Portfolio

## Overview

A personal portfolio website for **Lin Nora**, a UX designer based in Oslo. The site introduces her, showcases selected projects across three categories (UX Design, Strategy & Systems, Hackathons), and offers a path to connect. The aesthetic is minimal, warm, breathable — informed by reference sites like Union (research studio aesthetic): generous whitespace, small body type, restrained palette, and one or two interactive surprises (typewriter rotator on the hero, cursor-following "See project" pill on cards, hover-to-expand timeline on About).

## About the Design Files

The files in this bundle are **design references created in HTML/JSX inside a browser-based design tool**. They are prototypes showing the intended look, layout, copy, typography, spacing, and interaction patterns — **not production code to copy directly**.

The task is to **recreate these designs in the target codebase's environment**. If no framework is chosen yet, **Astro** is recommended for this project: the site is content-led (a handful of static pages + N project case studies), Astro's MDX support is ideal for writing case studies, performance is excellent for a portfolio, and the JSX components in the bundle translate cleanly to `.astro` components. Next.js or Vite + React are also fine.

Treat the HTML/JSX files as **annotated mockups** — read the styles, copy the design tokens, replicate the layouts using the target framework's idioms (semantic HTML, CSS modules / Tailwind / styled-components / whatever the host codebase already uses).

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, radii, and interactions are at intended final values. The page is intended to look very close to these mocks once implemented. Some content is still placeholder (e.g. the four secondary roadmap entries on About have "edit me" prose; project cards use sample project data) — the structure is final, the words are provisional in those spots and clearly marked.

## Site Map

```
/
├── index.html       Home (Hero → Projects → Toolkit → Connect, single scroll)
├── about.html       About (standalone page; reached via nav "About" or "Who am i?" pill on hero)
├── project.html     Project detail template (one per project; currently a single template)
└── connect-dots.html  Optional interactive portrait reveal (iframe-able widget, currently unused)
```

**Navigation:** sticky top nav with `Lin Nora ·` wordmark on the left and `About / Projects / Connect` on the right.
- `About` → `about.html`
- `Projects` → `index.html#work` (or in-page anchor on home)
- `Connect` → `index.html#contact` (or in-page anchor on home)

## Design System

### Color tokens

All colors live as CSS custom properties at `:root` in each HTML file.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAFAF7` | Page background (warm off-white) |
| `--bg-soft` | `#F3F1EB` | Card fills, placeholder backgrounds, hover/expanded states |
| `--ink` | `#0E0E0C` | Primary text & primary action button |
| `--ink-2` | `#2A2A26` | Body text (slightly softer) |
| `--muted` | `#8A8780` | Captions, meta, mono labels |
| `--line` | `#1a1a1a` | Hard divider lines (rarely used) |
| `--line-soft` | `rgba(14,14,12,0.14)` | Soft hairline borders on cards & placeholders |
| `--dashed` | `rgba(14,14,12,0.28)` | Dashed borders / dot grid pattern |
| `--card` | `#FFFFFF` | Currently unused; reserved for elevated surfaces |

There are also `data-bg="white" | "cream" | "ink"` variants defined on `.pf-artboard` for future dark-mode / accent surfaces — not used on production pages currently.

### Typography

Loaded via Google Fonts in every HTML file:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```

| Family | Weights / styles used | Use |
|---|---|---|
| **Hanken Grotesk** | 300, 400 (regular + italic), 500 | Everything (headings, body, buttons, captions). This is the workhorse type. |
| **JetBrains Mono** | 400 | Small uppercase meta labels (eras, captions, image labels) at 10.5–11px / `letter-spacing: 0.08em–0.14em`. |
| **Georgia** | regular italic | The John Heskett pull-quote on About only. |
| Inter | 400, 500, 600 | Loaded but currently unused on the live pages — safe to drop in implementation. |

### Type scale (live values pulled from the design)

| Use | Family | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero "Hi" / "I'm Lin Nora a [typer] designer" | Hanken Grotesk | 400 | 16px | 1.5 | -0.005em |
| Hero subheadline ("Connecting the dots…") | Hanken Grotesk | 300 | 30px | 1.25 | -0.015em |
| Page H2 (Projects, My toolbox, About headers, Connect) | Hanken Grotesk | 400 | 40–44px | 1.02–1.05 | -0.02 to -0.025em |
| About sub-section H2 (My design philosophy, My roadmap, …) | Hanken Grotesk | 400 | 30px | 1.0 | -0.02em |
| About hero H1 ("Who is Lin Nora?") | Hanken Grotesk | 400 (+ italic on name) | 38px | 1.0 | -0.02em |
| Project card title | Hanken Grotesk | 400 | 19px | 1.0 | -0.012em |
| Body / description copy | Hanken Grotesk | 400 | 13–14px | 1.45–1.6 | -0.005em |
| Project detail meta ("2 week project") | Hanken Grotesk | 400 | 13px | — | -0.005em |
| Mono labels (year, eras, image captions) | JetBrains Mono | 400 | 10.5–11px (UPPER) | — | 0.08–0.14em |
| Pill / button text | Hanken Grotesk | 400 | 13–14px | — | -0.005em |
| Footer email link (large) | Hanken Grotesk | 300 | 56px | — | -0.025em |

Note the **dotted underline** under the typewriter rotator on Hero & About: `border-bottom: 1px dotted var(--ink); padding-bottom: 1px;` with a `min-width: 160–180px` so the line is stable while the rotator types.

### Spacing scale

Common pixel values seen across the design: **6, 10, 14, 18, 22, 24, 28, 32, 36, 44, 48, 56, 60, 64, 80, 100, 120, 140, 180, 200**.

Section padding: `140px 64px` (top/right and left/bottom vary 60–100). Section-to-section vertical gap on the About page: **200px**.

Standard card padding: `18–24px`. Standard radii: **4 (pills inside hero), 14 (cards on project detail), 18 (toolbox slot), 22 (roadmap expanded card, project card image), 24 (about image slots), 28 (legacy / removed), 999 (pill buttons)**.

### Borders / shadows

- Default placeholder border: `1px solid var(--line-soft)` (very faint hairline).
- Hover lift shadow on project cards & contact cards: `0 24px 60px -30px rgba(14,14,12,0.25)` (project) / `0 20px 50px -28px rgba(14,14,12,0.25)` (contact).
- No drop shadows elsewhere — flatness is intentional.

### Motion

- Standard easing: `cubic-bezier(.2,.8,.2,1)` (used for card lift, roadmap expand, "See project" pill scale, etc.).
- Standard durations: 250–550ms.
- Smooth scroll for in-page anchors via `html { scroll-behavior: smooth; }`.
- `prefers-reduced-motion` is **not** currently honored — the developer should add a respectful fallback for the typewriter, cursor-follow pill, and roadmap-expand animations.

### Placeholder surfaces (gray boxes)

Every "image goes here" / "illustration coming later" slot uses the same recipe so they feel like one family rather than ad-hoc grey boxes:

```css
background: var(--bg-soft);
border: 1px solid var(--line-soft);
border-radius: 18–24px;
```

Plus an absolutely-positioned warm light overlay:

```css
background:
  radial-gradient(120% 90% at 75% 25%, rgba(255,255,255,0.55), transparent 60%),
  radial-gradient(120% 80% at 15% 90%, rgba(14,14,12,0.05), transparent 60%);
pointer-events: none;
```

And, on key surfaces (hero square, toolbox big slot), four 10×10px "corner tick" marks anchored via `border-top/left/right/bottom: 1px solid var(--line-soft)`.

## Screen-by-Screen

### 1. Home — `index.html`

**Layout:** single scrolling column, sections stacked vertically. Sticky nav at the very top (becomes opaque + bordered after 12px of scroll).

#### Section: Hero (`#top`)

- **Padding**: `140px 64px 60px`. Min-height fills viewport below sticky nav (`calc(100vh - 86px)`).
- **Grid**: `1fr 440px` with 80px gap, vertically centered.
- **Left column:**
  - `Hi` — 16px, w400.
  - `I'm Lin Nora a [typewriter] designer` — same scale; "Lin Nora" italic; typewriter cycles through `Interaction, Strategic, Product, Innovative, Human-Centered, AI, Multidisciplinary` (`ROTATOR_WORDS` in `portfolio-core.jsx`). Cycle: type at 70±20ms/char, hold 1400ms, hold-empty 600ms, delete at 35ms/char. Cursor: 3×0.85em ink rectangle with blink keyframe.
  - 80px gap → `Connecting the dots / between people & design` — 30px, w300, max-width 460.
- **Right column:** 1:1 portrait placeholder square (4px radius, soft border, warm radial highlights, three corner ticks).
  - **"Who am i?" pill** absolutely positioned bottom-right (18px inset): solid 1px ink border, 999px radius, 10×20px padding, white-bg, 13px. **Links to `about.html`.**
- **Below the grid:** 80px gap → "Selected works ↓" pill (dashed border, 12×24px padding, links to `#work`).

#### Section: Projects (`#work`)

- **Padding:** `140px 64px 100px`.
- **Header:** "Projects." (left aligned, 44px Hanken w400, period in `--muted`) + a one-line description below in 13px max-width 640.
- **Centered pill tab group** (5% ink background, 1px hairline border, 999px radius, 6px outer padding, 4px gap, 10×28px inner padding per button): `Ux / Strategy & systems / Hackatons`. Active state: ink bg, bg-soft text.
- **Cards:** 2-column grid (`repeat(2, 1fr)`), 64px gap & row-gap, max-width 1000, centered. Max 4 cards per category.
- **Card structure:**
  - Square image area (`aspectRatio: 1`), 22px radius, bg-soft, soft border, warm radial highlights baked in.
  - On `mouseenter`: card lifts `translateY(-4px)`, soft shadow appears.
  - A **cursor-following "See project →" pill** is rendered inside the image area. Implemented via `onMouseMove`: `setPos({ x, y })` where x/y are percentages of `getBoundingClientRect()`. Pill is positioned `left: x%, top: y%` and `translate(-50%, -50%)`. Scales 0.7 → 1 on hover. **Critical:** percentages, not pixels — so the math works correctly inside scaled/transformed parents (like the design canvas).
  - Below the image: title (19px, w400) on the left; year in mono uppercase 11.5px `--muted` on the right; subtitle (the project's `line`) in 13px `--muted` underneath, max-width 380.
- **Cards link to `project.html`** (single template for now).

#### Section: Toolkit (`#skills`)

- **Padding:** `140px 64px 100px`, min-height `calc(100vh - 86px)`.
- **Header:** "My toolbox." (44px) + 13px tagline "My role is identifying what needs to be created, these are the tools I use to build it" — max-width 720.
- **Big interactive illustration slot:** 100px top margin, max-width 1000, aspect 16:10, the standard tonal placeholder recipe (corner ticks all four corners, warm highlight, centered uppercase mono caption "Interactive toolkit illustration · coming later" in `--muted`).
- **Skill chip strip** below: flex-wrap centered chips listing every entry in the `SKILLS` array (see `portfolio-core.jsx`). Pill style: 8×16px padding, 999 radius, 1px `--line-soft` border, 12px text.

#### Section: Connect / Footer (`#contact`)

- **Padding:** `140px 64px 60px`, min-height `80vh`, flex-column space-between.
- **Top block:** "Connect." 44px + tagline "Currently open to collaborations & 2026 projects."
- **Middle:** giant email link `linnoratollefsen@gmail.com` — 56px w300, with a 1px ink underline.
- **Bottom row:** small links `LinkedIn / Read.cv / Instagram` (13px each, with a 50%-opacity ↗ glyph) on the left; `© 2026 Lin Nora · Oslo` mono 10px uppercase on the right.

### 2. About — `about.html`

A long scrolling page. Sticky nav at top. Wrapped in `.pf-artboard[data-bg="warm"]` for CSS-var consistency.

The `About` React component lives in `portfolio-sections.jsx`. Sections, top to bottom:

#### Hero (`#about` anchor)

- **Grid:** `1fr 360px`, 80px gap.
- **Left:** "Who is *Lin Nora*?" (38px, italic name), 80px gap → "As a [typewriter] " (16px). Typewriter words: `designer, teammate, project leader, dying optimist`. Same dotted-underline treatment as home hero.
- **Right:** 1:1.1 image-roulette slot (same tonal placeholder, 24px radius) + a mono uppercase caption "Some caption to the image" below.

#### My design philosophy

- Centered 30px H2 ("My design philosophy" + "...." muted).
- 1fr 1fr grid below, max-width 1000, centered:
  - **Left:** centered 110×110 tonal placeholder image + Georgia italic pull-quote: *"Design is the human capacity for shaping and making in ways that satisfy our utilitarian needs and create meaning."* — John Heskett (attribution in Hanken Grotesk 12px muted).
  - **Right:** belief statement paragraph (13.5px, line-height 1.6, max-width 440).

#### My roadmap

- Left-aligned 30px H2.
- **Horizontal timeline** (`marginTop: 80, paddingTop: 24`):
  - A 1px `--line-soft` line absolutely positioned `top: 32, left: 4%, right: 4%` runs behind the nodes.
  - 5 nodes in a flex row with 16px gap. Each is a `RoadmapNode` component.
- **`RoadmapNode` interaction (the centerpiece of this page):**
  - Compact state: `flex: 1 1 0`. Renders a dot (12×12, `--ink` if `featured`, else `--muted` with `--line-soft` border, plus a 4px `box-shadow` matching the background to "cut through" the timeline line), then the school name (12.5px max-width 180), then an optional subtitle (11px `--muted`).
  - On `mouseenter` (if the node has `detail2`): grows to `flex: 4 1 0` with a `cubic-bezier(.2,.8,.2,1) .55s` transition. An absolutely-positioned card background (`inset: -18px -22px`, 22px radius, `--bg-soft` fill, `--line-soft` border) fades in `opacity 0 → 1`. The right column reveals a paragraph (`max-height: 0 → 500, opacity 0 → 1, translateX(-12px) → 0`) with a 120ms delay on opacity. The dot's `box-shadow` switches from `--bg` to `--bg-soft` so it still "cuts through" the line.
  - Neighboring nodes shrink (still `flex: 1`) and shift right; the line behind them stays put.
  - Featured node (currently the first, Royal Danish Academy × CBS) has a filled ink dot from the start.
- Data: 5 nodes with `name`, optional `detail`, optional `featured`, and `detail2` (the expanded paragraph). See `portfolio-sections.jsx` for the prose currently used.
- **Below the timeline:** "Designing Between People, Systems, and Technology" (14px w500), eras "2019 – Present" (mono uppercase), then a paragraph about the violin background (13.5px, max-width 760).

#### What´s ahead?

- 1fr 1fr grid, vertically centered.
- Left: 30px H2 + 13.5px paragraph.
- Right: 5:4 tonal placeholder, 24px radius.

#### Let´s connect

- Left-aligned 30px H2.
- 4-column grid (24px gap) of contact cards. Each card:
  - 5:4 aspect, 18px radius, tonal placeholder treatment.
  - `01–04` mono index in the top-left.
  - Bottom-left: label (16px, e.g. "Email") + handle/caption underneath (12px `--muted`).
  - Hover: `translateY(-4px)` + soft drop shadow.

### 3. Project detail — `project.html`

The template for an individual case study. Renders the `ProjectDetail` component from `portfolio-project.jsx`. All copy is editable static JSX (intentional, so non-developers can clone the file and rewrite each piece). Layout:

1. **Nav** (same component as elsewhere) + **back arrow** as a 46×46 circle (top: 36, left: 64, 1px `--line-soft` border, `--bg` background, ← glyph). Links to `index.html#work`.
2. **Hero image** — `aspectRatio: 16/7`, 4px radius, a CSS checkerboard pattern (`repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 24px 24px`) to read clearly as "image goes here." Bottom-right corner: an ENTUR badge ("EN" Georgia + small "TUR" subscript) and a "Collaboration with ENTUR AS" caption underneath. **This badge/caption is a per-project label** — the developer should make it a prop, e.g. `<ProjectHero collaborator={{ name: 'ENTUR', subscript: 'TUR', caption: 'Collaboration with ENTUR AS' }} />`.
3. **Title / Subtitle** — 88px Hanken w400, 16px subtitle.
4. **Meta row** — grid `200px 1fr auto`: an empty left spacer that aligns with the rail below; "2 week project" 13px; a pill with the category ("UX design"), 1px ink border, 999 radius, 8×18px padding.
5. **Overview + Delivery** — `200px 1fr` grid:
   - **Left:** sticky-positioned (`top: 32`) anchor nav with 5 entries: `TLTR · Delivery · My role · Design process · Outcome`. Each is a dot (6×6, ink) + label.
   - **Right:** "Overview" 22px H2, body paragraph, big 16:8 image slot (same checkerboard pattern), then "Delivery" 22px H2 + body.
6. **My role in this project** — centered 22px H2; 3-column grid of bordered (`1px --line-soft`, 14px radius, 22px padding, min-height 220) cards:
   - **Card 1:** "Ux designer i design team school project" caption + a faint inline SVG silhouette absolutely positioned bottom-right.
   - **Card 2:** "Resposibilities included:" (intentional misspelling preserved from sketch) + bullet-style paragraph.
   - **Card 3:** "Team members" + a list of 4 `name / role` rows (right-aligned role, 12px).
7. **Design process** — centered 22px H2; centered intro paragraph (max-width 640); then 3 step rows. Each step row is a 1fr 1fr grid: left is `{num}: {title}` (14px w500) + paragraph; right is a 5:3 checkerboard image slot, 14px radius.
8. **Outcome & reflection** — centered 22px H2 + paragraph + a final 16:8 image slot (max-width 720, 18px radius, centered).

## Interactions & Behavior

| Element | Trigger | Behavior |
|---|---|---|
| Sticky nav (home) | `window.scrollY > 12` | Adds backdrop-blur + bottom hairline + drops padding from 28px to 18px (300ms ease). |
| Anchor links (#about, #work, #contact) | click | `scroll-behavior: smooth` on `html` + `scroll-margin-top: 80px` on `section[id]`. |
| Typewriter (Hero, About) | mounts | Cycles `ROTATOR_WORDS` array. Types char-by-char with jitter, holds, then deletes char-by-char, advances index. See `Typewriter` in `portfolio-core.jsx`. |
| "Selected works ↓" pill (hero) | click | Anchor jump to `#work`. |
| "Who am i?" pill (hero) | click | Navigate to `about.html`. |
| Project card | hover | Card lifts `translateY(-4px)`, soft shadow appears, cursor-follow pill scales in. |
| Project card | mousemove | "See project →" pill follows the cursor inside the image area (percentage-based positioning). |
| Project card | click | Navigate to `project.html`. |
| Project tab pills | click | Switch active project category (state inside `Projects`). |
| RoadmapNode (About) | hover | Node grows to flex 4, card bg fades in, paragraph slides in from the left with a small delay. |
| Contact card (About) | hover | Lift + soft shadow. |
| `Magnetic` component | mousemove on parent | Pulls inner span toward cursor by `strength * delta`. Currently unused on the live pages (was used by the old hero/footer); kept in `portfolio-core.jsx` for future use. |
| `Cursor` component | — | Custom cursor implementation in `portfolio-core.jsx` — **currently not mounted** on the live pages. Available if Lin wants a custom-cursor pass later. |

## Data shape

```ts
// portfolio-core.jsx

ROTATOR_WORDS: string[]                       // hero typewriter values

SECTIONS: {
  id: 'ux' | 'strategy' | 'hacks',
  label: 'UX Design' | 'Strategy & Systems' | 'Hackathons',
  projects: {
    num: '01' | '02' | …,                     // 2-char index inside its section
    title: string,
    line: string,                              // one-line description used as card subtitle
    collab: string,                            // collaborator / client name
    year: '2023' | '2024' | '2025' | '2026',
    tag: string,                               // category chip, currently unused in card UI
  }[]
}[]

SKILLS: { group: string, items: string[] }[]   // currently flattened on the toolbox page
```

When wiring real data:
- Each project should also get a `slug` and `href` so cards can link to `/projects/${slug}/` instead of the placeholder `project.html`.
- The `tag` field is currently rendered only on the project detail meta row — feel free to surface it on cards too.
- Roadmap nodes (currently hardcoded inside `About`) should move into a data file alongside the project array; same shape: `{ name, detail?, featured?, detail2 }`.

## File reference

| File | Purpose |
|---|---|
| `index.html` | Production home page. Hero, Projects, Toolkit, Connect. |
| `about.html` | Production About page. Same `About` component as the canvas. |
| `project.html` | Production project detail template. Renders the `ProjectDetail` component. |
| `Portfolio.html` | **Design canvas (reference only)** — shows every page as an artboard side-by-side, used for visual iteration. Not part of the deliverable site, but useful as a "design source of truth" while implementing. |
| `portfolio-core.jsx` | Shared data + utility components: `ROTATOR_WORDS`, `SECTIONS`, `SKILLS`, `Cursor`, `Magnetic`, `Typewriter`, `KEYFRAMES`. |
| `portfolio-sections.jsx` | The page-level components: `Nav`, `Hero`, `Projects`, `ProjectCard`, `About`, `RoadmapNode`, `Skills`, `Footer`. |
| `portfolio-project.jsx` | `ProjectDetail` component — the entire case study template in one file. |
| `design-canvas.jsx` | Powers `Portfolio.html` only — pan/zoom artboard surface. Not needed for the production site. |
| `connect-dots.html` | Optional interactive "connect-the-dots → portrait reveal" widget. Self-contained; can be `<iframe>`'d into the hero portrait slot as a future enhancement. Not currently wired up. |

## Implementation recommendations

1. **Pick a framework.** Astro (recommended), Next.js (App Router, RSC), or Vite + React are all reasonable. Astro is the best fit because:
   - The site is content-led, mostly static, ideal for `.astro` components + MDX for project case studies.
   - Each page renders zero JS by default; the typewriter, roadmap-expand, sticky-nav-on-scroll, and cursor-follow pill are the *only* pieces that need client JS — use Astro's `client:load` / `client:visible` on those islands.
   - File-system routing matches the multi-page-but-shared-shell shape (`/`, `/about`, `/projects/[slug]`).
2. **Move all colors and type tokens to CSS variables / a `tokens.css` file** (already structured that way at `:root` in each HTML file — copy them).
3. **Re-implement components in the host framework's idioms.** For React/Astro that's mostly a 1-to-1 port; for Vue or SwiftUI / native the JSX is reference, not code.
4. **Honor `prefers-reduced-motion`.** Disable the typewriter (just render the first word + a static dotted underline), disable the cursor-follow pill (just show a static pill in the card), disable the roadmap-expand transition (snap states instead of animating).
5. **Make the project detail template data-driven.** Currently every word is hardcoded JSX. The recommended shape is a single component that accepts a project object (title, subtitle, hero image, collaborator, meta, role-cards, process-steps, outcome) and renders it. MDX is a great fit for the long-form paragraphs.
6. **Add real responsive behavior.** The current mocks are designed at 1280px. Mobile / tablet versions are not yet specified — the developer should design these in conjunction with Lin, but reasonable defaults: stack the two-column hero on <768px, collapse the timeline into a vertical list, collapse the 4-column contact grid to 2.
7. **Replace all placeholder surfaces with real images.** Every tonal box currently labeled "Image", "Image roulette", "interactive Toolkit illustration · coming later", etc. is a content slot — keep the radius / border / shadow treatment when swapping in real artwork.
8. **Wire `mailto:` and social links** in the footer + contact cards (currently `#`).

## Assets

No real images in this bundle. All visual placeholders are CSS-only (radial gradients, conic-gradient checkerboards). Logos referenced in copy but not in art:

- **ENTUR** — on the project detail hero ("Collaboration with ENTUR AS"). Currently rendered as Georgia text. Replace with real wordmark if licensed; otherwise text is fine.
- Schools on the roadmap (Royal Danish Academy, CBS, Tongji, SAHO, Oslo Arch & Design, Edvard Munch VGS) — text only, no logos used.

Fonts (Hanken Grotesk, JetBrains Mono) are loaded from Google Fonts. If the production site needs to be offline-capable or fully self-hosted, download the woff2 files and serve them from `/fonts/` with a `@font-face` block and `font-display: swap`.

## Open questions / things to decide with Lin

- Final per-project content for all 12 projects across UX / Strategy / Hackathons.
- Real photos for: hero portrait, About hero "image roulette," John Heskett quote image, "What's ahead" image, the 4 "Let's connect" cards, every project hero, every project case study image slot.
- Whether to wire the `connect-dots.html` interactive into the hero portrait slot (it was prototyped, then reverted to a plain square pending a decision).
- Mobile breakpoints and behavior.
- Whether the project tabs should remain in-page state (current behavior) or become routed (e.g. `/projects?tab=strategy`).
- Whether to add a dark-mode toggle (the `data-bg="ink"` variant is half-stubbed and ready to expand into a proper dark theme).
