"use client"

import React, { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
    const { user, signInWithGoogle, loading } = useAuth()
    const router = useRouter()
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Help user identify the domain to authorize
    React.useEffect(() => {
        console.log("------------------------------------------------")
        console.log("CURRENT DOMAIN TO AUTHORIZE IN FIREBASE:", window.location.hostname)
        console.log("------------------------------------------------")
    }, [])

    // Redirect if already logged in
    if (!loading && user) {
        router.push("/account")
        return null
    }

    const handleGoogleSignIn = async () => {
        setIsSigningIn(true)
        setError(null)
        try {
            await signInWithGoogle()
        } catch (error: any) {
            console.error("Login failed", error)
            // Handle common Firebase Auth errors
            if (error?.code === 'auth/unauthorized-domain') {
                setError("Domain not authorized. Admin: Add this domain to Firebase Console.")
            } else if (error?.code === 'auth/popup-closed-by-user') {
                setError("Sign-in cancelled.")
            } else {
                setError(error?.message || "Failed to sign in. Please try again.")
            }
        } finally {
            setIsSigningIn(false)
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
            {/* Navigation */}
            <nav className="p-6 relative z-10">
                <Link
                    href="/home"
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-widest hover:opacity-70 transition-opacity"
                >
                    <ArrowLeft className="w-4 h-4" />
                    BACK TO HOME
                </Link>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 -mt-20">
                <div className="w-full max-w-md space-y-12 text-center">

                    {/* Logo / Brand */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
                            PARAGON<span className="text-red-600">DXB</span>
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 font-mono text-sm tracking-wide">
                            JOIN THE EXCLUSIVE CIRCLE
                        </p>
                    </div>

                    {/* Login Actions */}
                    <div className="space-y-6">
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={isSigningIn || loading}
                            className="w-full bg-black dark:bg-white text-white dark:text-black py-4 font-bold tracking-widest hover:bg-red-600 dark:hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isSigningIn ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 4.6c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                            )}
                            {isSigningIn ? "CONNECTING..." : "CONTINUE WITH GOOGLE"}
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-200 dark:border-gray-800" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-black px-2 text-gray-400">
                                    Secure Access
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 dark:text-gray-500 max-w-xs mx-auto">
                            By continuing, you agree to our Terms of Service.
                            We only use essential data for your account.
                        </p>

                        {error && (
                            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-center">
                                <p className="text-xs text-red-600 dark:text-red-400 font-mono">
                                    {error}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="p-6 text-center">
                <p className="text-[10px] text-gray-300 dark:text-gray-700 font-mono">
                    SECURED BY FIREBASE AUTHENTICATION
                </p>
            </footer>
        </div>
    )
}
