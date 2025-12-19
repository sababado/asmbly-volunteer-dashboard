import type { Meta, StoryObj } from '@storybook/react';
import { ToolPartItem } from './ToolPartItem';
import { Wrench, Settings, Key } from 'lucide-react';

const meta = {
    title: 'Molecules/ToolPartItem',
    component: ToolPartItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ToolPartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: Wrench,
        name: '10mm Wrench',
        detail: 'For arbor nut',
    },
};

export const WithHighlight: Story = {
    args: {
        icon: Settings,
        name: 'Brake Cartridge (Standard)',
        detail: 'In Stock • Bin A4',
        detailColor: 'teal',
    },
};

export const KeyItem: Story = {
    args: {
        icon: Key,
        name: 'Cabinet Key #4',
        detail: 'Ask Duty Officer',
    },
};
