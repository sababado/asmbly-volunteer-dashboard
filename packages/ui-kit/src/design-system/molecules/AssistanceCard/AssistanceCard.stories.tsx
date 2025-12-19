import type { Meta, StoryObj } from '@storybook/react';
import { AssistanceCard } from './AssistanceCard';

const meta = {
    title: 'Molecules/AssistanceCard',
    component: AssistanceCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof AssistanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        helpChannel: '#woodshop-help',
        actionText: 'View Repair Manual',
    },
};
