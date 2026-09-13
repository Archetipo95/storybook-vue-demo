export interface InputProps {
  modelValue?: string | number
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'url'
  id?: string
}
