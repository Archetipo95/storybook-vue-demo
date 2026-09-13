import { ref, watch, onMounted } from 'vue'

export type Theme = 'light' | 'dark'

const currentTheme = ref<Theme>('light')

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
  }

  watch(currentTheme, (theme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }
  })

  onMounted(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark && !document.documentElement.hasAttribute('data-theme')) {
        currentTheme.value = 'dark'
      }
    }
  })

  return {
    theme: currentTheme,
    toggleTheme,
    setTheme
  }
}
