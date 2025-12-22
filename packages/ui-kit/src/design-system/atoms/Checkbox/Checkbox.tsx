import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "../../../lib/utils"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, ...props }, ref) => {
        // Cast Check to React.ElementType to avoid TS errors
        const CheckIcon = Check as React.ElementType;

        return (
            <div className="relative inline-flex items-center justify-center align-middle">
                <input
                    type="checkbox"
                    className={cn(
                        "peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-background checked:bg-primary checked:text-primary-foreground transition-colors cursor-pointer",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <CheckIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary-foreground pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
        )
    }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
