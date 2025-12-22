import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerTimePage } from './VolunteerTimePage';
import { Checkbox } from '../../design-system/atoms/Checkbox/Checkbox';
import { Clock } from 'lucide-react';
import * as React from 'react';

const ClockIcon = Clock as React.ElementType;

const meta = {
    title: 'Pages/VolunteerTimePage',
    component: VolunteerTimePage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof VolunteerTimePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyLogs = [
    {
        id: '1',
        date: 'Oct 24, 2024',
        time: '9:00 AM',
        title: 'REPLACE BLADES ON PLANER',
        description: 'Maintenance Task #4023 • Replaced dull blades with new carbide set.',
        area: 'WOODSHOP',
        duration: 2.5,
        status: 'APPROVED' as const,
    },
    {
        id: '2',
        date: 'Oct 22, 2024',
        time: '2:15 PM',
        title: 'CLASS ASSISTANT: WOOD 101',
        description: 'General Volunteer • Assisted instructor with safety demo.',
        area: 'CLASSES',
        duration: 4.0,
        status: 'APPROVED' as const,
    },
    {
        id: '3',
        date: 'Oct 20, 2024',
        time: '10:00 AM',
        title: 'ORGANIZE WELDING TABLE',
        description: 'Maintenance Task #3991 • Sorted clamps and cleaned surface.',
        area: 'METAL SHOP',
        duration: 1.0,
        status: 'PENDING' as const,
    },
];

const rewards = [
    {
        title: 'Free Month (Basic Membership)',
        subtitle: 'Active Steward Requirement',
        status: 'ACTIVE' as const,
        progress: 8.5,
        goal: 12,
        footerContent: (
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                <ClockIcon className="w-4 h-4" />
                <span>3.5 hours remaining this month</span>
            </div>
        )
    },
    {
        title: 'Free Month (Ceramics Membership)',
        subtitle: 'Ceramics Steward Requirement',
        status: 'IN PROGRESS' as const,
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
    }
];

const metrics = [
    {
        label: 'Total Time',
        value: 12.5,
        unit: 'HRS',
        context: '(OCT)',
        lifetimeValue: 142.5,
        lifetimeUnit: 'hrs',
    },
    {
        label: 'Tasks Completed',
        value: 4,
        unit: 'TASKS',
        context: '(OCT)',
        lifetimeValue: 38,
        lifetimeUnit: 'tasks',
        variant: 'teal' as const,
    }
];

export const Default: Story = {
    args: {
        rewards,
        metrics,
        logs: dummyLogs,
        stats: {
            totalRecords: 42,
            totalPages: 5,
            currentPage: 1
        }
    },
};
