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
  ContactForm.tsx  Controlled form that POSTs to /api/contact (client component)
  api/contact/route.ts   Saves submissions to Supabase, emails via Resend
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
- **Theme**: token-based in `globals.css`, dark by default regardless of
  the visitor's OS preference (that's the brand look). A light palette
  still exists behind `[data-theme="light"]` on `<html>`, ready for a
  manual toggle later, but nothing switches to it automatically.
- **Contact form**: submitting POSTs JSON (`{name, company, email,
  service, details}`) to `/api/contact` (`app/api/contact/route.ts`),
  which saves the row to Supabase (schema in `supabase-schema.sql`) and
  emails a notification via Resend, returning a success/error message
  the form displays. Needs `NEXT_PUBLIC_SUPABASE_URL`,
  `SUPABASE_SERVICE_ROLE_KEY`, and `RESEND_API_KEY` set — copy
  `.env.example` to `.env.local` and fill them in, then restart the dev
  server (env vars are only read at startup).
- **Legacy PHP backend**: `backend-php/contact.php`,
  `create_table.sql`, and `.github/workflows/deploy.yml` are unused —
  they assumed classic FTP + PHP/MySQL hosting, but this site actually
  runs on Hostinger's Next.js/Node.js hosting (confirmed via its
  response headers), which can't execute PHP dropped alongside it.
  Superseded by the Supabase/Resend API route above; safe to delete
  once you've confirmed the new form works.
- **Nova canvas animation**: ported 1:1 into `NovaCanvas.tsx` as a
  client component with a `useEffect`/`requestAnimationFrame` loop,
  cleaned up on unmount. Respects `prefers-reduced-motion`.

## Things you'll likely want to change

- Contact email is `contact@corenovait.com.au`, set as `CONTACT_EMAIL` /
  `TO` constants in `components/Footer.tsx` and
  `components/ContactForm.tsx`.
- Add a real `favicon.ico` / `app/icon.png` under `app/` (Next.js picks
  these up automatically).
- The Resend `from` address (`onboarding@resend.dev` in the API route)
  only works reliably once you verify a sending domain in Resend — until
  then, Resend restricts sending to the email address on your own
  account. Verify `corenovait.com.au` (or a subdomain) in the Resend
  dashboard and update the `from` address in
  `app/api/contact/route.ts` once it's done.
