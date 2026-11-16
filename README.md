# Laser Skin & Wellness Center — Next.js homepage demo

A standalone, responsive homepage prototype using the supplied original website images and logo. This is **not deployed** and does not change the existing WordPress site.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Notes

- Booking CTAs open the supplied Boulevard booking menu in a new tab.
- The logo and website images are under `public/images`.
- Next.js Image optimizes imagery and provides responsive sizes.
- This is a homepage demo, not a complete website migration or verified pixel-perfect replica. The menu and anchor navigation work within the demo. Team titles are generic placeholders until approved details are provided.
- Fonts load from Google Fonts; for maximum performance, self-host fonts via `next/font` in production.
- Compare speed using Lighthouse after deployment on comparable hosting. No performance metrics have been measured yet.
