import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('renders correctly', () => {
        render(<Checkbox data-testid="checkbox" />);
        const checkbox = screen.getByTestId('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).toHaveAttribute('type', 'checkbox');
    });

    it('can be checked and unchecked', () => {
        const handleChange = vi.fn();
        render(<Checkbox onChange={handleChange} />);
        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(2);
        expect(checkbox).not.toBeChecked();
    });

    it('renders disabled state', () => {
        render(<Checkbox disabled />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });
});
