import * as React from 'react';
import { cn } from '../../../lib/utils';
import { SidebarItem, SidebarItemProps } from '../../molecules/SidebarItem/SidebarItem';
import { Logo } from '../../atoms/Logo/Logo';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    items: Omit<SidebarItemProps, 'isCollapsed'>[];
    activePath?: string;
    onLogout?: () => void;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
    ({ className, items, activePath, onLogout, ...props }, ref) => {
        const [isCollapsed, setIsCollapsed] = React.useState(false);

        const toggleSidebar = () => setIsCollapsed(!isCollapsed);

        return (
            <aside
                ref={ref}
                className={cn(
                    "flex flex-col bg-brand-purple border-r border-gray-200 transition-all duration-300 shadow-xl z-20 h-screen",
                    isCollapsed ? "w-20" : "w-64",
                    className
                )}
                {...props}
            >
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col">
                        <div className={cn("flex items-center p-6 bg-[#242656]", isCollapsed ? "justify-center p-4" : "gap-3")}>
                            <Logo className="size-10 bg-white p-1 rounded-sm shrink-0 text-brand-purple" />
                            {!isCollapsed && (
                                <div className="flex flex-col overflow-hidden">
                                    <h1 className="text-white font-display text-lg font-bold leading-tight tracking-wide uppercase truncate">Asmbly</h1>
                                    <p className="text-gray-300 text-xs font-normal truncate">Volunteer Portal</p>
                                </div>
                            )}
                        </div>

                        <nav className="flex flex-col mt-4">
                            {items.map((item) => (
                                <SidebarItem
                                    key={item.label}
                                    {...item}
                                    isActive={activePath === item.href}
                                    isCollapsed={isCollapsed}
                                />
                            ))}
                        </nav>
                    </div>

                    <div className="p-4 border-t border-[#343b6a] flex flex-col gap-2">
                        <button
                            onClick={toggleSidebar}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded text-gray-300 hover:bg-[#363a7d] transition-colors w-full",
                                isCollapsed && "justify-center"
                            )}
                            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                        >
                            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                            {!isCollapsed && <span className="text-sm font-medium uppercase tracking-wide">Collapse</span>}
                        </button>

                        <button
                            onClick={onLogout}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded text-gray-300 hover:bg-[#363a7d] transition-colors w-full",
                                isCollapsed && "justify-center"
                            )}
                            title="Log Out"
                        >
                            <LogOut size={20} />
                            {!isCollapsed && <span className="text-sm font-medium uppercase tracking-wide">Log Out</span>}
                        </button>
                    </div>
                </div>
            </aside>
        );
    }
);
Sidebar.displayName = "Sidebar";

export { Sidebar };
