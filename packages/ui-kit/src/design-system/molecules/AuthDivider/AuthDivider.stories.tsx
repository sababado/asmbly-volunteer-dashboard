import type { Meta, StoryObj } from '@storybook/react';
import { AuthDivider } from './AuthDivider';

const meta = {
    title: 'Molecules/AuthDivider',
    component: AuthDivider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AuthDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
