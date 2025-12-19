import * as React from 'react';
import { cn } from '../../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    containerClassName?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, containerClassName, children, ...props }, ref) => {
        return (
            <div className={cn("relative", containerClassName)}>
                <select
                    className={cn(
                        "appearance-none w-full bg-background border border-border text-foreground text-sm focus:ring-primary focus:border-primary block py-2.5 pl-3 pr-10 outline-none cursor-pointer rounded-sm transition-colors",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-muted-foreground" />
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select };
