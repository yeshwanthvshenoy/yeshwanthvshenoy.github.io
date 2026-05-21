# Portfolio Redesign — Design Spec
**Date:** 2026-05-21  
**Status:** Approved

---

## Overview

Complete redesign of `yeshwanthvshenoy.github.io` from a generic BootstrapMade template into a dark, modern, ultra-minimalist hacker-terminal aesthetic. Deployed as a static site on GitHub Pages with no build step.

---

## Design Direction

**Theme:** Hacker Terminal  
**Background:** `#080808` (near-black)  
**Accent:** `#00ff88` (green)  
**Primary text:** `#f0f0f0`  
**Secondary text:** `#555`–`#444`  
**Borders/dividers:** `#111`–`#1a1a1a`  
**Fonts:**
- `Inter` (Google Fonts) — body, headings
- `JetBrains Mono` (Google Fonts) — labels, section markers, nav, tags, code-style elements

**Visual language:**
- Section markers styled as code comments: `// about`, `// skills`
- Monospace labels in all-caps with wide letter-spacing
- Green accent reserved for: active nav indicator, primary skill tags, company names, stat numbers, accent elements
- Subtle green glow on hover states (`#00ff8822` backgrounds)
- No photos or avatars — content-only

---

## Layout

**Structure:** Fixed sidebar (left) + scrollable content pane (right)  
**Sidebar width:** `220px`, fixed, does not scroll  
**Content pane:** `flex: 1`, scrolls independently

### Sidebar contents (top → bottom)
1. Name (`Yeshwanth V Shenoy`) + monospace role tag (`// staff_engineer`)
2. Vertical nav: `about / skills / experience / contact` — active item shows a `2px` green left-bar indicator
3. Social icons at the bottom: email, LinkedIn, GitHub, Medium — small square buttons with hover border-color transition to green

### Content pane sections (each `min-height: 100vh`, vertically centered)
1. **About**
2. **Skills**
3. **Experience**
4. **Contact**

Each section opens with a `// section-name` label in monospace gray, followed by section-specific layout.

**Responsive:** On mobile (`< 768px`) the sidebar collapses to a top bar with hamburger toggle (Bootstrap utility classes).

---

## Sections

### About
- Large name: `52px`, `font-weight: 700`, `letter-spacing: -2px`
- Typing animation (Typed.js via CDN): cycles through `["Staff Software Engineer", "Platform Engineering", "DevEx", "Distributed Systems", "Cloud Native SaaS"]` with blinking cursor
- 2-line bio paragraph in `#555`
- Stat row (bordered top): `11+ Years Exp` / `4 Companies` / `99.99% SLA Delivered` — numbers in green monospace

### Skills
Chips grouped into 4 categories, each with a monospace category label:
- `languages` → Java, Python, Go, TypeScript (green/primary chips)
- `infrastructure` → Kubernetes, Docker, Kafka, gRPC, GCP, AWS (mix primary/secondary)
- `databases` → PostgreSQL, MySQL, MongoDB, Redis (secondary chips)
- `observability` → Prometheus, Grafana, Datadog, PagerDuty (secondary chips)

**Primary chip:** `background: #0d1f14`, `color: #00ff88`, `border: 1px solid #00ff8822`  
**Secondary chip:** `background: #111`, `color: #555`, `border: 1px solid #1a1a1a`

### Experience
2-column grid per job entry (`140px` meta column + `1fr` body):
- **Left:** company name (green monospace) + date range (dark gray)
- **Right:** job title + bullet list

Jobs:
1. Okta — Staff Software Engineer (Jan 2024 – Present)
2. Rakuten — Lead Software Engineer (Aug 2020 – Dec 2023)
3. Freshworks — Senior Software Engineer (May 2018 – Aug 2020)
4. TPF Software — Software Engineer (May 2015 – May 2018)

Bullet prefix: `›` in `#00ff8855`

### Contact
2×2 card grid (max-width `500px`):
- Email, LinkedIn, GitHub, Medium
- Cards: dark border, hover transitions to green border
- `↗ view resume` button below grid — outlined green, links to Google Drive PDF

---

## Tech Stack

| Concern | Solution |
|---|---|
| Layout grid | Bootstrap 5 CSS only (no Bootstrap JS) |
| Fonts | Google Fonts CDN (Inter + JetBrains Mono) |
| Typing animation | Typed.js CDN |
| Icons | Boxicons CDN (sidebar social icons) |
| Animations | CSS `@keyframes` + `IntersectionObserver` (vanilla JS) |
| Build step | None — pure static HTML/CSS/JS |

**Removed from current site:**
- jQuery, Bootstrap JS bundle, Owl Carousel, Venobox, Isotope, CounterUp, Waypoints, php-email-form, icofont, remixicon vendor folders
- All AOS (animate on scroll) library usage
- All inline `style=""` attributes

**Kept:**
- Google Analytics (`G-F35QEVNWJW`)
- CNAME file
- Boxicons (for social icons in sidebar)
- Typed.js

---

## Animations

- **Section fade-in:** Sections fade up (`opacity: 0 → 1`, `translateY: 20px → 0`) when entering viewport via `IntersectionObserver`. One-time trigger (not re-fires on scroll up).
- **Nav active state:** Updates as user scrolls — active section's nav item gets the green indicator via `IntersectionObserver` on sections.
- **Hover transitions:** `0.15s ease` on nav items, social icons, skill tags, contact cards.
- **Typing cursor:** CSS `blink` keyframe on the Typed.js cursor.
- No parallax, no heavy JS animations.

---

## File Structure (after redesign)

```
index.html               ← single file, all sections
assets/
  css/
    style.css            ← complete rewrite (~300 lines)
  js/
    main.js              ← rewrite: IntersectionObserver, nav highlight, mobile menu
  img/
    yeshwanthvshenoy.jpeg  ← kept (not displayed, but keep for OG/favicon use)
  vendor/
    bootstrap/css/       ← keep bootstrap.min.css only
    boxicons/            ← keep for social icons
    typed.js/            ← keep typed.min.js
    (all others deleted)
CNAME
```

---

## Content Changes

- **Phone number removed** from Contact section (privacy; not needed for a public portfolio)
- **Physical address removed** from Contact section
- **Interests section removed** (replaced by stats row in About — cleaner)
- Experience bullet points trimmed to 2–3 per job (original had 5–6; brevity fits the minimalist tone)
- Resume link points to existing Google Drive PDF

---

## Out of Scope

- Projects section (explicitly excluded)
- Contact form (no server-side handler)
- Dark/light mode toggle
- Blog or CMS integration
