"use client";

import Link from "next/link";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";

export default function SignUpPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
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
            <button type="submit" className="submit-btn">Login</button>
            <Link className="underline text-center" href="/login">Already user login here</Link>
        </section>
    )
}