import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

const metaFooter: Meta<typeof Footer> = {
  title: 'Molecules/Footer',
  component: Footer,
};

export default metaFooter;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
