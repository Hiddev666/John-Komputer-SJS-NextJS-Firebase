'use client'

import { useRouter } from "next/navigation"
import Navbar from "./components/Navbar"
import Table from "./components/Table"
import { useAuthState } from "./hooks/authHook"

const Admin = () => {

    const {user, loading} = useAuthState()
    const router = useRouter()

    if(loading) return <p>Loading</p>
    if(!user) {
        router.push("/auth/login")
        return null
    }

    return (
        <div className="font-sans p-10">
            <Navbar />
            <h1 className="text-3xl font-semibold mt-5">Admin Panel</h1>
            <Table />
        </div>
    )
}

export default Admin
