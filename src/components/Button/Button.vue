<script setup lang="ts">
import type { ButtonProps } from './types'

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button'
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="['btn', `btn--${variant}`, `btn--${size}`, { 'btn--loading': loading }]"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="btn__spinner" aria-hidden="true" />
    <span class="btn__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  border: 1px solid transparent;
  outline: none;
  white-space: nowrap;
  user-select: none;
}

.btn:focus-visible {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Sizes */
.btn--sm {
  font-size: 0.8125rem;
  padding: 0.375rem 0.75rem;
}

.btn--md {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.btn--lg {
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
}

/* Variants */
.btn--primary {
  background-color: var(--color-primary);
  color: #ffffff;
}
.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: #ffffff;
}
.btn--secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-hover);
}

.btn--outline {
  background-color: transparent;
  border-color: var(--color-border);
  color: var(--color-text);
}
.btn--outline:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, 0.04);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-text);
}
.btn--ghost:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, 0.04);
}

.btn--danger {
  background-color: var(--color-danger);
  color: #ffffff;
}
.btn--danger:hover:not(:disabled) {
  background-color: #dc2626;
}

/* Loading Spinner */
.btn__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
