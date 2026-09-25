# Product decisions

A running log of decisions made while building this site, and the reasoning behind them. Newest at the bottom.

## Page structure: combined listings, not separate sub-pages
Engineering shows Projects above Notes on one `/engineering` page (same for Product: Builds above Writing on one `/product` page), rather than a landing page linking out to separate `/engineering/projects` and `/engineering/notes` listing pages.
**Reason:** matches the original brief ("Projects shown above Notes") and keeps the nav shallow while content is still thin.

## Product tag filter: combined, not per-subsection
The tag filter on `/product` filters Builds and Writing together with one set of buttons, rather than giving each sub-section its own filter.
**Reason:** simpler UI, one control; chosen as the lower-complexity default.

## No CV on the site
No `/cv` page, no downloadable PDF, no CV link anywhere (header, footer, or home).
**Reason:** explicit decision not to make the CV publicly downloadable or viewable at all.

## No YouTube/video embed component
Removed the `YouTubeEmbed` component entirely after initially building it (it had been on the original requirements list).
**Reason:** not needed — no plan to embed video content on the site.

## No light/dark mode toggle
Removed the toggle and the automatic `prefers-color-scheme` switching; the site now uses a single fixed colour palette defined once in `src/styles/global.css`.
**Reason:** "it's my website and my personality, so my colours and my vibe" — a switcher dilutes a deliberate, single aesthetic choice.

## Added a Creative tab
Added a sixth content section, `Creative`, alongside Engineering/Product/Music/Food. Currently hidden from the nav (`enabled: false` in `src/config/nav.ts`) until there's content for it, same treatment as Music and Food.
**Reason:** "I don't want to have my entire personality built around engineering" — wanted a place for creative work that isn't music, food, or a technical write-up.

## No fabricated placeholder content
All content collections were left empty rather than populated with invented sample posts/write-ups, even though early placeholder entries were drafted during development.
**Reason:** placeholder prose reads as real content; the site should show its genuine empty state until real posts are written.

## GitHub Pages deploy: switched from legacy branch deploy to GitHub Actions
The repo's Pages source was set to `build_type: workflow` (from the legacy "deploy from a branch" default) so the `withastro/action` + `actions/deploy-pages` workflow can actually publish.
**Reason:** the site needs a build step (Astro compiling Markdown/components to HTML) that the legacy branch-deploy mode can't perform.
