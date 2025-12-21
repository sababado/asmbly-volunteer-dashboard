import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { AlertTriangle } from "lucide-react";

const calloutVariants = cva(
    "rounded-lg overflow-hidden", // Base styles
    {
        variants: {
            variant: {
                info: "border-l-4 border-asmbly-yellow bg-asmbly-yellow/10 dark:bg-asmbly-yellow/5 rounded-none rounded-r pl-4 py-3 text-asmbly-navy dark:text-white",
                warning: "bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 p-5",
            },
        },
        defaultVariants: {
            variant: "info",
        },
    }
);

export interface CalloutProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
    title?: string;
    icon?: boolean;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
    ({ className, variant, title, children, icon = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(calloutVariants({ variant }), className)}
                {...props}
            >
                {variant === "warning" && (
                    <div className="flex flex-col gap-2">
                        {title && (
                            <h4 className="text-orange-800 dark:text-orange-300 font-bold font-display uppercase tracking-wide text-sm flex items-center gap-2 mb-1">
                                {icon && React.createElement(AlertTriangle as React.ElementType, { className: "size-4 fill-current" })}
                                {title}
                            </h4>
                        )}
                        <div className="text-orange-900 dark:text-orange-100/90 text-sm">
                            {children}
                        </div>
                    </div>
                )}

                {variant === "info" && (
                    <div className="font-medium">
                        {title && <span className="font-bold mr-1">{title}:</span>}
                        {children}
                    </div>
                )}
            </div>
        );
    }
);
Callout.displayName = "Callout";

// eslint-disable-next-line react-refresh/only-export-components
export { Callout, calloutVariants };
