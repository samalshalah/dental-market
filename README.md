# Dental Market

Static Next.js website for Dental Market / DentalMKT, a U.S. dental supply sourcing review and B2B marketing platform for international dental supply manufacturers.

## Public Pages

- `/` - sourcing-first homepage
- `/sell-dental-supplies/` - dental supply buying review instructions
- `/work-with-dental-market/` - shared inquiry page for buying review, B2B marketing support, both, or not sure
- `/b2b-marketing/` - separate B2B marketing service
- `/about/` - company and team positioning
- `/contact/` - choose product review or marketing support
- `/privacy-policy/` and `/terms-disclaimer/`

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

The public Work With Dental Market inquiry page embeds the Jotform form:
`https://form.jotform.com/261561017615048`.

A native form component and Cloudflare Pages Function remain in the codebase for a Resend-based form path:
`src/components/ManufacturerReviewForm.tsx` and `functions/api/product-submission.ts`.

Set these Cloudflare Pages environment variables before publishing:

- `RESEND_API_KEY`: Resend API key.
- `PRODUCT_SUBMISSION_TO_EMAIL`: destination inbox, usually `info@dentalmkt.us`.
- `RESEND_FROM_EMAIL`: verified Resend sender, such as `Dental Market <forms@dentalmkt.us>`.

`ENROLLMENT_TO_EMAIL` is still accepted as a fallback by the optional native form function for older deployments.

Update the contact details in `src/lib/site.ts` if the public email, WhatsApp, phone, or WeChat details change.
