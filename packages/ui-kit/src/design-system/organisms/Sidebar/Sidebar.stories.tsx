import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { LayoutDashboard, CheckSquare, Trophy, Store, User } from 'lucide-react';

const meta = {
    title: 'Design System/Organisms/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onLogout: { action: 'logged out' },
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: CheckSquare, label: 'My Tasks', href: '/tasks' },
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: Store, label: 'Shop Areas', href: '/shops' },
    { icon: User, label: 'Profile', href: '/profile' },
];

export const Default: Story = {
    args: {
        items: mockItems,
        activePath: '/dashboard',
    },
};
