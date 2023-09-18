"use client";

import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/navigation"
import React from "react"

export default function ProfilePage() {
    const router = useRouter()

    const [user, setUser] = React.useState({
        username: "",
        _id: ""
    });
    const logout = async () => {
        try {
            const response = await axios.get("/api/users/logout");
            console.log(response)
            router.push("/login")

        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getUserProfile = async () => {
        const res = await axios.get("api/users/me");
        setUser(res.data.data)
    }

    React.useEffect(() => {
        getUserProfile();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 >Profile</h1>
            <Link href={`profile/${user._id}`}>
                <h2>Welcome {user.username}</h2>
            </Link>
            <button type="button" onClick={logout} className="submit-btn">Logout</button>
        </div>
    )
}