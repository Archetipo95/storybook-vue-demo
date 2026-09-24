import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, userEvent, within } from 'storybook/test'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url']
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Your public display handle.'
  }
}

export const WithError: Story = {
  args: {
    label: 'Email Address',
    modelValue: 'invalid-email',
    placeholder: 'name@example.com',
    errorMessage: 'Please enter a valid email address.'
  }
}

export const Disabled: Story = {
  args: {
    label: 'API Key',
    modelValue: 'sk_live_1234567890abcdef',
    disabled: true,
    helperText: 'Contact admin to update key.'
  }
}

export const InteractiveTyping: Story = {
  args: {
    label: 'Search Components',
    placeholder: 'Type to search...'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'Storybook Pages')
    await expect(input).toHaveValue('Storybook Pages')
  }
}

export const EmailInputTyping: Story = {
  args: {
    type: 'email',
    label: 'Notification Email',
    placeholder: 'you@example.com',
    helperText: 'Used for release and preview notifications.'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    await userEvent.type(input, 'demo@example.com')
    await expect(input).toHaveValue('demo@example.com')
  }
}
