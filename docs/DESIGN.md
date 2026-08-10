# Design notes

Why this site looks the way it does, and where the decisions came from. Update
this file when the visual language changes, so the reasoning does not have to be
reconstructed from the CSS later.

## Origins

**Base template** — [`wanoo21/tailwind-astro-starting-blog`](https://github.com/wanoo21/tailwind-astro-starting-blog),
an Astro port of [`timlrx/tailwind-nextjs-starter-blog`](https://github.com/timlrx/tailwind-nextjs-starter-blog).
The layout components (`SectionContainer`, `ListLayout`, `ListWithTagsLayout`,
`PostLayout`, `SimplePostLayout`), the `SITE_METADATA` shape, the i18n table and
the pagination all come from it.

**Visual reference** — <https://anttwo.github.io/surflo/>, the project page for
_Surflo: Consistent 3D Surface Flow from a Global State_. This is where the
colour, the type weights and the section treatment come from. It is a research
project page, so its structure does not transfer; its surface language does.

## What was taken from the reference

Read from its `base.css` / `assets/site.css` rather than eyeballed:

| Aspect           | Reference                         | Here                                            |
| ---------------- | --------------------------------- | ----------------------------------------------- |
| Default theme    | dark, light is opt-in             | same                                            |
| Background       | `#0a0a0a`                         | `neutral-950`, which **is** `#0a0a0a`           |
| Accent (dark)    | `#5ee0d6`                         | `teal-300` `#5eead4`                            |
| Accent (light)   | `#448D87`                         | `teal-700` `#0f766e` — see below                |
| Hairlines        | `rgba(accent, 0.15)`              | same idea, accent-tinted                        |
| Surfaces         | `rgba(255,255,255,0.02)`          | same                                            |
| Type             | Roboto, 18px base                 | Roboto, 17px base                               |
| Weights          | 100 display / 300 body / 500 bold | 100 display / 200 section / 300 body / 500 bold |
| Section headings | numbered + trailing hairline      | same, via CSS counter                           |
| Micro labels     | uppercase, wide tracking          | same                                            |
| Technical values | JetBrains Mono                    | same, for dates and section numbers             |
| Section rhythm   | `6rem`                            | comparable                                      |

## Where we deliberately diverge

- **Light-mode accent.** The reference uses `#448D87`, which is 3.88:1 on white
  and fails WCAG AA for text. Light mode uses `teal-700` (5.47:1) instead. The
  hue matches; the lightness does not.
- **`--fg-subtle` in dark** is `#8a8a8a` (5.73:1), not `neutral-500` (4.18:1),
  because it carries the small mono metadata.
- **Section headings are weight 200, not 100.** Roboto Thin works at the
  reference's 40px on short titles; our section titles are longer
  ("Domestic Conferences (Reviewed)") and sit at ~30px.
- **List item titles stay at weight 500.** The reference is a six-section
  narrative; this site is largely long lists, and ultra-light type is harder to
  scan down thirty rows.
- **No full-viewport WebGL/video hero.** A project-page affordance that does not
  earn its cost here.
- **Secondary links (arXiv, Slides, ...) are underlined text, not pills.** The
  reference has three such buttons on the whole page; a publication list has
  three per row.

## Rules that hold across the site

1. **One emphasis device per item.** Items are separated by a hairline. No
   border + shadow + hover-lift + accent bar stacked on the same card.
2. **One accent hue.** Teal, via `--accent`. No hue-coded badges, no emoji as
   icons.
3. **Semantic colour tokens only.** Use `text-fg`, `text-fg-muted`,
   `text-fg-subtle`, `border-hairline`, `bg-surface`, `text-accent`. They swap
   per theme in `src/styles/global.css`; do not reintroduce `gray-*` with
   `dark:` pairs.
4. **Size, not weight, carries hierarchy.** Nothing above weight 500.
5. **Running text is capped at 68 characters** with the `measure` utility. The
   page container is 1024px, which is roughly double a readable measure.
6. **Every text colour meets WCAG AA (4.5:1)** against its background, in both
   themes. Check before adding a colour.
7. **Dates and other figures use `font-mono` with `tabular-nums`** so columns
   align.

## Shared components

`PageHeader`, `SectionBlock`, `EntryList`, `Entry`, `ResourceLinks` in
`src/components/`. Index pages (`publications`, `talks`, `service`, `about`,
`index`) are all assembled from these; add to them rather than hand-rolling a
page, otherwise the four list pages drift apart again the way they did before.

## Known open items

- `src/assets/favicon.svg` is still the Astro logo from the template.
- `applications/frontend_old/` holds the previous Nuxt implementation.
- `src/components/Card.astro`, `src/layouts/AuthorLayout.astro` and
  `src/layouts/ListLayout.astro` are unused template leftovers.
- Comments are disabled: `SITE_METADATA.comments.provider` is `null` until this
  site has its own giscus IDs. It previously pointed at the template author's
  repository.
- `SHOW_TALK_COVERS` is `false`. The existing covers are generated placeholders
  in four unrelated hues, and three talks share one purple image.
- Some content is still placeholder: an "Example Workshop on Computer Vision"
  entry in `organizing`, and a `Default` tag with no posts.
- Talk `venue` fields repeat the talk type ("Invited Talk, ASPIRE ..."), which
  now duplicates the label column.
- Japanese titles fall back to a system font; Roboto has no CJK glyphs.
