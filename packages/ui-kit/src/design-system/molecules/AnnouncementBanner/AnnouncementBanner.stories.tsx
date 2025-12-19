import type { Meta, StoryObj } from '@storybook/react';
import { AnnouncementBanner } from './AnnouncementBanner';

const meta = {
    title: 'Molecules/AnnouncementBanner',
    component: AnnouncementBanner,
    tags: ['autodocs'],
    argTypes: {
        onDismiss: { action: 'dismissed' },
    },
} satisfies Meta<typeof AnnouncementBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Shop Announcement: Woodshop closed Sunday',
        message: 'Please plan your maintenance tasks accordingly. The dust collection system is undergoing critical upgrades and the area will be inaccessible.',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'New Tools in Metal Shop',
        message: 'We have instaled new welding stations. Please attend the safety briefing before use.',
    },
};
