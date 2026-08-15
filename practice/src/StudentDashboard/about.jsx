function About() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        About Us
      </h1>

      <p className="text-gray-600 text-lg leading-7">
        Welcome to our Student Dashboard. 
        This project is created to practice React components,
        Layout, Wrapper and Children concepts.
      </p>


      <div className="mt-8 grid grid-cols-3 gap-5">

        <div className="bg-blue-100 p-5 rounded-lg">
          <h2 className="font-bold text-xl">
            React
          </h2>
          <p>
            Building reusable components.
          </p>
        </div>


        <div className="bg-green-100 p-5 rounded-lg">
          <h2 className="font-bold text-xl">
            Tailwind
          </h2>
          <p>
            Creating modern UI designs.
          </p>
        </div>


        <div className="bg-yellow-100 p-5 rounded-lg">
          <h2 className="font-bold text-xl">
            Learning
          </h2>
          <p>
            Improving frontend skills.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;