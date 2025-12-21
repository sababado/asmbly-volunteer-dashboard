import type { Meta, StoryObj } from '@storybook/react';
import { NotImplementedModal } from './NotImplementedModal';
import { Button } from '../../atoms/Button/Button';
import { useState } from 'react';

const meta = {
    title: 'Organisms/NotImplementedModal',
    component: NotImplementedModal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof NotImplementedModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const NotImplementedWithTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-screen w-full flex items-center justify-center bg-slate-100">
            <Button onClick={() => setIsOpen(true)}>Try Feature</Button>
            <NotImplementedModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export const Default: Story = {
    render: () => <NotImplementedWithTrigger />
};

export const Open: Story = {
    args: {
        isOpen: true,
        onClose: () => console.log('close'),
    },
    parameters: {
        docs: {
            story: {
                inline: false,
                iframeHeight: 500
            }
        }
    }
};
