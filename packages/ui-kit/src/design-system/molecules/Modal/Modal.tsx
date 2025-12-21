import * as React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../../atoms/Button/Button';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    showCloseButton?: boolean;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
    ({ className, isOpen, onClose, children, showCloseButton = true, ...props }, ref) => {
        const [isMounted, setIsMounted] = React.useState(false);

        React.useEffect(() => {
            setIsMounted(true);
        }, []);

        React.useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();
            };

            if (isOpen) {
                document.addEventListener('keydown', handleEscape);
                document.body.style.overflow = 'hidden';
            }

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = 'unset';
            };
        }, [isOpen, onClose]);

        if (!isMounted || !isOpen) return null;

        return createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-asmbly-navy/80 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                    aria-hidden="true"
                />

                {/* Content */}
                <div
                    ref={ref}
                    className={cn(
                        "relative w-full max-w-lg transform overflow-hidden rounded-lg bg-background p-6 shadow-xl transition-all sm:w-full",
                        className
                    )}
                    {...props}
                >
                    {showCloseButton && (
                        <div className="absolute right-4 top-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 rounded-full hover:bg-slate-100" // Adjust generic hover if needed
                                onClick={onClose}
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </div>
                    )}
                    {children}
                </div>
            </div>,
            document.body
        );
    }
);
Modal.displayName = "Modal";

export { Modal };
