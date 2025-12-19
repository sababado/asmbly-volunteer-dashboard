
import { Input } from "@/design-system/atoms/Input/Input"
import { Button } from "@/design-system/atoms/Button/Button"
import { Mail, Sparkles } from "lucide-react"

export interface LoginFormProps {
    emailLabel: string;
    emailPlaceholder: string;
    buttonText: string;
}

export const LoginForm = ({ emailLabel, emailPlaceholder, buttonText }: LoginFormProps) => {
    return (
        <div className="flex flex-col gap-5 px-8 pt-4 pb-8">
            <div className="flex flex-col gap-1.5">
                <label className="text-slate-700 dark:text-blue-100 text-xs font-bold uppercase tracking-wider" htmlFor="email">{emailLabel}</label>
                <Input
                    id="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    type="email"
                    icon={<Mail className="h-5 w-5" />}
                />
            </div>
            <Button
                variant="outline"
                className="w-full gap-2 border-slate-300 dark:border-blue-400/30 text-slate-700 dark:text-blue-100 bg-transparent hover:bg-white/5 uppercase"
                leftIcon={<Sparkles className="h-[18px] w-[18px]" />}
            >
                <span className="truncate">{buttonText}</span>
            </Button>
        </div>
    )
}
