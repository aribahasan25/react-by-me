
import { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Controlled Form
        </h1>

        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>

        <div className="mt-6 border-t pt-4">
          <h2 className="font-semibold mb-2">Live Preview</h2>

          <p>
            <strong>Name:</strong> {name}
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Password:</strong> {password}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlledComponent;