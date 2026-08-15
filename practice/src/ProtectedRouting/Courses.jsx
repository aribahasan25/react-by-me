function Courses() {

  const courses = [
    {
      name: "React Development",
      progress: "80%",
      icon: "⚛️",
    },
    {
      name: "Data Structures",
      progress: "65%",
      icon: "🧠",
    },
    {
      name: "Database Management",
      progress: "72%",
      icon: "🗄️",
    },
    {
      name: "Computer Networks",
      progress: "55%",
      icon: "🌐",
    },
  ];

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          My Courses
        </h1>

        <p className="text-slate-400 mt-2">
          Track your learning progress.
        </p>

      </div>


      <div className="grid md:grid-cols-2 gap-5">

        {courses.map((course) => (

          <div
            key={course.name}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
                {course.icon}
              </div>

              <div>

                <h2 className="text-lg font-semibold">
                  {course.name}
                </h2>

                <p className="text-slate-400 text-sm">
                  Progress: {course.progress}
                </p>

              </div>

            </div>


            <div className="mt-6 h-2 bg-slate-800 rounded-full overflow-hidden">

              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{
                  width: course.progress,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;