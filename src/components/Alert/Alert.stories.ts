import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, userEvent, within } from 'storybook/test'
import Alert from './Alert.vue'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger']
    },
    title: { control: 'text' },
    dismissible: { control: 'boolean' }
  },
  args: {
    onDismiss: fn()
  }
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Pull Request Preview',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template: '<Alert v-bind="args">This storybook instance was deployed from an active pull request.</Alert>'
  })
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Deployment Complete',
    dismissible: false
  },
  render: (args: Record<string, unknown>) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template: '<Alert v-bind="args">GitHub Pages preview deployment succeeded in 4.2s.</Alert>'
  })
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Preview Expiration',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template: '<Alert v-bind="args">Ephemeral PR preview directories are cleaned up when the PR is closed.</Alert>'
  })
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Build Issue Detected',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template: '<Alert v-bind="args">Check the Actions tab for details on failing checks.</Alert>'
  })
}

export const InteractiveDismiss: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Notification',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Alert },
    setup() {
      return { args }
    },
    template: '<Alert v-bind="args">Click the dismiss icon on the right to close this notification.</Alert>'
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const dismissButton = canvas.getByRole('button', { name: /dismiss alert/i })
    await expect(dismissButton).toBeInTheDocument()
    await userEvent.click(dismissButton)
    const onDismiss = (args as { onDismiss?: () => void }).onDismiss
    await expect(onDismiss).toHaveBeenCalled()
  }
}
