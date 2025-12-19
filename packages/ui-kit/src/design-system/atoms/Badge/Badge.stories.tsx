import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'accent-teal', 'accent-red', 'outline'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Woodshop',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Open',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Medium Urgency',
    },
};

export const AccentTeal: Story = {
    args: {
        variant: 'accent-teal',
        children: 'Ready',
    },
};

export const AccentRed: Story = {
    args: {
        variant: 'accent-red',
        children: 'High Urgency',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};
