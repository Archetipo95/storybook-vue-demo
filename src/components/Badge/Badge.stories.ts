import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info']
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    dot: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Default Badge</Badge>'
  })
}

export const SuccessWithDot: Story = {
  args: {
    variant: 'success',
    dot: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Live Deployment</Badge>'
  })
}

export const Warning: Story = {
  args: {
    variant: 'warning'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Needs Review</Badge>'
  })
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    dot: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">Build Failed</Badge>'
  })
}
