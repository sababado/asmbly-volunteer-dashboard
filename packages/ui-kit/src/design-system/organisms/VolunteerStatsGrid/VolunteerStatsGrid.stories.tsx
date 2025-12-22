import type { Meta, StoryObj } from '@storybook/react';
import { VolunteerStatsGrid } from './VolunteerStatsGrid';
import { VolunteerMetricCard } from '../../molecules/VolunteerMetricCard/VolunteerMetricCard';

const meta = {
    title: 'Organisms/VolunteerStatsGrid',
    component: VolunteerStatsGrid,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof VolunteerStatsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <VolunteerMetricCard
                    label="Card 1"
                    value={10}
                    unit="HRS"
                    context="(OCT)"
                    lifetimeValue={100}
                    lifetimeUnit="hrs"
                />
                <VolunteerMetricCard
                    label="Card 2"
                    value={5}
                    unit="TXS"
                    context="(OCT)"
                    lifetimeValue={50}
                    lifetimeUnit="txs"
                />
                <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Another Card Placeholder</div>
                <div className="h-40 bg-gray-100 rounded flex items-center justify-center">Another Card Placeholder</div>
            </>
        )
    },
};
