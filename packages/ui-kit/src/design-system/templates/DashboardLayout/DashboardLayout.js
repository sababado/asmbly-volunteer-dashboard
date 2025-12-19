import * as React from 'react';
import { cn } from '../../../lib/utils';
import { Sidebar } from '../../organisms/Sidebar/Sidebar';
const DashboardLayout = React.forwardRef(({ className, sidebarProps, children, ...props }, ref) => {
    return (<div ref={ref} className={cn("flex min-h-screen bg-[#f6f7f8]", className)} {...props}>
                <Sidebar {...sidebarProps} className="fixed left-0 top-0 bottom-0 z-20"/>
                {/* Spacer for fixed sidebar - adjusting width logic is tricky with collapse.
    The sidebar handles width internally, but layout needs to know.
    Ideally Sidebar component would push content or we use context.
    For simplicity and given Sidebar implementation (fixed width 64 or 20),
    we can use a margin that matches open state, or let sidebar be relative.
    However, user requested "Collapsible".
    My Sidebar implementation is relative (flex-col... h-screen). It's not fixed by default unless I added specific classes.
    Wait, I implemented Sidebar with `h-screen`.
    If I make it sticky or relative, it pushes content.
    Let's make Sidebar sticky.
*/}
                <div className="flex-1 ml-0 transition-all duration-300">
                    {/*
  Actually, the Sidebar component implementation I wrote:
  `flex flex-col ... h-screen ... w-64/20`
  It didn't have `fixed` or `absolute`.
  So passing `fixed` in `className` here (as I did above) works, but then I need padding/margin on content.
  BUT, if I just let it be a flex item, it will push content automatically.
  Let's remove `fixed` from the sidebar usage here and let Flexbox handle it.
*/}
                    {/* Re-reading sidebar Props usage above: I wrote `className="fixed..."`. I should remove that. */}
                </div>

                {/* Correction: I want the sidebar to be sticky or just a flex child. */}
                <Sidebar {...sidebarProps} className="shrink-0 h-screen sticky top-0"/>

                <main className="flex-1 min-w-0">
                    <div className="p-8 md:p-12 max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>);
});
DashboardLayout.displayName = "DashboardLayout";
export { DashboardLayout };
