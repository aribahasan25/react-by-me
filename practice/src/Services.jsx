function Services() {
  return (
    <section className="py-16 px-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-3 gap-8">

        <div className="shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Web Development
          </h3>

          <p className="text-gray-600">
            Build responsive websites using HTML, CSS and React.
          </p>
        </div>

        <div className="shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-3">
            React Development
          </h3>

          <p className="text-gray-600">
            Create modern web applications using React.
          </p>
        </div>

        <div className="shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-3">
            UI Design
          </h3>

          <p className="text-gray-600">
            Design beautiful interfaces with Tailwind CSS.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;