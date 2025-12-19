import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ActivityFeed } from './ActivityFeed';
import { ActivityItem } from '../../molecules/ActivityItem/ActivityItem';

describe('ActivityFeed', () => {
    it('renders title and items', () => {
        render(
            <ActivityFeed title="Updates">
                <ActivityItem authorName="User" timestamp="1m">Update</ActivityItem>
            </ActivityFeed>
        );
        expect(screen.getByText('Updates')).toBeInTheDocument();
        expect(screen.getByText('Update')).toBeInTheDocument();
    });
});
