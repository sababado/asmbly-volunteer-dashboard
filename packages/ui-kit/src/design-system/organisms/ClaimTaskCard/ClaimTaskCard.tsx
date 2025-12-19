import * as React from "react";
import { cn } from "../../../lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface ClaimTaskCardProps extends React.HTMLAttributes<HTMLDivElement> {
    status?: string;
    estTime: string;
    points: string;
    onClaim?: () => void;
    onComplete?: () => void;
    isClaimed?: boolean;
}

const ClaimTaskCard = React.forwardRef<HTMLDivElement, ClaimTaskCardProps>(
    ({ className, status = "Unclaimed", estTime, points, onClaim, onComplete, isClaimed = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-white dark:bg-card rounded-2xl border border-border shadow-lg overflow-hidden relative",
                    className
                )}
                {...props}
            >
                {/* Header */}
                <div className="bg-muted px-6 py-3 flex justify-between items-center border-b border-border">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-display">
                        Status
                    </p>
                    <div className="flex items-center gap-2">
                        {!isClaimed && (
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asmbly-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-asmbly-blue"></span>
                            </span>
                        )}
                        <span className="text-sm font-bold text-foreground font-display uppercase tracking-wider">
                            {status}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="mb-6 space-y-2">
                        <div className="flex items-baseline justify-between">
                            <span className="text-muted-foreground text-sm">Est. Time</span>
                            <span className="font-bold text-foreground font-display text-lg">
                                {estTime}
                            </span>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <span className="text-muted-foreground text-sm">Points</span>
                            <span className="font-bold text-asmbly-teal font-display text-lg">
                                {points}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={onClaim}
                            className="w-full flex items-center justify-center gap-2 bg-asmbly-yellow hover:bg-asmbly-yellow-hover text-asmbly-navy font-display font-bold text-sm uppercase tracking-wider py-4 px-4 rounded transition-all active:scale-[0.98] shadow-md shadow-asmbly-yellow/20"
                        >
                            <span>Claim Task</span>
                            <ArrowRight className="size-5" />
                        </button>
                        <button
                            onClick={onComplete}
                            disabled={!isClaimed} // Assuming disabled if not claimed, per HTML example it was disabled
                            className="w-full flex items-center justify-center gap-2 bg-muted text-muted-foreground font-display font-bold text-sm uppercase tracking-wider py-4 px-4 rounded cursor-not-allowed border border-transparent disabled:opacity-70"
                        >
                            <CheckCircle2 className="size-5" />
                            <span>Mark as Complete</span>
                        </button>
                    </div>
                </div>
                {/* Footer (Synced) removed per instruction */}
            </div>
        );
    }
);
ClaimTaskCard.displayName = "ClaimTaskCard";

export { ClaimTaskCard };
