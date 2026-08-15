import {useState} from "react";

function Safia() {

    const[count ,setCount] = useState(0);

    
  return (
    <>
    <button onClick={()=>
    setCount(count+1)

    }>
        safia
    </button>

    <br/>
    <button onClick={()=>
    setCount(count+1)
    }>  safiaEkpiecehai</button>

      
   <h2>{count}</h2>
    </>
  )
}

export default Safia