import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Mail } from 'lucide-react';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'gradient', 'asmbly-yellow'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon', 'xl'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    }
}

export const AsmblyYellow: Story = {
    args: {
        children: 'Log In',
        variant: 'asmbly-yellow',
    }
}

export const Gradient: Story = {
    args: {
        children: 'Gradient',
        variant: 'gradient',
    }
}

export const WithIcon: Story = {
    args: {
        children: 'Login with Email',
        leftIcon: React.createElement(Mail as any, { className: "h-4 w-4" }),
    }
}

export const Loading: Story = {
    args: {
        children: 'Please wait',
        isLoading: true,
    }
}
