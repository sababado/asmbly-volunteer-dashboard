import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerTimeTemplate } from './VolunteerTimeTemplate';

const meta = {
    title: 'Templates/VolunteerTimeTemplate',
    component: VolunteerTimeTemplate,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof VolunteerTimeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        header: <div className="h-20 bg-gray-200">Header</div>,
        rewardsHeading: <div className="h-8 w-40 bg-gray-200">Rewards Heading</div>,
        stats: <div className="h-60 bg-gray-200">Stats Grid</div>,
        logs: <div className="h-96 bg-gray-200">Logs Table</div>,
    },
};
