import { useState } from "react";

const CharCount = () => {
  const [text, setText] = useState("");

  function HandleClick(e) {
    if (e.target.value.length <= 20) {
      setText(e.target.value);
    }
  }

   

   
  return (
    <div>
      <h1>char count</h1>

    <input
   value={text}
   onChange={HandleClick}
/>

      <h1>Character: {text.length}
    
      </h1>
    </div>
  );
};

export default CharCount;

