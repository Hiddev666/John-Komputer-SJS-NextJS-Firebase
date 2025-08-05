'use client'

import { auth } from "@/app/config/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

export const useAuthState = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user || null)
            setLoading(false)
        })
    }, [])

    return {user, loading}
}
