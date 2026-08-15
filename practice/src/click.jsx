import { useState } from "react";

function Click() {
  // State banayi
  // val = current value
  // setVal = value change karne wala function
  const [val, setVal] = useState("");

  return (
    <div>
      {/* Heading */}
      <h1>Get Input Field Value</h1>

      {/* Input Field */}
      <input
        type="text" // Text input
        value={val} // Input ki value state se aa rahi hai
        placeholder="Enter name"

        // Jab bhi user type karega
        // event.target.value se input ki value milegi
        // setVal() state update karega
        onChange={(event) => {
          setVal(event.target.value);
        }}
      />

      {/* State ki value screen par show hogi */}
      <h2>Your Name: {val}</h2>
    </div>
  );
}

export default Click;