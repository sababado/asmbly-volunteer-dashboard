import * as React from "react"
import { AuthCard } from "@/design-system/organisms/AuthCard/AuthCard"
import { LoginForm } from "@/design-system/organisms/LoginForm/LoginForm"
import { SocialLoginButton } from "@/design-system/molecules/SocialLoginButton/SocialLoginButton"
import { AuthDivider } from "@/design-system/molecules/AuthDivider/AuthDivider"

export const AuthPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-slate-900 dark:text-white min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-asmbly-navy/90 to-background-dark/95 z-10"></div>
            </div>

            {/* Top colored bar */}
            <div className="absolute top-0 left-0 w-full h-2 z-20 flex">
                <div className="h-full w-1/4 bg-asmbly-teal"></div>
                <div className="h-full w-1/4 bg-[#3d4585]"></div>
                <div className="h-full w-1/4 bg-asmbly-orange"></div>
                <div className="h-full w-1/4 bg-asmbly-yellow"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-1 flex-col items-center justify-center p-4">
                <AuthCard>
                    <div className="px-8 pb-4">
                        <SocialLoginButton />
                    </div>
                    <AuthDivider />
                    <LoginForm />
                </AuthCard>
                <p className="mt-6 text-white/40 text-xs text-center">
                    © Asmbly Makerspace. All rights reserved.
                </p>
            </div>
        </div>
    )
}
