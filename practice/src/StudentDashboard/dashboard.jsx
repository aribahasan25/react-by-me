function Dashboard() {
  return (
    <div className="min-h-[500px] bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Student Dashboard
      </h1>


      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Courses
          </h2>

          <p className="mt-2 text-gray-600">
            React, JavaScript, Tailwind
          </p>
        </div>


        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Progress
          </h2>

          <p className="mt-2 text-gray-600">
            70% Completed
          </p>
        </div>


        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Tasks
          </h2>

          <p className="mt-2 text-gray-600">
            5 Pending Tasks
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;