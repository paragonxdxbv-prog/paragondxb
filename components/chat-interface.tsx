"use client"

import { useState, useEffect, useRef } from "react"
import { useAuth } from "@/lib/auth-context"
import { subscribeToMessages, sendMessage, getUserProfile } from "@/lib/firebase-utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader2, User, Shield } from "lucide-react"

interface ChatInterfaceProps {
    ticketId: string
    isAdmin?: boolean
}

export function ChatInterface({ ticketId, isAdmin = false }: ChatInterfaceProps) {
    const { user } = useAuth()
    const [messages, setMessages] = useState<any[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [userProfiles, setUserProfiles] = useState<Record<string, { displayName: string, photoURL: string }>>({})
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const unsubscribe = subscribeToMessages(ticketId, async (msgs) => {
            setMessages(msgs)

            // Fetch user profiles for senders we don't have yet
            const newSenderIds = msgs
                .map(m => m.senderId)
                .filter((id, index, self) => id && self.indexOf(id) === index && !userProfiles[id])

            if (newSenderIds.length > 0) {
                const profiles: Record<string, { displayName: string, photoURL: string }> = {}
                for (const senderId of newSenderIds) {
                    try {
                        const userDoc = await getUserProfile(senderId)
                        if (userDoc) {
                            profiles[senderId] = {
                                displayName: userDoc.displayName || userDoc.email || 'User',
                                photoURL: userDoc.photoURL || ''
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching user profile:', error)
                        profiles[senderId] = { displayName: 'User', photoURL: '' }
                    }
                }
                setUserProfiles(prev => ({ ...prev, ...profiles }))
            }
        })
        return () => unsubscribe()
    }, [ticketId, userProfiles])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim() || !user) return

        setLoading(true)
        try {
            await sendMessage(ticketId, newMessage, user.uid, isAdmin)
            setNewMessage("")
        } catch (error) {
            console.error("Error sending message:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-[600px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 dark:bg-zinc-950">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <p className="text-sm font-mono uppercase tracking-widest">No messages yet</p>
                    </div>
                ) : (
                    messages.map((msg) => {
                        const isMe = msg.senderId === user?.uid
                        // If isAdmin is true (viewer is Admin), 'isMe' logic holds (Admin sent it).
                        // But visually we might want to distinguish User vs Admin more clearly.
                        // Using 'msg.isAdmin' flag from message data is better if available (we added it to sendMessage).
                        const isMsgFromAdmin = msg.isAdmin

                        const profile = userProfiles[msg.senderId]
                        const senderName = profile?.displayName || (isMsgFromAdmin ? 'Admin' : 'User')
                        const senderPhoto = profile?.photoURL || ''

                        return (
                            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[80%]`}>
                                    <div className={`flex items-center gap-2 mb-1`}>
                                        {senderPhoto ? (
                                            <img
                                                src={senderPhoto}
                                                alt={senderName}
                                                className="w-5 h-5 rounded-full object-cover"
                                            />
                                        ) : (
                                            isMsgFromAdmin ? (
                                                <Shield className="w-4 h-4 text-red-500" />
                                            ) : (
                                                <User className="w-4 h-4 text-gray-500" />
                                            )
                                        )}
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                                            {senderName}
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                            {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '...'}
                                        </span>
                                    </div>

                                    <div className={`p-4 text-sm ${isMe
                                        ? 'bg-black dark:bg-white text-white dark:text-black'
                                        : 'bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
                <form onSubmit={handleSend} className="flex gap-2">
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white rounded-none h-12"
                    />
                    <Button
                        type="submit"
                        disabled={loading}
                        className="h-12 w-12 bg-black dark:bg-white text-white dark:text-black rounded-none shrink-0"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </Button>
                </form>
            </div>
        </div>
    )
}
