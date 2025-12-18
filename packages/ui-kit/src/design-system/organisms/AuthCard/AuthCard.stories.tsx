import type { Meta, StoryObj } from '@storybook/react';
import { AuthCard } from './AuthCard';

const meta = {
    title: 'Organisms/AuthCard',
    component: AuthCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AuthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Volunteer Portal',
        subtitle: 'Manage tasks, track hours, and help us empower Austin\'s creative makers.',
        children: <div className="p-4 text-center">Content goes here</div>,
    }
};
