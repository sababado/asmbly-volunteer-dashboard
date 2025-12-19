import * as React from "react";
import { Button } from "../../atoms/Button/Button";
import { CreditCard } from "lucide-react";
export const SocialLoginButton = ({ children, ...props }) => {
    return (<Button variant="asmbly-yellow" className="w-full gap-3" leftIcon={<CreditCard className="h-6 w-6"/>} {...props}>
            <span className="truncate uppercase text-sm">{children}</span>
        </Button>);
};
