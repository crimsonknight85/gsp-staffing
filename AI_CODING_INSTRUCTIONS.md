# Instructions for Kimi Code and Hermes

## Source of truth

Read every guideline file before proposing architecture. Report contradictions before coding. The repository and migrations determine current implementation truth; these documents determine intended product behavior.

## Required workflow

1. Restate the requested feature and acceptance criteria.
2. Inspect relevant files, dependencies, routes, schema, and git status.
3. Explain the smallest safe change and files involved.
4. Implement only the requested feature.
5. Add/update tests appropriate to risk.
6. Run type checking, linting, tests, and build as available.
7. Review the diff for scope, security, responsive behavior, and regressions.
8. Summarize changed files, validation results, assumptions, and remaining risks.

## Coding rules

- TypeScript; avoid `any` unless isolated and justified.
- Inspect before creating. Reuse sound existing components.
- Do not overwrite or remove working code without explaining the need.
- Keep components and functions focused.
- Prefer Server Components; isolate interactivity.
- Validate all untrusted input on the server.
- Implement authorization and RLS with each protected feature, not later.
- Never expose secrets or service keys.
- Never fabricate live data, metrics, testimonials, contact details, or integrations.
- Do not silently add packages, services, environment variables, or database tables.
- Do not run destructive database/git commands without explicit approval and backup awareness.
- Do not refactor unrelated code while fixing a focused issue.
- Preserve unrelated user changes in a dirty worktree.

## Coordination between agents

Only one agent should edit a feature at a time. Use a shared branch/repository state and commit small coherent changes. Before switching tools, record: objective, completed work, changed files, commands run, validation results, known failures, and exact next action. The next tool must inspect current state rather than regenerate the project.

## Required feature completion report

- Outcome
- Files changed
- Database/migration changes
- Security and authorization behavior
- Desktop/mobile behavior
- Empty/loading/error states
- Tests and commands run with results
- Assumptions/placeholders
- Known limitations
- Recommended next feature

