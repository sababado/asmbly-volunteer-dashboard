import type { Meta, StoryObj } from '@storybook/react';
import { ReportIssueCard } from './ReportIssueCard';

const meta = {
    title: 'Design System/Molecules/ReportIssueCard',
    component: ReportIssueCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ReportIssueCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '#',
    },
};
