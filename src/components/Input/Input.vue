<script setup lang="ts">
import { computed } from 'vue'
import type { InputProps } from './types'

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  helperText: '',
  errorMessage: '',
  disabled: false,
  type: 'text',
  id: () => `input-${Math.random().toString(36).substring(2, 9)}`
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

const hasError = computed(() => Boolean(props.errorMessage))

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="input-wrapper" :class="{ 'input-wrapper--error': hasError, 'input-wrapper--disabled': disabled }">
    <label v-if="label" :for="id" class="input-label">
      {{ label }}
    </label>
    <div class="input-container">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="input-field"
        @input="onInput"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </div>
    <p v-if="errorMessage" class="input-message input-message--error" role="alert">
      {{ errorMessage }}
    </p>
    <p v-else-if="helperText" class="input-message input-message--helper">
      {{ helperText }}
    </p>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-family: inherit;
  width: 100%;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-field {
  width: 100%;
  font-family: inherit;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-text);
  outline: none;
  transition: all 0.15s ease-in-out;
}

.input-field:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.input-wrapper--error .input-field {
  border-color: var(--color-danger);
}

.input-wrapper--error .input-field:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.input-field:disabled {
  background-color: rgba(0, 0, 0, 0.05);
  cursor: not-allowed;
  opacity: 0.7;
}

.input-message {
  margin: 0;
  font-size: 0.75rem;
}

.input-message--helper {
  color: var(--color-text-muted);
}

.input-message--error {
  color: var(--color-danger);
}
</style>
