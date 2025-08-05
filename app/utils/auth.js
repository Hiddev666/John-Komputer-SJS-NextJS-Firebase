import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../config/firebase"
import { useRouter } from "next/router"

export const login = async (email, password) => {
    try {
        return signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error.message)
    }
}

export const checkAuth = async () => {
    const router = useRouter()
    try {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user) return user
            else router.push("/auth/login")
        })
    } catch (error) {
        console.log(error.message)
    }
}
