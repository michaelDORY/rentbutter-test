import { Meta, type StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { Check, Home, Shield, Zap } from 'lucide-react';

const iconMeta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default iconMeta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: Home,
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: Check,
    color: 'secondary',
  },
};
export const Neutral: Story = {
  args: {
    icon: Zap,
    color: 'neutral',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon icon={Shield} size="sm" />
      <Icon icon={Shield} size="default" />
      <Icon icon={Shield} size="lg" />
    </div>
  ),
};
