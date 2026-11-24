# Simply Plant Care — BUILD LOG

Site: https://simplyplantcare.com — Brand: Simply Plant Care
Built: 2026-11-24, locally in `~/workspace/simply-plant-care/`
Status: **BUILD PASSES** (`npm run build` — 47 pages, 0 errors). NOT pushed to GitHub (push is handled separately).

## Framework & architecture
- Astro 5.18.2 (static) + `@astrojs/sitemap` 3.7.6, no framework JS, no external fonts/scripts.
- Content collection `guides` (glob `src/content/guides/*.md`, zod schema: title, description, keyword, category enum, hero, heroAlt, dates, related slugs).
- Layouts: `BaseLayout` (SEO meta/OG/canonical/JSON-LD, mobile nav, footer, skip link) + `GuideLayout` (H1, reading time, TOC from H2/H3, hero, related guides, Feedback widget, 2 comment-only AdSense slots, BlogPosting + BreadcrumbList JSON-LD).
- Design: cream `#FAF7F0`, forest green `#1E4D3A`, sage `#8AA899`, Georgia serif headings, system sans body.
- Config: `astro.config.mjs` (site https://simplyplantcare.com + sitemap), `wrangler.toml` (Pages output `dist`), `public/robots.txt`, `public/_headers`, `.gitignore`, `README.md` (build/deploy instructions).

## Pages built (47 HTML pages)
- `/` homepage (hero, search, featured, beginner, solver feature, tools, categories, recent, editorial intro)
- `/guides/` all-guides index + 5 category pages: `beginner-plant-care`, `plant-problems-solutions`, `indoor-plant-watering`, `indoor-plant-lighting`, `soil-pots-drainage`
- `/about/`, `/contact/` (mailto form, no fake backend), `/privacy-policy/`, `/terms-and-conditions/`, `/disclaimer/`, `/editorial-policy/`
- `/tools/plant-problem-solver/`, `/tools/plant-care-checklist/`, `/search/` (client-side index over 30 guides, empty state)
- Custom `/404` (404.html), `sitemap-index.xml` + `sitemap-0.xml` (46 URLs), `search-index.json` (30 entries)

## 30 articles (all original writing, no copied content)
Each ~1,300–1,800 words prose: direct-answer intro, at-a-glance table, H2/H3 sections, practical steps, common mistakes, troubleshooting, 4–6 original FAQs, conclusion, related guides, general-only sources (RHS / Missouri Botanical Garden / university extension — no fabricated quotes or URLs). Unique titles + descriptions (verified, no duplicates; descriptions 120–165 chars).

| # | Article URL |
|---|---|
| 1 | https://simplyplantcare.com/guides/how-to-take-care-of-a-snake-plant/ |
| 2 | https://simplyplantcare.com/guides/how-do-you-take-care-of-succulents/ |
| 3 | https://simplyplantcare.com/guides/how-to-care-for-pothos/ |
| 4 | https://simplyplantcare.com/guides/snake-plant-low-light/ |
| 5 | https://simplyplantcare.com/guides/how-to-care-for-lucky-bamboo/ |
| 6 | https://simplyplantcare.com/guides/zz-plant-low-light/ |
| 7 | https://simplyplantcare.com/guides/how-do-you-take-care-of-plants/ |
| 8 | https://simplyplantcare.com/guides/how-do-you-care-for-a-basil-plant/ |
| 9 | https://simplyplantcare.com/guides/how-do-you-care-for-an-anthurium-plant/ |
| 10 | https://simplyplantcare.com/guides/how-do-you-care-for-ferns/ |
| 11 | https://simplyplantcare.com/guides/how-do-you-take-care-of-an-aloe-vera-plant/ |
| 12 | https://simplyplantcare.com/guides/how-do-you-take-care-of-a-rosemary-plant/ |
| 13 | https://simplyplantcare.com/guides/how-do-you-take-care-of-a-spider-plant/ |
| 14 | https://simplyplantcare.com/guides/how-to-care-for-a-cyclamen-plant/ |
| 15 | https://simplyplantcare.com/guides/how-to-care-for-a-kalanchoe-plant/ |
| 16 | https://simplyplantcare.com/guides/how-to-care-for-philodendron-plants/ |
| 17 | https://simplyplantcare.com/guides/how-to-grow-basil-in-pots/ |
| 18 | https://simplyplantcare.com/guides/how-to-take-care-of-potted-tulips/ |
| 19 | https://simplyplantcare.com/guides/how-to-water-snake-plants/ |
| 20 | https://simplyplantcare.com/guides/snake-plant-for-beginners/ |
| 21 | https://simplyplantcare.com/guides/snake-plant-light-needs/ |
| 22 | https://simplyplantcare.com/guides/indoor-plants-for-beginners/ |
| 23 | https://simplyplantcare.com/guides/plants-that-grow-in-the-dark/ |
| 24 | https://simplyplantcare.com/guides/how-to-care-for-poinsettias-inside/ |
| 25 | https://simplyplantcare.com/guides/how-to-take-care-of-a-cactus-indoors/ |
| 26 | https://simplyplantcare.com/guides/how-to-care-for-an-olive-tree-indoors/ |
| 27 | https://simplyplantcare.com/guides/how-to-care-for-a-chinese-money-plant/ |
| 28 | https://simplyplantcare.com/guides/how-to-take-care-of-an-ivy-plant/ |
| 29 | https://simplyplantcare.com/guides/how-to-care-for-a-ficus-tree/ |
| 30 | https://simplyplantcare.com/guides/how-to-care-for-calathea/ |

Anti-cannibalisation kept: snake-plant cluster split (#1 full care, #4 low-light only, #19 watering only, #20 beginner angle, #21 light only); #8 established basil care vs #17 growing basil in pots; #7 general routine vs #22 plant choices; #2 succulents vs #25 cactus vs #11 aloe.

## Interactive features (all client-side vanilla JS, no backend/APIs)
- **A. Plant Problem Solver** (`/tools/plant-problem-solver/`): all 10 symptoms, 5 follow-up question types (soil wet/dry, drainage, light, old/new leaves, watering frequency), 30 scored causes — each with reasoning, inspection steps, corrective actions, what-to-avoid, linked articles; progress indicator, back/start-over, non-diagnosis disclaimer.
- **B. Plant Care Checklist** (`/tools/plant-care-checklist/`): Weekly / Monthly / New plant routines, tickable tasks, progress bar + %, reset with confirm, localStorage persistence.
- **C. Article widgets**: one per article, matched to its topic (watering estimators #1/#19, soil-moisture guide #2, light selectors #3/#6, window guide #4, water-vs-soil toggle #5, beginner checklists #7/#20, pinch steps #8, humidity helpers #9/#10/#30, watering comparison #11, indoor/outdoor #12, brown-tips checker #13, dormancy timeline #14, rebloom steps #15, climbing-vs-trailing #16, pot calculator #17, after-flowering guide #18, light comparison #21, plant picker #22, sortable low-light table #23, seasonal timeline #24, soil drainage #25, light+rotation planner #26, propagation steps #27, ivy comparison #28, leaf-drop checklist #29).
- **D. Feedback**: on all 30 articles — "Was this guide helpful? Yes, it helped me / Not really", localStorage keyed by slug, changeable, confirmation message, no counts/percentages anywhere.

## Images (31 unique, none hotlinked, none reused)
- Homepage hero: `public/images/hero.jpg` (AI-generated, eager-loaded).
- 24 article heroes: AI-generated `.webp` (one per article).
- 6 article heroes: original hand-built SVG botanical illustrations (ivy, ficus, basil-in-pots, potted tulips, indoor-plants-for-beginners, plants-that-grow-in-the-dark) — fallback after the media tool's 4-images-per-response cap.
- `public/favicon.svg`, `public/images/leaf-mark.svg` (original logo marks). Alt text on every hero.
- Note: `media-generation-*.json` sidecar files left by image generation were deleted from `public/images/` before the final build.

## SEO / technical
- Unique title + description, canonical `https://simplyplantcare.com/...`, OG + Twitter meta on every page; one H1 per page (verified on all 30 guides); clean lowercase hyphen URLs; JSON-LD Organization + WebSite (home), BlogPosting + BreadcrumbList (guides); sitemap + robots.txt; no `noindex` on any indexable page; no fake ads (AdSense slots are empty comment-only divs); no TODO/placeholder/lorem text (grep-verified).

## QA results (run 2026-11-24, after final build)
- `npm run build`: **PASS** — 47 pages in ~3.5–4s, sitemap generated. One error fixed during scaffold: Astro 5 `render(entry)` API (not `entry.render()`).
- Internal links: 1,495 hrefs checked across all 47 pages — **0 broken**.
- Images: every `/images/` reference in built HTML resolves to an existing file — **0 missing**.
- Guides: all 30 have exactly 1 H1, a working widget block, feedback widget, TOC, 2 AdSense comment slots, no noindex.
- Titles/descriptions: no duplicates; all descriptions 120–165 chars.
- Solver data: all 10 symptoms verified, 30 causes each with reasoning/inspect/actions/avoid/score/articles.
- Checklist: localStorage persistence + reset present; search fetches `search-index.json` and has an empty state; mobile nav has `aria-expanded` toggle.
- JS syntax: all 141 inline scripts extracted from built HTML pass `node --check` — **0 syntax errors**.
- `search-index.json`: 30 entries. `robots.txt`: Allow all + sitemap reference.

## Not tested in a live browser (subagent has no browser access)
- Click-through behaviour of solver/checklist/widgets/feedback/search and mobile-nav interaction were verified by code inspection + syntax checks only, not by live clicking. Recommend a quick live pass in Chrome after deploy (parent agent can do this).
- No Cloudflare Pages deployment done — push + Pages project setup remain manual steps (see README.md).

## Outstanding
- Nothing blocking. Push to GitHub (repo is now public, still empty) + connect Cloudflare Pages (build command `npm run build`, output `dist`, branch `main`) + point simplyplantcare.com at it.
- `node_modules/` and `dist/` exist locally; both are gitignored.
