# Mythopoetic Theogony

A personal archetypal mythopoetics journal presented as a static website: fifteen figures, one inner ecology, and a set of interlinked essays on methodology, theory, and symbolic relation.

## Overview

**Mythopoetic Theogony** is a handcrafted, multi-page static site that documents a personal pantheon through:

- figure pages with narrative, inscriptions, symbolic vocabulary, and relational links,
- a visual constellation map of the full archetypal ecology,
- a methodology essay for dreamwork and archetypal practice,
- and a longer theoretical essay engaging Jung, Hillman, and dynamical-systems language.

The site emphasizes contemplative pacing, high-quality imagery, accessibility basics, and subtle motion effects.

## Site Map

- `index.html` — home page with hero and figure-card overview grid.
- `constellation.html` — integrated constellation view with SVG diagram and relational axes.
- `methodology.html` — applied framework for archetypal mythopoetic work.
- `theory.html` — extended theoretical argument and literature-positioned synthesis.
- `figures/*.html` — individual archetypal figure pages.

## Project Structure

```text
theogony/
├── index.html
├── methodology.html
├── theory.html
├── constellation.html
├── figures/
│   ├── figure-template.html
│   └── *.html
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── animations.css
├── js/
│   ├── nav.js
│   └── scroll-reveal.js
└── assets/
    └── images/
        ├── icon.png
        └── figures/*.png
```

## Front-End Architecture

### Styling

The CSS is split by responsibility:

- **`css/base.css`**: variables, typographic defaults, foundational element styling.
- **`css/layout.css`**: containers, grids, section spacing, page-level layout primitives.
- **`css/components.css`**: navigation, cards, inscriptions, figure-page components.
- **`css/animations.css`**: transitions, keyframes, reveal effects.

### Behavior

- **`js/nav.js`** injects a shared navigation bar into `.site-header`, computes relative links depending on current path, supports:
  - active-link highlighting,
  - mobile menu toggle,
  - figures dropdown (click + hover + keyboard Escape close).
- **`js/scroll-reveal.js`** uses `IntersectionObserver` to reveal `.reveal` and grouped `.reveal-stagger` elements; it gracefully disables motion when `prefers-reduced-motion: reduce` is set.

## Figures Included

Current figure set includes:

- Isis-Sophia
- Aphrodite
- Hermes-Thoth
- Apollo-Helios
- Fisher King
- Chiron
- Hephaestus
- Dionysus
- Hecate
- Job
- Prometheus
- Orpheus
- Loki
- Zeus-Ammon
- Oaken Pilgrim

## Run Locally

Because this is a static site, any simple HTTP server works.

### Option A: Python

```bash
python3 -m http.server 8000
```

Then open: <http://localhost:8000>

### Option B: Node (serve)

```bash
npx serve .
```

## Editing Workflow

1. Update content in top-level pages or `figures/*.html`.
2. Add or replace imagery in `assets/images/figures/`.
3. Keep shared styles in the CSS modules above rather than inline styles.
4. If navigation entries change, update the `FIGURES` list in `js/nav.js`.

## Accessibility Notes

- Skip link present on pages (`Skip to content`).
- Figure and hero images include descriptive `alt` text.
- Motion-sensitive users are respected via reduced-motion checks in JS/CSS.
- Navigation supports keyboard Escape to close open menus.

## License

Content and image rights are personal to the project author unless otherwise specified. If you plan to reuse text or assets, obtain explicit permission first.
