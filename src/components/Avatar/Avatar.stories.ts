import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'busy', 'away']
    },
    square: {
      control: 'boolean'
    },
    src: { control: 'text' },
    name: { control: 'text' },
    alt: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    name: 'Sarah Connor',
    size: 'lg'
  }
}

export const WithInitials: Story = {
  args: {
    name: 'Martin Masevski',
    size: 'lg'
  }
}

export const WithStatus: Story = {
  args: {
    name: 'Alex Chen',
    size: 'lg',
    status: 'online'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Avatar name="Small User" size="sm" />
        <Avatar name="Medium User" size="md" />
        <Avatar name="Large User" size="lg" />
        <Avatar name="Extra Large User" size="xl" />
      </div>
    `
  })
}

export const Fallback: Story = {
  args: {
    size: 'lg'
  }
}
