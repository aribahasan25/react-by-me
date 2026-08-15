import { useState, useMemo } from "react";

function Employee() {

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [sortBy, setSortBy] = useState("");


  const employees = [
    {
      id: 1,
      name: "Aman Kumar",
      department: "Frontend",
      salary: 65000,
      experience: 2,
      email: "aman@gmail.com",
    },
    {
      id: 2,
      name: "Ariba Hasan",
      department: "Frontend",
      salary: 72000,
      experience: 3,
      email: "ariba@gmail.com",
    },
    {
      id: 3,
      name: "Rahul Singh",
      department: "Backend",
      salary: 85000,
      experience: 5,
      email: "rahul@gmail.com",
    },
    {
      id: 4,
      name: "Sara Ali",
      department: "UI/UX",
      salary: 60000,
      experience: 2,
      email: "sara@gmail.com",
    },
    {
      id: 5,
      name: "Faizan Khan",
      department: "QA",
      salary: 58000,
      experience: 1,
      email: "faizan@gmail.com",
    }
  ];


  const filteredEmploy = useMemo(() => {

    let result = employees.filter((employee)=>{

      const searchMatch =
      employee.name
      .toLowerCase()
      .includes(search.toLowerCase());


      const departmentMatch =
      department === "" ||
      employee.department === department;


      const salaryMatch =
      minSalary === "" ||
      employee.salary >= Number(minSalary);


      const experienceMatch =
      minExperience === "" ||
      employee.experience >= Number(minExperience);



      return (
        searchMatch &&
        departmentMatch &&
        salaryMatch &&
        experienceMatch
      );

    });



    if(sortBy === "salaryLow"){
      result.sort((a,b)=>a.salary-b.salary);
    }


    if(sortBy === "salaryHigh"){
      result.sort((a,b)=>b.salary-a.salary);
    }


    if(sortBy === "expLow"){
      result.sort((a,b)=>a.experience-b.experience);
    }


    if(sortBy === "expHigh"){
      result.sort((a,b)=>b.experience-a.experience);
    }



    return result;


  },[
    employees,
    search,
    department,
    minSalary,
    minExperience,
    sortBy
  ]);



return (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Employee Dashboard
      </h2>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-5 gap-4 mb-8">

        <input
          type="text"
          placeholder="Search Employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Department</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="UI/UX">UI/UX</option>
          <option value="QA">QA</option>
        </select>

        <input
          type="number"
          placeholder="Minimum Salary"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Minimum Experience"
          value={minExperience}
          onChange={(e) => setMinExperience(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Default</option>
          <option value="salaryLow">Salary Low - High</option>
          <option value="salaryHigh">Salary High - Low</option>
          <option value="expLow">Experience Low - High</option>
          <option value="expHigh">Experience High - Low</option>
        </select>

      </div>

      {/* Employee Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredEmploy.map((employee) => (

          <div
            key={employee.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-t-4 border-blue-500"
          >

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {employee.name}
            </h3>

            <p className="mb-2">
              <span className="font-semibold">Department:</span>{" "}
              {employee.department}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Salary:</span> ₹
              {employee.salary}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Experience:</span>{" "}
              {employee.experience} Years
            </p>

            <p className="text-gray-600 break-all">
              <span className="font-semibold">Email:</span>{" "}
              {employee.email}
            </p>

          </div>

        ))}

      </div>

      {filteredEmploy.length === 0 && (
        <h3 className="text-center text-3xl font-bold text-red-500 mt-10">
          No Employee Found
        </h3>
      )}

    </div>
  </div>
);

}

export default Employee;