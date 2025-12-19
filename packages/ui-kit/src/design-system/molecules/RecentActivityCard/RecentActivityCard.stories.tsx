import type { Meta, StoryObj } from '@storybook/react';
import { RecentActivityCard } from './RecentActivityCard';

const meta = {
    title: 'Molecules/RecentActivityCard',
    component: RecentActivityCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RecentActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockActivity = [
    { id: '1', text: 'Completed "Replace Blades"', time: '2 hours ago', type: 'completed' as const, color: '#4ade80' },
    { id: '2', text: 'Claimed "Dust Collector"', time: '4 hours ago', type: 'claimed' as const, color: '#60a5fa' },
    { id: '3', text: 'Earned "Early Bird" Badge', time: '1 day ago', type: 'badge' as const, color: '#facc15' },
];

export const Default: Story = {
    args: {
        activities: mockActivity,
    },
};

export const Empty: Story = {
    args: {
        activities: [],
    },
};
