"use client";

import Link from "next/link";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    return (
        <section className="form">
            <h1 className="text-center text-4xl my-4">Login</h1>
            <label htmlFor="email">email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            <button type="submit" className="submit-btn">Login</button>
            <Link className="underline text-center" href="/signup">New user sign up here</Link>
        </section>
    )
}