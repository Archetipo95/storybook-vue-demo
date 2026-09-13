import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'
import Button from '../Button/Button.vue'
import Badge from '../Badge/Badge.vue'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'flat']
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg']
    }
  }
}

export default meta
type Story = StoryObj<typeof Card>

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Card, Button, Badge },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args" style="max-width: 400px;">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Deployment Info</span>
            <Badge variant="success" dot>Active</Badge>
          </div>
        </template>
        <p style="margin: 0; color: var(--color-text-muted);">
          Storybook deployed automatically via <strong>storybook-github-pages</strong> action.
        </p>
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
            <Button variant="outline" size="sm">Docs</Button>
            <Button variant="primary" size="sm">Open Storybook</Button>
          </div>
        </template>
      </Card>
    `
  })
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args" style="max-width: 400px;">
        <h4 style="margin: 0 0 0.5rem 0;">Minimal Card</h4>
        <p style="margin: 0; color: var(--color-text-muted);">
          Clean card container with subtle borders for structured layouts.
        </p>
      </Card>
    `
  })
}
