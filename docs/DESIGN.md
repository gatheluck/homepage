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

## Teaser images

Index rows carry an optional teaser at the **trailing edge** of the row, behind
the per-page `SHOW_TEASERS` flags in `src/consts.ts`.

- **Trailing, not leading.** A leading thumbnail leaves a hole in the middle of
  any row that has no image and pushes its text out of line with its
  neighbours. At the trailing edge an empty cell is indistinguishable from the
  page margin. That matters while most collections are only partly illustrated.
- **One aspect ratio, `aspect-teaser` (1200×630).** Mixed ratios down a column
  are the main reason thumbnail lists look untidy. The ratio is fixed on the
  wrapper, not the image, so the row height is known before the image loads and
  nothing shifts. It matches Open Graph rather than 16:9 because that is the
  format the source images arrive in: the workshop teasers put a left-aligned
  title about 2.5% in, and cropping 1200×630 to 16:9 removes 3.3% from each
  side, clipping the first letter. Cropping a 1280×720 slide cover to this ratio
  instead takes 3.5% off top and bottom, where those images only have margin.
- **`alt=""`.** The title sits directly beside the teaser, so a descriptive alt
  would be announced twice.
- **Hidden below `sm`.** A third column does not fit a phone, and the lists stay
  more scannable without it.
- **Rounded with a hairline ring**, never a border or a shadow, so images sit
  inside the same surface language as everything else.
- **Entries with no image get `TeaserPlaceholder`**, an inline SVG drawn only in
  `--accent` and `--surface` and varied by a seed hash. It is deliberately
  incapable of introducing a new hue. The covers it replaces were also
  generated, and they went wrong precisely by inventing a saturated colour per
  item. Being inline also means there are no files to keep in sync and no way
  for two entries to end up sharing one image.

### Sourcing a teaser

Use the artwork the destination already publishes rather than making something
new — it is the picture people associate with the link, and it needs no upkeep.

- **Talks** use the deck's **first slide**. SpeakerDeck exposes it directly as
  `og:image`, which is literally `slide_0.jpg`.
- **Slides are 16:9 against a 40:21 frame**, so ~6.7% of the height has to go.
  Take it **entirely from one edge, and check which one per deck** — splitting it
  evenly clips both. Most title slides have an empty top and logos along the
  bottom, so the top is usually right. `2020-adversarial` is the exception: its
  "メタサーベイ追加版" badge sits top-left and its bottom 120px is a single flat
  colour, so there the crop comes off the bottom. Measuring beats assuming:
  `magick <slide> -crop WxH+0+Y +repage -colorspace gray -format
"min=%[fx:int(255*minima)] max=%[fx:int(255*maxima)]" info:` — a band where
  min equals max is empty and safe to lose.
- **Blog posts** use the platform's Open Graph image. Substack takes the crop in
  the URL, so ask it for `w_1200,h_630` and its own smart crop returns the exact
  ratio with no second resample.
- **SlideShare** needs more work but is reachable. `curl` and old headless get a
  3KB bot challenge on every route, including oEmbed. `--headless=new` with a
  real user agent and a persistent `--user-data-dir` renders the page normally;
  the profile keeps working afterwards. Do not screenshot the viewer — its
  download and share buttons sit on top of the slide. Dump the DOM instead and
  take the `image.slidesharecdn.com/.../<title>-1-2048.jpg` URL, which is slide
  one at 2048px with no viewer chrome.
- If a host genuinely cannot be read, leave `coverImage` off and let the
  placeholder cover it rather than substituting an unrelated picture.

Always look at the result. These images carry titles and logos near the edges,
and cropping the wrong axis clips them.

### Logos

Standing affiliations live in the `organizations` collection and render as their
own section on Service & Organization. They carry no date — they are ongoing
memberships — so the left column shows only the role, and the order is an
explicit `order` field rather than chronology.

Their logo uses the same teaser frame, so the column stays aligned, but with
`fit="contain"`:

- **Contained, never cropped.** Cropping a photo costs a few percent at the
  edges; cropping a wordmark mangles a brand.
- **Capped against the frame** (`max-h-[64%] max-w-[78%]`) rather than relying on
  padding alone, so a wide wordmark and a square mark come out at similar
  optical weight instead of one dwarfing the other.
- **Two files, one per theme.** A logo is usually single-colour, and a white
  wordmark vanishes on white. `logo` is the dark-ink version for light
  backgrounds, `logoDark` the light-ink version. Both are rendered and CSS picks
  one — the theme is a class on the document, not a media query, so `<picture>`
  cannot resolve it. Supply only `logo` if the artwork works on both.
- Entries with no logo fall back to `TeaserPlaceholder`, which adapts to the
  theme on its own.

### Marking a lead role

`organizing` entries carry `isPrimary`. When set, the role appears in the
`Entry` label column in the accent colour via `labelAccent`. The label text has
to say "Primary Organizer" on its own — the colour only reinforces it, because
WCAG 1.4.1 does not allow colour to be the sole carrier of information.

`isPrimary` affects emphasis only, never ordering. A reverse-chronological list
tells the reader it is ordered by date, so reordering two entries by something
invisible makes the sequence impossible to explain from what is on screen. Where
two items would otherwise tie, **record the day in `date`** — the format is
lexicographic, so `2026.09.09` sorts correctly above both `2026.09.08` and a
month-only `2026.09`. Lists fall back to the entry id purely to guarantee a
total order, so it never depends on collection iteration order.

`astro.config.mjs` uses the default sharp image service. Do not restore
`passthroughImageService()` — teasers render at ~208px from much larger sources
and passthrough ships every original at full size.

## Hover and motion

The reference page's hover vocabulary is deliberately tiny. Reading its CSS,
every hover rule it has is one of: a colour change (seven of them), a 2px
`translate` on an arrow, a `scale(1.05)`/`scale(1.1)` on two elements, and one
`border-color`. There is no hover lift and no growing shadow — the 500–900ms
`transform`/`box-shadow` transitions in that file are scroll-in reveals, not
pointer responses. Its interaction transitions sit at 220–300ms on
`cubic-bezier(.2, .8, .2, 1)`, which is the `--ease-soft` token here.

**Borrow its kind of response, not its amount.** Copying the reference's
amplitude directly produced a site where hovering did almost nothing you could
see. That page is a six-section narrative with large media, where a whisper is
enough; this one is dense index lists, where each row needs to declare that it
answers to the pointer. The vocabulary below stays inside the reference's
palette — colour, underline, small scale, 2px of travel — but is turned up
until it registers. Two measurements that drove that:

- The old link hover moved teal-300 → teal-200, an RGB distance of **62** in
  dark and **32** in light, against **136** for a title going foreground →
  accent. The two weakest responses on the site were the ones on the most
  numerous elements. `--accent-hover` is now teal-100 / teal-900, distance
  **115 / 54**, still AA-compliant at 17.6:1 and 9.5:1.
- A teaser scaling to `1.02` is roughly 4px of movement on a 208px thumbnail.
  It is now `1.04`, with the ring going to `accent/50`.

The rules:

- **Every index row has a linked title.** Talk titles point at the slides
  (then video, then venue); publication titles at the paper, preferring arXiv,
  then DOI, project page, PDF, code. Previously those two pages had inert
  titles, which is most of why the site felt unresponsive — the links existed
  but were buried in the resource row underneath. Linking paper titles is also
  the convention on academic publication lists.
- **Colour plus underline** on every text link. Colour alone is a weak
  affordance on a title that otherwise reads as plain text.
- **Motion is 2px, or 4%.** The "view all" arrow shifts `translate-x-0.5`. A
  teaser image scales inside its fixed frame, so the frame never moves and no
  row changes height. Navigation grows a 1px accent rule from the left via a
  scaled pseudo-element, so the text never shifts; the current page keeps that
  rule on permanently as a second cue for the active state.
- **Nothing moves that is not interactive.** A teaser only responds when the
  entry has a link, in which case the frame becomes one; otherwise it is an
  inert `div`. Hover feedback on something unclickable is a lie.
- **Row-level hover, because the row is now genuinely clickable.** The title
  link carries a stretched pseudo-element covering the row, so the whole row is
  one target and lighting it up on hover is honest rather than decorative. That
  ordering matters: the click target came first, the highlight second. A row
  with no destination — an award, a position — gets neither.
  - The hover surface is `--surface-hover`, an accent tint at 4-5%, on a
    rounded panel that bleeds 1rem past the text so it reads as the row lifting
    rather than as a box appearing inside one.
  - Elevation is `--shadow-glow`, an accent-tinted glow rather than a grey drop
    shadow. This is taken from the reference, and it is the only kind of shadow
    that reads at all on `#0a0a0a`.
  - The title still previews the destination by going to the accent, so the
    highlight always says _where_ the click goes, not merely that something is
    live.
  - **Every other link in the row is lifted above the stretched overlay**
    (`.row-box a:not(.row-link)`), so arXiv, Slides, the venue and the tags keep
    their own smaller targets. The title link itself must stay
    `position: static` or its `inset: 0` would resolve against the link instead
    of the row.
  - The teaser is no longer a link of its own; the row covers it. That removed
    the duplicate destination that had to be hidden with `aria-hidden` and
    `tabindex="-1"`.
  - **Cost:** text selection over a row is impaired, since the overlay sits above
    the summary. Accepted deliberately — these are index rows people click, not
    prose people quote.
- **Keyboard parity.** `:focus-visible` draws an accent outline everywhere, and
  the navigation rule responds to focus as well as hover.
- **`prefers-reduced-motion: reduce` removes all of it.** Colour and underline
  changes survive; transforms and transitions do not.

Durations: 200ms for colour, opacity and the navigation rule; 300ms for the
teaser scale.

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
- The two adversarial talks have near-identical teasers, because the 2020 deck
  is the meta-survey extension of the 2019 one and reuses its title slide. They
  are adjacent in the list. What tells them apart is the "メタサーベイ追加版"
  badge, which is why that crop had to come off the bottom.
- No publication has an image yet, so that column is entirely placeholders.
  `SHOW_TEASERS` can turn a page's column off if that is not wanted in the
  meantime.
- A `Default` tag with no posts still shows in the blog sidebar.
- Talk `venue` fields repeat the talk type ("Invited Talk, ASPIRE ..."), which
  now duplicates the label column.
- Japanese titles fall back to a system font; Roboto has no CJK glyphs.
