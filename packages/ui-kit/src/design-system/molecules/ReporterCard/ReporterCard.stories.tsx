import type { Meta, StoryObj } from '@storybook/react';
import { ReporterCard } from './ReporterCard';

const meta = {
    title: 'Molecules/ReporterCard',
    component: ReporterCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ReporterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'Sarah J.',
        role: 'Shop Lead',
        avatarSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAetZMa95dVhyozSnOfWpLrFEM9BQf2snZcJa3i9ZGGkW2ETNZdOQRKXD5IP10g5pU2JopoCv3ko97g2ZhcxGcLaopT-hd6vmK4YnN43lxrC5XxNUlHovcvKiBT6QtB-FDkgrQEzWoOVZoOtpGItbnhAwNMOqmg6Rum78_NThCMnSkKHq8a178KcwIpMuXcYr7HcaBSsPiYcPd91bwdin2VPyFhlpMQWwdHlAZWtud_TAagtMSRCBu2wRdQqpXlfhU426GdMPBOy9r6',
    },
};

export const NoAvatar: Story = {
    args: {
        name: 'John Doe',
        role: 'Volunteer',
    },
};
