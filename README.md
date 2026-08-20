# jcheng328.github.io (Next.js rewrite)

Personal site and blog. Built on
[timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog):
Next.js 15 (App Router) + TypeScript + Tailwind 4 + MDX via Contentlayer.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build                       # production build
EXPORT=1 UNOPTIMIZED=1 npm run build   # static export to ./out (what CI runs)
```

## Where the content lives

| What | Where |
| --- | --- |
| Blog posts | `data/blog/*.mdx` — frontmatter: `title`, `date`, `tags`, `summary`, `draft` |
| Publications | `data/publications.ts` — **single source of truth**, typed |
| Teaching / service / workshops / awards | `data/cv.ts` |
| Bio (About page) | `data/authors/default.mdx` |
| Site title, URL, socials, analytics | `data/siteMetadata.js` |
| Nav bar | `data/headerNavLinks.ts` |

Math is written as `$inline$` and `$$display$$` and rendered by **KaTeX at build
time** — the fonts and CSS are bundled, so there is no CDN dependency at runtime.

## Deploying

`.github/workflows/pages.yml` builds a static export and publishes to GitHub Pages
on every push to `main`. In the repo settings, set Pages → Source → **GitHub Actions**.

## TODO before going live

- [ ] Set real dates in the `date:` frontmatter of the four posts in `data/blog/` — currently placeholders.
- [ ] Decide whether to publish an email (`data/siteMetadata.js`, currently blank).
- [ ] Set up a GA4 property if you want analytics — the old `UA-31107207-1` is dead.
- [ ] Confirm `MATH 3670` in `data/cv.ts` — the old site listed it as "Multivariable Calculus", which looked like a copy-paste slip.
