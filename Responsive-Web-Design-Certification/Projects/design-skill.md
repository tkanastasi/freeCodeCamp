# FIELD NOTES — Design Skill

## 1. Role and Purpose

You are a UI/UX designer and frontend developer working within the FIELD NOTES visual design language.

Your task is to design and implement modern, visually distinctive, responsive web interfaces that follow the FIELD NOTES design identity.

Use the two reference projects as the foundation of the visual system:

- **Hiking Experience Survey** — editorial-style survey form with interactive choice cards and structured content.
- **The Card Table** — playing card collection with suit selection, decorative details, and a Flexbox-based layout.

The goal is to maintain a recognizable visual identity across different projects without making every interface look identical.

Adapt the visual language to the purpose, content, and interaction model of each new project.

Do not blindly copy existing layouts. Understand the design principles and apply them appropriately.

---

## 2. Design Philosophy

The FIELD NOTES aesthetic combines:

- Editorial and magazine-inspired design.
- Minimalist layouts with expressive visual accents.
- Warm, muted, earthy colors.
- Vintage-inspired details interpreted through modern UI.
- Strong contrast between surfaces and typography.
- Bold outlines and hard offset shadows.
- Subtle decorative typography and symbols.
- Clear, intentional interactive states.

The overall impression should be:

- Warm, tactile, and slightly nostalgic.
- Structured but not overly formal.
- Minimalist without feeling empty.
- Playful without becoming childish.
- Expressive without visual clutter.

Avoid generic SaaS dashboard aesthetics, excessive gradients, glossy effects, excessive rounded surfaces, and unnecessary decoration.

---

## 3. Color System

Use the established FIELD NOTES color palette as the default foundation.

### Primary colors

| Name | Hex | Purpose |
|---|---|---|
| Paper | `#f7f4ec` | Main page background |
| Ink | `#24231f` | Primary text, borders, dark surfaces |
| Matcha | `#a3ad7d` | Main accent, decorative elements, shadows |
| Terracotta | `#b96347` | Interactive accent and secondary emphasis |
| Off-white | `#fffefa` | Cards, form surfaces, light backgrounds |

### Supporting colors

| Name | Hex | Purpose |
|---|---|---|
| Muted text | `#d9d5ca` | Text on dark surfaces |
| Placeholder | `#89877e` | Placeholder text |
| Pale matcha | `#edf0e3` | Soft green surfaces |
| Light terracotta | `#e9bda7` | Focus shadow |
| Card red | `#b3443f` | Red playing card suits |

### Color usage rules

1. Use Paper as the default page background.
2. Use Ink for primary text and outlines.
3. Use Off-white for cards, forms, and elevated light surfaces.
4. Use Matcha for large accent surfaces, secondary highlights, and decorative shadows.
5. Use Terracotta for important accents and interactive emphasis.
6. Reserve Card red for contexts where red has a semantic or thematic purpose, such as hearts and diamonds.

Do not introduce additional colors without a clear reason.

When a new project requires extra colors, keep them muted and compatible with the existing palette.

Avoid purple, neon colors, overly saturated gradients, and arbitrary color combinations.

### CSS variables

Prefer defining the palette through reusable custom properties:

```css
:root {
  --color-paper: #f7f4ec;
  --color-ink: #24231f;
  --color-matcha: #a3ad7d;
  --color-terracotta: #b96347;
  --color-off-white: #fffefa;

  --color-muted-text: #d9d5ca;
  --color-placeholder: #89877e;
  --color-pale-matcha: #edf0e3;
  --color-light-terracotta: #e9bda7;
  --color-card-red: #b3443f;
}
```

---

## 4. Typography

The typography system combines an editorial serif typeface with a neutral sans-serif.

### Primary heading font

**Georgia, serif**

Use for:
- Main page titles.
- Large editorial headings.
- Section legends when a more expressive appearance is appropriate.

Default characteristics:
- Regular font weight.
- Large responsive font size.
- Relatively tight line-height.
- Slightly negative letter spacing for large headings when appropriate.

Example:

```css
h1 {
  font-family: Georgia, serif;
  font-size: clamp(38px, 6vw, 68px);
  font-weight: normal;
  line-height: 1.05;
  letter-spacing: -2px;
}
```

Do not automatically make all headings bold. Prefer regular Georgia for large titles unless the visual hierarchy requires otherwise. Set `font-weight: normal` explicitly on each main page title so browser defaults do not make one project's title heavier than the others.

Set each browser tab's `<title>` to `freeCodeCamp / Project NN`, using the project's two-digit number (for example, `freeCodeCamp / Project 01`).

Use one shared favicon for all projects. Keep the SVG at the `Projects` directory root and link to it from each project page with `../favicon.svg`. Use a clean, centered eight-ray asterisk in Matcha (`#a3ad7d`) on an Ink (`#24231f`) rounded square with a small Matcha offset shadow.

Use hyphens instead of spaces in the certification and project directory names while preserving their title-case words, for example `Responsive-Web-Design-Certification/Projects/Build-a-Survey-Form`. Keep the `Projects` directory name unchanged.

### Primary body font

**Arial, sans-serif**

Use for:
- Body text.
- Form labels.
- Buttons.
- Navigation.
- Card information.
- Interface controls.

Example:

```css
body {
  font-family: Arial, sans-serif;
  color: var(--color-ink);
}
```

### Typography hierarchy

Use a clear hierarchy:

- Eyebrow: small uppercase text with increased letter spacing.
- H1: large Georgia heading.
- Section headings: Georgia or Arial depending on context.
- Body: readable sans-serif.
- Labels: medium or bold sans-serif.
- Supporting text: smaller sans-serif with sufficient contrast.

Avoid using too many font families or decorative typefaces.

---

## 5. Layout and Composition

### General layout

- Use centered content containers.
- Establish a clear visual hierarchy.
- Keep consistent horizontal alignment.
- Use generous spacing between major sections.
- Avoid unnecessarily narrow content areas.
- Use CSS Grid and Flexbox according to the content structure.

Typical reference container widths:

```css
.container {
  width: 100%;
  max-width: 1180px;
  margin-inline: auto;
}
```

For smaller content-oriented pages, a narrower container may be more appropriate.

### Header

The header is an important visual element in both reference projects.

Typical characteristics:
- Dark Ink background.
- Off-white text.
- Strong border.
- Rounded corners.
- Matcha offset shadow.
- Decorative symbol positioned independently.
- Eyebrow label above the main title.

The header should feel like an editorial cover or introduction panel.

Do not force this exact header structure onto every project. Adapt its proportions and content to the page.

### Content surfaces

Use distinct surfaces to organize information.

Examples:
- Off-white form containers.
- Matcha panels.
- Dark Ink introduction sections.
- Light cards on colored backgrounds.

Avoid excessive nested containers.

---

## 6. Borders, Shapes and Shadows

One of the defining features of FIELD NOTES is its use of visible outlines and hard shadows.

### Borders

Default border color:

```css
border: 1.5px solid var(--color-ink);
```

For larger containers:

```css
border: 2px solid var(--color-ink);
```

Borders should be visible and intentional.

Avoid very subtle grey borders when a strong Ink outline would better match the design.

### Border radius

Use moderate, consistent corner rounding.

Typical reference values:

| Element | Radius |
|---|---:|
| Small labels | 4px |
| Buttons | 8–10px |
| Cards | 10–12px |
| Content panels | 14–24px |
| Large feature sections | 24–28px |

Do not make every element extremely rounded or pill-shaped.

### Hard offset shadows

Hard shadows are a key part of the visual identity.

Examples:

```css
box-shadow: 5px 5px 0 var(--color-ink);
```

```css
box-shadow: 8px 8px 0 var(--color-matcha);
```

```css
box-shadow: 10px 10px 0 var(--color-terracotta);
```

Rules:
- Prefer zero blur.
- Use solid shadow colors.
- Keep the offset visually consistent.
- Use Ink for strong component shadows.
- Use Matcha or Terracotta for larger decorative shadows.
- Avoid applying heavy shadows to every element simultaneously.

The shadow should create a tactile, slightly printed or layered appearance.

---

## 7. Decorative Elements

Use decorative elements to reinforce the editorial identity.

### Project identity and brief

For each certification project, add a compact uppercase project label in the page header using this format:

```text
PROJECTS / [PROJECT NUMBER] — [PROJECT FOLDER NAME]
```

Use the project number provided by the user and the project folder name, converted to uppercase. Keep the slash and em dash as shown.

Style this small uppercase label with a semibold font weight (`600`) so the letter spacing stays clear and the text does not look overly heavy.

Place the label `PROJECT BRIEF` immediately above the page description. Write the description only after the user provides the project brief and tests. Summarize the learning objective and the main HTML, CSS, accessibility, or interaction techniques in a concise sentence or two, based on that project’s requirements.

Add a real, keyboard-accessible link to the current project folder in the user's GitHub repository. Label it `VIEW SOURCE ON GITHUB · @[USERNAME]`, preserving the user's GitHub handle. On wide screens, place it vertically along the page edge as a useful editorial detail. At the breakpoint where edge decorations are hidden, move it to the bottom of the page while keeping the same simple text treatment: no extra background, border, card, or shadow.

Keep this small link readable with an explicit screen-friendly sans-serif stack such as `system-ui, "Segoe UI", Arial, sans-serif`. Use a fixed integer font size and avoid calculated or fractional font sizes for this element.

Style scrollbars consistently across projects: use an Ink (`#24231f`) thumb and a Paper (`#f7f4ec`) track. Keep the thumb Ink on hover as well. Use `scrollbar-width: auto` and 16px WebKit scrollbar width and height so vertical and horizontal scrollbars have consistent thickness; use the appropriate standard and WebKit scrollbar properties where supported.

Reference examples:
- Vertical text along the page edge.
- Asterisk or star-like symbols.
- Small uppercase eyebrow labels.
- Decorative symbols inside the header.
- Subtle rotation or floating animations.

Example:

```css
.eyebrow {
  display: inline-block;
  padding: 6px 12px;
  background: var(--color-terracotta);
  color: var(--color-off-white);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

Decorations should:
- Support the content.
- Remain visually secondary.
- Never interfere with reading or interaction.
- Be hidden or simplified on smaller screens when necessary.

Avoid adding decoration simply to fill empty space.

---

## 8. Components

### 8.1 Buttons

Buttons should have:
- Visible Ink border.
- Moderate corner radius.
- Solid background.
- Clear text contrast.
- Strong hover feedback.

Default style:

```css
.button {
  padding: 14px 22px;
  background: var(--color-matcha);
  border: 2px solid var(--color-ink);
  border-radius: 10px;
  color: var(--color-ink);
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
```

Hover:

```css
.button:hover {
  background: var(--color-terracotta);
  box-shadow: 5px 5px 0 var(--color-ink);
  transform: translate(-2px, -2px);
}
```

Active:

```css
.button:active {
  transform: translate(0, 0);
  box-shadow: 2px 2px 0 var(--color-ink);
}
```

Do not make every button visually dominant. Establish primary and secondary actions.

### 8.2 Form inputs

Inputs should feel simple and tactile.

Default characteristics:
- Paper background.
- Ink border.
- Moderate radius.
- Comfortable padding.
- Arial typography.

Example:

```css
input,
select,
textarea {
  background: var(--color-paper);
  border: 1.5px solid var(--color-ink);
  border-radius: 10px;
  color: var(--color-ink);
  font-family: inherit;
  font-size: 17px;
  padding: 14px 16px;
}
```

Focus state:

```css
input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-terracotta);
  box-shadow: 4px 4px 0 var(--color-light-terracotta);
}
```

Inputs must remain readable and usable on mobile devices.

### 8.3 Choice cards and checkboxes

The Hiking Experience Survey uses large clickable cards for checkbox choices.

Typical characteristics:
- Off-white background.
- Ink border.
- Moderate radius.
- A visible checkbox indicator.
- Short label.
- Matcha background on hover and selection.
- Hard Ink shadow on hover and selection.

Example:

```css
.choice-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-height: 85px;
  padding: 14px;
  background: var(--color-off-white);
  border: 1.5px solid var(--color-ink);
  border-radius: 12px;
  color: var(--color-ink);
  cursor: pointer;
  transition:
    background-color 0.2s,
    box-shadow 0.2s,
    transform 0.2s;
}

.choice-card:hover,
.choice-card:has(input:checked) {
  background: var(--color-matcha);
  box-shadow: 5px 5px 0 var(--color-ink);
  transform: translate(-2px, -2px);
}
```

The checkbox indicator should be clearly visible.

When selected:
- Use a solid Ink indicator background.
- Use a contrasting checkmark.
- Keep the selected card background Matcha.

Do not use a second decorative indicator that duplicates the checkbox state.

### 8.4 Radio cards

Radio cards use the same overall visual language as Choice cards but have a distinct circular indicator.

Reference behavior:
- Off-white default background.
- Terracotta hover and selected background.
- Ink border.
- Hard Ink shadow.
- A completely solid Ink circle when selected.

The selected radio indicator must be a single filled black circle.

Do not create a black dot inside a transparent or white-outlined circle.

Example:

```css
.radio-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  min-height: 65px;
  padding: 14px;
  background: var(--color-off-white);
  border: 1.5px solid var(--color-ink);
  border-radius: 12px;
}

.radio-card::before {
  content: "";
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  background: var(--color-paper);
  border: 1.5px solid var(--color-ink);
  border-radius: 50%;
}

.radio-card:has(input:checked) {
  background: var(--color-terracotta);
  box-shadow: 5px 5px 0 var(--color-ink);
}

.radio-card:has(input:checked)::before {
  background: var(--color-ink);
  border-color: var(--color-ink);
}
```

Radio and checkbox cards may share base styles, but their indicators and selected colors must remain distinct.

### 8.5 Playing cards

The Card Table project uses a separate component pattern.

Playing cards should:
- Have an Off-white background.
- Have a visible Ink outline.
- Use moderate corner rounding.
- Use a hard Ink shadow.
- Have a fixed or controlled aspect ratio.
- Use Flexbox for internal alignment.

Reference card proportions:

```css
.card {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 350px;
  padding: 14px;
  background: var(--color-off-white);
  border: 2px solid var(--color-ink);
  border-radius: 12px;
  box-shadow: 5px 5px 0 var(--color-ink);
}
```

Card suits:
- Spades and clubs use Ink.
- Hearts and diamonds use Card red.

Card hover:

```css
.card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--color-ink);
}
```

Use Flexbox to align the left, middle, and right card content.

Do not introduce unnecessary visual decoration inside the playing cards.

### 8.6 Tabs and selectors

The Card Table suit selector demonstrates a tactile tab interaction.

Reference characteristics:
- Off-white background.
- Ink border.
- Hard Ink shadow.
- Clear selected state.
- Suit-specific color treatment.

Use the same interaction principles for other selectors when appropriate.

Selected states must be visually distinct from hover states.

---

## 9. Interactive States

Every interactive component must have clearly defined states.

### Hover

Use one or more of:
- Background color change.
- Slight upward-left movement.
- Stronger hard shadow.
- Border emphasis.

Typical transformation:

```css
transform: translate(-2px, -2px);
```

### Active

The pressed state should feel like the component is physically moving back into the page.

```css
transform: translate(0, 0);
box-shadow: 2px 2px 0 var(--color-ink);
```

### Selected / Checked

Use a distinct background and indicator.

Do not rely only on a subtle border color change.

### Focus-visible

Keyboard navigation must remain visible.

Example:

```css
:focus-visible {
  outline: 3px solid var(--color-terracotta);
  outline-offset: 3px;
}
```

Do not remove focus indicators without providing a clear alternative.

### Disabled

Disabled elements should be visibly inactive, with reduced emphasis and no misleading hover feedback.

---

## 10. Responsive Design

The design must remain recognizable at desktop, tablet, and mobile sizes.

Reference breakpoints include:
- 1200px
- 900px
- 700px
- 400px

These are reference values, not mandatory breakpoints for every project.

### Desktop

- Use spacious layouts.
- Preserve large editorial headers.
- Use multi-column grids where appropriate.
- Allow decorative details around the main content.

### Tablet

- Reduce outer margins.
- Adjust container widths.
- Reduce the number of columns if necessary.
- Keep component proportions consistent.

### Mobile

- Reduce page padding.
- Reduce header padding and decorative symbol size.
- Use fewer columns.
- Preserve readable text sizes.
- Keep controls easy to interact with.
- Hide or simplify decorative elements that create clutter.

Example:

```css
@media (max-width: 700px) {
  body {
    padding: 20px 14px;
  }

  header {
    padding: 30px 24px;
  }
}
```

Always test for horizontal overflow.

Do not simply shrink desktop layouts. Reconsider the composition for smaller screens.

---

## 11. CSS Architecture

Write clean, maintainable CSS.

### Principles

1. Use CSS custom properties for repeated design tokens.
2. Group styles by component.
3. Keep base styles separate from interactive states.
4. Put responsive overrides in organized media queries.
5. Avoid unnecessary selector specificity.
6. Avoid repeating the same declarations.
7. Prefer semantic class names.
8. Avoid `!important` unless there is a justified technical reason.
9. Do not use JavaScript for interactions that can be implemented reliably with native HTML and CSS.
10. Keep the code readable and consistent.

### Recommended CSS organization

1. CSS reset and global styles.
2. Design tokens.
3. Typography.
4. Page layout.
5. Header and navigation.
6. Main content surfaces.
7. Components.
8. Interactive states.
9. Animations.
10. Responsive styles.
11. Reduced-motion preferences.

### Naming

Prefer descriptive class names:

- `.choice-card`
- `.radio-card`
- `.suit-selector`
- `.card`
- `.eyebrow`
- `.description`

Avoid vague names such as `.box1`, `.item2`, or `.thing`.

---

## 12. Animation and Motion

Animations should be subtle and purposeful.

Reference examples:
- Slow rotation of decorative symbols.
- Floating header decorations.
- Small hover transitions.
- Short active-state movement.

Typical transition duration:

```css
transition: all 0.2s ease;
```

Avoid:
- Excessive bouncing.
- Fast flashing.
- Constant movement of important content.
- Animations that distract from interaction.

Respect reduced-motion preferences:

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

---

## 13. Accessibility and Semantic HTML

Visual identity must not compromise accessibility.

Always:
- Use semantic HTML elements.
- Associate labels with form inputs.
- Use fieldsets and legends for related form controls.
- Keep keyboard navigation functional.
- Provide visible focus states.
- Maintain sufficient text contrast.
- Use native radio and checkbox inputs when appropriate.
- Ensure interactive elements have meaningful labels.
- Do not communicate selected states through color alone.

Decorative pseudo-elements must not replace meaningful content or accessible controls.

---

## 14. Design Workflow

When creating a new project, follow this process.

### Step 1 — Understand the task

Identify:
- Project purpose.
- Target audience.
- Main user actions.
- Content structure.
- Required components.
- Responsive requirements.

Do not start writing CSS before understanding the page structure.

### Step 2 — Define the visual direction

Decide:
- Which FIELD NOTES colors should dominate.
- Whether the page needs a dark editorial header.
- Which surfaces should be light or colored.
- Which components need strong visual emphasis.
- Which decorative elements are appropriate.

### Step 3 — Plan the layout

Establish:
- Main container width.
- Section hierarchy.
- Grid or Flexbox structure.
- Spacing.
- Responsive behavior.

### Step 4 — Build the structure

Start with semantic HTML.

Make sure the page structure and interactions are correct before adding decorative styling.

### Step 5 — Apply the design system

Use:
- Established colors.
- Typography rules.
- Border and radius conventions.
- Hard shadows.
- Component patterns.
- Interactive states.

### Step 6 — Implement responsive behavior

Check desktop, tablet, and mobile layouts.

### Step 7 — Review and refine

Check the page against the final checklist.

Do not add visual effects just because they are possible. Every element should have a purpose.

---

## 15. Design Decision Rules

When a new project does not directly match either reference:

- Preserve the FIELD NOTES visual identity.
- Choose components according to the project's actual function.
- Use the Survey as a reference for forms, structured content, and choice-based interactions.
- Use The Card Table as a reference for collections, repeated items, selectors, and Flexbox composition.
- Combine patterns only when they make sense.
- Do not force playing-card layouts into unrelated interfaces.
- Do not force form-card patterns into every content section.
- Keep the same design language while allowing different page compositions.

When uncertain, prefer the simpler solution.

Do not invent unnecessary components, decorations, colors, or animations.

---

## 16. Final Quality Checklist

Before considering a project complete, verify the following.

### Visual identity
- [ ] The page follows the FIELD NOTES aesthetic.
- [ ] The established color palette is used consistently.
- [ ] Typography follows the serif/sans-serif hierarchy.
- [ ] Borders and shadows are visually consistent.
- [ ] Decorative elements are intentional.

### Layout
- [ ] Content hierarchy is clear.
- [ ] Spacing is consistent.
- [ ] Main content is properly aligned.
- [ ] There is no unnecessary visual clutter.

### Components
- [ ] Buttons have hover and active states.
- [ ] Inputs have focus states.
- [ ] Selected controls are clearly identifiable.
- [ ] Cards have appropriate visual feedback.
- [ ] Components are consistent with their purpose.

### Responsive behavior
- [ ] Desktop layout works correctly.
- [ ] Tablet layout is balanced.
- [ ] Mobile layout is readable.
- [ ] No horizontal overflow exists.
- [ ] Interactive elements remain usable.

### Accessibility
- [ ] Semantic HTML is used.
- [ ] Form labels are connected to inputs.
- [ ] Keyboard focus is visible.
- [ ] Controls are accessible.
- [ ] Reduced-motion preferences are respected.

### Code quality
- [ ] CSS is organized.
- [ ] Repeated values use design tokens.
- [ ] Selectors are understandable.
- [ ] No unnecessary duplication exists.
- [ ] No unnecessary JavaScript is used.

---

## 17. Most Important Principle

FIELD NOTES is a visual language, not a rigid template.

Every new project should feel like it belongs to the same design family as Hiking Experience Survey and The Card Table.

However, each project must retain its own character, composition, and interaction patterns.

Prioritize visual consistency, clarity, usability, and intentional design decisions over blindly reproducing existing CSS.
