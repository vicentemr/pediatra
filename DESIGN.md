# Design

Visual world: **the child-health growth record** (cartilla de salud infantil). The site reads like a well-kept booklet: graph paper, percentile curves, stamped labels, and record fields. It avoids the white-and-hospital-blue clinic template.

## Color (Committed strategy)

| Token | Value | Role |
|---|---|---|
| `--paper` | `#e6efe2` | Page ground (pale sage) with a 24px green grid |
| `--sheet` | `#f4f8f1` | Raised sheets: booking picker, record card, chart tags |
| `--ink` | `#10261d` | Text |
| `--ink-soft` | `#3a5749` | Secondary text on paper |
| `--bottle` | `#0e4a37` | Whole bands (specialties, slots, footer), selected states |
| `--on-bottle` / `--on-bottle-soft` | `#eaf3e6` / `#b7d1c1` | Text on bottle green |
| `--tomato` | `#c23d24` | Primary action, P50 curve, list markers |
| `--ochre` | `#e3a72f` | Course points, percentile bands, focus ring, age labels on green |
| `--ochre-soft` | `#f3d58f` | Demo bar, hover on tags, selection |

## Type

- Display: **Bricolage Grotesque** (variable, self-hosted via Fontsource), also all numerals (`.num`) for prices, times and ages.
- Text: **Figtree** (variable, self-hosted).
- Fluid scale `--step--1` … `--step-4`; headings balanced, tracking ≥ -0.025em.

## Components

- **Growth chart** (`src/components/GrowthChart.astro`): illustrative percentile curves; courses plotted as points on P50. On phones the tags become an HTML legend under the chart.
- **Booking picker** (`BookingPicker.astro`): consultation type → day → time → pay. Demo mode generates slots; with `booking.calUrl` set it embeds Cal.com instead.
- **Course list** (`CourseList.astro`): booklet rows (stage · body · price/buy), not cards.
- **Pediatrician record** (`Profile.astro`): tilted record sheet with field rows and a tomato years stamp.
- **Specialties table** (`Specialties.astro`): age-range column + specialty, on bottle green.
- Buttons: pill, tomato fill; quiet variant is an ink outline.

## Motion

One authored moment: the percentile curves draw in and the course points rise onto P50 (hero chart; the landing has a single curve). Disabled under `prefers-reduced-motion`.

## Browser surfaces

Themed selection, caret, focus ring (ochre, 3px), scrollbar color, underline offset, tabular numerals.
