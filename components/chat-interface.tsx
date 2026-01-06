"use client"

import { useState, useEffect, useRef } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { subscribeToMessages, sendMessage, getUserProfile } from "@/lib/firebase-utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader2, User, Crown, XCircle } from "lucide-react"

interface ChatInterfaceProps {
    ticketId: string
    isAdmin?: boolean
    ticketStatus?: string
}

export function ChatInterface({ ticketId, isAdmin = false, ticketStatus = 'open' }: ChatInterfaceProps) {
    const { user } = useAuth()
    const router = useRouter()
    const [messages, setMessages] = useState<any[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [userProfiles, setUserProfiles] = useState<Record<string, { displayName: string, photoURL: string }>>({})
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const isClosed = ticketStatus === 'closed'

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
        if (!newMessage.trim() || !user || isClosed) return

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

    const handleProfileClick = () => {
        router.push('/account')
    }

    return (
        <div className="flex flex-col h-[600px] border-2 border-black dark:border-white bg-white dark:bg-black">
            {/* Closed Banner */}
            {isClosed && (
                <div className="bg-gray-100 dark:bg-gray-900 border-b-2 border-black dark:border-white p-3 flex items-center justify-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
                        This chat has been closed
                    </span>
                </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 dark:bg-zinc-950">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <p className="text-sm font-mono uppercase tracking-widest">No messages yet</p>
                    </div>
                ) : (
                    messages.map((msg) => {
                        const isMe = msg.senderId === user?.uid
                        const isMsgFromAdmin = msg.isAdmin
                        const profile = userProfiles[msg.senderId]
                        const senderName = profile?.displayName || (isMsgFromAdmin ? 'Admin' : 'User')
                        const senderPhoto = profile?.photoURL || ''

                        // SWAPPED LAYOUT: Admin on LEFT, User on RIGHT
                        const alignRight = !isMsgFromAdmin

                        return (
                            <div key={msg.id} className={`flex ${alignRight ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex flex-col ${alignRight ? 'items-end' : 'items-start'} max-w-[80%]`}>
                                    <div className={`flex items-center gap-2 mb-1 ${alignRight ? 'flex-row-reverse' : 'flex-row'}`}>
                                        {senderPhoto ? (
                                            <img
                                                src={senderPhoto}
                                                alt={senderName}
                                                onClick={handleProfileClick}
                                                className="w-6 h-6 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-black dark:hover:ring-white transition-all"
                                            />
                                        ) : (
                                            isMsgFromAdmin ? (
                                                <Crown className="w-5 h-5 text-yellow-500" />
                                            ) : (
                                                <User className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black dark:hover:text-white transition-colors" onClick={handleProfileClick} />
                                            )
                                        )}
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                                            {isMsgFromAdmin ? '👑 ' : ''}{senderName}
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                            {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '...'}
                                        </span>
                                    </div>

                                    <div className={`p-4 text-sm border-2 ${isMsgFromAdmin
                                            ? 'bg-white dark:bg-gray-900 text-black dark:text-white border-yellow-500'
                                            : 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
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
            <div className="p-4 bg-white dark:bg-black border-t-2 border-black dark:border-white">
                <form onSubmit={handleSend} className="flex gap-2">
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder={isClosed ? "Chat is closed" : "Type your message..."}
                        disabled={isClosed}
                        className="bg-gray-50 dark:bg-gray-900 border-2 border-black dark:border-white focus:border-black dark:focus:border-white rounded-none h-12 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <Button
                        type="submit"
                        disabled={loading || isClosed}
                        className="h-12 w-12 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white rounded-none shrink-0 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </Button>
                </form>
            </div>
        </div>
    )
}
