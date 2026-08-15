import { useState } from 'react';
import students from './data1.js';
import StudentCard from './studentCard.jsx';

function StudentList() {
    const [fav, setFav] = useState([]);

    const Add = (item) => {
        if (!fav.includes(item)) {
            setFav([...fav, item]);
        } else {
            alert(`${item.name} already exist!!!!`);
        }
    };

    const Del = (item_id) =>{
        setFav(fav.filter((favitem)=> favitem.id !==item_id))


    }

    return (
        <>
            <div>
                <h1>hi</h1>
                {
                    students.map((std) => (
                        <div key={std.id} className="flex justify-center items-center">
                            <StudentCard
                                student={std}
                            />
                            <button className="bg-green-400 rounded-full p-4"  onClick={() => Add(std)}> Add fav</button>
                        </div>
                    ))
                }
            </div>
            <div>
                <hr className="border-2 text-3xl text-amber-950"/>
                {
                    fav.map((item) => (
                        <div key={item.id} className="flex justify-center items-center">
                            <StudentCard
                                student={item}
                            />

                             <button className="bg-red-500 rounded-full p-4"  onClick={() => Del(item.id)}> delete fav</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default StudentList;
    