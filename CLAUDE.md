# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static site generator (SSG) that hosts skills for AI agents. Built with [Eleventy (11ty) v3](https://www.11ty.dev/).

## Commands

- **Install dependencies:** `npm install`
- **Build the site:** `npx @11ty/eleventy`
- **Dev server:** `npx @11ty/eleventy --serve`

## Architecture

This is a fresh Eleventy 3 project. No source templates, configuration file (`eleventy.config.js`), or output directory exist yet. Eleventy 3 uses ESM by default.
