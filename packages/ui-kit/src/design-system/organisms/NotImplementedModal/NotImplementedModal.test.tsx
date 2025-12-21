import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NotImplementedModal } from './NotImplementedModal';

describe('NotImplementedModal', () => {
    it('renders correctly when open', () => {
        render(<NotImplementedModal isOpen={true} onClose={() => { }} />);
        expect(screen.getByText('Not Yet Implemented')).toBeInTheDocument();
        expect(screen.getByText('Got It')).toBeInTheDocument();
    });

    it('calls onClose when button is clicked', () => {
        const onClose = vi.fn();
        render(<NotImplementedModal isOpen={true} onClose={onClose} />);

        fireEvent.click(screen.getByText('Got It'));
        expect(onClose).toHaveBeenCalled();
    });
});
