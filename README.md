# Vue 3 + Storybook 8 Demo

[![Storybook](https://Archetipo95.github.io/storybook-vue-demo/badges/storybook.svg)](https://Archetipo95.github.io/storybook-vue-demo/badges)
[![Stories](https://Archetipo95.github.io/storybook-vue-demo/badges/stories.svg)](https://Archetipo95.github.io/storybook-vue-demo/badges)
[![Components](https://Archetipo95.github.io/storybook-vue-demo/badges/components.svg)](https://Archetipo95.github.io/storybook-vue-demo/badges)
[![CI](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/ci.yml)
[![Deploy Storybook](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/Archetipo95/storybook-vue-demo/actions/workflows/deploy.yml)

A minimal, production-grade test and demo repository for [Security-Hardened Storybook to GitHub Pages](https://github.com/Archetipo95/storybook-github-pages).

Features:
- ⚡ **Vue 3.5 + Vite + TypeScript**: Minimal, type-safe Single File Components using `<script setup lang="ts">`.
- 📚 **Storybook 8**: Autodocs, interactive play functions (`@storybook/test`), and accessibility checks (`@storybook/addon-a11y`).
- 🚀 **Automated GitHub Pages Deployment**: Fully automated deployment with generated dynamic SVG badges via `Archetipo95/storybook-github-pages@v1`.
- 🔍 **PR Previews**: Isolated Storybook previews generated for pull requests with automatic comment notifications and cleanup.

---

## 📦 Components Included

- **`Button`**: Customizable variants (`primary`, `secondary`, `outline`, `ghost`, `danger`), sizes, loading spinner, and interaction test stories.
- **`Badge`**: Visual status indicators with dot support and semantic color tokens.
- **`Input`**: Accessible text input with `v-model` binding, error states, and helper text.
- **`Card`**: Structured container with `#header`, default body, and `#footer` slots.

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
    build_script: 'npm run build-storybook'
    path: 'storybook-static'
    generate_badges: 'true'
```

---

## 📄 License

MIT
