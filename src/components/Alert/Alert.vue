<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps, AlertEmits } from './types'

withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  title: '',
  dismissible: false
})

const emit = defineEmits<AlertEmits>()
const isDismissed = ref(false)

function dismiss() {
  isDismissed.value = true
  emit('dismiss')
}
</script>

<template>
  <div
    v-if="!isDismissed"
    :class="['alert', `alert--${variant}`]"
    role="alert"
    aria-live="polite"
  >
    <div class="alert__icon" aria-hidden="true">
      <svg v-if="variant === 'info'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      <svg v-else-if="variant === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <svg v-else-if="variant === 'warning'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <svg v-else-if="variant === 'danger'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    </div>

    <div class="alert__content">
      <strong v-if="title" class="alert__title">{{ title }}</strong>
      <div class="alert__message">
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      type="button"
      class="alert__dismiss"
      aria-label="Dismiss alert"
      @click="dismiss"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
}

.alert__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-top: 0.125rem;
}

.alert__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.alert__title {
  font-weight: 600;
}

.alert__message {
  color: inherit;
}

.alert__dismiss {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: var(--radius-sm);
  color: inherit;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.alert__dismiss:hover {
  opacity: 1;
}

/* Variants */
.alert--info {
  background-color: #f0f9ff;
  border-color: #bae6fd;
  color: #0369a1;
}

.alert--success {
  background-color: #f0fdf4;
  border-color: #bbf7d0;
  color: #15803d;
}

.alert--warning {
  background-color: #fffbeb;
  border-color: #fde68a;
  color: #b45309;
}

.alert--danger {
  background-color: #fef2f2;
  border-color: #fecaca;
  color: #b91c1c;
}
</style>
