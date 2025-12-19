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
                <div className="absolute -left-[23px] top-0 size-4 bg-background rounded-full border-4 border-border group-hover:border-asmbly-teal transition-colors" />

                <div className="flex items-start gap-4">
                    {/* Avatar / Icon */}
                    {variant === "user" && avatarSrc ? (
                        <div
                            className="size-10 rounded-full bg-muted bg-cover bg-center shrink-0 ring-2 ring-background"
                            style={{ backgroundImage: `url('${avatarSrc}')` }}
                            role="img"
                            aria-label={`Avatar of ${authorName}`}
                        />
                    ) : (
                        <div className="size-10 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 shrink-0 ring-2 ring-background">
                            <Icon className="size-5" />
                        </div>
                    )}

                    {/* Content Bubble */}
                    <div className="bg-muted/50 p-4 rounded-xl rounded-tl-none border border-border flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <p className="text-sm font-bold text-foreground font-display">
                                {authorName}
                            </p>
                            <span className="text-xs font-medium text-muted-foreground bg-background px-2 py-0.5 rounded-full border border-border">
                                {timestamp}
                            </span>
                        </div>
                        <div className="text-sm text-foreground/80">
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
