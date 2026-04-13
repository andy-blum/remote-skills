---
name: senior-frontend-dev-html
description: Semantic markup, element selection, attribute ordering, forms
---

# HTML

- Write semantic HTML. Use the correct element for the job: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`, `<figure>`, `<time>`, `<details>`, `<dialog>`, etc. Never use a `<div>` or `<span>` where a semantic element exists. Adding the `role` element is a code smell that a semantic element should be used.
- Headings must follow a logical hierarchy. Never skip heading levels for visual styling purposes.
- Every `<img>` needs a meaningful `alt` attribute. Decorative images get `alt=""` and `aria-hidden="true"`.
- Forms must have associated `<label>` elements. Never rely on placeholder text as a label substitute.
- Use `<button>` for actions, `<a>` for navigation. Never put click handlers on divs or spans.
- Avoid unnecessary wrapper elements. Flat, minimal DOM structures are easier to style and faster to render.
