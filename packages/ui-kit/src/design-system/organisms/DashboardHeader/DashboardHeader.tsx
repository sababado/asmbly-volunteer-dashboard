import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface DashboardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle: string;
}

const DashboardHeader = React.forwardRef<HTMLDivElement, DashboardHeaderProps>(
    ({ className, title, subtitle, ...props }, ref) => {
        return (
            <header
                ref={ref}
                className={cn("flex flex-col gap-3 pb-4 border-b border-border", className)}
                {...props}
            >
                <h1 className="text-3xl md:text-5xl font-display font-bold text-primary uppercase">
                    {title}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl font-light">
                    {subtitle}
                </p>
            </header>
        );
    }
);
DashboardHeader.displayName = "DashboardHeader";

export { DashboardHeader };
