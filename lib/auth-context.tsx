"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
    User,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut as firebaseSignOut
} from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "./firebase"

interface AuthContextType {
    user: User | null
    loading: boolean
    signInWithGoogle: () => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signInWithGoogle: async () => { },
    logout: async () => { },
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Sync user to Firestore
                try {
                    await setDoc(doc(db, "users", user.uid), {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        lastSeen: serverTimestamp(),
                        // Only set createdAt if it doesn't exist (handled by merge if we wanted, but simple setDoc overwrite is fine for lastSeen update,
                        // but we might want to preserve createdAt. Let's use setDoc with merge: true)
                    }, { merge: true })
                } catch (error) {
                    console.error("Error syncing user to Firestore:", error)
                }
            }
            setUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error("Error signing in with Google", error)
            throw error
        }
    }

    const logout = async () => {
        try {
            await firebaseSignOut(auth)
        } catch (error) {
            console.error("Error signing out", error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
