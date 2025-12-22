import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerRewardCard } from './VolunteerRewardCard';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Clock } from 'lucide-react';
import * as React from 'react';

const ClockIcon = Clock as React.ElementType;

const meta = {
    title: 'Molecules/VolunteerRewardCard',
    component: VolunteerRewardCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof VolunteerRewardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveReward: Story = {
    args: {
        title: 'Free Month (Basic Membership)',
        subtitle: 'Active Steward Requirement',
        status: 'ACTIVE',
        progress: 8.5,
        goal: 12,
        footerContent: (
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                <ClockIcon className="w-4 h-4" />
                <span>3.5 hours remaining this month</span>
            </div>
        )
    },
};

export const InProgressReward: Story = {
    args: {
        title: 'Free Month (Ceramics Membership)',
        subtitle: 'Ceramics Steward Requirement',
        status: 'IN PROGRESS',
        progress: 12,
        goal: 16,
        progressLabel: 'Hours Logged',
        footerContent: (
            <div className="flex items-center gap-2">
                <Checkbox id="req1" />
                <label htmlFor="req1" className="text-sm font-bold uppercase text-asmbly-navy leading-none cursor-pointer">
                    LEAD 1 CSI SESSION
                    <span className="block text-xs text-muted-foreground font-normal normal-case mt-1">Not yet completed</span>
                </label>
            </div>
        )
    },
};
