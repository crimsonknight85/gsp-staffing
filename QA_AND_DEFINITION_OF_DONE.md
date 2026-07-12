# QA Checklist and Definition of Done

A feature is done only when it works, is secure, understandable, responsive, and verified without breaking existing behavior.

## Functional

- Acceptance criteria pass with real application behavior.
- Valid, invalid, empty, loading, error, retry, and success states work.
- Duplicate clicks/submissions do not create unintended records.
- Status transitions and next actions are clear.
- Links, forms, emails, redirects, and back navigation behave correctly.

## Responsive and browser

- Test at approximately 320, 375, 768, 1024, and 1440px.
- No clipped controls, unreadable tables, horizontal overflow, or obscured content.
- Current Chrome, Edge, Safari, and Firefox where practical.
- Mobile navigation and touch targets work.

## Accessibility

- Keyboard-only flow succeeds.
- Visible focus, semantic headings/landmarks, labels, useful alt text.
- Errors announced/associated; status not conveyed only by color.
- Contrast meets WCAG AA; reduced motion honored.

## Security/privacy

- Unauthenticated access is denied where required.
- Every role sees only authorized records.
- Cross-tenant and cross-user ID substitution tests fail safely.
- RLS policies are tested independently of the UI.
- Secrets and sensitive data are absent from client bundles, URLs, logs, analytics, and errors.
- File access and exports repeat authorization checks.

## Engineering

- Type check, lint, relevant tests, and production build pass.
- New migrations are reversible or have a documented recovery plan.
- No unexplained dependencies, warnings, console errors, dead code, or test data.
- Performance and image/font behavior remain acceptable.
- Environment variables and deployment steps are documented without secret values.

## Content and release

- No placeholder copy, invented statistics, fake testimonials, or unverified contact details reach production.
- Page metadata, canonical behavior, sitemap, and 404/error pages are correct.
- Analytics events avoid PII and are verified.
- Preview is approved, production smoke test passes, and rollback path is known.

## Final acceptance statement

Record what was tested, by whom/tool, environment, date, failures or exceptions, and approval. “Looks good” alone is not release evidence.
