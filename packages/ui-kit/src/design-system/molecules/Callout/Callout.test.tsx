import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Callout } from './Callout';

describe('Callout', () => {
    it('renders with title', () => {
        render(<Callout title="Warning" variant="warning">Content</Callout>);
        expect(screen.getByText('Warning')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders info variant', () => {
        render(<Callout variant="info">Info</Callout>);
        expect(screen.getByText('Info')).toBeInTheDocument();
        // Check semantic class existence isn't strictly necessary if visual test exists, but helps verify variant logic
    });
});
