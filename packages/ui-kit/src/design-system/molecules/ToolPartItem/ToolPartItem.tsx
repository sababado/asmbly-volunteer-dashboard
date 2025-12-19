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
                    "flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5",
                    className
                )}
                {...props}
            >
                <div className="bg-white dark:bg-white/10 p-2 rounded-lg shadow-sm">
                    <Icon className="size-5 text-slate-500 dark:text-slate-300" />
                </div>
                <div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm">{name}</p>
                    <p
                        className={cn(
                            "text-xs",
                            detailColor === "default" && "text-slate-500 dark:text-slate-400",
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
