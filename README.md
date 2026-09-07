# Cannonrad, LLC — Marketing Site

Black-themed marketing site for **Cannonrad, LLC**, a full-service radiology provider: board-certified reading coverage, contracted turnaround times, and report access for everyone at the client who needs it. CORE PACS is positioned as included infrastructure rather than the headline product.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, deployed as a static export to GitHub Pages.

**Live:** https://kakivark.github.io/cannonRad/

## Editing content

Almost all copy and numbers live in one file:

```
src/lib/content.ts
```

Change the pitch, stats, turnaround targets, subspecialties, pain points, or testimonials there — no component edits needed. Anything marked `PLACEHOLDER` still needs real data before launch.

## Page structure

| Section | Purpose | Component |
| --- | --- | --- |
| Hero | Video background, login, legacy link, scroll prompt | `HeroVideo`, `LoginBox` |
| By the numbers | Animated stat counters | `CountUp` |
| What we provide | Three pillars: reads, turnaround, access | `Pillars` |
| Turnaround | Animated TAT tiers by priority | `Turnaround` |
| Report access | Hub-and-spoke of who needs the report | `ReportAccess` |
| Scope of coverage | Subspecialties and modalities | `CoverageScope` |
| Why Cannonrad | Pain point → solution grid | `PainPoints` |
| CORE PACS | Supporting platform, deliberately demoted | `Platform` |
| Reputation | Testimonial marquee | `Testimonials` |
| Contact | CTA | — |

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## The hero video

The hero reads from `public/hero.mp4`, with `public/hero-poster.jpg` as the poster frame. The current file was transcoded from an uploaded `.mov` to a web-friendly H.264 MP4 (~3.6 MB, `+faststart`).

To replace it, re-encode your source and overwrite both files:

```bash
ffmpeg -i source.mov -an -c:v libx264 -preset slow -crf 24 \
  -profile:v high -pix_fmt yuv420p -movflags +faststart public/hero.mp4

ffmpeg -ss 0.5 -i source.mov -frames:v 1 -q:v 4 public/hero-poster.jpg
```

If the video is missing or a browser cannot decode it, the hero falls back to the animated tech grid after a short timeout rather than leaving the `boom` loader on screen.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs a static export and publishes to GitHub Pages. Pages must be set to **Source: GitHub Actions** in repository settings (already configured).

Local production preview:

```bash
npm run build
npx serve out
```

> `next start` does not work with `output: "export"` — serve the `out/` directory instead.

## Notes

- All motion respects `prefers-reduced-motion`; the canvas backdrop pauses when the tab is hidden.
- The login form is UI-only. Wire the submit handler in `src/components/LoginBox.tsx` to a real auth endpoint.
- Testimonials are deliberately generic placeholders and must be replaced with approved customer language before launch.
