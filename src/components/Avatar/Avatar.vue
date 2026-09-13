<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { AvatarProps } from './types'

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  alt: '',
  name: '',
  size: 'md',
  status: undefined,
  square: false
})

const hasError = ref(false)

watch(() => props.src, () => {
  hasError.value = false
})

const initials = computed(() => {
  if (!props.name) return ''
  const parts = props.name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
})

const showImage = computed(() => Boolean(props.src && !hasError.value))

function handleImageError() {
  hasError.value = true
}
</script>

<template>
  <div
    :class="[
      'avatar',
      `avatar--${size}`,
      { 'avatar--square': square }
    ]"
    role="img"
    :aria-label="alt || name || 'Avatar'"
  >
    <img
      v-if="showImage"
      :src="src"
      :alt="alt || name"
      class="avatar__image"
      @error="handleImageError"
    />
    <span v-else-if="initials" class="avatar__initials">{{ initials }}</span>
    <span v-else class="avatar__fallback" aria-hidden="true">👤</span>

    <span
      v-if="status"
      :class="['avatar__status', `avatar__status--${status}`]"
      :aria-label="`Status: ${status}`"
    />
  </div>
</template>

<style scoped>
.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--color-border);
  color: var(--color-text);
  font-weight: 600;
  user-select: none;
  overflow: visible;
  line-height: 1;
}

.avatar--square {
  border-radius: var(--radius-md);
}

.avatar--sm {
  width: 2rem;
  height: 2rem;
  font-size: 0.75rem;
}

.avatar--md {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
}

.avatar--lg {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.125rem;
}

.avatar--xl {
  width: 4.5rem;
  height: 4.5rem;
  font-size: 1.5rem;
}

.avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.avatar__initials {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.avatar__fallback {
  font-size: 1em;
}

.avatar__status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-sizing: content-box;
}

.avatar__status--online {
  background-color: #22c55e;
}

.avatar__status--busy {
  background-color: #ef4444;
}

.avatar__status--away {
  background-color: #f59e0b;
}

.avatar__status--offline {
  background-color: #94a3b8;
}
</style>
