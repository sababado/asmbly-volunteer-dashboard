import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../atoms/Table/Table';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { Select } from '../../atoms/Select/Select';
import { Download, Search } from 'lucide-react';
import { Badge } from '../../atoms/Badge/Badge';

export interface VolunteerLog {
    id: string;
    date: string;
    time: string;
    title: string;
    description: string;
    area: string;
    areaIcon?: React.ReactNode;
    duration: number;
    status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface VolunteerLogsTableProps extends React.HTMLAttributes<HTMLDivElement> {
    logs: VolunteerLog[];
    onSearch?: (value: string) => void;
    onMonthChange?: (value: string) => void;
    onExport?: () => void;
    onPageChange?: (page: number) => void;
    currentPage?: number;
    totalPages?: number;
    totalRecords?: number;
}

const VolunteerLogsTable = React.forwardRef<HTMLDivElement, VolunteerLogsTableProps>(
    ({ className, logs, onSearch, onMonthChange, onExport, onPageChange, currentPage = 1, totalPages = 1, totalRecords = 0, ...props }, ref) => {

        const getStatusBadgeVariant = (status: string) => {
            switch (status) {
                case 'APPROVED': return 'accent-teal'; // Using accent-teal based on image (greenish)
                case 'PENDING': return 'secondary'; // Yellow
                case 'REJECTED': return 'accent-red';
                default: return 'default';
            }
        };

        const SearchIcon = Search as React.ElementType;
        const DownloadIcon = Download as React.ElementType;

        return (
            <div
                ref={ref}
                className={cn("bg-white dark:bg-card rounded-lg shadow-sm border border-border p-6", className)}
                {...props}
            >
                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                    <div className="flex gap-4 flex-1">
                        <div className="relative flex-1 max-w-sm">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search logs..."
                                className="pl-9"
                                onChange={(e) => onSearch?.(e.target.value)}
                            />
                        </div>
                        <div className="w-40">
                            <Select onChange={(e) => onMonthChange?.(e.target.value)}>
                                <option>This Month</option>
                                <option>Last Month</option>
                                <option>All Time</option>
                            </Select>
                        </div>
                    </div>
                    <Button variant="outline" onClick={onExport} className="gap-2">
                        <DownloadIcon className="h-4 w-4" />
                        EXPORT CSV
                    </Button>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px] uppercase text-xs font-bold text-muted-foreground">Date</TableHead>
                            <TableHead className="uppercase text-xs font-bold text-muted-foreground">Task / Activity</TableHead>
                            <TableHead className="uppercase text-xs font-bold text-muted-foreground">Area</TableHead>
                            <TableHead className="text-right uppercase text-xs font-bold text-muted-foreground">Duration</TableHead>
                            <TableHead className="text-right uppercase text-xs font-bold text-muted-foreground">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs.map((log) => (
                            <TableRow key={log.id}>
                                <TableCell className="align-top py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-asmbly-navy dark:text-gray-200">{log.date}</span>
                                        <span className="text-xs text-muted-foreground">{log.time}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="align-top py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-asmbly-navy dark:text-gray-200 uppercase">{log.title}</span>
                                        <span className="text-sm text-muted-foreground">{log.description}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="align-top py-4">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm bg-gray-100 dark:bg-gray-800 text-xs font-bold uppercase text-gray-600 dark:text-gray-300">
                                        {/* Placeholder for area icon if implemented */}
                                        {log.area}
                                    </div>
                                </TableCell>
                                <TableCell className="align-top text-right py-4">
                                    <span className="text-lg font-bold text-asmbly-navy dark:text-gray-200">{log.duration.toFixed(1)}</span>
                                    <span className="text-xs font-bold text-muted-foreground ml-1">HRS</span>
                                </TableCell>
                                <TableCell className="align-top text-right py-4">
                                    <Badge variant={getStatusBadgeVariant(log.status)} className="rounded-full px-3">
                                        {log.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Footer / Pagination */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-xs font-bold text-muted-foreground uppercase">
                        Showing {(currentPage - 1) * logs.length + 1}-{Math.min(currentPage * logs.length, totalRecords)} of {totalRecords} records
                    </span>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage <= 1}
                            onClick={() => onPageChange?.(currentPage - 1)}
                            className="bg-white"
                        >
                            PREV
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage >= totalPages}
                            onClick={() => onPageChange?.(currentPage + 1)}
                            className="bg-white"
                        >
                            NEXT
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
);
VolunteerLogsTable.displayName = "VolunteerLogsTable";

export { VolunteerLogsTable };
