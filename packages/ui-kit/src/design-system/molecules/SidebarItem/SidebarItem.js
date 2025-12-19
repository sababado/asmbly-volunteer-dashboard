import * as React from 'react';
import { cn } from '../../../lib/utils';
const SidebarItem = React.forwardRef(({ className, icon: Icon, label, isActive, isCollapsed, ...props }, ref) => {
    return (<a ref={ref} className={cn("flex items-center gap-4 px-6 py-3 transition-colors border-l-4", isActive
            ? "bg-[#363a7d] border-brand-woodwork text-white"
            : "border-transparent text-gray-300 hover:bg-[#363a7d] hover:border-white/20 hover:text-white", isCollapsed && "justify-center px-2 py-3", className)} title={isCollapsed ? label : undefined} {...props}>
                <Icon className={cn("shrink-0", isActive ? "text-brand-woodwork" : "text-current")} size={24}/>
                {!isCollapsed && (<span className="text-sm font-medium uppercase tracking-wide truncate">
                        {label}
                    </span>)}
            </a>);
});
SidebarItem.displayName = "SidebarItem";
export { SidebarItem };
