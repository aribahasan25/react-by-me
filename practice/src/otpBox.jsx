import React, { useRef, useImperativeHandle, forwardRef } from "react";

const OtpBox = forwardRef((props, otpRef) => {
  const inputRefs = useRef([]);

  function handleInputChange(e, index) {

    if (e.target.value.length === 1 ) {
      inputRefs.current[index + 1].focus();
    }

    if (e.target.value.length === 0 ) {
      inputRefs.current[index - 1].focus();
    }
  }

  function handleClear() {
    inputRefs.current.forEach((input) => {
      input.value = "";
    });

    inputRefs.current[0].focus();
  }


  useImperativeHandle(otpRef, () => ({
    focusFirstInput: () => {
      inputRefs.current[0].focus();
    },

    focusNext: (index) => {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    },

    focusPrevious: (index) => {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    },

    clear: handleClear
  }));


  return (
    <div>

      <div className="flex justify-center gap-3">
        {[0,1,2,3,4].map((item)=>(
          <input
            key={item}
            type="text"
            maxLength={1}
            className="w-14 h-14 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ref={(el)=>(inputRefs.current[item]=el)}
            onChange={(e)=>handleInputChange(e,item)}
          />
        ))}
      </div>

      <button
        onClick={handleClear}
        className="mt-5 bg-red-500 text-white px-5 py-2 rounded-lg"
      >
        Clear
      </button>

    </div>
  );
});

export default OtpBox;