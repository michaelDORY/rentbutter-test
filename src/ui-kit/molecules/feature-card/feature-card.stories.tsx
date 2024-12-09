import { Meta, type StoryObj } from '@storybook/react';
import { Shield } from 'lucide-react';
import { FeatureCard } from './feature-card.tsx';

const featureCardMeta: Meta<typeof FeatureCard> = {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
};

export default featureCardMeta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    icon: Shield,
    title: 'Encrypted & Secure',
    description:
      'We encrypt your personal data and your credentials will remain private.',
  },
};
