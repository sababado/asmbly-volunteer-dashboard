import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from './DashboardLayout';
import { LayoutDashboard } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const meta = {
    title: 'Templates/DashboardLayout',
    component: DashboardLayout,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSidebarProps = {
    items: [
        { icon: LayoutDashboard as unknown as LucideIcon, label: 'Dashboard', href: '/dashboard' },
    ],
    activePath: '/dashboard',
};

export const Default: Story = {
    args: {
        sidebarProps: mockSidebarProps,
        children: (
            <div className="h-[200vh] border-2 border-dashed border-gray-300 rounded p-8 flex items-center justify-center text-gray-400 font-bold uppercase tracking-wider">
                Scrollable Content Area
            </div>
        ),
    },
};
