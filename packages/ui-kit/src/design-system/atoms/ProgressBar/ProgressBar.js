import * as React from 'react';
import { cn } from '../../../lib/utils';
import { cva } from 'class-variance-authority';
const progressBarVariants = cva("h-3 transition-all duration-300", {
    variants: {
        variant: {
            default: "bg-brand-purple",
            secondary: "bg-brand-woodwork",
            "accent-teal": "bg-brand-teal",
            "accent-red": "bg-brand-laser",
        },
    },
    defaultVariants: {
        variant: "secondary",
    },
});
const ProgressBar = React.forwardRef(({ className, variant, value, max = 100, ...props }, ref) => {
    const percentage = Math.min((value / max) * 100, 100);
    return (<div ref={ref} className={cn("w-full bg-black/20 h-3 overflow-hidden rounded-[1px]", className)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} {...props}>
                <div className={cn(progressBarVariants({ variant }))} style={{ width: `${percentage}%` }}/>
            </div>);
});
ProgressBar.displayName = "ProgressBar";
export { ProgressBar, progressBarVariants };
