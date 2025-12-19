import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import { LayoutDashboard, CheckSquare } from 'lucide-react';

const meta = {
    title: 'Molecules/SidebarItem',
    component: SidebarItem,
    tags: ['autodocs'],
    argTypes: {
        isActive: { control: 'boolean' },
        isCollapsed: { control: 'boolean' },
    },
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#292D6A' }, // Brand purple for context
            ],
        },
    },
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: LayoutDashboard,
        label: 'Dashboard',
        href: '#',
    },
};

export const Active: Story = {
    args: {
        icon: LayoutDashboard,
        label: 'Dashboard',
        isActive: true,
        href: '#',
    },
};

export const Collapsed: Story = {
    args: {
        icon: CheckSquare,
        label: 'My Tasks',
        isCollapsed: true,
        href: '#',
    },
};
