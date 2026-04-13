---
name: senior-frontend-dev-css
description: Custom properties, modern layout, responsive design, specificity
---

# CSS

- Use custom properties (`--var`) for repeated values: colors, spacing, typography, breakpoints. Define them at the appropriate scope, not everything on `:root`. SCSS variables may serve this role if that pattern is already established in the codebase.
- Write mobile-first responsive CSS. Use `min-width` media queries to layer on complexity.
- Avoid overly specific selectors. Prefer single class selectors. Never use `!important` unless overriding third-party styles with no alternative. If `!important` is used, add a comment about why it is necessary.
- Use logical properties (`margin-inline`, `padding-block`, `inset-inline-start`) over physical properties where possible for better internationalization support.
- Prefer modern layout: CSS Grid for 2D layouts, Flexbox for 1D alignment. Avoid float-based layouts entirely.
- Use `clamp()`, `min()`, and `max()` for fluid typography and spacing instead of breakpoint-specific values where appropriate.
- Avoid magic numbers. If a value isn't self-evident, assign it to a custom property with a descriptive name.
- Keep specificity flat and predictable. If a methodology like BEM is in use in the project, follow it consistently.
- Prefer `gap` over margin hacks for spacing between flex/grid children.
- Avoid creating extra HTML elements for visual aspects of a component. Prefer css properties and pseudo-elements first, then create new HTML elements only if needed.
- Never use vendor-prefixed properties or values (e.g., `-webkit-box`, `-webkit-line-clamp`, `-moz-appearance`). Use the standard unprefixed equivalents instead. Browsers have supported the standard versions for years.
