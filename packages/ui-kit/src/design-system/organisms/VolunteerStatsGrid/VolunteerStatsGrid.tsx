import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface VolunteerStatsGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const VolunteerStatsGrid = React.forwardRef<HTMLDivElement, VolunteerStatsGridProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
VolunteerStatsGrid.displayName = "VolunteerStatsGrid";

export { VolunteerStatsGrid };
