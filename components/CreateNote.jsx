import React, { useState } from 'react';
import Error from 'next/error';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const createNote = () => {
    const { data : session } = useSession();

    const [ title, setTitle ] = useState("");
    const [ note, setNote ] = useState("");

    const handleClick = async () => {
        await axios.post("/api/addNote", {
            user: session.user.name,
            title: title,
            note: note
        });
        window.location.href = '/notes';
    };

    if(session) {
        return (
            <>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="pt-5 font-semibold text-3xl">
                        Create Note
                    </h1>
                    <div>
                        <div className="py-2 flex flex-col gap-2">
                            <label>Title:</label>
                            <input type="text" id="title" name="title" className="bg-gray-50 border p-1 w-full z-20 rounded-lg focus:outline-none px-6" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} required></input>
                            <label>Note:</label>
                            <textarea className="bg-gray-50 border p-1 w-full z-20 rounded-lg focus:outline-none px-6" placeholder="Note" onChange={(e) => { setNote(e.target.value) }} required></textarea>
                        </div>
                        <button type="submit" onClick = {handleClick} className="bg-blue-300 p-1 px-2 rounded-lg  transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-110 hover:bg-blue-200">Create</button>
                    </div>
                </div>
            </>
        );
    }
};

export default createNote;