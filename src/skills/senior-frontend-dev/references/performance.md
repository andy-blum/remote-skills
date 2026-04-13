---
name: senior-frontend-dev-performance
description: Rendering, lazy loading, animations, layout thrashing
---

# Performance

- Load traditional javascript with the `defer` attribute. Load modular javascript with the `type="module"` attribute.
- Avoid chained requests
- Preload assets like fonts that will be requested by CSS
- Lazy load assets like ES modules that may not be used by every user
