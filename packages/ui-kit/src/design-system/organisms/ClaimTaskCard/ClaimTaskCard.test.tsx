import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ClaimTaskCard } from './ClaimTaskCard';

describe('ClaimTaskCard', () => {
    it('renders status and stats', () => {
        render(<ClaimTaskCard status="Open" estTime="10m" points="100 XP" />);
        expect(screen.getByText('Open')).toBeInTheDocument();
        expect(screen.getByText('10m')).toBeInTheDocument();
        expect(screen.getByText('100 XP')).toBeInTheDocument();
    });

    it('handles claim action', () => {
        const handleClaim = vi.fn();
        render(<ClaimTaskCard estTime="" points="" onClaim={handleClaim} />);
        fireEvent.click(screen.getByText('Claim Task'));
        expect(handleClaim).toHaveBeenCalled();
    });

    it('disables complete button when not claimed', () => {
        render(<ClaimTaskCard estTime="" points="" isClaimed={false} />);
        const btn = screen.getByText('Mark as Complete').closest('button');
        expect(btn).toBeDisabled();
    });

    it('enables complete button when claimed', () => {
        const handleComplete = vi.fn();
        render(<ClaimTaskCard estTime="" points="" isClaimed={true} onComplete={handleComplete} />);
        const btn = screen.getByText('Mark as Complete').closest('button');
        expect(btn).not.toBeDisabled();
        fireEvent.click(btn!);
        expect(handleComplete).toHaveBeenCalled();
    });
});
