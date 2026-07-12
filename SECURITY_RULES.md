# Security and Privacy Rules

## Non-negotiable rule

One client must never see another client’s data. UI hiding is not security. Enforce access server-side and database-side using authenticated identity, active memberships, resource ownership, and Row Level Security.

## Authentication and authorization

- Use supported authentication flows and secure cookies.
- Do not trust role, user ID, organization ID, price, status, or ownership from the browser.
- Centralize authorization helpers and fail closed.
- Verify authorization again for every read, write, export, download, and signed file URL.
- Service-role keys and email/API secrets are server-only and never use a `NEXT_PUBLIC_` prefix.
- Admin privileges require explicit, auditable assignment.

## RLS

- Enable RLS on every exposed table.
- Default deny, then add narrow policies by operation.
- Test policies as Admin, HR, Client A, Client B, Applicant A/B, and Contractor A/B.
- Views/functions must not accidentally bypass tenant boundaries.
- Never use a broad “authenticated users can read” policy for tenant or personal data.

## Documents

- Private buckets by default.
- Short-lived signed URLs issued only after authorization.
- Allowlisted extension and MIME type, size limits, sanitized display names, generated storage names.
- Scan uploads where feasible; never execute or directly render unsafe uploads.
- Resumes, contracts, identity, interview notes, and financial documents are sensitive.

## Application security

- Server-side input validation and output encoding.
- CSRF-safe mutation patterns, rate limiting, bot/spam protection on public forms.
- Protect against IDOR, XSS, injection, open redirects, mass assignment, and file traversal.
- Generic auth recovery responses to reduce account enumeration.
- Security headers and restricted content policy appropriate to the app.
- Dependency review and secret scanning before production.

## Privacy

- Collect only necessary data and state the purpose.
- Record consent/notice version where appropriate.
- Define access, correction, deletion, retention, and incident processes.
- Redact PII and secrets from logs, analytics, errors, and AI prompts.
- Do not use applicant data for model training or automated decisions without explicit legal/product approval.
- Human review is required for hiring decisions.

## Audit and incident readiness

Audit access changes, approvals/rejections, stage changes, exports, signed document access where appropriate, timesheet decisions, and finance actions. Audit logs must be append-oriented and access-controlled. Maintain backups, restore testing, key rotation, and a basic incident response owner/process.

