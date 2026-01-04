"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Loader2, Package, Ticket, LogOut, MessageSquare, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { subscribeToUserTickets } from "@/lib/firebase-utils"
import { ChatInterface } from "@/components/chat-interface"

export default function AccountPage() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()
    const [isPageLoaded, setIsPageLoaded] = useState(false)
    const [tickets, setTickets] = useState<any[]>([])
    const [selectedTicket, setSelectedTicket] = useState<any | null>(null)

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
            })
            return () => unsubscribe()
        }
    }, [user])

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <Loader2 className="w-8 h-8 animate-spin text-black dark:text-white" />
            </div>
        )
    }

    const orderTickets = tickets.filter(t => t.type === 'order_request')
    const supportTickets = tickets.filter(t => t.type === 'general_inquiry')

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono">
            <Navigation isPageLoaded={isPageLoaded} currentPage="account" />

            <main className={`container mx-auto px-6 py-24 transition-all duration-700 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
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

                {/* Chat Modal / View */}
                {selectedTicket && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <div className="w-full max-w-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-2xl flex flex-col max-h-[80vh]">
                            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                                <h3 className="font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" />
                                    {selectedTicket.subject}
                                </h3>
                                <button onClick={() => setSelectedTicket(null)} className="text-gray-500 hover:text-black dark:hover:text-white">
                                    CLOSE
                                </button>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <ChatInterface ticketId={selectedTicket.id} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Orders Section */}
                    <div className="border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-black">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-black dark:bg-white text-white dark:text-black">
                                <Package className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold tracking-widest">ORDER HISTORY</h2>
                        </div>

                        {orderTickets.length > 0 ? (
                            <div className="space-y-4">
                                {orderTickets.map(ticket => (
                                    <div key={ticket.id} className="border border-gray-200 dark:border-gray-700 p-4 hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer" onClick={() => setSelectedTicket(ticket)}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-bold text-sm tracking-wide">{ticket.productName}</span>
                                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {ticket.status}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-2">{ticket.subject}</p>
                                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                                            <span>{ticket.createdAt?.seconds ? new Date(ticket.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}</span>
                                            {ticket.lastMessage && <span>• {ticket.lastMessage.substring(0, 30)}...</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 border-2 border-dashed border-gray-200 dark:border-gray-800">
                                <p className="text-gray-400 dark:text-gray-600 text-sm mb-4">NO ORDERS YET</p>
                                <Button onClick={() => router.push('/products')} variant="outline" className="text-xs tracking-widest">
                                    START BROWSING
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Support Tickets Section */}
                    <div className="border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-black">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-black dark:bg-white text-white dark:text-black">
                                <Ticket className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold tracking-widest">SUPPORT TICKETS</h2>
                        </div>

                        {supportTickets.length > 0 ? (
                            <div className="space-y-4">
                                {supportTickets.map(ticket => (
                                    <div key={ticket.id} className="border border-gray-200 dark:border-gray-700 p-4 hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer" onClick={() => setSelectedTicket(ticket)}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-bold text-sm tracking-wide">{ticket.subject}</span>
                                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {ticket.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                                            <span>{ticket.createdAt?.seconds ? new Date(ticket.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 border-2 border-dashed border-gray-200 dark:border-gray-800">
                                <p className="text-gray-400 dark:text-gray-600 text-sm mb-4">NO ACTIVE TICKETS</p>
                                {/* We could open a new ticket modal here, but for now specific general inq flow is via global chat */}
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    )
}
