import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'Design System/Atoms/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <option>All Areas</option>
                <option>Woodshop</option>
                <option>Metal Shop</option>
            </>
        ),
    },
};
