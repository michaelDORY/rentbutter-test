import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './layout';

const meta: Meta<typeof Layout> = {
  title: 'Templates/Layout',
  component: Layout,
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    onClose: {
      action: 'close',
    },
    onNavigate: {
      action: 'navigate',
    },
    showBackButton: {
      control: { type: 'boolean' },
    },
    showStepper: {
      control: { type: 'boolean' },
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    isOpen: true,
    showBackButton: false,
    showStepper: false,
    children: 'Content goes here...',
  },
};

export const WithBackButton: Story = {
  args: {
    isOpen: true,
    showBackButton: true,
    showStepper: false,
    children: 'Content goes here...',
  },
};

export const WithBackButtonAndStepper: Story = {
  args: {
    isOpen: true,
    showBackButton: true,
    showStepper: true,
    children: 'Content goes here...',
  },
};
