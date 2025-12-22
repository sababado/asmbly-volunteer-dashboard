import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from './Table';

describe('Table', () => {
    it('renders with all subcomponents', () => {
        render(
            <Table>
                <TableCaption>Test Caption</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Header 1</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Cell 1</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>Footer 1</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        );

        expect(screen.getByText('Test Caption')).toBeInTheDocument();
        expect(screen.getByText('Header 1')).toBeInTheDocument();
        expect(screen.getByText('Cell 1')).toBeInTheDocument();
        expect(screen.getByText('Footer 1')).toBeInTheDocument();
        expect(screen.getByRole('table')).toBeInTheDocument();
    });
});
