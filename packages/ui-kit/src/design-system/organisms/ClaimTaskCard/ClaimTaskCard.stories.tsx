import type { Meta, StoryObj } from '@storybook/react';
import { ClaimTaskCard } from './ClaimTaskCard';

const meta = {
    title: 'Organisms/ClaimTaskCard',
    component: ClaimTaskCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ClaimTaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unclaimed: Story = {
    args: {
        status: 'Unclaimed',
        estTime: '45 Mins',
        points: '+150 XP',
        isClaimed: false,
    },
};

export const Claimed: Story = {
    args: {
        status: 'In Progress',
        estTime: '45 Mins',
        points: '+150 XP',
        isClaimed: true,
    },
};
