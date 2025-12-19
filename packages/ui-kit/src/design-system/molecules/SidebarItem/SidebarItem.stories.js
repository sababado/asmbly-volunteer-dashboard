import { SidebarItem } from './SidebarItem';
import { LayoutDashboard, CheckSquare } from 'lucide-react';
const meta = {
    title: 'Design System/Molecules/SidebarItem',
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
};
export default meta;
export const Default = {
    args: {
        icon: LayoutDashboard,
        label: 'Dashboard',
        href: '#',
    },
};
export const Active = {
    args: {
        icon: LayoutDashboard,
        label: 'Dashboard',
        isActive: true,
        href: '#',
    },
};
export const Collapsed = {
    args: {
        icon: CheckSquare,
        label: 'My Tasks',
        isCollapsed: true,
        href: '#',
    },
};
