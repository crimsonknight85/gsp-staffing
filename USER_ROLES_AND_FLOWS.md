# User Roles and Core Flows

## Roles

- **Admin:** platform configuration, access management, cross-organization operations.
- **HR/Recruiter:** roles, candidates, applications, notes, interviews, documents, onboarding.
- **Client user:** only their organization’s jobs, candidates submitted to them, assigned contractors, projects, reports, and approvals permitted by role.
- **Applicant:** only their own profile, documents, applications, status, and next steps.
- **Contractor:** only their profile, assignment, tasks/goals, time entries, timesheets, and support items.
- **Finance:** authorized billing, hours, payout estimates, invoices, and margin data; later phase.

One person may have multiple memberships; authorization is derived server-side from authenticated identity, memberships, permissions, and resource ownership—not from URL or UI state.

## Primary flows

### Prospect to client lead

Visit → understand services → review process/proof → submit requirements or book call → confirmation → internal follow-up.

### Recruitment

Client requirement → job draft → activation → sourcing → applicant/application → screening → shortlist → client review → interview → offer → hired/rejected/withdrawn → onboarding.

### Applicant

Account/invitation → profile → resume/documents → apply → view stage and next step → interview → decision → onboarding if hired.

### Contractor

Invitation → onboarding/profile → assignment → tasks/goals → time entry → weekly timesheet → submit → approve/reject → correction if needed → paid status later.

### Client oversight

Sign in → organization dashboard → open roles/pipeline → candidate detail → interview feedback → contractor/project view → hours/timesheet approval → reports.

## Status definitions

Applications: `applied`, `screening`, `shortlisted`, `client_review`, `interview_scheduled`, `interview_completed`, `offer`, `hired`, `rejected`, `withdrawn`.

Jobs: `draft`, `active`, `paused`, `filled`, `closed`.

Contractors: `active`, `paused`, `ended`.

Timesheets: `draft`, `submitted`, `approved`, `rejected`, `paid`.

Tasks: `not_started`, `in_progress`, `blocked`, `completed`.

All transitions must be validated server-side. Preserve stage/status history rather than overwriting the only record of change.

