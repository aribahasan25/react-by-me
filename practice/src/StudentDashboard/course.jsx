function Course() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        My Courses
      </h1>


      <div className="grid grid-cols-3 gap-6">

        <div className="border rounded-xl p-6 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            React JS
          </h2>

          <p className="text-gray-600">
            Learn components, props, state and hooks.
          </p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg">
            Continue
          </button>
        </div>


        <div className="border rounded-xl p-6 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            JavaScript
          </h2>

          <p className="text-gray-600">
            Learn functions, arrays and modern JS concepts.
          </p>

          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg">
            Continue
          </button>
        </div>


        <div className="border rounded-xl p-6 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Tailwind CSS
          </h2>

          <p className="text-gray-600">
            Create beautiful responsive designs.
          </p>

          <button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg">
            Continue
          </button>
        </div>

      </div>

    </div>
  );
}

export default Course;