import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button/Button';
import { useState } from 'react';

const meta = {
    title: 'Molecules/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-screen w-full flex items-center justify-center bg-slate-100">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Modal Title</h2>
                    <p>This is a generic modal content.</p>
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export const Default: Story = {
    render: () => <ModalWithTrigger />
};
