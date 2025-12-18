import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, ...props }, ref) => {
        return (
            <div className="relative group/input w-full">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-blue-300/50 group-focus-within/input:text-asmbly-teal transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-11 w-full rounded-sm border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-[#1a1f42] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:border-asmbly-teal focus:ring-1 focus:ring-asmbly-teal disabled:cursor-not-allowed disabled:opacity-50 text-slate-900 dark:text-white dark:placeholder-blue-300/30 transition-all font-medium",
                        icon ? "pl-10" : "",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
