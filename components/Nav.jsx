import Link from "next/link";
import React from 'react';
import { useSession } from 'next-auth/react';

const links = [
    {
        name: "Home",
        link: "/",
        removed_when_signed_in: false,
        removed_when_signed_out: false
    },
    {
        name: "Sign Up",
        link: "/sign_up",
        removed_when_signed_in: true,
        removed_when_signed_out: false

    },
    {
        name: "Sign In",
        link: "/sign_in",
        removed_when_signed_in: true,
        removed_when_signed_out: false
    },
    {
        name: "Notes",
        link: "/notes",
        removed_when_signed_in: false,
        removed_when_signed_out: true
    }
];

const Nav = () => {
    const { data : session } = useSession();

    // remove links depending on whether or not the user is signed in or signed out
    let renderLinks = [];
    for(let i = 0; i < links.length; i++) {
        if((session && !links[i].removed_when_signed_in) || (!session && !links[i].removed_when_signed_out)) {
            renderLinks.push(links[i]);
        } 
    }
    return (
        <>
            <div className="w-full bg-blue-300 flex ml-auto">
                {
                    renderLinks.map(({ name, link, _}) => (
                            <Link key={name} href={link} legacyBehavior>
                                <a className="p-3 hover:bg-white hover:transition ease-in-out delay-20 duration-200">
                                    {name}
                                </a>
                            </Link>
                        )
                    )
                }
            </div>
        </>
    );
};

export default Nav;