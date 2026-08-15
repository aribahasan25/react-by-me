import { useState } from "react";

function Drop() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>Handle Radio Button & Dropdown in React</h1>

      <h3>Select Gender</h3>

      <input
        type="radio"
        name="gender"
        value="Male"
        id="male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="male">Male</label>

      <br />

      <input
        type="radio"
        name="gender"
        value="Female"
        id="female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender: {gender}</h2>

      <hr />

      <h3>Select City</h3>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">-- Select City --</option>
        <option value="Noida">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Patna">Patna</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <h2>Selected City: {city}</h2>
    </div>
  );
}

export default Drop;