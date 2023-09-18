"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUpPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: '',
    })

    const [loading, setLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const onSubmit = async () => {
        try {
            setLoading(true)
            const response = await axios.post("api/users/signup", user);
            console.log("User data ", response.data)
            router.push("/login")

        } catch (error: any) {
            console.log("Signup failed ", error.message)

            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="form">
            <h1 className="text-center text-4xl my-4">Sign In</h1>
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={user.username} placeholder="Enter the user name" onChange={handleChange} />
            <label htmlFor="email">email</label>
            <input type="email" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} />
            <button type="submit" className="submit-btn" onClick={onSubmit}>Sign In</button>
            <Link className="underline text-center" href="/login">Already user login here</Link>
        </section>
    )
}