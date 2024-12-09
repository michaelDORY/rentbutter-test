import { Meta, type StoryObj } from '@storybook/react';
import { FeatureCardList } from './feature-card-list';
import { Shield } from 'lucide-react';

const featureCardListMeta: Meta<typeof FeatureCardList> = {
  title: 'Molecules/FeatureCardList',
  component: FeatureCardList,
};

export default featureCardListMeta;
type Story = StoryObj<typeof FeatureCardList>;

export const Default: Story = {
  args: {
    features: [
      {
        icon: Shield,
        title: 'Encrypted & Secure',
        description:
          'We encrypt your personal data and your credentials will remain private.',
      },
      {
        icon: Shield,
        title: 'Encrypted & Secure',
        description:
          'We encrypt your personal data and your credentials will remain private.',
      },
    ],
  },
};
