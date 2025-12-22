import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerLogsTable, VolunteerLog } from './VolunteerLogsTable';

const meta = {
    title: 'Organisms/VolunteerLogsTable',
    component: VolunteerLogsTable,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof VolunteerLogsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyLogs: VolunteerLog[] = [
    {
        id: '1',
        date: 'Oct 24, 2024',
        time: '9:00 AM',
        title: 'REPLACE BLADES ON PLANER',
        description: 'Maintenance Task #4023 • Replaced dull blades with new carbide set.',
        area: 'WOODSHOP',
        duration: 2.5,
        status: 'APPROVED',
    },
    {
        id: '2',
        date: 'Oct 22, 2024',
        time: '2:15 PM',
        title: 'CLASS ASSISTANT: WOOD 101',
        description: 'General Volunteer • Assisted instructor with safety demo.',
        area: 'CLASSES',
        duration: 4.0,
        status: 'APPROVED',
    },
    {
        id: '3',
        date: 'Oct 20, 2024',
        time: '10:00 AM',
        title: 'ORGANIZE WELDING TABLE',
        description: 'Maintenance Task #3991 • Sorted clamps and cleaned surface.',
        area: 'METAL SHOP',
        duration: 1.0,
        status: 'PENDING',
    },
];

export const Default: Story = {
    args: {
        logs: dummyLogs,
        totalRecords: 42,
        totalPages: 5,
        currentPage: 1,
    },
};

export const Empty: Story = {
    args: {
        logs: [],
        totalRecords: 0,
        totalPages: 1,
        currentPage: 1,
    },
};
