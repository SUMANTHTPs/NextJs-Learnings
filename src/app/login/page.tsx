"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })

    const [loading, setLoading] = React.useState(false)
    const [disabled, setDisabled] = React.useState(true)
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("api/users/login", user)
            console.log("Login success", response.data)
            toast.success("Login success")
            router.push("/profile")
        } catch (error: any) {
            console.log("Login failed", error.message)
            toast.error("Login failed")
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [user])
    return (
        <section className="form">
            <h1 className="text-center text-4xl my-4">Login</h1>
            <label htmlFor="email">email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            <button type="submit" className="submit-btn" disabled={disabled} onClick={onLogin}>Login</button>
            <Link className="underline text-center" href="/signup">New user sign up here</Link>
        </section>
    )
}