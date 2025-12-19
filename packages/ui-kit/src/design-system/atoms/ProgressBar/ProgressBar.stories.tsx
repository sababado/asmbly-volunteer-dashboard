import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
    title: 'Atoms/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100 } },
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'accent-teal', 'accent-red'],
        }
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 65,
        variant: 'secondary'
    },
};

export const Full: Story = {
    args: {
        value: 100,
        variant: 'accent-teal'
    },
};
