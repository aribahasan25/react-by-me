import { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Enter password";
  };

  const handleToggler = () => {
    if (inputRef.current.style.display !== "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "block";
    }
  };

 

  return (
    <>
      <h1>useRef</h1>

      <button onClick={handleToggler}>
        Toggle Input
      </button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={inputHandler}>
        Focus on the field
      </button>
      <button onClick = {color}>
        change
      </button>

    </>
  );
}

export default UseRef;