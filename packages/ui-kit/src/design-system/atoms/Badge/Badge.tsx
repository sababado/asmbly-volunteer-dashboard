import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const badgeVariants = cva(
    "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-gray-100 text-slate-600 hover:bg-gray-200",
                primary: "bg-brand-purple text-white hover:bg-brand-purple/80",
                secondary: "bg-brand-woodwork text-yellow-900 hover:bg-brand-woodwork/80",
                "accent-teal": "bg-brand-teal text-white hover:bg-brand-teal/80",
                "accent-red": "bg-brand-laser/10 text-brand-laser hover:bg-brand-laser/20",
                outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
