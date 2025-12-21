import * as React from 'react';
import { Hammer } from 'lucide-react';
import { Modal } from '../../molecules/Modal/Modal';
import { Button } from '../../atoms/Button/Button';
import { cn } from '../../../lib/utils';

export interface NotImplementedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotImplementedModal: React.FC<NotImplementedModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className="text-center max-w-[480px] p-0 overflow-visible"
            showCloseButton={true}
        >
            <div className="px-10 py-12 flex flex-col items-center">
                {/* Icon Circle */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-asmbly-yellow/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-asmbly-yellow text-white shadow-sm">
                        <Hammer size={32} strokeWidth={2.5} className="fill-white" />
                    </div>
                </div>

                <h3 className="mb-3 text-2xl font-display font-bold text-asmbly-navy uppercase tracking-wide">
                    Not Yet Implemented
                </h3>

                <p className="mb-8 text-center text-slate-600 leading-relaxed max-w-[320px]">
                    This feature is currently on our workbench! We're still hammering out the details. Please check back later.
                </p>

                <Button
                    onClick={onClose}
                    variant="primary" // Assuming primary is yellow based on context or brand, if not might need 'default'
                    size="lg"
                    className="w-full bg-asmbly-yellow hover:bg-asmbly-yellow/90 text-asmbly-navy font-bold uppercase tracking-wider"
                >
                    Got It
                </Button>
            </div>
        </Modal>
    );
};
NotImplementedModal.displayName = "NotImplementedModal";

export { NotImplementedModal };
