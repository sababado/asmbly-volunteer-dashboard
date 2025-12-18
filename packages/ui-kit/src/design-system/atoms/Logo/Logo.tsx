import * as React from "react"
import { cn } from "@/lib/utils"
import { Grid } from "lucide-react"

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> { }

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("mb-6 text-white p-3 bg-white/10 rounded-sm inline-flex", className)}
                {...props}
            >
                <Grid className="h-10 w-10 text-white" />
            </div>
        )
    }
)
Logo.displayName = "Logo"

export { Logo }
