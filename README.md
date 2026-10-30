# Nithin Reddy — Portfolio

One-page portfolio for Chagam Nithin Reddy (Social Media Manager · Digital Marketing).
Built with **Next.js 16 (App Router) + Tailwind CSS v4**, exported as a fully static site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build for hosting

```bash
npm run build    # writes ./out (static HTML/CSS/JS)
```

Upload the contents of `out/` to any static host (nginx, S3, Netlify, Vercel, GitHub Pages).

## Where things live

| What | Where |
| --- | --- |
| All copy (name, roles, chapters, stats, posters, contact) | `src/data/portfolio.ts` |
| Sections | `src/components/*.tsx` (Hero, Brands, Profile, Journey, Work, Spotlight, Contact, Footer) |
| Theme tokens, keyframes, `np-` utilities | `src/app/globals.css` |
| Fonts (Syne display, Manrope body) | `src/app/layout.tsx` via `next/font/google` |
| Interactions (scroll reveal, counters, cursor glow, poster tilt) | `src/components/Effects.tsx` |
| Images | `public/assets/{posters,logos,campaigns}` |

## Add the profile photo

Drop a portrait at **`public/assets/nithin.jpg`** (portrait orientation, roughly 4:5, 800px wide or more).
The hero shows an "NR" monogram placeholder until that file exists.
A dark or green-tinted photo with the subject looking off to one side matches the design best.

## Editing content

Everything shown on the page comes from `src/data/portfolio.ts`. Edit the strings there and rebuild.
Poster images are keyed by file path in the same file, so swapping a poster is a one-line change.

## Reference material

`Nithin_Portfolio_.pptx` is the source deck the content was taken from, and `Template-ref.jpg` is the visual reference the design follows.
