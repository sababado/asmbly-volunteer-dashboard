import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ReporterCard } from './ReporterCard';

describe('ReporterCard', () => {
    it('renders reporter info', () => {
        render(<ReporterCard name="Reporter" role="Role" />);
        expect(screen.getByText('Reporter')).toBeInTheDocument();
        expect(screen.getByText('Role')).toBeInTheDocument();
    });

    it('calls onChatClick', () => {
        const handleClick = vi.fn();
        render(<ReporterCard name="Reporter" role="Role" onChatClick={handleClick} />);
        fireEvent.click(screen.getByLabelText('Chat with reporter'));
        expect(handleClick).toHaveBeenCalled();
    });
});
