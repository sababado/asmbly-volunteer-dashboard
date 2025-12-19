import type { Meta, StoryObj } from '@storybook/react';
import { ToolPartList } from './ToolPartList';
import { ToolPartItem } from '../../molecules/ToolPartItem/ToolPartItem';
import { Wrench, Settings, Key, MapPin } from 'lucide-react';

const meta = {
    title: 'Organisms/ToolPartList',
    component: ToolPartList,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ToolPartList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <ToolPartItem icon={Wrench} name="10mm Wrench" detail="For arbor nut" />
                <ToolPartItem icon={Settings} name="Brake Cartridge (Standard)" detail="In Stock • Bin A4" detailColor="teal" />
                <ToolPartItem icon={Key} name="Cabinet Key #4" detail="Ask Duty Officer" />
            </>
        ),
    },
};

export const LocationVariant: Story = {
    args: {
        title: "Location",
        icon: MapPin,
        children: (
            /* Note: In the real usage, this might be the Location card content with Image. 
               But ToolPartList is generic enough to wrap any content list. */
            <div className="text-sm">Location details here...</div>
        ),
    },
};
