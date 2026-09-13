<script setup lang="ts">
import { ref } from 'vue'
import { Button, Badge, Input, Card, Alert } from './components'
import { useTheme } from './composables/useTheme'

const { theme, toggleTheme } = useTheme()

const searchQuery = ref('')
const count = ref(0)
const isSubmitting = ref(false)

const increment = () => {
  count.value++
}

const handleSimulateDeploy = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
  }, 1200)
}
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <div class="brand">
        <span class="brand__icon">⚡</span>
        <div>
          <h1 class="brand__title">Vue 3 + Storybook Demo</h1>
          <p class="brand__subtitle">Minimal production-grade component library demo</p>
        </div>
      </div>
      <div class="actions">
        <Badge variant="primary" size="md">Vue 3.5</Badge>
        <Badge variant="info" size="md">Storybook 10</Badge>
        <Button variant="outline" size="sm" @click="toggleTheme">
          {{ theme === 'light' ? '🌙 Dark' : '☀️ Light' }}
        </Button>
      </div>
    </header>

    <main class="app-main">
      <section class="grid-section">
        <Card variant="elevated">
          <template #header>
            <div class="card-header-flex">
              <span>Buttons & Interactions</span>
              <Badge variant="success" :dot="true">Interactive</Badge>
            </div>
          </template>
          <p class="section-desc">
            Buttons with different variants, sizes, and states (loading, disabled).
          </p>
          <div class="btn-group">
            <Button variant="primary" @click="increment">
              Clicked {{ count }} times
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="danger">Danger</Button>
            <Button
              variant="primary"
              :loading="isSubmitting"
              @click="handleSimulateDeploy"
            >
              Simulate Build
            </Button>
          </div>
        </Card>

        <Card variant="elevated">
          <template #header>
            <div class="card-header-flex">
              <span>Form Inputs</span>
              <Badge variant="default">v-model</Badge>
            </div>
          </template>
          <div class="form-stack">
            <Input
              v-model="searchQuery"
              label="Live Filter Query"
              placeholder="Type something to test reactivity..."
              helper-text="Reactive two-way binding demo."
            />
            <p v-if="searchQuery" class="search-preview">
              Current value: <code>{{ searchQuery }}</code>
            </p>
          </div>
        </Card>

        <Card variant="elevated">
          <template #header>
            <div class="card-header-flex">
              <span>Badges & Statuses</span>
              <Badge variant="warning">Status</Badge>
            </div>
          </template>
          <p class="section-desc">
            Compact visual indicators for state, metrics, and tags.
          </p>
          <div class="badge-group">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success" :dot="true">Active</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="danger" :dot="true">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Card>

        <Card variant="elevated">
          <template #header>
            <div class="card-header-flex">
              <span>Alert Notifications</span>
              <Badge variant="info">New</Badge>
            </div>
          </template>
          <div class="form-stack">
            <Alert variant="info" title="PR Preview Active" :dismissible="true">
              Storybook PR preview is automatically published to GitHub Pages.
            </Alert>
            <Alert variant="success" title="Accessible" :dismissible="false">
              Components follow WAI-ARIA best practices.
            </Alert>
          </div>
        </Card>

        <Card variant="outlined">
          <template #header>
            <span>Storybook & CI/CD</span>
          </template>
          <p class="section-desc">
            Automated deployment to GitHub Pages on every push and PR preview support using
            <strong>storybook-github-pages</strong>.
          </p>
          <template #footer>
            <div class="card-footer-actions">
              <a
                href="https://github.com/Archetipo95/storybook-github-pages"
                target="_blank"
                rel="noreferrer"
                class="footer-link"
              >
                GitHub Action Repo &rarr;
              </a>
            </div>
          </template>
        </Card>
      </section>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  flex-wrap: wrap;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand__icon {
  font-size: 2.25rem;
}

.brand__title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.brand__subtitle {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.section-desc {
  margin: 0 0 1rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.form-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.search-preview {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.search-preview code {
  background-color: var(--color-border);
  padding: 0.15rem 0.35rem;
  border-radius: var(--radius-sm);
  color: var(--color-primary);
}

.card-footer-actions {
  display: flex;
  justify-content: flex-end;
}

.footer-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
