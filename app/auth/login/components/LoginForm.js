'use client'

import Image from "next/image"
import { useState } from "react"
import { login } from "@/app/utils/auth"
import { useRouter } from "next/navigation"

const LoginForm = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const router = useRouter()

    const loginHandler = async () => {
        try {
            await login(email, password)
            router.push("/admin")
        } catch (error) {
            alert("Email atau Password Salah")
        }
    }

    return (
        <div className="w-1/2">
            <Image
                width={180}
                height={100}
                alt="Logo"
                src={"/logo-dark.svg"}
            />
            <form action={loginHandler} className="flex flex-col gap-3 mt-5">
                <div className="flex flex-col w-full">
                    <label>Email</label>
                    <input type="email" onInput={(e) => setEmail(e.target.value)} name="email" className="p-2 border-1 border-gray-600 rounded w-full" placeholder="ex: john@gmail.com" />
                </div>
                <div className="flex flex-col w-full">
                    <label>Password</label>
                    <input type="password" onInput={(e) => setPassword(e.target.value)} name="password" className="p-2 border-1 border-gray-600 rounded w-full" placeholder="******" />
                </div>
                <div className="flex flex-col w-full">
                    <button type="submit" className="w-full bg-blue-800 p-2 rounded-md text-white font-semibold">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
