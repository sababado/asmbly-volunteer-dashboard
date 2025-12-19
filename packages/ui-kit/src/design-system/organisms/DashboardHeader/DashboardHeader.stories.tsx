import type { Meta, StoryObj } from '@storybook/react';
import { DashboardHeader } from './DashboardHeader';

const meta = {
    title: 'Design System/Organisms/DashboardHeader',
    component: DashboardHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Welcome back, Alex',
        subtitle: 'The Woodshop needs some love today. Ready to help keep our community space running smoothly?',
    },
};
