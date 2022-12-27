import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const Landing = () => {
    const { data : session } = useSession();
    if(!session) {
        return (
            <>
                <div className="flex flex-col h-screen justify-center items-center">
                    <h1 className="font-semibold text-3xl">
                        Write It Down
                    </h1>
                    <p className="p-4 text-lg">
                        A simple note-taking site
                    </p>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="flex flex-col h-screen justify-center items-center">
                    <h1 className="font-semibold text-3xl">
                        Write It Down
                    </h1>
                    <p className="p-4 text-lg">
                        A simple note-taking site
                    </p>
                    <div className="flex flex-col gap-2">
                        Signed in as {session.user.name}
                        <button className="bg-blue-300 p-1 px-2 rounded-lg transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-110 hover:bg-blue-200" onClick={() => signOut()}>Sign out</button>
                    </div>
                </div>
            </>
        );
    }
};

export default Landing;