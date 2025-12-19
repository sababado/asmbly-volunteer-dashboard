import * as React from "react";
import { cn } from "../../../lib/utils";
import { HelpCircle, ArrowRight } from "lucide-react";

export interface AssistanceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    onActionClick?: () => void;
    actionText?: string;
    helpChannel?: string;
}

const AssistanceCard = React.forwardRef<HTMLDivElement, AssistanceCardProps>(
    ({ className, onActionClick, actionText = "View Repair Manual", helpChannel = "#woodshop-help", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-asmbly-navy dark:bg-asmbly-navy-dark rounded-2xl p-6 text-white shadow-lg relative overflow-hidden",
                    className
                )}
                {...props}
            >
                <div className="absolute -right-6 -top-6 size-24 bg-white/5 rounded-full blur-xl" />
                <div className="flex gap-4 relative z-10">
                    <div className="mt-1">
                        <HelpCircle className="size-8 text-asmbly-yellow" />
                    </div>
                    <div>
                        <p className="font-bold font-display text-lg mb-2">Need assistance?</p>
                        <p className="text-blue-100/80 text-sm leading-relaxed mb-4">
                            If you're unsure about the procedure, please contact the on-duty supervisor or post in{" "}
                            <span className="font-mono text-xs bg-black/30 px-1.5 py-0.5 rounded text-asmbly-teal border border-white/10">
                                {helpChannel}
                            </span>
                            .
                        </p>
                        <button
                            onClick={onActionClick}
                            className="text-asmbly-yellow hover:text-white text-sm font-bold font-display uppercase tracking-wide hover:underline transition-colors flex items-center gap-1"
                        >
                            {actionText}
                            <ArrowRight className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
);
AssistanceCard.displayName = "AssistanceCard";

export { AssistanceCard };
