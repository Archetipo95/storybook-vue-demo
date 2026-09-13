<script setup lang="ts">
import type { CardProps } from './types'

withDefaults(defineProps<CardProps>(), {
  variant: 'elevated',
  padding: 'md'
})
</script>

<template>
  <div :class="['card', `card--${variant}`, `card--pad-${padding}`]">
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  color: var(--color-text);
  overflow: hidden;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.card--elevated {
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.card--outlined {
  border: 1px solid var(--color-border);
}

.card--flat {
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid transparent;
}

/* Padding */
.card--pad-none .card__body,
.card--pad-none .card__header,
.card--pad-none .card__footer {
  padding: 0;
}

.card--pad-sm .card__body,
.card--pad-sm .card__header,
.card--pad-sm .card__footer {
  padding: 0.75rem 1rem;
}

.card--pad-md .card__body,
.card--pad-md .card__header,
.card--pad-md .card__footer {
  padding: 1.25rem 1.5rem;
}

.card--pad-lg .card__body,
.card--pad-lg .card__header,
.card--pad-lg .card__footer {
  padding: 1.75rem 2rem;
}

.card__header {
  border-bottom: 1px solid var(--color-border);
  font-weight: 600;
  font-size: 1.125rem;
}

.card__footer {
  border-top: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.015);
}
</style>
