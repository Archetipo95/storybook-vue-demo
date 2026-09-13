import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, userEvent, within } from 'storybook/test'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
  args: {
    onClick: fn()
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary Button</Button>'
  })
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary Button</Button>'
  })
}

export const Outline: Story = {
  args: {
    variant: 'outline'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Outline Button</Button>'
  })
}

export const Danger: Story = {
  args: {
    variant: 'danger'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Delete Item</Button>'
  })
}

export const Loading: Story = {
  args: {
    loading: true
  },
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Processing...</Button>'
  })
}

export const InteractiveClick: Story = {
  args: {
    variant: 'primary'
  },
  render: (args: Record<string, unknown>) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click Me</Button>'
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Click Me/i })
    await userEvent.click(button)
    const onClick = (args as { onClick?: () => void }).onClick
    await expect(onClick).toHaveBeenCalled()
  }
}
