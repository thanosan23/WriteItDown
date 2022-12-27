import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const Note = () => {
    const { data : session } = useSession();

    const [state, setState] = useState("");
    const [note, setNote] = useState([]);
    
    const createNote = () => {
        window.location.href = '/create_note';
    };

    const deleteNote = async (id) => {
        await axios.post('/api/deleteNote', {
            data: {
                id: id,
                user: session.user.name
            }
        });
        window.location.href = '/notes';
    }

    const getNote = () => {
        setState("loading");
        if(session) {
            axios.post('/api/getNotes', {
                data: {
                    name: session.user.name,
                }
            }).then((res) => {
                setState("success");
                setNote(res.data);
            }).catch((err) => {
                setState("error");
            })
        } else {
            setState("error");
        }
    }

    useEffect(() => {
        getNote();
    }, [session]);


    if(session) {
        if(state != "error") {
            return (
                <>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="pt-5 font-semibold text-3xl">
                            Notes
                        </h1>
                    </div>
                    <div className="flex flex-row p-5 gap-8 flex-wrap">
                        {state == "loading"? (
                            <h1>Loading...</h1>
                        ) : (
                                note.map((n) => (
                                    <div key={n.id} className="flex flex-col bg-blue-200 p-5 rounded">
                                        <p className="font-bold text-lg">
                                            { n.title }
                                        </p>
                                        <p className="text-base">
                                            { n.note}
                                        </p>

                                        <div className="pt-4">
                                            <button onClick={() => deleteNote(n.id)} className="bg-red-500 text-white p-1.5 rounded text-sm  transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-110 hover:bg-red-400">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    
                                ))
                            )
                        }
                    </div>
                    {state == "success"&&
                        <div className="px-5">
                            <button className="bg-blue-300 p-5 rounded-lg hover:bg-blue-200 transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-110 hover:bg-blue-200" onClick={createNote}>
                                +
                            </button>
                        </div>
                    }
                </>
            );
        }
    }
};

export default Note;