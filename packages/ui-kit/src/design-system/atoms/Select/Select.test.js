import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Select } from './Select';
describe('Select', () => {
    it('renders correctly', () => {
        render(<Select>
                <option>Option 1</option>
            </Select>);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
});
