# Dental Market

Static Next.js website for Dental Market, a U.S. market entry and digital growth business for international dental manufacturers.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run lint
npm run build
```

## Cloudflare Pages Deployment

Use Cloudflare Pages with these settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: 20 or newer

The project uses `output: "export"` in `next.config.mjs`, so `npm run build` generates a static `out` directory suitable for Cloudflare Pages.

## Forms and Contact Details

The manufacturer review form is built into the site in `src/components/ManufacturerReviewForm.tsx`.
Submissions are handled by the Cloudflare Pages Function at `functions/api/enrollment.ts` and sent through Resend.

Set these Cloudflare Pages environment variables before publishing:

- `RESEND_API_KEY`: Resend API key.
- `ENROLLMENT_TO_EMAIL`: destination inbox, usually `info@dentalmkt.us`.
- `RESEND_FROM_EMAIL`: verified Resend sender, such as `Dental Market <forms@dentalmkt.us>`.

The old Jotform URL remains available as a fallback link inside the native form.

Update the contact details in `src/lib/site.ts` if the public email, WhatsApp, phone, or WeChat details change.
