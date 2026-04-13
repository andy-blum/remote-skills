---
layout: base.njk
title: Getting Started
permalink: /getting-started/
---

# Getting Started

Remote Skills is a registry of capabilities that can be deployed to AI agents. Each skill is a self-contained instruction set that teaches an agent how to perform a specific task.

## How it works

1. **Browse** the <a href="{{ "/skills/" | url }}">skills catalog</a> to find what you need
2. **Read** the skill documentation to understand its capabilities
3. **Deploy** the skill to your agent by referencing its raw URL

## Two formats, one source

Every skill is published in two formats from the same source file:

- **HTML** at `/skills/<name>/` — for humans browsing the catalog
- **Raw Markdown** at `/skills/<name>/SKILL.md` — for AI agents to fetch directly

Reference files are also available as raw markdown at their original paths (e.g. `/skills/senior-frontend-dev/references/css.md`).

To point your local agent at a remote skill, reference the raw URL:

```
https://your-domain.com/skills/acli-jira/SKILL.md
```

## Skill manifest

A machine-readable index of all skills is published at <a href="{{ "/skills.json" | url }}"><code>/skills.json</code></a>. It contains each skill's name, description, version, and raw URL:

```json
[
  {
    "name": "acli-jira",
    "description": "When the user asks to view or search Jira issues...",
    "version": "1.0.0",
    "url": "/skills/acli-jira/SKILL.md"
  }
]
```

Use the manifest to auto-discover available skills or to sync metadata into your local agent configuration.

## Skill anatomy

Each skill contains:

- **Name** — a unique identifier
- **Description** — when the skill should activate
- **Instructions** — the full prompt and reference material the agent receives
- **References** — supplementary guides the agent can consult

## Adding a new skill

Create a new directory under `src/skills/` with an `index.md` file containing front matter:

```yaml
---
name: my-skill
description: When this skill should be used
version: 1.0.0
---

# Skill content here
```

Any reference files go in a `references/` subdirectory alongside the skill.
