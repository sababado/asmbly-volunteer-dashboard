import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta = {
    title: 'Molecules/Callout',
    component: Callout,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['info', 'warning'],
        },
    },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoVariant: Story = {
    args: {
        variant: 'info',
        title: 'Your objective',
        children: 'Inspect the blade for damage and install the replacement cartridge. The saw is currently tagged out and cannot be used until this maintenance is complete.',
    },
};

export const WarningVariant: Story = {
    args: {
        variant: 'warning',
        title: 'Safety Warning',
        children: 'Ensure the saw is powered off at the breaker and strictly follow Lockout/Tagout (LOTO) procedures before opening the cabinet. Do not attempt if you have not completed the volunteer safety induction.',
    },
};
