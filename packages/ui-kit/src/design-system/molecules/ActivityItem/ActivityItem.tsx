import * as React from "react";
import { cn } from "../../../lib/utils";
import { LucideIcon, Bot } from "lucide-react";

export interface ActivityItemProps extends React.HTMLAttributes<HTMLDivElement> {
    authorName: string;
    timestamp: string;
    avatarSrc?: string;
    icon?: LucideIcon;
    variant?: "user" | "system";
    isLast?: boolean; // Prop to potentially handle line ending, though CSS might be enough
}

const ActivityItem = React.forwardRef<HTMLDivElement, ActivityItemProps>(
    ({ className, authorName, timestamp, avatarSrc, icon: Icon = Bot, variant = "user", children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("relative group", className)} {...props}>
                {/* Timeline Dot */}
                <div className="absolute -left-[23px] top-0 size-4 bg-white dark:bg-asmbly-navy rounded-full border-4 border-slate-200 dark:border-slate-700 group-hover:border-asmbly-teal transition-colors" />

                <div className="flex items-start gap-4">
                    {/* Avatar / Icon */}
                    {variant === "user" && avatarSrc ? (
                        <div
                            className="size-10 rounded-full bg-slate-200 bg-cover bg-center shrink-0 ring-2 ring-white dark:ring-white/10"
                            style={{ backgroundImage: `url('${avatarSrc}')` }}
                            role="img"
                            aria-label={`Avatar of ${authorName}`}
                        />
                    ) : (
                        <div className="size-10 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 shrink-0 ring-2 ring-white dark:ring-white/10">
                            <Icon className="size-5" />
                        </div>
                    )}

                    {/* Content Bubble */}
                    <div className="bg-slate-50 dark:bg-card p-4 rounded-xl rounded-tl-none border border-slate-100 dark:border-white/5 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <p className="text-sm font-bold text-asmbly-navy dark:text-white font-display">
                                {authorName}
                            </p>
                            <span className="text-xs font-medium text-slate-400 bg-white dark:bg-black/20 px-2 py-0.5 rounded-full border border-slate-100 dark:border-white/5">
                                {timestamp}
                            </span>
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
ActivityItem.displayName = "ActivityItem";

export { ActivityItem };
