"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Loader2, LogOut, MessageSquare, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { subscribeToUserTickets, addTicket } from "@/lib/firebase-utils"
import { ChatInterface } from "@/components/chat-interface"
import { Input } from "@/components/ui/input"

export default function AccountPage() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()
    const [isPageLoaded, setIsPageLoaded] = useState(false)
    const [tickets, setTickets] = useState<any[]>([])
    const [selectedTicket, setSelectedTicket] = useState<any | null>(null)
    const [searchTicket, setSearchTicket] = useState("")
    const [creatingTicket, setCreatingTicket] = useState(false)

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login")
        } else {
            setTimeout(() => setIsPageLoaded(true), 100)
        }
    }, [user, loading, router])

    useEffect(() => {
        if (user) {
            const unsubscribe = subscribeToUserTickets(user.uid, (data) => {
                setTickets(data)
                // If we have a selected ticket, update it with new data
                if (selectedTicket) {
                    const updated = data.find(t => t.id === selectedTicket.id)
                    if (updated) setSelectedTicket(updated)
                }
            })
            return () => unsubscribe()
        }
    }, [user, selectedTicket])

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <Loader2 className="w-8 h-8 animate-spin text-black dark:text-white" />
            </div>
        )
    }

    // Filter tickets based on search
    const filteredTickets = tickets.filter(t =>
        t.subject?.toLowerCase().includes(searchTicket.toLowerCase()) ||
        t.productName?.toLowerCase().includes(searchTicket.toLowerCase()) ||
        t.type?.toLowerCase().includes(searchTicket.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex flex-col">
            <Navigation isPageLoaded={isPageLoaded} currentPage="account" />

            <main className={`container mx-auto px-6 py-8 flex-1 flex flex-col transition-all duration-700 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
                    <div>
                        <h1 className="text-3xl font-black tracking-tighter mb-2">MY ACCOUNT</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">WELCOME BACK, {user.displayName?.toUpperCase()}</p>
                    </div>
                    <Button
                        onClick={() => logout()}
                        variant="outline"
                        className="mt-4 md:mt-0 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        LOG OUT
                    </Button>
                </div>

                {/* User Profile Card */}
                <div className="bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-gray-800 p-6 mb-6">
                    <h2 className="text-xl font-bold tracking-wider uppercase mb-4">PROFILE INFORMATION</h2>
                    <div className="flex items-center gap-4">
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt={user.displayName || "User"}
                                className="w-16 h-16 rounded-full border-2 border-black dark:border-white object-cover"
                            />
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-black dark:bg-white border-2 border-black dark:border-white flex items-center justify-center">
                                <span className="text-white dark:text-black font-bold text-2xl">
                                    {user.displayName?.charAt(0) || "U"}
                                </span>
                            </div>
                        )}
                        <div>
                            <p className="font-bold text-lg">{user.displayName || "User"}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Chat / Ticket Layout */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[600px]">

                    {/* Sidebar List */}
                    <div className="md:col-span-1 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-4 flex flex-col">
                        <div className="mb-4">
                            <Button
                                onClick={async () => {
                                    setCreatingTicket(true)
                                    try {
                                        const ticketId = await addTicket({
                                            userId: user.uid,
                                            userEmail: user.email,
                                            userName: user.displayName || user.email,
                                            subject: 'General Support Inquiry',
                                            type: 'general_inquiry',
                                            productName: null,
                                            productId: null
                                        })
                                        alert('New ticket created successfully!')
                                    } catch (error) {
                                        console.error('Error creating ticket:', error)
                                        alert('Failed to create ticket. Please try again.')
                                    } finally {
                                        setCreatingTicket(false)
                                    }
                                }}
                                disabled={creatingTicket}
                                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 mb-3"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                {creatingTicket ? 'CREATING...' : 'CREATE NEW TICKET'}
                            </Button>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Search orders & tickets..."
                                    value={searchTicket}
                                    onChange={(e) => setSearchTicket(e.target.value)}
                                    className="pl-9 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 overflow-y-auto flex-1 max-h-[600px]">
                            {filteredTickets.length > 0 ? (
                                filteredTickets.map(ticket => (
                                    <div
                                        key={ticket.id}
                                        onClick={() => setSelectedTicket(ticket)}
                                        className={`p-4 border cursor-pointer transition-colors ${selectedTicket?.id === ticket.id
                                            ? "border-black dark:border-white bg-white dark:bg-gray-900"
                                            : "border-transparent hover:bg-white dark:hover:bg-gray-900 border-b-gray-200 dark:border-b-gray-800"
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-bold text-sm tracking-wide line-clamp-1">
                                                {ticket.type === 'order_request' ? ticket.productName : ticket.subject}
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                {ticket.lastMessageAt?.seconds ? new Date(ticket.lastMessageAt.seconds * 1000).toLocaleDateString() : 'New'}
                                            </span>
                                        </div>
                                        <p className="text-xs font-mono text-gray-500 mb-2 truncate">
                                            {ticket.lastMessage || 'No messages yet'}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {ticket.status}
                                            </span>
                                            {ticket.type === 'order_request' ? (
                                                <span className="text-[10px] bg-black dark:bg-white text-white dark:text-black px-1 font-bold">ORDER</span>
                                            ) : (
                                                <span className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-1 font-bold">SUPPORT</span>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-400 text-xs">NO TICKETS FOUND</p>
                                    <Button
                                        onClick={() => router.push('/products')}
                                        variant="link"
                                        className="text-xs text-black dark:text-white underline mt-2"
                                    >
                                        BROWSE PRODUCTS
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="md:col-span-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex flex-col shadow-sm">
                        {selectedTicket ? (
                            <div className="flex flex-col h-full h-[600px]">
                                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-zinc-950">
                                    <div>
                                        <h3 className="font-bold tracking-widest uppercase text-sm">
                                            {selectedTicket.type === 'order_request' ? `ORDER: ${selectedTicket.productName}` : selectedTicket.subject}
                                        </h3>
                                        <p className="text-xs text-gray-500">ID: {selectedTicket.id.slice(0, 8)}</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setSelectedTicket(null)}
                                        className="md:hidden"
                                    >
                                        CLOSE
                                    </Button>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <ChatInterface ticketId={selectedTicket.id} isAdmin={false} />
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full h-[600px] text-gray-400 bg-gray-50/50 dark:bg-black/50">
                                <div className="text-center p-6">
                                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p className="text-sm tracking-widest uppercase mb-2">SELECT A TICKET TO VIEW CHAT</p>
                                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                                        Select an existing order or support ticket from the left to view messages and updates.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    )
}
