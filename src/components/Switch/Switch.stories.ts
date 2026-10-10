import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { expect, userEvent, within } from 'storybook/test'
import Switch from './Switch.vue'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    label: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
    modelValue: { control: 'boolean' }
  },
  // Keeps the switch interactive in the canvas: v-model drives a local ref seeded from the args.
  render: (args: Record<string, unknown>) => ({
    components: { Switch },
    setup() {
      const enabled = ref(Boolean(args.modelValue))
      return { args, enabled }
    },
    template: '<Switch v-bind="args" v-model="enabled" />'
  })
}

export default meta
type Story = StoryObj<typeof Switch>

export const Off: Story = {
  args: {
    label: 'Email notifications'
  }
}

export const On: Story = {
  args: {
    label: 'Email notifications',
    modelValue: true
  }
}

export const WithDescription: Story = {
  args: {
    label: 'Publish PR previews',
    description: 'Deploy a Storybook preview for every pull request.',
    modelValue: true
  }
}

export const Small: Story = {
  args: {
    label: 'Compact mode',
    size: 'sm'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Managed by your organization',
    description: 'Ask an admin to change this setting.',
    modelValue: true,
    disabled: true
  }
}

export const InteractiveToggle: Story = {
  args: {
    label: 'Dark mode'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('switch', { name: 'Dark mode' })
    await expect(toggle).toHaveAttribute('aria-checked', 'false')

    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-checked', 'true')

    // The label toggles it too.
    await userEvent.click(canvas.getByText('Dark mode'))
    await expect(toggle).toHaveAttribute('aria-checked', 'false')

    // And the keyboard: Space on the focused switch.
    toggle.focus()
    await userEvent.keyboard(' ')
    await expect(toggle).toHaveAttribute('aria-checked', 'true')
  }
}
