import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AssistanceCard } from './AssistanceCard';

describe('AssistanceCard', () => {
    it('renders correctly', () => {
        render(<AssistanceCard helpChannel="#test-channel" actionText="Do Action" />);
        expect(screen.getByText(/#test-channel/)).toBeInTheDocument();
        expect(screen.getByText('Do Action')).toBeInTheDocument();
    });
});
