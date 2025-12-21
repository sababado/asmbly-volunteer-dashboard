import * as React from "react";
import { cn } from "../../../lib/utils";
import { MessageSquare } from "lucide-react";

export interface ReporterCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    role: string;
    avatarSrc?: string;
    onChatClick?: () => void;
}

const ReporterCard = React.forwardRef<HTMLDivElement, ReporterCardProps>(
    ({ className, name, role, avatarSrc, onChatClick, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-white dark:bg-card rounded-2xl p-6 border border-border shadow-sm",
                    className
                )}
                {...props}
            >
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 font-display">
                    Reported By
                </p>
                <div className="flex items-center gap-4">
                    {avatarSrc && (
                        <div
                            className="size-12 rounded-full bg-cover bg-center ring-2 ring-border"
                            style={{ backgroundImage: `url('${avatarSrc}')` }}
                            role="img"
                            aria-label={`Profile picture of ${name}`}
                        />
                    )}
                    <div>
                        <p className="text-foreground font-bold text-lg font-display">{name}</p>
                        <p className="text-muted-foreground text-sm">{role}</p>
                    </div>
                    <button
                        onClick={onChatClick}
                        className="ml-auto p-2.5 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted border border-transparent hover:border-border"
                        aria-label="Chat with reporter"
                    >
                        {React.createElement(MessageSquare as React.ElementType, { className: "size-5" })}
                    </button>
                </div>
            </div>
        );
    }
);
ReporterCard.displayName = "ReporterCard";

export { ReporterCard };
