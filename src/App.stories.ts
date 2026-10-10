import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, userEvent, within } from 'storybook/test'
import App from './App.vue'

const meta: Meta<typeof App> = {
  title: 'Pages/App',
  component: App,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof App>

export const Showcase: Story = {}

export const Interactions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const counter = canvas.getByRole('button', { name: /Clicked 0 times/i })
    await userEvent.click(counter)
    await expect(counter).toHaveTextContent('Clicked 1 times')

    await userEvent.type(canvas.getByLabelText('Live Filter Query'), 'Switch')
    await expect(canvas.getByText('Switch', { selector: 'code' })).toBeInTheDocument()

    const previews = canvas.getByRole('switch', { name: 'Publish PR previews' })
    await userEvent.click(previews)
    await expect(previews).toHaveAttribute('aria-checked', 'true')
  }
}
