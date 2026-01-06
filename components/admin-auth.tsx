"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Loader2 } from 'lucide-react'

interface AdminAuthProps {
  children?: React.ReactNode
}

const ADMIN_EMAIL = 'paragonxdxbv@gmail.com'

export function AdminAuth({ children }: AdminAuthProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      // Not logged in at all
      setRedirecting(true)
      router.push('/login')
    } else if (!loading && user && user.email !== ADMIN_EMAIL) {
      // Logged in but not admin
      setRedirecting(true)
      setTimeout(() => {
        router.push('/home')
      }, 15000)
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-sm font-mono tracking-widest uppercase">LOADING...</p>
        </div>
      </div>
    )
  }

  // Not logged in - redirect to login
  if (!user) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-sm font-mono tracking-widest uppercase">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  // Logged in but not admin
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex items-center justify-center">
        <div className="max-w-md text-center p-8 border-2 border-red-600">
          <h1 className="text-2xl font-black tracking-tighter uppercase mb-4 text-red-600">
            HELLO
          </h1>
          <p className="text-sm uppercase tracking-wider mb-6">
            This is the admin page. You do not have permits to access this.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            You will be redirected back to the home page in 15 seconds...
          </p>
        </div>
      </div>
    )
  }

  // User is admin - show content
  return <>{children}</>
}
