import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { LayoutDashboard, CheckSquare, Trophy, Store, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const meta = {
    title: 'Organisms/Sidebar',
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
    { icon: LayoutDashboard as unknown as LucideIcon, label: 'Dashboard', href: '/dashboard' },
    { icon: CheckSquare as unknown as LucideIcon, label: 'My Tasks', href: '/tasks' },
    { icon: Trophy as unknown as LucideIcon, label: 'Leaderboard', href: '/leaderboard' },
    { icon: Store as unknown as LucideIcon, label: 'Shop Areas', href: '/shops' },
    { icon: User as unknown as LucideIcon, label: 'Profile', href: '/profile' },
];

export const Default: Story = {
    args: {
        items: mockItems,
        activePath: '/dashboard',
    },
};
