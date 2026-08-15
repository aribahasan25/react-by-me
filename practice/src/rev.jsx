import {useState} from 'react'


    function Counter(){
      const [text, setText] = useState("");
      const[ count, setCount] = useState(0);

      const handleChange = (event) =>{
        const value = event.target.value;
        setText(value);
        setCount(value.length);

      }

    return(

        <>
        <div className="mt-5 flex justify-between items-center ml-5 ">
        <input type="text" 
        value = {text}
        onChange = {handleChange}
        className="p-2 bg-amber-100 text-black  border border-b-fuchsia-700"
        
        />
        </div>
        <h1>Character count :{count}</h1>
        
        
        </>
    );
}




export default Counter