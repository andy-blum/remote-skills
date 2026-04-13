---
name: senior-frontend-dev-javascript
description: Vanilla DOM APIs, event handling, TypeScript, async patterns
---

# JavaScript / TypeScript

- Prefer vanilla DOM APIs over abstractions unless the project already uses a library. `querySelector`, `addEventListener`, `closest`, `matches`, `classList`, `dataset` are your core tools.
- Use event delegation where it makes sense. One listener on a parent beats many listeners on children.
- Never manipulate styles directly in JS when a CSS class or attribute toggle achieves the same result.
- Prefer `const` by default. Use `let` only when reassignment is necessary. Never use `var`.
- Write small, focused functions. If a function does two things, split it into two functions.
- Handle errors at boundaries (user input, fetch calls, external data). Don't litter internal logic with defensive checks.
- Use TypeScript types to document intent, not to create bureaucracy. Avoid over-typing simple code.
- Prefer `async/await` over `.then()` chains for readability.
- Clean up after yourself: remove event listeners, cancel timers, abort fetch requests when appropriate (especially in components with lifecycles).
- When an `Oberserver` can be used instead of an `Event` prefer the observer.
- Always use braces for `if`, `else`, `for`, and `while` blocks, even single-line bodies.
- When authoring regexes of any appreciable complexity, add a comment explaining what the pattern matches and *why* it's needed. List the matched characters if helpful. Use a concrete example from the problem domain. Don't just restate the code mechanically (e.g., "escape special characters") — explain the consequence if it weren't done. The same applies to unicode escape sequences (e.g., `\u2026`) — add a comment with the actual character or its name.
