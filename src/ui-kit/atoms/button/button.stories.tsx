import type { Meta, StoryObj } from '@storybook/react';
import { X, ChevronLeft } from 'lucide-react';
import { Button } from './button.tsx';

const buttonMeta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'alternative',
        'secondary',
        'ghostUnderline',
        'icon',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default buttonMeta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Alternative: Story = {
  args: {
    children: 'Alternative Button',
    variant: 'alternative',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const GhostUnderline: Story = {
  args: {
    children: 'Ghost Underline',
    variant: 'ghostUnderline',
  },
};

export const NavigateBack: Story = {
  args: {
    children: (
      <>
        <ChevronLeft className="h-5 w-5 text-primary" />
      </>
    ),
    variant: 'icon',
    size: 'sm',
  },
};

export const Close: Story = {
  args: {
    children: (
      <>
        <X className="h-5 w-5 text-primary" />
      </>
    ),
    variant: 'icon',
    size: 'sm',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant={'primary'} disabled size="sm">
        Primary
      </Button>
      <Button variant={'alternative'} disabled size="sm">
        Alternative
      </Button>
      <Button variant={'secondary'} disabled size="sm">
        Secondary
      </Button>
      <Button variant={'ghostUnderline'} disabled size="sm">
        Ghost Underline
      </Button>
    </div>
  ),
};
