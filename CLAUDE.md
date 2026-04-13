# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static site that publishes AI agent skills in two formats: HTML for humans and raw Markdown for agents to fetch directly. Built with Eleventy (11ty) v3, deployed to GitHub Pages.

## Commands

- `npm start` — dev server at http://localhost:8080
- `npm run build` — static build to `_site/`
- Test with production path prefix: `ELEVENTY_SITE_URL=https://andy-blum.github.io ELEVENTY_PATH_PREFIX=/remote-skills/ npm start`

## Architecture

### Dual output per skill

Each skill source file (`src/skills/<name>/index.md`) produces:
- **HTML page** at `/skills/<name>/` — rendered with `skill.njk` layout
- **Raw SKILL.md** at `/skills/<name>/SKILL.md` — copied verbatim by the `eleventy.after` hook in `eleventy.config.js`

Reference files (e.g. `src/skills/senior-frontend-dev/references/css.md`) get the same treatment: HTML page + raw `.md` copy.

### Skills collection

`src/skills/skills.json` tags all skill subdirectory content with `tags: skills`, giving them the `skill.njk` layout. The skills index (`src/skills/index.njk`) and manifest (`src/skills/manifest.njk`) override this with `tags: []` to exclude themselves from the collection.

### Manifest

`/skills.json` is auto-generated from the skills collection. It provides name, description, and raw URL for each skill so agents can discover available skills without fetching each one.

### Install stubs

Each skill detail page includes a copyable stub — a minimal SKILL.md with just name, description, and a remote URL. Users paste this into their local `~/.claude/skills/` or project `.claude/skills/` directory. The agent uses the local stub for activation and fetches full instructions from the remote URL.

### Path prefix handling

`pathPrefix` and `site.url` are driven by environment variables (`ELEVENTY_PATH_PREFIX`, `ELEVENTY_SITE_URL`) so the same source works at `/` locally and under `/remote-skills/` on GitHub Pages. All internal links in templates must use the `| url` filter.

### Layouts

- `base.njk` — site shell (homepage, getting started, skills index)
- `skill.njk` — skill detail pages with install panel, raw link, and back navigation

### Adding a new skill

Create `src/skills/<name>/index.md` with front matter (`name`, `description`, `version`) and markdown body. Optional reference files go in `src/skills/<name>/references/`. The skill automatically appears in the collection, manifest, and gets a raw `.md` output.
