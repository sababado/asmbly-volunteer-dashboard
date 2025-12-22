import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface VolunteerMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
    unit: string;
    context: string;
    lifetimeLabel?: string;
    lifetimeValue: string | number;
    lifetimeUnit: string;
    accentColor?: string; // Hex or tailwind class, but lets use configured variants
    variant?: 'default' | 'teal'; // To match design accents
}

const VolunteerMetricCard = React.forwardRef<HTMLDivElement, VolunteerMetricCardProps>(
    ({ className, label, value, unit, context, lifetimeLabel = "LIFETIME", lifetimeValue, lifetimeUnit, variant = 'default', ...props }, ref) => {
        // variant is unused for now in this implementation details, but prop is kept for API compatibility or future use
        // To suppress unused warning without changing interface:
        void variant;

        // accentClass definition removed

        return (
            <div
                ref={ref}
                className={cn("bg-white dark:bg-card p-6 rounded-lg shadow-sm w-full flex flex-col justify-between relative overflow-hidden", className)}
                {...props}
            >
                {/* Left Accent Border - actually design shows it might be part of the card style or section. 
                    The screenshot shows a blue vertical line for "Current Impact" section, 
                    and the cards themselves are simple white boxes. 
                    But let's add a subtle left border to the card internally to distinguish types if needed, 
                    OR match exactly the screenshot where cards look plain white.
                    Let's stick to plain white for now, but well typography.
                */}

                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{label}</span>
                        <div className="mt-3 flex items-baseline gap-2">
                            <span className="text-4xl md:text-5xl font-display font-bold text-asmbly-navy leading-none">
                                {value}
                            </span>
                            <span className="text-sm font-medium text-muted-foreground uppercase">
                                {unit} <span className="opacity-70">{context}</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end text-right">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 opacity-70">
                            {lifetimeLabel}
                        </span>
                        <div className="flex items-start gap-3">
                            {/* Icon used if specific card design needs it */}

                            <div className="bg-brand-woodwork/10 p-2 rounded-full hidden"></div>
                            <span className="text-xl font-bold text-asmbly-navy">
                                {lifetimeValue}
                            </span>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                {lifetimeUnit}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
VolunteerMetricCard.displayName = "VolunteerMetricCard";

export { VolunteerMetricCard };
