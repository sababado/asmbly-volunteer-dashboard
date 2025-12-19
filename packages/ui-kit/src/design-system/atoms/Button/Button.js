import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
const Button = React.forwardRef(({ className, variant = "default", size = "default", isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-display uppercase tracking-wide";
    const variants = {
        default: "bg-asmbly-navy text-white hover:bg-asmbly-navy/90",
        destructive: "bg-brand-lasers text-white hover:bg-brand-lasers/90",
        outline: "border border-slate-300 dark:border-blue-400/30 text-slate-700 dark:text-blue-100 bg-transparent hover:bg-white/5",
        secondary: "bg-brand-metal text-white hover:bg-brand-metal/80",
        ghost: "hover:bg-slate-100 dark:hover:bg-slate-800",
        link: "text-asmbly-teal underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-asmbly-orange to-asmbly-yellow text-asmbly-navy hover:opacity-90",
        "asmbly-yellow": "bg-asmbly-yellow hover:bg-[#edd046] text-asmbly-navy shadow-md hover:shadow-glow font-bold",
    };
    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 px-5 text-base",
        icon: "h-10 w-10",
    };
    return (<button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} disabled={isLoading || props.disabled} {...props}>
                {isLoading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin"/>) : (<>
                        {leftIcon && <span className="mr-2">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="ml-2">{rightIcon}</span>}
                    </>)}
            </button>);
});
Button.displayName = "Button";
export { Button };
