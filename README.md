# Simply Plant Care

Plain, practical indoor plant care guides — https://simplyplantcare.com

## Tech

- [Astro 5](https://astro.build) static site
- Content collections for the 30 guides (`src/content/guides/*.md`)
- Deployed on Cloudflare Pages from the `main` branch

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy (Cloudflare Pages)

1. In the Cloudflare dashboard, create a Pages project connected to this repository.
2. Branch: `main`
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Add the custom domain `simplyplantcare.com` to the Pages project.

`wrangler.toml` sets the Pages build output directory to `dist`.

## Structure

- `src/pages/` — homepage, category pages, static pages, tools, search
- `src/pages/guides/[...slug].astro` — dynamic guide route
- `src/content/guides/` — the 30 guide articles (Markdown, one file per guide)
- `src/layouts/` — `BaseLayout.astro`, `GuideLayout.astro`
- `src/styles/global.css` — all site styles
- `public/` — `robots.txt`, `_headers`, favicon, images

## Notes

- No external scripts or fonts — system font stacks only.
- The two AdSense slots in `GuideLayout.astro` are empty commented divs; add ad code there later.
- The Plant Problem Solver and Plant Care Checklist are client-side only (vanilla JS + localStorage). No backend.
- The contact form composes a `mailto:` email in the visitor's own email app; nothing is stored on the site.
