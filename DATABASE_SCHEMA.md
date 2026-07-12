# Database Schema Blueprint

This is a logical starting point, not a substitute for inspecting existing migrations.

## Identity and tenancy

- `users`: application profile linked to auth identity
- `organizations`: GSP and client organizations
- `organization_memberships`: user, organization, role, status
- `clients`: business/client profile linked to an organization

Use stable UUID primary keys, `created_at`, `updated_at`, appropriate foreign keys, indexes, and constrained statuses. Do not store authorization solely in editable profile metadata.

## Recruitment

- `jobs`: client/org, title, description, requirements, status, owner
- `applicants`: user where applicable, contact/profile fields, consent metadata
- `applications`: applicant, job, status, source, timestamps
- `application_stage_history`: application, from/to stage, actor, timestamp, safe reason
- `application_notes`: visibility classification and author
- `interviews`: application, schedule, participants, status

## Contractor operations

- `contractors`: user/profile, operational status
- `projects`: client/org, name, status, dates
- `contractor_assignments`: contractor, client/project, dates, status
- `tasks`: project/assignee, status, priority, due date
- `goals`: project/assignment, measurement and status
- `time_entries`: contractor, assignment/project/task, start/end or duration, date, notes, billable flag
- `timesheets`: contractor, week/period, status, totals, submitted/decision metadata
- `timesheet_entries`: join between timesheet and included time entries

Approved time entries should be locked or corrected through an auditable adjustment process.

## Supporting modules

- `documents`: owner/resource, private storage path, type, metadata, visibility
- `notifications`: recipient, type, payload/reference, read timestamp
- `invoices`: later; client, period, currency, amounts, status
- `audit_events`: actor, organization, action, resource, safe metadata, timestamp

## Data constraints

- Foreign keys and unique constraints enforce valid relationships.
- Prevent overlapping/invalid time entries where feasible.
- Totals are calculated from authoritative entries; cached totals must be reconcilable.
- Files live in private storage; tables contain paths and metadata, not public URLs.
- Define retention/deletion rules for rejected candidates, resumes, identity data, and audit records.
- Avoid collecting protected or sensitive personal information unless justified and protected.

