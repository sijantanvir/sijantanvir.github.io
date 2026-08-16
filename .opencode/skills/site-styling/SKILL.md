---
name: site-styling
description: Use when editing this Wowchemy/Academic Hugo personal site — styling in assets/scss/custom.scss, publication cards and thumbnails in layouts/partials/li_citation.html, fonts/sizes in config/_default/params.toml, or any homepage section spacing. Front-load the exact files/classes the user tends to tweak.
---

# Site Styling (Wowchemy/Academic Hugo)

This is a Wowchemy (Academic) Hugo site. Theme lives in a Go module, not in
`themes/`. Local overrides live in the project root.

## Key files

- `assets/scss/custom.scss` — ALL custom CSS lives here (overrides the theme's
  `custom.scss` import). Most edits for this site happen in this one file.
- `config/_default/params.toml` — site params. `font = "inter-serif"`,
  `font_size = "M"` (see Fonts section below).
- `data/fonts/inter-serif.toml` — font set definition (Inter + Roboto Mono).
- `layouts/partials/li_citation.html` — publication card markup (used on BOTH
  the homepage widget and the `/publications/` archive page).
- `layouts/publication/single.html` — individual publication page.
- `content/home/*.md` — homepage widgets (bio, news, publications, awards).
  Order controlled by `weight`; `[advanced] css_class` adds a section class.
- `content/publication/_index.md` — archive page config (`view: 4`).

## Homepage publication cards

- Section wrapper: `#publications.home-publications-cards` (from
  `content/home/publications.md` `css_class`). All card styles are scoped to
  this selector.
- Card layout: flex row, thumbnail `flex: 0 0 220px; width: 220px`,
  `margin-top: 0.2rem` (optical alignment with title), `gap: 1.2rem`.
- Thumbnail image: `aspect-ratio: 8 / 5`, `object-fit: contain`, white
  `background: #fff` in BOTH light and dark mode (fill stays white).
- Font sizes (card): title `0.92rem`, authors `0.85rem`, venue/meta `0.84rem`,
  summary `0.82rem`. Stickers (venue badge + best-paper tag) are scaled to the
  title: `font-size: 0.64rem`, `padding: 0.24rem 0.57rem`, `top: 0.64rem`,
  `border-radius: 8px`. If title size changes, scale stickers proportionally.
- Card corners: `border-radius: 8px`. Card spacing: `margin-bottom: 0.75rem`.

## Thumbnails (li_citation.html:37)

```hugo
{{ $thumb_preview = (.Fit "800x500 Center q100").RelPermalink }}
```

- Use `.Fit` (NOT `.Fill`) — resizes to fit losslessly, no cropping; CSS
  `object-fit: contain` preserves the whole image (letterboxed on white).

## Archive page vs homepage

- `/publications/` archive (`layouts/section/publication.html` in the theme)
  also renders `li_citation`, inside `#container-publications`.
- Thumbnails are hidden there via
  `#container-publications .pub-card-thumb { display: none; }` in custom.scss.
- Homepage thumbs are unaffected because they're scoped to
  `#publications.home-publications-cards`.

## Fonts

- Font set: Inter (heading/body/nav) + Roboto Mono (mono).
- `font_size` options in `config/_default/params.toml`:
  XS=14, S=16, M=18, L=21 (default), XL=23 px (mapped in the theme's
  `layouts/partials/functions/parse_theme.html`).

## Building

- `hugo` takes >3 minutes (image processing). Build into `public/` with a long
  timeout; avoid `--cleanDestinationDir` unless a stale-output rebuild is
  wanted (it wipes old output if the build is killed).

## Theme module location (read-only reference)

Theme templates/SCSS are in the Hugo module cache:
`C:\Users\tanvi\AppData\Local\hugo_cache\modules\filecache\modules\pkg\mod\github.com\wowchemy\wowchemy-hugo-modules\wowchemy@v0.0.0-20210526223849-81ba17522966\`

Relevant files there: `layouts/partials/widget_page.html` (section wrapper,
`id`/`css_class`), `layouts/section/publication.html` (archive), `data/fonts/*`,
`layouts/partials/functions/parse_theme.html` (font size map).
