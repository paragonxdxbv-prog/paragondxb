"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { addTicket, sendMessage, subscribeToMessages, findOpenTicket } from "@/lib/firebase-utils"

export function GlobalChat() {
    const { user } = useAuth()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [ticketId, setTicketId] = useState<string | null>(null)
    const [messages, setMessages] = useState<any[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [initializing, setInitializing] = useState(false)

    // Load active ticket or create one when chat opens
    useEffect(() => {
        if (isOpen && user) {
            loadChat()
        }
    }, [isOpen, user])

    // Subscribe to messages when ticketId is set
    useEffect(() => {
        if (ticketId) {
            const unsubscribe = subscribeToMessages(ticketId, (msgs) => {
                setMessages(msgs)
            })
            return () => unsubscribe()
        }
    }, [ticketId])

    const loadChat = async () => {
        if (!user) return
        setInitializing(true)
        try {
            // Check for existing open general inquiry
            const existingTicketId = await findOpenTicket(user.uid)

            if (existingTicketId) {
                setTicketId(existingTicketId)
            } else {
                // Create new ticket if none exists (only when they send first message? 
                // Or create upfront? Let's create upfront for simplicity of this widget)
                // Actually, creating upfront might create empty tickets. 
                // Better: Wait for first message? 
                // For MVP, checking existing is good. If no existing, we wait for first message to create.
            }
        } catch (error) {
            console.error("Error loading chat:", error)
        } finally {
            setInitializing(false)
        }
    }

    const handleSend = async () => {
        if (!newMessage.trim() || !user) return

        setLoading(true)
        try {
            let currentTicketId = ticketId

            if (!currentTicketId) {
                // Create first ticket
                currentTicketId = await addTicket({
                    type: 'general_inquiry',
                    subject: `Chat with ${user.displayName}`,
                    userName: user.displayName,
                    userEmail: user.email,
                    userId: user.uid,
                    description: "General Inquiry initiated from Global Chat"
                })
                setTicketId(currentTicketId)
            }

            await sendMessage(currentTicketId, newMessage, user.uid)
            setNewMessage("")
        } catch (error) {
            console.error("Error sending message:", error)
        } finally {
            setLoading(false)
        }
    }

    if (!user) {
        if (!isOpen) return (
            <Button
                onClick={() => router.push("/login")}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center border-2 border-white dark:border-black"
            >
                <MessageSquare className="w-6 h-6" />
            </Button>
        )
        return null // Or show a "Login to Chat" tooltip? Simple redirect on click is fine for now.
    }

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center border-2 border-white dark:border-black"
                >
                    <MessageSquare className="w-6 h-6" />
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-black border border-black dark:border-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-black dark:bg-white text-white dark:text-black">
                        <h3 className="font-bold tracking-widest uppercase text-sm">CONCIERGE</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-zinc-950">
                        {initializing ? (
                            <div className="flex justify-center py-10">
                                <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                            </div>
                        ) : messages.length === 0 ? (
                            <p className="text-center text-gray-400 text-xs mt-10 font-mono">
                                Start a conversation with us. We'll reply as soon as possible.
                            </p>
                        ) : (
                            messages.map((msg) => {
                                const isMe = msg.senderId === user.uid
                                return (
                                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] p-3 text-sm ${isMe
                                                ? 'bg-black dark:bg-white text-white dark:text-black rounded-tl-lg rounded-bl-lg rounded-br-lg'
                                                : 'bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-tr-lg rounded-br-lg rounded-bl-lg'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="flex gap-2"
                        >
                            <Input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white rounded-none"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={loading}
                                className="bg-black dark:bg-white text-white dark:text-black rounded-none shrink-0"
                            >
                                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            </Button>
                        </form>
                    </div>

                </div>
            )}
        </>
    )
}
