"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { addTicket } from "@/lib/firebase-utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Loader2, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"

interface RequestOrderModalProps {
    isOpen: boolean
    onClose: () => void
    productName: string
    productId: string
}

export function RequestOrderModal({ isOpen, onClose, productName, productId }: RequestOrderModalProps) {
    const { user } = useAuth()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        extraInfo: ""
    })

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.displayName || "",
                email: user.email || ""
            }))
        }
    }, [user])

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await addTicket({
                type: 'order_request',
                subject: `Order Request: ${productName}`,
                productId,
                productName,
                userName: formData.name,
                userEmail: formData.email,
                description: formData.extraInfo,
                userId: user?.uid || 'guest', // handle guest later or force login
            })

            onClose()
            router.push("/account") // Redirect to dashboard to see ticket
        } catch (error) {
            console.error("Error creating ticket:", error)
            alert("Failed to submit request. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-2xl animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="text-xl font-bold tracking-widest uppercase text-black dark:text-white">
                        REQUEST ORDER
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    {/* Product Info */}
                    <div className="text-sm font-mono text-gray-500 dark:text-gray-400">
                        ITEM: <span className="text-black dark:text-white font-bold">{productName}</span>
                    </div>

                    {/* Warning Message */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 p-4 flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 shrink-0" />
                        <p className="text-xs text-yellow-800 dark:text-yellow-200 font-mono leading-relaxed">
                            <strong>NOTE:</strong> The owner is busy. He will be with you once he is free. It can take up to 48h.
                        </p>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-500 dark:text-gray-400">
                                YOUR NAME
                            </label>
                            <Input
                                required
                                value={formData.name}
                                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-black dark:focus:border-white rounded-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-500 dark:text-gray-400">
                                YOUR EMAIL
                            </label>
                            <Input
                                required
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-black dark:focus:border-white rounded-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-500 dark:text-gray-400">
                                ADDITIONAL NOTES (OPTIONAL)
                            </label>
                            <Textarea
                                value={formData.extraInfo}
                                onChange={e => setFormData(prev => ({ ...prev, extraInfo: e.target.value }))}
                                placeholder="Any specific requirements?"
                                className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:ring-0 focus:border-black dark:focus:border-white rounded-none min-h-[100px]"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white transition-all font-bold tracking-widest uppercase py-6 rounded-none text-sm group"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            "START PRIVATE CHAT"
                        )}
                    </Button>

                </form>
            </div>
        </div>
    )
}
