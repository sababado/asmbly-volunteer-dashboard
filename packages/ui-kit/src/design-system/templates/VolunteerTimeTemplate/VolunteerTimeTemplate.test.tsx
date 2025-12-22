import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VolunteerTimeTemplate } from './VolunteerTimeTemplate';

describe('VolunteerTimeTemplate', () => {
    it('renders all slots', () => {
        render(
            <VolunteerTimeTemplate
                header={<div>Header</div>}
                stats={<div>Stats</div>}
                logs={<div>Logs</div>}
            />
        );
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Stats')).toBeInTheDocument();
        expect(screen.getByText('Logs')).toBeInTheDocument();
    });
});
