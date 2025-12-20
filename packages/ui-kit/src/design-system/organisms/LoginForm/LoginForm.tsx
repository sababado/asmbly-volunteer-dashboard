
import { Input } from "@/design-system/atoms/Input/Input"
import { Button } from "@/design-system/atoms/Button/Button"
import { Mail, Sparkles } from "lucide-react"

export interface LoginFormProps {
    emailLabel: string;
    emailPlaceholder: string;
    buttonText: string;
    onSubmit?: (email: string) => void;
}

export const LoginForm = ({ emailLabel, emailPlaceholder, buttonText, onSubmit }: LoginFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const email = formData.get('email') as string
        if (onSubmit && email) {
            onSubmit(email)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-8 pt-4 pb-8">
            <div className="flex flex-col gap-1.5">
                <label className="text-foreground text-xs font-bold uppercase tracking-wider" htmlFor="email">{emailLabel}</label>
                <Input
                    id="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    type="email"
                    icon={<Mail className="h-5 w-5" />}
                />
            </div>
            <Button
                type="submit"
                variant="outline"
                className="w-full gap-2 border-border text-foreground bg-transparent hover:bg-muted/50 uppercase"
                leftIcon={<Sparkles className="h-[18px] w-[18px]" />}
            >
                <span className="truncate">{buttonText}</span>
            </Button>
        </form>
    )
}
