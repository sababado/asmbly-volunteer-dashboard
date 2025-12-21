import type { Meta, StoryObj } from '@storybook/react';
import { ActionCard } from './ActionCard';
import { Calendar } from 'lucide-react';


const meta = {
    title: 'Molecules/ActionCard',
    component: ActionCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '#',
    },
};

export const ViewShopCalendar: Story = {
    args: {
        label: 'View Shop Calendar',
        icon: Calendar as React.ElementType,
        href: '#',
    },
};
