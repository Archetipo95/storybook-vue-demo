<script setup lang="ts">
import type { BadgeProps } from './types'

withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  size: 'md',
  dot: false
})
</script>

<template>
  <span :class="['badge', `badge--${variant}`, `badge--${size}`]">
    <span v-if="dot" class="badge__dot" aria-hidden="true" />
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: inherit;
  font-weight: 500;
  border-radius: var(--radius-full);
  line-height: 1;
  white-space: nowrap;
}

.badge--sm {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
}

.badge--md {
  font-size: 0.8125rem;
  padding: 0.3rem 0.625rem;
}

.badge__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: currentColor;
}

/* Variants */
.badge--default {
  background-color: #e2e8f0;
  color: #334155;
}

.badge--primary {
  background-color: #dbeafe;
  color: #1e40af;
}

.badge--success {
  background-color: #d1fae5;
  color: #065f46;
}

.badge--warning {
  background-color: #fef3c7;
  color: #92400e;
}

.badge--danger {
  background-color: #fee2e2;
  color: #991b1b;
}

.badge--info {
  background-color: #cffafe;
  color: #155e75;
}
</style>
