import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ToolPartItem } from './ToolPartItem';
import { Wrench } from 'lucide-react';

describe('ToolPartItem', () => {
    it('renders correctly', () => {
        render(<ToolPartItem icon={Wrench} name="Wrench" detail="Detail" />);
        expect(screen.getByText('Wrench')).toBeInTheDocument();
        expect(screen.getByText('Detail')).toBeInTheDocument();
    });
});
