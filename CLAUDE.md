# Nail Studio by H — Website

## Project Overview

A single-page website for **Nail Studio by H**, a home-based gel nail studio in Glenwood, Sydney.
Instagram: [@nailstudio_byh](https://www.instagram.com/nailstudio_byh/)

**Primary goal:** Showcase her nail work and direct potential clients to book via her waiting list form.

---

## Business Context

| Detail | Value |
|---|---|
| Business name | Nail Studio by H |
| Nail tech | "H" |
| Location | Home studio — Glenwood, Sydney |
| Services | Gel only (Gel X, BIAB, Gel Manicure) |
| Booking method | Google Form waiting list → confirmed via Instagram DM |
| Waiting list URL | https://forms.gle/DaHsp9hvNU51LGXP8 |
| Instagram | https://www.instagram.com/nailstudio_byh/ |
| Available days | Mon · Wed · Thu · Sun |

### Pricing (effective 1 Feb 2026)

**Services**
- Gel Extensions (Gel X) — from $65
- BIAB (Soft Gel) — from $50
- Gel Manicure — from $35

**Removals (own work only)**
- Removal + manicure — $20
- Removal + Gel X — $80
- Removal + BIAB — $65
- Removal + Gel Manicure — $50

**Infills (own work only)**
- 3–4 weeks — +$5 on BIAB price
- 4+ weeks — +$10 on BIAB price

Design add-ons vary by complexity — DM for custom quote.

### Policies
- Gel products only (HEMA-free Gel X system)
- No walk-ins, no foreign removals or infills
- Come with bare nails unless booked for an infill
- Late fee: $10 if 10+ minutes late; appointment cancelled at 20 minutes
- Payment: card or cash only (no bank transfers)

---

## Tech Stack

- **Plain HTML / CSS / JS** — no frameworks, no build tools
- Three files: `index.html`, `styles.css`, `script.js`
- Fonts: Cormorant Garamond (headings) + Poppins (body) via Google Fonts
- No backend, no CMS

---

## Design Language

Match the aesthetic of the Instagram page — moody, minimal, luxe.

| Token | Value |
|---|---|
| Background | `#faf7f4` (warm cream) |
| Surface | `#f5ede8` / `#ede0da` |
| Rose accent | `#c07878` / `#d9a8a8` |
| Nude accent | `#c4a48e` |
| Text | `#2a1a18` (deep warm charcoal) |
| Text muted | `#7a6860` |
| Border | `rgba(192, 120, 120, 0.2)` |
| Heading font | Cormorant Garamond (serif, light/italic) |
| Body font | Poppins (sans-serif, 300–500) |
| Border radius | 12px |

**Aesthetic principles:**
- Light, airy cream backgrounds with blush/rose and nude accents
- Italic serif headings for elegance
- Minimal, no clutter
- Subtle animations (sparkle float, scroll fade-in, scroll-line hint)
- The logo is a CSS-rendered circle with "NAIL STUDIO / by / H" — no image logo
- Color palette matches the brand: blush pinks, warm nudes, cream/off-white

---

## Page Structure

Single-page scroll with anchor nav:

1. **#hero** — Full-viewport intro with sparkle animation, "Handcrafted Gel Nails" headline, Book CTA
2. **#about** — Bio text + meta chips + logo circle
3. **#services** — Pricing cards (Services / Removals / Infills)
4. **#gallery** — 3-column grid of 9 tiles linking to Instagram posts
5. **#booking** — 3-step booking flow, waiting list button, Instagram DM link
6. **#policies** — Accordion (General / Cancellations / Payment / Designs)
7. **Footer** — Logo, Instagram link, copyright

---

## Gallery

Gallery tiles are CSS gradient placeholders that link to real Instagram posts.
When updating gallery posts, replace the `href` on `.gallery-tile` elements and update the gradient in `.tile-N` CSS rules to loosely match the post's color palette.

Current posts (tile-1 through tile-9):
- tile-1: `/p/DVyKrfwE9ge/`
- tile-2: `/p/DVpF2jlkz6G/`
- tile-3: `/p/DVcvaCxk45x/`
- tile-4: `/p/DVX2_h1E3jy/`
- tile-5: `/p/DVSi-ZmE_Bi/`
- tile-6: `/p/DU7DOVrDx1o/`
- tile-7: `/p/DU2_jrIk64E/`
- tile-8: `/p/DU1g7mEk6B8/`
- tile-9: `/p/DUpWBXyE8oK/`

---

## JavaScript Behaviours

- **Navbar:** adds `.scrolled` class (frosted glass) after 30px scroll
- **Mobile nav:** hamburger toggles `.open` on nav links; closes on link click
- **Accordion:** one-open-at-a-time toggle with `aria-expanded` and `max-height` animation
- **Scroll fade-in:** `IntersectionObserver` adds `.visible` to `.fade-in` elements with staggered delay

---

## Deployment

Not yet decided. Site is static — compatible with GitHub Pages, Netlify, or Vercel with zero config.

---

## Content Notes

- All copy and pricing should reflect what's on the Instagram page as source of truth
- Avoid making up services or prices — check Instagram if uncertain
- Tone is warm, personal, and feminine but not overly cutesy
- "H" refers to the nail tech — her full name is not published on the site
