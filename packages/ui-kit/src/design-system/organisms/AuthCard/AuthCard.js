import * as React from "react";
import { Logo } from "@/design-system/atoms/Logo/Logo";
export const AuthCard = ({ children, title, subtitle, footer }) => {
    return (<div className="w-full max-w-[440px] bg-white dark:bg-surface-dark border-0 dark:border dark:border-border-dark rounded-none shadow-2xl overflow-hidden flex flex-col relative group">
            <div className="h-1.5 w-full btn-gradient"></div>
            <div className="p-8 pb-6 flex flex-col items-center text-center">
                <Logo />
                <h1 className="text-asmbly-navy dark:text-white tracking-tight text-3xl font-display font-bold leading-tight mb-2">{title}</h1>
                {subtitle && (<p className="text-slate-500 dark:text-blue-200 text-sm font-normal leading-relaxed max-w-xs mx-auto">
                        {subtitle}
                    </p>)}
            </div>
            <div className="w-full">
                {children}
            </div>
            {footer && (<div className="bg-slate-50 dark:bg-[#151936] p-4 text-center border-t border-slate-200 dark:border-border-dark text-slate-500 dark:text-blue-300">
                    {footer}
                </div>)}
        </div>);
};
