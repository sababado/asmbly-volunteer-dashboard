import * as React from 'react';
import { cn } from '../../../lib/utils';
import { LucideIcon } from 'lucide-react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: LucideIcon;
    value: string | number;
    label: string;
    variant?: 'primary' | 'secondary' | 'accent-teal' | 'accent-red';
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
    ({ className, icon: Icon, value, label, variant = 'primary', ...props }, ref) => {
        const iconBgClass = {
            primary: 'bg-white/10 text-white',
            secondary: 'bg-white/10 text-brand-woodwork',
            'accent-teal': 'bg-white/10 text-brand-textiles',
            'accent-red': 'bg-white/10 text-brand-lasers',
        }[variant];

        return (
            <div
                ref={ref}
                className={cn("flex items-center gap-5", className)}
                {...props}
            >
                <div className={cn("size-14 flex items-center justify-center shrink-0 rounded-sm", iconBgClass)}>
                    <Icon size={28} />
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl font-display font-bold text-white leading-none">
                        {value}
                    </span>
                    <span className="text-xs text-gray-300 font-bold uppercase tracking-widest mt-1">
                        {label}
                    </span>
                </div>
            </div>
        );
    }
);
StatCard.displayName = "StatCard";

export { StatCard };
