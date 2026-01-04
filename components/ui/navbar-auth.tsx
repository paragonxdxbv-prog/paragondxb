"use client"

import { useAuth } from "@/lib/auth-context"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User, LogOut, Ticket, Settings, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function NavbarAuth() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        await logout()
        router.refresh()
    }

    if (loading) {
        return <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
    }

    if (!user) {
        return (
            <div className="flex items-center gap-4">
                <Link href="/login">
                    <Button variant="ghost" className="font-bold tracking-widest text-xs hover:bg-transparent hover:text-red-500 transition-colors">
                        LOGIN
                    </Button>
                </Link>
                <Link href="/login">
                    <Button className="bg-black dark:bg-white text-white dark:text-black font-bold tracking-widest text-xs hover:bg-red-600 dark:hover:bg-red-600 transition-colors rounded-none px-6">
                        SIGN UP
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-700">
                        <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                        <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold">
                            {user.displayName?.charAt(0) || "U"}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white dark:bg-black border border-gray-200 dark:border-gray-800" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none text-black dark:text-white">{user.displayName}</p>
                        <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
                <DropdownMenuItem asChild className="focus:bg-gray-100 dark:focus:bg-gray-900 cursor-pointer">
                    <Link href="/account" className="flex w-full items-center text-black dark:text-white">
                        <User className="mr-2 h-4 w-4" />
                        <span>MY ACCOUNT</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-gray-100 dark:focus:bg-gray-900 cursor-pointer">
                    <Link href="/account" className="flex w-full items-center text-black dark:text-white">
                        <Ticket className="mr-2 h-4 w-4" />
                        <span>SUPPORT TICKETS</span>
                    </Link>
                </DropdownMenuItem>

                {/* Only show Admin Panel link if specific email - temporary check until proper role auth */}
                {user.email === "paragondxb@gmail.com" && (
                    <DropdownMenuItem asChild className="focus:bg-gray-100 dark:focus:bg-gray-900 cursor-pointer">
                        <Link href="/admin" className="flex w-full items-center text-red-600 font-bold">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>ADMIN PANEL</span>
                        </Link>
                    </DropdownMenuItem>
                )}

                <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:bg-red-50 dark:focus:bg-red-950 focus:text-red-600 cursor-pointer"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>LOG OUT</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
