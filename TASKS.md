# TASKS.md — Mythopoetic Theogony Website
## A Personal Archetypal Mythopoetics Journal

---

## STYLE & TONE GUIDE

### Visual Identity
This site is a personal sacred journal, not a public-facing product. It should feel like
illuminated manuscript meets digital garden — rich, contemplative, unhurried. Every page
is an act of devotion to honest inner work, not a performance for an audience.

**Palette** (extracted from the pantheon images):
```css
:root {
  --deep-night:     #0a0c14;   /* primary background */
  --midnight-blue:  #111827;   /* card backgrounds */
  --sacred-gold:    #c9a84c;   /* headings, borders, accents */
  --amber-warm:     #d4956a;   /* secondary accent */
  --candlelight:    #f0d080;   /* highlight, hover states */
  --body-text:      #c8bfa8;   /* main prose */
  --muted-text:     #7a6e5f;   /* captions, metadata */
  --border-subtle:  #2a2416;   /* dividers */
  --shadow-deep:    rgba(0,0,0,0.7);
}
```

**Typography:**
- Headings: `Cinzel` (Google Fonts) — Roman lapidary, sacred authority
- Body: `EB Garamond` (Google Fonts) — warmth, classical depth
- Greek/Latin inscriptions: `Cinzel Decorative` — for pull-quotes and mottos
- All available free via Google Fonts

**Tone:**
- First person, contemplative, honest
- Neither academic nor devotional-sentimental — somewhere between journal and theology
- Allow ambiguity to stand. Do not over-explain.
- Short paragraphs. Breathing room. Let the images carry weight.
- The site is for Mark. Write as if no one else is reading, which paradoxically
  makes it worth reading.

**Animations (subtle, purposeful):**
- Page load: staggered fade-in on hero image, then title, then body
- Figure cards: gentle gold border shimmer on hover
- Scroll reveal: inscription panels fade in as they enter viewport
- Candle/flame decorative elements: slow flicker via CSS keyframes
- Parallax: very gentle (max 20px) on hero images only
- NO auto-playing anything. NO distracting movement.

---

## PROJECT STRUCTURE

```
theogony/
├── index.html                  # Home / Constellation overview
├── methodology.html            # What is archetypal mythopoetics?
├── figures/
│   ├── isis-sophia.html
│   ├── hermes-thoth.html
│   ├── apollo-helios.html
│   ├── fisher-king.html
│   ├── chiron.html
│   ├── hephaestus.html
│   ├── dionysus.html
│   ├── hecate.html
│   ├── job.html
│   ├── prometheus.html
│   ├── orpheus.html
│   ├── oaken-pilgrim.html
│   └── zeus-ammon.html
├── constellation.html          # The full pantheon as inner ecology
├── css/
│   ├── base.css                # Reset, variables, typography
│   ├── layout.css              # Grid, page structure
│   ├── components.css          # Cards, inscription panels, nav
│   └── animations.css          # All keyframes and transitions
├── js/
│   ├── scroll-reveal.js        # Intersection Observer fade-ins
│   └── nav.js                  # Mobile nav toggle
├── assets/
│   ├── images/
│   │   ├── figures/            # Your 13 pantheon images (replace placeholders)
│   │   ├── dividers/           # Decorative divider images (see ChatGPT prompts)
│   │   ├── favicon/            # See human tasks section
│   │   └── nav/                # Nav icon (see ChatGPT prompts)
│   └── fonts/                  # Optional: self-hosted fallbacks
└── TASKS.md                    # This file
```

---

## TASK 1 — Project Scaffolding
**Claude Code prompt:**
```
Create the full directory structure for the Mythopoetic Theogony website as specified
in TASKS.md. Generate base.css with all CSS custom properties, typography imports
(Cinzel, EB Garamond, Cinzel Decorative from Google Fonts), reset styles, and
base element styling. Generate layout.css with a responsive grid system. Include
placeholder <img> tags with descriptive alt text and placeholder paths in each HTML
file. All HTML files should share a consistent <head> with meta tags, font imports,
and CSS links.
```

---

## TASK 2 — Navigation Component
**Claude Code prompt:**
```
Build a shared navigation component for the Mythopoetic Theogony site. It should be:
- A horizontal bar on desktop, hamburger menu on mobile
- Background: var(--deep-night) with a subtle gold border-bottom
- Logo/site name in Cinzel Decorative, gold, linking to index.html
- Nav links: Home, Methodology, The Figures (dropdown to all 13), Constellation
- Dropdown styled as a dark panel with gold hover states
- A small nav icon (oak leaf or compass rose — see assets/nav/) left of the title
- Active page indicated by candlelight underline
- Smooth CSS transitions throughout
- Extracted as a reusable HTML partial or JS-injected component
```

---

## TASK 3 — Home Page (Constellation Grid)
**Claude Code prompt:**
```
Build index.html for the Mythopoetic Theogony site. Include:
- Hero section: full-width dark background, site title in Cinzel Decorative with
  gold gradient, subtitle "A Personal Archetypal Mythopoetics Journal", brief
  one-paragraph introduction (see style guide for tone)
- Constellation grid: 13 figure cards in a responsive CSS grid (4 columns desktop,
  2 tablet, 1 mobile). Each card contains: placeholder figure image, figure name
  in Cinzel, a single key inscription in Cinzel Decorative italics, link to figure
  page. Cards have dark background, gold border, shimmer on hover, subtle scale
  transform.
- Footer: minimal, candlelight text, site name, CC BY-SA 4.0 notice
- Staggered fade-in animation on page load for cards
```

---

## TASK 4 — Methodology Page
**Claude Code prompt:**
```
Build methodology.html — the intellectual and spiritual heart of the site. Sections:

1. WHAT IS ARCHETYPAL MYTHOPOETICS?
   The claim that archetypes are real patterns in the created order — present
   simultaneously in psyche, matter, culture, and the spiritual realm. Not mere
   projection, but perception. The pagan religious imagination as psychologically
   mature tracking of genuine realities. Compatible with Trinitarian monotheism
   because intermediate realities participate in rather than rival the one Creator.

2. ATTRACTOR BASINS
   The three-tier model: universal attractor basins (species-wide, cosmologically
   grounded), cultural constellations (tradition-specific mappings of the universal
   field), personal pantheon (the particular configuration alive in a specific
   person — felt as given rather than chosen). Use a visual diagram: concentric
   circles or a simple CSS illustration.

3. DREAMWORK
   Dreams as the primary site where the archetypal field communicates. The
   difference between the ego's lucid management and genuine receptive engagement.
   Nepsis as the contemplative practice underlying dream awareness. The logismoi
   framework as an alternative to cardinal sin — observation over condemnation,
   comprehension over control. Practical: keep a journal, note affective residue
   not just content, sit with images before interpreting them.

4. SHADOW & ANIMA INTEGRATION
   Brief account of the Jungian individuation process as it relates to this project.
   Shadow as the first threshold, Anima as the second. The initiatory curriculum
   the unconscious runs. Integration as the precondition for the personal pantheon
   becoming visible.

5. WORKING WITH LARGE LANGUAGE MODELS
   How to engage an LLM (Claude, ChatGPT) as a mirror and interpretive partner
   for this work. Key principles:
   - Bring genuine material: actual dreams, real images, honest self-knowledge
   - The LLM as Hermetic interlocutor — it can reflect structure you already carry
     but haven't yet named
   - Convergence across different AI systems as a signal of genuine archetypal
     consistency rather than mere projection
   - Use image generation (ChatGPT, Midjourney) to give visual form to inner figures
   - The images reveal what the figures look like; the analysis names what they mean
   - Neither AI analysis nor AI images replace genuine inner work — they assist it
   - Caution: the LLM will follow your framing. Bring honest material, not
     flattering prompts.

6. THE PERSONAL PANTHEON AS VOCATION
   The constellation is not static — it grows, shifts, and deepens. New figures
   appear when the inner work reaches new territory. The pantheon as a map of
   one's logocentric vocation: the specific facets of the universal archetypal
   field a person is called to embody and transmit.

Style: flowing prose sections separated by decorative gold dividers. Pull-quotes
from key inscriptions in Cinzel Decorative. One relevant figure image per section
as a small inset. Scroll-reveal on sections.
```

---

## TASK 5 — Individual Figure Pages (Template)
**Claude Code prompt:**
```
Build a reusable figure page template (figure-template.html) for the Mythopoetic
Theogony site. Structure:

- Hero: full-width figure image with gold-gradient overlay at bottom, figure name
  in large Cinzel Decorative, subtitle/epithet beneath
- Key inscriptions panel: 3-4 most significant inscriptions from the image,
  styled as illuminated manuscript pull-quotes with decorative borders
- Main content sections (prose):
  * How this figure appeared in the constellation (personal narrative)
  * What this figure represents (archetypal function)
  * The shadow forms (honest account of unintegrated expression)
  * Integration: what this figure contributes to the whole
- Symbolic vocabulary: a small grid of key symbols from the image with brief
  glosses (e.g. caduceus, ankh, owl, lotus etc.)
- Related figures: links to 2-3 figures in the constellation this one
  most closely relates to
- Navigation: previous / next figure in constellation order
- All placeholder text clearly marked with [PLACEHOLDER — Mark to complete]

Apply this template to generate all 13 figure pages with appropriate placeholder
content and correct image paths.
```

---

## TASK 6 — Constellation Page
**Claude Code prompt:**
```
Build constellation.html — a page presenting the full pantheon as an integrated
inner ecology rather than a list of separate figures.

Sections:
1. Introduction: the pantheon as a coherent whole, not 13 separate archetypes
   but a single inner ecology with its own relational dynamics
2. The Axes: feminine axis (Isis-Sophia / Hecate), wound axis (Fisher King /
   Chiron / Job), fire axis (Prometheus / Hephaestus / Apollo), threshold axis
   (Hermes-Thoth / Hecate / Oaken Pilgrim), sovereign axis (Zeus-Ammon latent
   in the Oaken Pilgrim)
3. The Integrating Figure: the Oaken Pilgrim as the figure formed by all others
4. The Absent and the Latent: honest account of what is underdeveloped
   (Zeus-Ammon, the shadow forms)
5. How the Constellation Grows: new figures appear through dreamwork and
   honest inner engagement

Visual: an SVG or CSS constellation diagram showing the 13 figures as stars
connected by lines indicating their relationships. Each star is clickable,
linking to the figure page. Gold on deep night sky background. Subtle twinkle
animation on the stars.

All placeholder prose clearly marked [PLACEHOLDER — Mark to complete]
```

---

## TASK 7 — Scroll Reveal & Animations
**Claude Code prompt:**
```
Build js/scroll-reveal.js using Intersection Observer API. Any element with
class .reveal should fade in (opacity 0 to 1, translateY 20px to 0) when it
enters the viewport. Stagger delay for elements with class .reveal-stagger
based on their index within a parent container. Also build animations.css with:
- @keyframes candleFlicker for flame/candle decorative elements
- @keyframes goldShimmer for border hover effects on cards
- @keyframes fadeInUp for page load entrance
- @keyframes starTwinkle for constellation diagram
All animations should respect prefers-reduced-motion media query.
```

---

## TASK 8 — Responsive Polish & Accessibility
**Claude Code prompt:**
```
Review all HTML files in the Mythopoetic Theogony project and ensure:
- All images have descriptive alt text
- Heading hierarchy is correct (one h1 per page)
- Colour contrast meets WCAG AA for body text against backgrounds
- All interactive elements are keyboard navigable
- Mobile layout is tested at 375px, 768px, 1024px, 1440px
- Navigation dropdown is accessible via keyboard
- Figure cards in the constellation grid reflow gracefully at all breakpoints
- Greek text has lang="el" attribute for correct screen reader pronunciation
```

---

## TASK 9 — Flesh out archetype pages
**Claude Code prompt:**
```
Build archetype html pages more fully:
- In nav, put archetypes in alphabetical order
- Remove How This Figure Appeared from each archetype page
- Make sure clear, full-res version of image is available on each page, below the hero
- Analyse appropriate image for each page, extract key inscriptions and symbols for relevant sections
- Write Archetypal Functions, The Shadow Forms, and Integration
```
---

## HUMAN TASKS (Mark to complete)

### Images
- **Replace placeholder images** in `assets/images/figures/` with your 13 ChatGPT
  images. Suggested filenames:
  - `isis-sophia.png`
  - `hermes-thoth.png`
  - `apollo-helios.png`
  - `fisher-king.png`
  - `chiron.png`
  - `hephaestus.png`
  - `dionysus.png`
  - `hecate.png`
  - `job.png`
  - `prometheus.png`
  - `orpheus.png`
  - `oaken-pilgrim.png`
  - `zeus-ammon.png`

### Favicon
Generate a favicon using ChatGPT with this prompt:
```
A small square icon for a website called Mythopoetic Theogony. Design a simple,
iconic symbol combining an oak leaf and a compass rose, rendered in deep gold
on a near-black background. Sacred geometry style, clean enough to read at 32x32
pixels. No text.
```
Export at 32x32px as `favicon.ico` and 180x180px as `apple-touch-icon.png`.
Place both in `assets/images/favicon/`.

### Domain (optional)
Consider a custom domain. `mythopoetic-theogony.com` or `oakenpilgrim.com` are
both available at time of writing (verify before purchasing). GitHub Pages supports
custom domains via CNAME file.

---

## CHATGPT IMAGE PROMPTS

### Decorative Dividers
Generate 3-4 divider images to separate sections within pages:

**Divider 1 — Oak and Stars:**
```
A horizontal decorative divider for a sacred website. A single oak branch with
acorns and leaves, rendered in deep gold line art on a transparent or near-black
background. Stars scattered along the branch. Style: illuminated manuscript,
Byzantine icon border. Width approximately 800px, height 60px. No text.
```

**Divider 2 — Compass Rose:**
```
A horizontal decorative divider. A compass rose in the centre, flanked by
symmetrical scrollwork and small stars, rendered in gold line art on near-black.
Illuminated manuscript style. 800x60px. No text.
```

**Divider 3 — Caduceus and Ankh:**
```
A horizontal decorative divider combining a caduceus (left) and an ankh (right)
connected by a flowing vine with small golden leaves. Deep gold on near-black.
Sacred, hermetic aesthetic. 800x60px. No text.
```

**Divider 4 — Triple Moon:**
```
A horizontal decorative divider: waxing crescent, full moon, waning crescent
connected by a delicate star-dotted arc. Gold line art on near-black. 800x60px.
```

### Navigation Icon
```
A small navigation icon for a website header. An oak leaf overlaid with a
simple compass rose, rendered as clean gold line art on a transparent background.
Should read clearly at 40x40px. Sacred geometry aesthetic, no text.
```

### Hero Background Texture
```
A seamless dark background texture for a sacred website. Deep midnight blue-black
with very subtle gold geometric sacred geometry pattern — extremely faint, almost
invisible, suggesting depth without competing with overlaid content. Tileable,
approximately 800x800px.
```

### Constellation Diagram Background
```
A deep night sky for a website constellation diagram. Pure near-black with very
subtle nebula suggestion in deep blue-purple, scattered tiny stars of varying
brightness. No figures, no text. Atmospheric and contemplative. 1200x800px.
```

### About / Portrait placeholder
```
An iconic silhouette for a personal sacred journal website. A lone pilgrim figure
standing on a hilltop at dawn or dusk, staff in hand, facing the horizon. Rendered
in deep gold on near-black, illuminated manuscript style. Atmospheric, anonymous,
contemplative. Square format 600x600px.
```

---

## DEPLOYMENT

```bash
# Initialise repository
git init mythopoetic-theogony
cd mythopoetic-theogony
git checkout -b main

# After building locally:
git add .
git commit -m "Initial build — Mythopoetic Theogony"
git remote add origin https://github.com/mbaldwinsmith/mythopoetic-theogony.git
git push -u origin main

# Enable GitHub Pages in repository Settings > Pages > Deploy from branch: main
# Site will be live at: https://mbaldwinsmith.github.io/mythopoetic-theogony/
```

---

## NOTES & PRINCIPLES

This site is a personal sacred journal, not a product. Resist the Hephaestean
temptation to keep building indefinitely. The first complete version — all 13
figure pages with images and basic prose, the methodology page, the constellation
page — is the goal. Everything after that is refinement, not necessity.

The Oaken Pilgrim knows when to put down the staff and rest.

*Rooted in the present. Carried by the winds of the heart.*
