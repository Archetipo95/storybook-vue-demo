# Vue 3 + Storybook 10 Demo

[![Storybook](https://archetipo95.github.io/storybook-vue-demo/badges/storybook.svg?v=v1.9.12)](https://archetipo95.github.io/storybook-vue-demo/)
[![Coverage](https://archetipo95.github.io/storybook-vue-demo/badges/coverage.svg?v=v1.9.12)](https://archetipo95.github.io/storybook-vue-demo/)
[![Stories](https://archetipo95.github.io/storybook-vue-demo/badges/stories.svg?v=v1.9.12)](https://archetipo95.github.io/storybook-vue-demo/)
[![Components](https://archetipo95.github.io/storybook-vue-demo/badges/components.svg?v=v1.9.12)](https://archetipo95.github.io/storybook-vue-demo/)
[![Status](https://archetipo95.github.io/storybook-vue-demo/badges/status.svg?v=v1.9.12)](https://archetipo95.github.io/storybook-vue-demo/)
[![CI](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/ci.yml)
[![Deploy Storybook](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/deploy.yml)

A minimal, production-grade test and demo repository for [Security-Hardened Storybook to GitHub Pages](https://github.com/Archetipo95/storybook-github-pages).

🚀 **Live Storybook:** [https://archetipo95.github.io/storybook-vue-demo/](https://archetipo95.github.io/storybook-vue-demo/)

Features:
- ⚡ **Vue 3.5 + Vite 8 + TypeScript**: Minimal, type-safe Single File Components using `<script setup lang="ts">`.
- 📚 **Storybook 10**: Autodocs, interactive play functions (`storybook/test`), and accessibility checks (`@storybook/addon-a11y`).
- 🛡️ **Dynamic Badges & Status**: Real-time component coverage %, story count, component count, and state-aware deployment status (`published`, `building`, `failed`).
- 📈 **Hand-Drawn Growth Chart**: Vintage Star-History style growth history tracking component coverage, stories, and components over time.
- 🚀 **Automated GitHub Pages Deployment**: Fully automated deployment via `Archetipo95/storybook-github-pages@v1` with zero runtime dependencies.
- 🔍 **Rich PR Previews**: Isolated Storybook previews generated for pull requests with live badges, base vs preview coverage delta comparison tables, collapsible growth charts, and automatic cleanup.

---

## 📈 Component & Story Growth History

[![Storybook Growth History](https://archetipo95.github.io/storybook-vue-demo/stats/history.svg?v=v1.9.12)](https://archetipo95.github.io/storybook-vue-demo/)

---

## 📦 Components Included

- **`Alert`**: Contextual feedback alerts (`info`, `success`, `warning`, `danger`) with optional dismissal and icons.
- **`Avatar`**: User avatar with image fallback to initials and status dot indicator.
- **`Badge`**: Visual status indicators with dot support and semantic color tokens.
- **`Button`**: Customizable variants (`primary`, `secondary`, `outline`, `ghost`, `danger`), sizes, loading spinner, and interaction test stories.
- **`Card`**: Structured container with `#header`, default body, and `#footer` slots.
- **`Input`**: Accessible text input with `v-model` binding, error states, and helper text.

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

This repository uses [`Archetipo95/storybook-github-pages`](https://github.com/Archetipo95/storybook-github-pages):

```yaml
- name: Deploy Storybook to GitHub Pages
  uses: Archetipo95/storybook-github-pages@v1
  with:
    path: "storybook-static"
    generate_badges: "true"
    generate_stats_graph: "true"
```

### 🐤 Action Canary (pre-release validation)

The **Action Canary** workflow (`.github/workflows/action-canary.yml`) is a manual
(`workflow_dispatch`) check used before releasing the action. It builds this demo's
Storybook, checks out `Archetipo95/storybook-github-pages` at the ref you pass via the
`action_ref` input (default `main`), and runs the composite action against
`storybook-static` with `publish: false`, so badges, stats and artifact validation are
exercised without deploying to GitHub Pages.

---

## 📄 License

MIT
