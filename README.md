# Cannonrad, LLC — Marketing Site

Modern, black-themed marketing site for Cannonrad, LLC built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## What's in the box

- Full-bleed 16:9 video hero (auto-play, muted, loop, `playsInline`)
- "boom" loading indicator (small, centered) shown until the hero video is ready
- Top-left username / password login box (replace the submit handler with your auth)
- Subtle "Legacy site" link in the top-right
- Animated scroll prompt at the bottom of the hero
- Animated mesh-network backdrop (canvas) — a radiology / imaging network nod
- Count-up stats: **6.8M+ studies completed**, **600+ active sites**
- "Pain points → CORE PACS solutions" grid (6 cards, easy to extend)
- Auto-scrolling testimonial marquee
- Reduced-motion friendly, dark-mode native, no third-party trackers

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Uploading the hero video

Drop your **~15 second 16:9 MP4** at:

```
public/hero.mp4
```

Optional poster image (shown briefly while the video loads):

```
public/hero-poster.jpg
```

That's it — the homepage will pick it up automatically. If `hero.mp4` is missing or fails to load, the hero gracefully falls back to the animated tech grid with a "hero video pending" hint.

### From a phone

You have a few easy options. Pick whichever is simplest for you:

1. **AirDrop / Nearby Share / email-to-self** the MP4 to your computer, then drop it into `public/hero.mp4` and commit.
2. **Open this repo on github.com on your phone** → navigate to the `public/` folder → "Add file" → "Upload files" → pick the MP4 from your phone → name it `hero.mp4` → commit. You can do this directly from a mobile browser.
3. **Send me the MP4** and I'll add it to the PR (you can attach it on the PR thread or the chat — whichever your interface allows).

> Tip: if your phone records HEVC, export/share as H.264 MP4 for maximum browser compatibility. Aim for ≤ 5–8 MB by encoding at ~1080p with a moderate bitrate.

## Customizing

- Legacy site URL: top of `src/app/page.tsx` (`OLD_SITE_URL`)
- Stats: `src/app/page.tsx` → `Stat` blocks
- Pain points: `src/components/PainPoints.tsx`
- Testimonials: `src/components/Testimonials.tsx`
- Login submit handler: `src/components/LoginBox.tsx`

## Build

```bash
npm run build
npm start
```
