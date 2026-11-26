# FIELD NOTES — Design Skill

## Purpose

Use this guide to keep the five freeCodeCamp projects visually related while letting each project keep a layout that suits its content and interactions. Treat the shared style as a small design system, not a page template.

## Shared visual language

The projects share an editorial, warm, tactile look:

- Clear layouts with generous, even spacing.
- A dark introductory panel paired with a light content surface.
- Clear Ink outlines and solid offset shadows.
- Small uppercase project labels with open letter spacing.
- Muted colors and restrained decoration.
- Simple, readable interactions and responsive layouts.

Use these patterns where they fit. Do not force the same card, form, grid, or section arrangement into every project.

## Color palette

Use these shared colors as the starting point:

| Token | Value | Common use |
|---|---|---|
| `--color-paper` | `#f7f4ec` | Page background |
| `--color-ink` | `#24231f` | Text, outlines, dark surfaces |
| `--color-matcha` | `#a3ad7d` | Accent, decoration, large shadows |
| `--color-terracotta` | `#b96347` | Labels, emphasis, alternate accents |
| `--color-off-white` | `#fffefa` | Content surfaces and cards |
| `--color-muted-text` | `#d9d5ca` | Supporting text on dark surfaces |

Prefer these tokens over repeated raw values. Add a project-specific color only when it communicates something useful, such as a suit or status. Keep added colors muted and compatible with the palette.

## Typography

- Use **Georgia, serif** for editorial titles and selected section headings.
- Use **Arial, sans-serif** for body text, navigation, labels, and controls.
- Use small uppercase, letter-spaced text for project labels and eyebrows.
- Keep headings regular-weight unless a design calls for emphasis.
- Use responsive sizing such as `clamp()` where it helps a heading scale smoothly.
- Preserve intentional differences between a parent and child. Do not remove a child font size, line height, spacing, or weight just because it is close to the parent's value.

## Spacing

Use a small, repeatable spacing scale: **8, 12, 16, 20, 24, 32, 40, 48, 56, 72, and 96 px**. Use the nearest step that fits the hierarchy instead of introducing arbitrary values.

| Use | Desktop | Smaller screens |
|---|---:|---:|
| Tight label or control gap | 8–12 px | 8–12 px |
| Gap between related text or controls | 16–24 px | 12–20 px |
| Padding inside a card or form group | 20–24 px | 16–20 px |
| Padding inside a major section | 72 px vertical, 48 px horizontal | 40–48 px vertical, 24 px horizontal |
| Extra-emphasis section | 96 px vertical, 48 px horizontal | 48 px vertical, 24 px horizontal |

Keep the gap between adjacent sections consistent within a page. Treat these as shared defaults; compact controls and content-dense areas can use smaller values when needed.

## Project frame and surfaces

When the page structure supports it, group the project introduction and main work inside one clear outer frame:

```css
.project-shell {
  overflow: hidden;
  background: var(--color-off-white);
  border: 2px solid var(--color-ink);
  border-radius: 28px;
  box-shadow: 8px 8px 0 var(--color-matcha);
}
```

The introduction uses Ink with Paper text, followed by a Terracotta project label and a Matcha `PROJECT BRIEF` label. Keep internal surfaces simple and avoid stacking unnecessary bordered containers.

### Shared black header format

Use these same values in all five projects:

| Part | Shared style |
|---|---|
| Header padding | `42px 48px` on wide screens; `32px 24px` on mobile |
| Project label | Terracotta, `11px`, `600` weight, `2px` letter spacing; `9px 14px` padding |
| Space from label to title | `22px` |
| H1 | Georgia, normal weight, `clamp(38px, 6vw, 68px)`, `1.05` line height, normal letter spacing |
| Space below H1 | `20px` |
| Project brief label | Matcha, `11px`, bold, `2px` letter spacing; `6px` below it |
| Description | Muted text, `clamp(16px, calc(0.14vw + 15px), 17px)`, `1.6` line height, up to `680px` wide |
| Collapsed header | `12px` vertical padding |

On mobile, use a `10px` project label with `6px 9px` padding and `1.4px` letter spacing; keep the shared header padding and title style. When the header sits inside the outer frame, do not give it a second border, radius, or shadow.

Use a compact uppercase label such as `PROJECTS / 05 — BUILD A PRODUCT LANDING PAGE` above the project title. A small chevron can collapse the introductory panel when the page benefits from it.

### Shared decorative details

- A Matcha asterisk may sit outside the main frame near the lower edge. Give it a slow rotation, keep it behind content, and set `pointer-events: none`.
- Hide the asterisk when the viewport no longer leaves clear space around it or it starts to sit behind the project frame. Choose the breakpoint from the actual layout; do not force one exact width on every project.
- The project-header disclosure chevron sits to the right of the Terracotta project label and is vertically centered against that label. Keep its click target on the chevron itself, not across the label.
- Keep the chevron aligned beside the label on mobile too. Reserve enough label width so the two do not overlap; let the label wrap as needed.
- A subtle vertical bob can signal that the chevron is interactive. Keep motion calm, and use the shared reduced-motion rule below.

Use smaller radii for controls and cards. Use `50%` for true circles; use a large radius only when a fully rounded capsule is intended.

## Layout and responsive behavior

- Align content to a clear container and keep spacing consistent within each page.
- Choose Grid or Flexbox based on the content, not as decoration.
- Give sections room to breathe, then scale spacing down proportionally on smaller screens.
- At narrower widths, reflow columns and controls before they become cramped.
- Keep decorative details away from content and hide or simplify them when they no longer fit.
- Check for horizontal overflow and ensure anchors are not hidden behind fixed navigation.
- Use breakpoints that respond to the layout; the same breakpoint does not need to apply to every component.

## Interaction and accessibility

- Keep hover, active, selected, and keyboard-focus states clear and consistent.
- Use semantic HTML and native form controls when practical.
- Associate labels with inputs and group related choices with `fieldset` and `legend`.
- Do not communicate state through color alone.
- Respect reduced-motion preferences consistently:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

## CSS guidelines

- Keep styles short, readable, and grouped by component.
- Reuse a token or selector when declarations are exactly the same and grouping makes the rule clearer.
- Remove duplicate declarations, redundant resets, and values already inherited from a parent or supplied by the browser.
- Do not merge styles that are similar but intentionally different.
- Do not create a class or variable for a one-off value unless it improves meaning or future editing.
- Prefer native HTML and CSS over JavaScript for simple interactions.
- Keep comments rare and useful; avoid comments that only restate a selector.

## Working principle

Preserve the existing visual design while simplifying implementation. When a proposed cleanup could change spacing, text size, alignment, interaction, or responsive behavior, keep the explicit rule unless it is clear that the difference is accidental.
