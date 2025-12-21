import * as React from "react";
import { cn } from "../../../lib/utils";
import { Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ToolPartListProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    icon?: LucideIcon;
}

const ToolPartList = React.forwardRef<HTMLDivElement, ToolPartListProps>(
    ({ className, title = "Tools & Parts", icon: Icon = Wrench, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-white dark:bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col h-full",
                    className
                )}
                {...props}
            >
                <h3 className="text-lg font-display font-bold text-asmbly-navy dark:text-white mb-5 flex items-center gap-3">
                    {React.createElement(Icon as any, { className: "size-6 text-asmbly-teal" })}
                    {title}
                </h3>
                <div className="flex flex-col gap-3 flex-1">
                    {children}
                </div>
            </div>
        );
    }
);
ToolPartList.displayName = "ToolPartList";

export { ToolPartList };
