# Technical Architecture

## Preferred stack

- Next.js App Router with TypeScript
- Tailwind CSS and shadcn/ui
- Supabase Postgres, Auth, Storage, and Row Level Security
- Vercel deployment
- Resend for transactional email
- Stripe only in a later approved finance phase

Use current stable versions compatible with the existing repository. Never upgrade major dependencies casually during feature work.

## Architecture principles

- Server Components by default; Client Components only for actual interaction/browser APIs.
- Validate all external input with a shared schema library.
- Authorization on the server and in database RLS.
- Keep privileged operations server-only.
- Use migrations for schema changes; never rely on manual production edits.
- Keep business logic out of presentation components.
- Small reusable components; explicit types; readable code.
- Use UTC in storage and display time in the user’s configured timezone.
- Store money as integer minor units plus ISO currency; never floating point.

## Suggested structure

Use route groups for public, auth, and protected application areas. Separate reusable UI, domain services, validation schemas, database types, authorization helpers, and migrations. Follow an existing sound structure instead of reorganizing merely for preference.

## Forms and mutations

Validate server-side, return safe field errors, protect against duplicate submissions, and revalidate affected data. Use idempotency for consequential actions. Never trust hidden form fields for organization, role, price, approval, or ownership.

## Email

Transactional only at first: invitations, password/reset flows, form acknowledgements, interview/timesheet notifications as approved. Use branded templates, text fallback, verified sending domain, unsubscribe only where legally required, and never place sensitive details in subject lines.

## Observability and environments

Maintain development, preview, and production separation. Use structured error reporting with PII redaction, health checks where useful, deployment logs, and rollback awareness. Seed data must be obviously fictional and never copied into production.

## Performance budgets

Optimize images/fonts, avoid large client bundles, lazy-load non-critical features, cache only data safe to cache, and target strong Core Web Vitals. Public pages should remain functional on ordinary mobile connections.

