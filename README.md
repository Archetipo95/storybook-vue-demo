# Vue 3 + Storybook 10 Demo

[![Storybook](https://archetipo95.github.io/storybook-vue-demo/badges/storybook.svg?v=v0.1.0)](https://archetipo95.github.io/storybook-vue-demo/)
[![Coverage](https://archetipo95.github.io/storybook-vue-demo/badges/coverage.svg?v=v0.1.0)](https://archetipo95.github.io/storybook-vue-demo/)
[![Stories](https://archetipo95.github.io/storybook-vue-demo/badges/stories.svg?v=v0.1.0)](https://archetipo95.github.io/storybook-vue-demo/)
[![Components](https://archetipo95.github.io/storybook-vue-demo/badges/components.svg?v=v0.1.0)](https://archetipo95.github.io/storybook-vue-demo/)
[![Status](https://archetipo95.github.io/storybook-vue-demo/badges/status.svg?v=v0.1.0)](https://archetipo95.github.io/storybook-vue-demo/)
[![CI](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/ci.yml)
[![Deploy Storybook](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/deploy.yml)

A minimal, production-grade test and demo repository for [storybook-github-swiss-knife](https://github.com/Archetipo95/storybook-github-swiss-knife).

🚀 **Live Storybook:** [https://archetipo95.github.io/storybook-vue-demo/](https://archetipo95.github.io/storybook-vue-demo/)

Features:
- ⚡ **Vue 3.5 + Vite 8 + TypeScript**: Minimal, type-safe Single File Components using `<script setup lang="ts">`.
- 📚 **Storybook 10**: Autodocs, interactive play functions (`storybook/test`), and accessibility checks (`@storybook/addon-a11y`).
- 🛡️ **Dynamic Badges & Status**: Real-time component coverage %, story count, component count, and state-aware deployment status (`published`, `building`, `failed`).
- 📈 **Hand-Drawn Growth Chart**: Vintage Star-History style growth history tracking component coverage, stories, and components over time.
- 🚀 **Automated GitHub Pages Deployment**: Fully automated deployment via `Archetipo95/storybook-github-swiss-knife` with zero runtime dependencies.
- 🔍 **Rich PR Previews**: Isolated Storybook previews generated for pull requests with live badges, base vs preview coverage delta comparison tables, collapsible growth charts, and automatic cleanup.
- 👁️ **Visual Regression & Accessibility**: Every story is screenshotted and scanned with axe on each pull request and compared with `main`; the `swiss-knife / visual` and `swiss-knife / accessibility` checks report the result.

---

## 📈 Component & Story Growth History

[![Storybook Growth History](https://archetipo95.github.io/storybook-vue-demo/stats/history.svg?v=v0.1.0)](https://archetipo95.github.io/storybook-vue-demo/)

---

## 📦 Components Included

- **`Alert`**: Contextual feedback alerts (`info`, `success`, `warning`, `danger`) with optional dismissal and icons.
- **`Avatar`**: User avatar with image fallback to initials and status dot indicator.
- **`Badge`**: Visual status indicators with dot support and semantic color tokens.
- **`Button`**: Customizable variants (`primary`, `secondary`, `outline`, `ghost`, `danger`), sizes, loading spinner, and interaction test stories.
- **`Card`**: Structured container with `#header`, default body, and `#footer` slots.
- **`Input`**: Accessible text input with `v-model` binding, error states, and helper text.
- **`Switch`**: Accessible on/off toggle (`role="switch"`) with `v-model`, label, description, sizes, and keyboard support.

---

## 🛠️ Local Development

### Install Dependencies
```bash
npm install
```

### Run Vue App
```bash
npm run dev
```

### Run Storybook
```bash
npm run storybook
```

### Build Everything
```bash
# Type check
npm run type-check

# Build application
npm run build

# Build static Storybook
npm run build-storybook
```

---

## 🚢 Deployment Architecture

This repository uses [`Archetipo95/storybook-github-swiss-knife`](https://github.com/Archetipo95/storybook-github-swiss-knife).
`deploy.yml` builds Storybook and publishes it to the `gh-pages` branch, next to the PR previews:

```yaml
- name: Publish Storybook to GitHub Pages
  uses: Archetipo95/storybook-github-swiss-knife/actions/publisher@7bf16b2a3afb2ed6053d6be5b0822940bde5d6fe # v0.3.0
  with:
    pages_repo: ${{ github.workspace }}/pages-repo
    pages_branch: gh-pages
    source_directory: ${{ github.workspace }}/storybook-static
    managed_directories: pr-preview
    site_url: https://archetipo95.github.io/storybook-vue-demo/
```

PR previews use the `pr-preview-build`, `pr-preview-publish`, `pr-preview-cleanup` and
`pr-preview-janitor` workflows from the same repository.

### 👁️ Visual regression and accessibility

> **Live example:** [PR #22](https://github.com/Archetipo95/storybook-vue-demo/pull/22) stays open as a showcase: a
> new `Switch` component and a restyled `Badge`. Its checks, report and
> [preview](https://archetipo95.github.io/storybook-vue-demo/pr-preview/pr-22/) show what a pull request with visual
> changes looks like.

`visual.yml` screenshots every story (running its play function) and scans it with axe; pushes
to `main` refresh the baselines. The trusted `visual-gate.yml` then posts two checks on the pull
request:

- **`swiss-knife / visual`** fails on changed or removed screenshots until the
  `visual-approved` label is added. Interaction failures always fail.
- **`swiss-knife / accessibility`** fails on new critical or serious axe violations. Known
  violations are recorded in `.storybook/a11y-baseline.json`.

The report is published next to the PR preview, under `pr-preview/pr-<N>/visual/`. The
`storybook-swiss-knife` addon (registered in `.storybook/main.ts`, installed from the v0.3.0
release tarball until it is on npm) shows it inside the preview: a **Visual** panel with the base
and PR screenshots of each story (**Show changed pixels** stays on across stories), **New** /
**Modified** statuses in Storybook's sidebar filter, and a `visual:failed` tag for interaction or
render failures. Settings
live in `.storybook/swiss-knife.json`; changes to it or to `visual.yml` must land in their own
pull request.

### 🐤 Action Canary (pre-release validation)

The **Action Canary** workflow (`.github/workflows/action-canary.yml`) is a manual
(`workflow_dispatch`) check used before releasing the action. It builds this demo's
Storybook, checks out `Archetipo95/storybook-github-swiss-knife` at the ref you pass via the
`action_ref` input (default `main`), and runs the composite action against
`storybook-static` with `publish: false`, so badges, stats and artifact validation are
exercised without deploying to GitHub Pages.

---

## 📄 License

MIT
