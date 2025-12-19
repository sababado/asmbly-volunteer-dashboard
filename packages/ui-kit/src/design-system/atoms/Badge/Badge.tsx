import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const badgeVariants = cva(
    "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-muted text-muted-foreground hover:bg-muted/80",
                primary: "bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                "accent-teal": "bg-asmbly-teal text-white hover:bg-asmbly-teal/80", // Keeping brand for specific accents
                "accent-red": "bg-destructive/10 text-destructive hover:bg-destructive/20",
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

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants };
