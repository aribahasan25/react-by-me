import { useState } from "react";


const Note = () => {

    const [note,setNote] = useState("");
    const [notes,setNotes] = useState([]);


    function AddNote(){

        if(note === "") return;

        setNotes([
            ...notes,
            note
        ]);

        setNote("");

    }


    let noteList = [];

    for(let i=0;i<notes.length;i++){

        noteList.push(

            <div 
            key={i}
            className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
            >

                <li className="list-none text-gray-700">
                    {notes[i]}
                </li>


                <button
                className="text-red-500 hover:text-red-700 font-medium"
                >
                    Delete
                </button>


            </div>

        );

    }


    return (

        <div className="min-h-screen bg-gray-100 p-6">


            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">


                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    📝 Notes App
                </h1>


                <div className="flex gap-3">


                    <input

                    type="text"

                    value={note}

                    onChange={(event)=>{
                        setNote(event.target.value);
                    }}

                    placeholder="Write your note..."

                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

                    />


                    <button

                    onClick={AddNote}

                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"

                    >

                    Add

                    </button>


                </div>



                <div className="mt-8 space-y-3">


                    {noteList}


                </div>


            </div>


        </div>

    );

}


export default Note;
