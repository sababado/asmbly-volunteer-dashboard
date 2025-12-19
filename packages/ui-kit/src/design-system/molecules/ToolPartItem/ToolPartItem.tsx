import * as React from "react";
import { cn } from "../../../lib/utils";
import { LucideIcon } from "lucide-react";

export interface ToolPartItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: LucideIcon;
    name: string;
    detail: string;
    detailColor?: "default" | "teal";
}

const ToolPartItem = React.forwardRef<HTMLDivElement, ToolPartItemProps>(
    ({ className, icon: Icon, name, detail, detailColor = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center gap-4 p-3 rounded-xl bg-card border border-border",
                    className
                )}
                {...props}
            >
                <div className="bg-background dark:bg-muted p-2 rounded-lg shadow-sm">
                    <Icon className="size-5 text-muted-foreground" />
                </div>
                <div>
                    <p className="text-foreground font-bold text-sm">{name}</p>
                    <p
                        className={cn(
                            "text-xs",
                            detailColor === "default" && "text-muted-foreground",
                            detailColor === "teal" && "text-asmbly-teal font-bold uppercase tracking-wide"
                        )}
                    >
                        {detail}
                    </p>
                </div>
            </div>
        );
    }
);
ToolPartItem.displayName = "ToolPartItem";

export { ToolPartItem };
