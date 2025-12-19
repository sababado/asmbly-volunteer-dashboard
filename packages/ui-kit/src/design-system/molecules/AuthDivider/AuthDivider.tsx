
import { cn } from "@/lib/utils"

export const AuthDivider = ({ className }: { className?: string }) => {
    return (
        <div className={cn("px-8 py-2 flex items-center justify-center gap-3", className)}>
            <div className="h-px bg-border flex-1"></div>
            <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider whitespace-nowrap">or</span>
            <div className="h-px bg-border flex-1"></div>
        </div>
    )
}
