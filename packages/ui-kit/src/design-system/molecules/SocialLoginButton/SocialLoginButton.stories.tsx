import type { Meta, StoryObj } from '@storybook/react';
import { SocialLoginButton } from './SocialLoginButton';

const meta = {
    title: 'Molecules/SocialLoginButton',
    component: SocialLoginButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SocialLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Log in with Neon CRM',
    },
};
