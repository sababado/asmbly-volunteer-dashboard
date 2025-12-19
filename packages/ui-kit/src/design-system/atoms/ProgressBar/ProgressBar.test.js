import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from './ProgressBar';
describe('ProgressBar', () => {
    it('renders with correct role', () => {
        render(<ProgressBar value={50}/>);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
    it('displays correct aria values', () => {
        render(<ProgressBar value={75} max={100}/>);
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveAttribute('aria-valuenow', '75');
        expect(progress).toHaveAttribute('aria-valuemax', '100');
    });
});
