# CoreNovaIT — Next.js site

A multi-page marketing site for CoreNovaIT, ported from the original
single-file HTML artifact into a Next.js 14 App Router project.

## Structure

```
app/
  layout.tsx          Root layout — fonts, <Header>, <Marquee>, <Footer>
  globals.css          All design tokens & styles (light/dark via prefers-color-scheme)
  page.tsx              Home
  services/page.tsx      Services
  platforms/page.tsx     Platforms
  process/page.tsx       Process (the 7-step workflow)
  ai/page.tsx             AI Integrations
  partners/page.tsx      For Agency Partners
  faq/page.tsx            FAQ
  contact/page.tsx        Contact (renders <ContactForm>)
components/
  Header.tsx        Sticky nav + mobile menu (client component)
  Marquee.tsx        Scrolling services strip
  Footer.tsx          Footer with sitemap + mailto link
  NovaCanvas.tsx    The hero's animated nova/orbit graphic (client component, canvas)
  ContactForm.tsx  Controlled form that POSTs to /api/contact.php (client component)
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes on porting from the artifact

- **Routing**: the original artifact was a single HTML file with a
  hand-rolled hash router (`#/services`, `#/contact`, …). That's gone —
  every section is now a real Next.js route with its own URL
  (`/services`, `/contact`, …), so browser back/forward, direct links,
  and SEO all work natively via `next/link` and the App Router.
- **Fonts**: swapped the `<link>`-tag Google Fonts import for
  `next/font/google` (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono),
  which self-hosts and preloads them — no external request at runtime.
- **Theme**: still token-based light/dark via `prefers-color-scheme` in
  `globals.css`, with `[data-theme="light"|"dark"]` overrides if you want
  to add a manual theme toggle later (just set that attribute on
  `<html>`).
- **Contact form**: submitting POSTs JSON (`{name, email, message}`) to
  `/api/contact.php` — the PHP backend in `backend-php/`, deployed
  alongside the static export by `.github/workflows/deploy.yml` — which
  saves it to MySQL (see `create_table.sql` for the schema) and returns a
  success/error message the form displays. The extra company/service/
  details fields are folded into the `message` string before sending,
  since the backend's contract only expects those three fields.
- **Nova canvas animation**: ported 1:1 into `NovaCanvas.tsx` as a
  client component with a `useEffect`/`requestAnimationFrame` loop,
  cleaned up on unmount. Respects `prefers-reduced-motion`.

## Things you'll likely want to change

- Swap the placeholder contact email (`umairkhan62661@gmail.com`) in
  `components/Footer.tsx`, `components/ContactForm.tsx`, and
  `app/contact/page.tsx` for CoreNovaIT's real business inbox.
- Add a real `favicon.ico` / `app/icon.png` under `app/` (Next.js picks
  these up automatically).
- `backend-php/contact.php` still has placeholder DB credentials and a
  placeholder `Access-Control-Allow-Origin` — fill those in with your
  real EasyHost database details and domain before deploying.
