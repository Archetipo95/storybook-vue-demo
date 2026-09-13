export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
}

export interface AlertEmits {
  (e: 'dismiss'): void
}
