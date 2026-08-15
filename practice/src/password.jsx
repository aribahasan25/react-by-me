import { useState } from "react";


const Password = () => {

  const [showPassword, setShowPassword] = useState(false);


  function HandleShow() {
    setShowPassword(!showPassword);
  }


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">


      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">


        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Password Toggle
        </h1>


        <div className="flex gap-3">


          <input

            type={showPassword ? "text" : "password"}

            placeholder="Enter password"

            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

          />


          <button

            onClick={HandleShow}

            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"

          >

            {showPassword ? "Hide" : "Show"}

          </button>


        </div>


      </div>


    </div>

  )

}


export default Password;