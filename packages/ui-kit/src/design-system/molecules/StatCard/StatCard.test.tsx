import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatCard } from './StatCard';
import { Timer } from 'lucide-react';

describe('StatCard', () => {
    it('renders value and label', () => {
        render(<StatCard icon={Timer} value="10" label="Hours" />);
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('Hours')).toBeInTheDocument();
    });
});
