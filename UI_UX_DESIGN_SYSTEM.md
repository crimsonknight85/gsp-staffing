# UI/UX and Design System

## Visual direction

Use the supplied homepage as the baseline: premium editorial recruitment style, warm neutral colors, quiet borders, soft surfaces, large whitespace, compact icons, and bold but restrained headings.

## Provisional tokens

Extract exact colors from source assets during implementation and define semantic variables. Suggested roles:

- `--background`: warm white
- `--foreground`: deep charcoal-brown
- `--surface`: white
- `--surface-muted`: pale warm gray
- `--primary`: medium warm brown
- `--primary-hover`: darker brown
- `--accent`: muted tan/gold
- `--border`: subtle neutral
- `--success`, `--warning`, `--danger`, `--info`: accessible status colors

Never scatter hex values through components. All text/background combinations must meet WCAG AA contrast.

## Typography

- Use a clean sans-serif with strong readability and available web licensing.
- Fluid responsive type using `clamp()` where appropriate.
- Body copy should normally remain 16px or larger.
- Limit paragraph width to roughly 60–75 characters.
- Reserve all-caps and letter spacing for short eyebrow labels.

## Layout

- Mobile first; target common widths from 320px upward.
- Consistent centered container with responsive gutters.
- Use a spacing scale based on 4px/8px increments.
- Section spacing should feel generous but proportional; do not leave accidental oversized top or bottom gaps.
- Cards stack on mobile and form balanced grids on larger screens.

## Components

Header, mobile navigation, footer, buttons, inputs, select, textarea, checkbox, cards, stat blocks, badges, alerts, empty states, loading skeletons, modal/drawer, tabs, data tables, filters, pagination, timelines, progress bars, and simple charts.

Each component needs default, hover, focus-visible, active, disabled, loading, error, and success behavior where applicable.

## Accessibility

- Keyboard operable; visible focus rings.
- Semantic landmarks and native controls first.
- Labels for every form field; errors associated programmatically.
- Descriptive alt text for meaningful images; empty alt for decoration.
- Skip link and sensible tab order.
- Respect reduced motion.
- Minimum practical touch target around 44×44px.
- Do not communicate status by color alone.

## Imagery

Use authentic, professional imagery of collaboration and remote work. Avoid clichéd call-center stock photos, flags-as-decoration, token diversity, and unreadable screenshots. Optimize with responsive image sizes and modern formats. Apply the dark hero overlay without destroying subject visibility.

## Motion

Subtle and functional only: menu transitions, feedback, and small entrance effects. No parallax dependence, autoplay background video, distracting counters, or animation that delays use.

