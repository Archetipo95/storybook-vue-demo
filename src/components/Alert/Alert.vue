<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps } from './types'

withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  title: '',
  dismissible: false
})

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

const isVisible = ref(true)

const dismiss = () => {
  isVisible.value = false
  emit('dismiss')
}
</script>

<template>
  <div v-if="isVisible" :class="['alert', `alert--${variant}`]" role="alert">
    <div class="alert__icon" aria-hidden="true">
      <span v-if="variant === 'success'">✓</span>
      <span v-else-if="variant === 'warning'">⚠️</span>
      <span v-else-if="variant === 'danger'">✕</span>
      <span v-else>ℹ</span>
    </div>
    <div class="alert__content">
      <h4 v-if="title" class="alert__title">{{ title }}</h4>
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
      &times;
    </button>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
}

.alert__icon {
  font-size: 1.125rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.alert__content {
  flex: 1;
}

.alert__title {
  margin: 0 0 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: inherit;
}

.alert__message {
  color: inherit;
}

.alert__dismiss {
  background: none;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  color: currentColor;
  opacity: 0.7;
  transition: opacity 0.15s ease;
}

.alert__dismiss:hover {
  opacity: 1;
}

/* Variants */
.alert--info {
  background-color: #eff6ff;
  border-color: #bfdbfe;
  color: #1e40af;
}

.alert--success {
  background-color: #f0fdf4;
  border-color: #bbf7d0;
  color: #166534;
}

.alert--warning {
  background-color: #fffbeb;
  border-color: #fde68a;
  color: #92400e;
}

.alert--danger {
  background-color: #fef2f2;
  border-color: #fecaca;
  color: #991b1b;
}
</style>
