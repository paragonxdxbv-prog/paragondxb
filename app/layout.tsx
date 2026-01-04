import type { Metadata } from 'next'
import { AuthProvider } from "@/lib/auth-context"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ParagonDXB | Premium Automotive & Digital Assets",
  description: "Exclusive automotive content, digital assets, and premium merchandise.",
}

import { GlobalChat } from "@/components/global-chat"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black antialiased selection:bg-red-500 selection:text-white`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
            {children}
            <GlobalChat />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
