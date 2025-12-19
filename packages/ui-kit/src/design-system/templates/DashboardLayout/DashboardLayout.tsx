import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Sidebar, SidebarProps } from '../../organisms/Sidebar/Sidebar';

export interface DashboardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    sidebarProps: SidebarProps;
}

const DashboardLayout = React.forwardRef<HTMLDivElement, DashboardLayoutProps>(
    ({ className, sidebarProps, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex min-h-screen bg-[#f6f7f8]", className)}
                {...props}
            >
                <Sidebar {...sidebarProps} className="shrink-0 h-screen sticky top-0" />

                <main className="flex-1 min-w-0">
                    <div className="p-8 md:p-12 max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        );
    }
);
DashboardLayout.displayName = "DashboardLayout";

export { DashboardLayout };
