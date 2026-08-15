

function Dashboard() {
  return (
    <div className="p-8  min-h-screen">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="">
            Here's your student dashboard overview.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Student
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className=" rounded-xl shadow p-6">
          <h3 className="text-gray-500">Total Students</h3>
          <h1 className="text-4xl font-bold mt-2">540</h1>
        </div>

        <div className=" rounded-xl shadow p-6">
          <h3 className="">Courses</h3>
          <h1 className="text-4xl font-bold mt-2">18</h1>
        </div>

        <div className=" rounded-xl shadow p-6">
          <h3 className="">Attendance</h3>
          <h1 className="text-4xl font-bold mt-2">91%</h1>
        </div>

        <div className=" rounded-xl shadow p-6">
          <h3 className="">Teachers</h3>
          <h1 className="text-4xl font-bold mt-2">42</h1>
        </div>

      </div>

      {/* Student Table */}
      <div className=" rounded-xl shadow mt-10 p-6">

        <h2 className="text-2xl font-bold mb-5">
          Recent Students
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Course</th>
              <th className="text-left py-3">Semester</th>
              <th className="text-left py-3">Attendance</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-4">Ariba Hasan</td>
              <td>CSE</td>
              <td>4th</td>
              <td>90%</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">Rahul Kumar</td>
              <td>ECE</td>
              <td>3rd</td>
              <td>88%</td>
            </tr>

            <tr>
              <td className="py-4">Anjali Singh</td>
              <td>IT</td>
              <td>2nd</td>
              <td>95%</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;