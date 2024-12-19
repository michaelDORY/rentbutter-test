import { Meta, type StoryObj } from '@storybook/react';
import { SectionedItems } from './sectioned-items';

const sectionedItemsMeta: Meta<typeof SectionedItems> = {
  title: 'Molecules/SectionedItems',
  component: SectionedItems,
};

export default sectionedItemsMeta;
type Story = StoryObj<typeof SectionedItems>;

export const Default: Story = {
  args: {
    items: ['test info', 'info test'],
  },
};

export const NotFullWidthDivider: Story = {
  args: {
    items: ['test info', 'info test'],
    withFullWidthDivider: false,
  },
};
