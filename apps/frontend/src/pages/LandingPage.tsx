import { AuthPage } from "@voldash/ui-kit"
import { useNavigate } from "react-router-dom"
import { AlertTriangle } from "lucide-react"

export const LandingPage = () => {
    const navigate = useNavigate()

    const handleLogin = (email: string) => {
        console.log("Login with email:", email)
        // For prototype, navigate directly to dashboard
        navigate("/dashboard")
    }

    const handleSocialLogin = () => {
        console.log("Social Login clicked")
        navigate("/dashboard")
    }

    const handleTroubleLoggingIn = () => {
        console.log("Trouble logging in clicked")
        navigate("/dashboard")
    }

    const handleBecomeMember = () => {
        window.location.href = "https://asmbly.org/join/"
    }

    const AlertIcon = AlertTriangle as React.ElementType

    const devBanner = (
        <div className="bg-asmbly-orange text-white px-4 py-2 text-center text-sm font-bold flex items-center justify-center gap-2">
            <AlertIcon className="h-4 w-4" />
            <span>Development in Progress — Not real data</span>
        </div>
    )

    return (
        <AuthPage
            onLogin={handleLogin}
            onSocialLogin={handleSocialLogin}
            onTroubleLoggingIn={handleTroubleLoggingIn}
            onBecomeMember={handleBecomeMember}
            banner={devBanner}
        />
    )
}
