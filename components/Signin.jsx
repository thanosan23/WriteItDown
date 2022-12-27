import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";

const Signin = () => {
    const [ Username, setUsername ] = useState("");
    const [ Password, setPassword ] = useState("");

    const handleClick = async () => {
        await signIn("credentials", {
            username: Username,
            password: Password
        });
        window.location.href = '/';
    };  

    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                <h1 className="font-semibold text-3xl">
                    Sign In
                </h1>
                <div>
                    <div>
                        <div className="py-2 flex flex-col gap-2">
                            <label>Username:</label>
                            <input type="text" id="username" name="username" className="bg-gray-50 border p-1 w-full z-20 rounded-l-lg focus:outline-none px-6" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} required></input>
                            <label>Password:</label>
                            <input type="password" id="password" name="password" className="bg-gray-50 border p-1 w-full z-20 rounded-l-lg focus:outline-none px-6" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required></input>                
                        </div>
                        <button type="submit" onClick={handleClick} className="bg-blue-300 p-1 px-2 rounded-lg transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-110 hover:bg-blue-200">Submit</button>
                    </div>
                    <p className="pt-4">
                        Don't have an account? Sign up <Link href="/sign_up" className="text-blue-600">here</Link>.
                    </p>
                </div>
            </div>

        </>
    );
};


export default Signin;