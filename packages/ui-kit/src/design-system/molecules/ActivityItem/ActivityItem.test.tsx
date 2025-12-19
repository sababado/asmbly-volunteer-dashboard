import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ActivityItem } from './ActivityItem';

describe('ActivityItem', () => {
    it('renders user content', () => {
        render(<ActivityItem authorName="User" timestamp="1h">Hello</ActivityItem>);
        expect(screen.getByText('User')).toBeInTheDocument();
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
});
