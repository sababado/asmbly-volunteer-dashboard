import * as React from "react"
import { Logo } from "../../atoms/Logo/Logo"
// import { Lock } from "lucide-react"

export interface AuthCardProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    footer?: React.ReactNode;
}

export const AuthCard = ({ children, title, subtitle, footer }: AuthCardProps) => {
    return (
        <div className="w-full max-w-[440px] bg-card border-0 dark:border dark:border-border rounded-none shadow-2xl overflow-hidden flex flex-col relative group">
            <div className="h-1.5 w-full btn-gradient"></div>
            <div className="p-8 pb-6 flex flex-col items-center text-center">
                <Logo />
                <h1 className="text-foreground tracking-tight text-3xl font-display font-bold leading-tight mb-2">{title}</h1>
                {subtitle && (
                    <p className="text-muted-foreground text-sm font-normal leading-relaxed max-w-xs mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className="w-full">
                {children}
            </div>
            {footer && (
                <div className="bg-muted p-4 text-center border-t border-border text-muted-foreground">
                    {footer}
                </div>
            )}
        </div>
    )
}
