import * as React from 'react';
import { Hammer } from 'lucide-react';
import { Modal } from '../../molecules/Modal/Modal';
import { Button } from '../../atoms/Button/Button';

export interface NotImplementedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NotImplementedModal: React.FC<NotImplementedModalProps> = ({
    isOpen,
    onClose
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[480px]">
            <div className="flex flex-col items-center text-center p-8 sm:p-10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/20">
                    <Hammer className="h-10 w-10 text-brand-gold" />
                </div>

                <h3 className="mb-3 text-2xl font-display font-bold uppercase tracking-wide text-primary">
                    Not Yet Implemented
                </h3>

                <p className="mb-8 text-muted-foreground leading-relaxed">
                    This feature is currently on our workbench! We're still hammering out the details. Please check back later.
                </p>

                <Button
                    onClick={onClose}
                    className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold tracking-wide uppercase"
                    size="lg"
                >
                    Got It
                </Button>
            </div>
        </Modal>
    );
};
