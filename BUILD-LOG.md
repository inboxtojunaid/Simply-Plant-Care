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

---

## Humanize pass 2026-11-24 (rewrite coordinator, 6 batches of 5)

Why: the 30 articles shared an identical H2 tail (Common mistakes → Troubleshooting → FAQs → Conclusion → Related guides → Sources) and most opened with an "At a glance" table and the same "You care for X by…" intro pattern — bulk pages with one identity, which reads as machine-made. Meta descriptions were already unique (142–159 chars) and were kept unique, but their phrasing was varied so none now opens "Learn how to…" / "How to care for…".

What changed in every article: full rewrite of the body in original words (nothing copied from anywhere online); varied sentence rhythm (short sentences next to long ones, 1-sentence paragraphs); stock phrases removed; intros now open on a specific fact or a direct answer, never by restating the heading; keyword used naturally, not in most sentences; at least one list converted back to prose; tail sections renamed per article and the generic "Conclusion" + "Sources and further reading" H2s dropped everywhere — sources folded into a one-line "Further reading" credit (RHS / Missouri Botanical Garden / university extension); each article ends on new information, a decision, or a number, not a summary. "At a glance" tables kept in only 1 of 30 articles (olive tree). Titles, slugs, URLs, images, widgets, internal link targets and all frontmatter except `description` are unchanged.

Per article (new shape):
1. how-to-take-care-of-a-snake-plant — mistake-first, then the routine; 3-line verdict, no table.
2. how-do-you-take-care-of-succulents — succulent vs cactus vs leafy houseplant comparison spine.
3. how-to-care-for-pothos — question-led H2s, widget mid-article.
4. snake-plant-low-light — verdict-first light test ("No."), short-version paragraph.
5. how-to-care-for-lucky-bamboo — water-vs-soil comparison spine.
6. zz-plant-low-light — ZZ vs snake plant head-to-head; "what it needs in 30 seconds" list.
7. how-do-you-take-care-of-plants — week-in-the-life timeline spine.
8. how-do-you-care-for-a-basil-plant — harvest-first, working backwards.
9. how-do-you-care-for-an-anthurium-plant — troubleshooting BEFORE the routine.
10. how-do-you-care-for-ferns — humidity as the spine; 3-line verdict.
11. how-do-you-take-care-of-an-aloe-vera-plant — mistake-first, before/after (thirsty vs drowned).
12. how-do-you-take-care-of-a-rosemary-plant — indoor-vs-outdoor comparison spine.
13. how-do-you-take-care-of-a-spider-plant — lifecycle spine (plantlet → mature plant → plantlets).
14. how-to-care-for-a-cyclamen-plant — seasonal calendar spine (autumn → winter → spring → summer).
15. how-to-care-for-a-kalanchoe-plant — rebloom timeline spine; short-version paragraph only.
16. how-to-care-for-philodendron-plants — climbing-vs-trailing comparison spine.
17. how-to-grow-basil-in-pots — pot-setup decision sequence.
18. how-to-take-care-of-potted-tulips — after-flowering decision spine, ends on a decision checklist.
19. how-to-water-snake-plants — numbers-led, estimator widget early.
20. snake-plant-for-beginners — first-30-days timeline spine.
21. snake-plant-light-needs — window-by-window spine (north → east → south → west).
22. indoor-plants-for-beginners — choose-your-first-plant picker framing (by scenario, not a 1–10 list).
23. plants-that-grow-in-the-dark — ranked plant-by-plant verdicts (#1–#8 as H2s).
24. how-to-care-for-poinsettias-inside — calendar-year spine (January → December).
25. how-to-take-care-of-a-cactus-indoors — desert-logic spine (each care decision traced to a desert fact).
26. how-to-care-for-an-olive-tree-indoors — light-and-rotation planner spine; only article keeping an "At a glance" table.
27. how-to-care-for-a-chinese-money-plant — propagation / pup-cycle spine.
28. how-to-take-care-of-an-ivy-plant — type-by-type comparison (English, Algerian, grape, Swedish).
29. how-to-care-for-a-ficus-tree — leaf-drop troubleshooting first, then the preventive routine.
30. how-to-care-for-calathea — two-levers spine (water quality + humidity).

Audit after rewriting (run 2026-11-24, fresh, script-checked):
- H2 sequences: all 30 printed and compared — NO two identical.
- Banned phrases: 0 hits for "in today's world", "plays a crucial role", "it is important to note", "in conclusion", "overall", "furthermore / moreover / additionally".
- Intros: 0 articles open with "You care for…" / "You take care of…".
- "Conclusion" / "Sources and further reading" H2s: 0 remaining. "At a glance" H2: 1 (olive tree only).
- Descriptions: all 30 unique, 142–158 chars, each naming its plant + its specific angle (e.g. low-light articles say low light, watering article says watering); none starts "Learn how to…" / "How to care for…".
- Widgets: all 30 byte-identical to the pre-rewrite originals (verified against Simply-Plant-Care-Astro-Site.zip).
- Frontmatter: verified against the same zip — only `description` changed; title, keyword, hero, related, category, dates identical in all 30.
- Length: 1,402–1,795 words true prose per article (batch-reported); file word counts incl. headings/FAQs/related lists 1,434–1,848.
- No TODO / lorem text. wrangler.toml NOT re-added (still absent, matching the repo).

Build: `npm run build` PASS — 47 pages in 3.69s, sitemap generated, 0 errors (run 2026-11-24 after the rewrite).

Still templated / outstanding: nothing structural — the only shared elements left are the intentional ones: the GuideLayout template itself (one H1, TOC, feedback widget, AdSense slots), FAQ sections (renamed per article, 4–6 questions each), and a Related-guides link block at the end of each article. Nothing was pushed to GitHub — push is handled separately.

## Update 2026-11-28 — Christmas cactus guide, tree planting cost calculator, alt text, cookie consent

Three jobs, all local only — nothing pushed to GitHub (the user commits via their own browser).

### 1. Two new pages
- **New guide: `src/content/guides/how-do-you-care-for-a-christmas-cactus-plant.md`** — keyword "how do you care for a christmas cactus plant", title "How Do You Care for a Christmas Cactus Plant?", description 148 chars (unique vs all 31 descriptions), category "plant-care", date/updated 2026-11-28, related: poinsettias-inside, cactus indoors, succulents, pothos. 1,688 words prose. Humanized style: forest-vs-desert opening, unique H2 sequence (verified unique vs all other guides — no "Conclusion" H2, no "At a glance" table, verdict is a prose section "The whole routine, boiled down", FAQs under "Christmas cactus, asked and answered"), 0 banned stock phrases, widget "Will it bloom by Christmas?" (dark-night start + night temperature → rough bloom window, unique slug-prefixed IDs, client-side only). Internal links to poinsettia, cactus indoors, succulents, pothos.
  - **UNFINISHED — hero image missing:** `public/images/how-to-care-for-a-christmas-cactus-plant.webp` does NOT exist yet. The guide references that path (build does not verify image files exist) but the hero will be broken until the image is generated and added. Do NOT reuse another plant's photo as its hero.
- **New tool: `src/pages/tools/tree-planting-cost-calculator/index.astro`** — title "Tree Planting Cost Calculator", description 153 chars, canonicalPath `/tools/tree-planting-cost-calculator/`, one H1, client-side only (no fetch/network). Inputs: number of trees (1–100), tree size, editable price per tree, labour (DIY / gardener / tree service, editable per-tree cost), 4 extras checkboxes with editable per-tree costs. Output: itemised subtotals, total range at ±20%, per-tree cost range, plus "estimate only" note. FAQ 4 questions. Default example prices (labelled in-page as editable examples, NOT market data): per tree Seedling $15, Sapling $45, Mature $180, Large specimen $450; labour DIY $0, gardener $40, tree service $120; extras staking $25, mulch $10, soil amendment $15, first-year watering $20.
- **Wiring:** calculator card added to homepage "Free tools" section (`src/pages/index.astro`) and to the footer Tools nav (`src/layouts/BaseLayout.astro`). Christmas cactus guide was NOT hard-coded anywhere — it appears in Recent guides automatically (dated 2026-11-28, newest first; verified in built homepage) and in the guides index.

### 2. Alt text — all images
- Before: homepage hero already descriptive; all 30 guide heroes descriptive via heroAlt; BUT 6 homepage featured card images had `alt=""` and the brand logo in BaseLayout had `alt=""`.
- After: each featured card image now uses that guide's descriptive heroAlt (snake plant, pothos, beginners illustration, general plants, watering snake plant, calathea); brand logo alt is "Simply Plant Care leaf logo". No image file changed.
- Audit on built site: 88 `<img>` tags in dist HTML, 0 with missing/empty alt.

### 3. Cookie consent — small
- `src/layouts/BaseLayout.astro`: small notice fixed bottom-right on desktop (`role="dialog"`, Accept / Decline buttons, link to /privacy-policy/), hidden by default until first visit; choice stored in localStorage only under key `spc-cookie-choice` — the site itself sets no cookie. Footer has a "Cookie settings" button that clears the stored choice and re-shows the notice. Inline script follows the existing nav-toggle pattern; keyboard accessible (real buttons), no overlay, does not block content.
- `src/styles/global.css`: `.cookie-notice` / `.cookie-buttons` / `.cookie-btn` / `.footer-cookie-btn` styles; on mobile (≤720px) it becomes a full-width slim bar. Respects `prefers-reduced-motion` via the existing global rule (no transitions/animations on the notice).
- `src/pages/privacy-policy.astro`: Cookies section rewritten — the old line "The site itself uses no cookie banner because it sets no cookies" is gone. It now says the site shows a small consent notice, stores only the Accept/Decline choice in browser local storage, sets no tracking/advertising cookies itself, and that the footer "Cookie settings" link re-opens it. Rest of the policy unchanged.

### QA (run 2026-11-28, coordinator-verified)
- Build: `npm run build` PASS — 50 pages in 3.65s, 0 errors. (Baseline was 48, not 47: the /author/zeeshan-farooq/ page was added in a later session after the 2026-11-24 count. 48 + 2 new = 50. Sitemap has 49 URLs = 50 HTML pages minus the 404 page, which is correctly excluded.)
- Sitemap: both new URLs present — /guides/how-do-you-care-for-a-christmas-cactus-plant/ and /tools/tree-planting-cost-calculator/ (1 occurrence each).
- New guide: H2 sequence unique (True), description unique 148 chars, 0 banned phrases, 0 TODO/lorem, no TODO/lorem anywhere in src/.
- Calculator: description 153 chars, script present, no fetch/network calls.
- Alt text: 88 imgs in dist, 0 missing/empty alt.
- Cookie: `.cookie-notice` markup + `spc-cookie-choice` script + `cookie-settings` button present in built pages (checked homepage, a guide page, calculator page); cookie CSS present in built stylesheet.
- Christmas cactus guide verified in built /guides/ index and first in Recent guides on the homepage.

### Still unfinished
- Christmas cactus hero image `public/images/how-to-care-for-a-christmas-cactus-plant.webp` does not exist — generate it before or right after committing, or the guide page will show a broken hero image.
- Calculator default prices are example figures only — the user can (and should) adjust them to match real nursery quotes.
- Nothing pushed to GitHub — push is handled separately by the user in their own browser.
