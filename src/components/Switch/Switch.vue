<script setup lang="ts">
import type { SwitchProps } from './types'

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  description: '',
  disabled: false,
  size: 'md',
  id: () => `switch-${Math.random().toString(36).substring(2, 9)}`
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const toggle = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div :class="['switch', `switch--${size}`, { 'switch--disabled': disabled }]">
    <button
      :id="id"
      type="button"
      role="switch"
      :aria-checked="modelValue ? 'true' : 'false'"
      :aria-describedby="description ? `${id}-description` : undefined"
      :disabled="disabled"
      :class="['switch__track', { 'switch__track--on': modelValue }]"
      @click="toggle"
    >
      <span class="switch__thumb" aria-hidden="true" />
    </button>
    <div class="switch__text">
      <label :for="id" class="switch__label">{{ label }}</label>
      <p v-if="description" :id="`${id}-description`" class="switch__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.switch {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: inherit;
}

.switch__track {
  --track-width: 2.75rem;
  --track-height: 1.5rem;
  --thumb-size: 1.125rem;

  position: relative;
  flex-shrink: 0;
  width: var(--track-width);
  height: var(--track-height);
  padding: 0;
  border: none;
  border-radius: var(--radius-full);
  background-color: #94a3b8;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.switch--sm .switch__track {
  --track-width: 2.25rem;
  --track-height: 1.25rem;
  --thumb-size: 0.875rem;
}

.switch__track:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
}

.switch__track--on {
  background-color: var(--color-primary-hover);
}

.switch__thumb {
  position: absolute;
  top: calc((var(--track-height) - var(--thumb-size)) / 2);
  left: calc((var(--track-height) - var(--thumb-size)) / 2);
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: var(--shadow-sm);
  transition: transform 0.15s ease-in-out;
}

.switch__track--on .switch__thumb {
  transform: translateX(calc(var(--track-width) - var(--track-height)));
}

.switch__text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.switch__label {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--color-text);
  cursor: pointer;
}

.switch--sm .switch__label {
  font-size: 0.8125rem;
  line-height: 1.25rem;
}

.switch__description {
  margin: 0;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.switch--disabled .switch__track,
.switch--disabled .switch__label {
  cursor: not-allowed;
}

.switch--disabled .switch__track {
  opacity: 0.5;
}
</style>
