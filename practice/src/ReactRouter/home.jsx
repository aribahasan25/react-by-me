import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            MyWebsite
          </h1>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Welcome to MyWebsite
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            A simple, modern and user-friendly platform
            designed to make your experience easier.
          </p>

          <Link
            to="/about"
            className="inline-block bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </Link>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Features
          </h2>

          <p className="text-gray-600 mt-3">
            Everything you need in one simple platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-5">
              🚀
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Fast
            </h3>

            <p className="text-gray-600 leading-6">
              Enjoy a smooth and fast experience while
              navigating through the website.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-5">
              🎨
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Modern Design
            </h3>

            <p className="text-gray-600 leading-6">
              Clean and responsive design that works
              across different screen sizes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-5">
              🔒
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Reliable
            </h3>

            <p className="text-gray-600 leading-6">
              A simple platform focused on usability
              and a better user experience.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Want to Know More?
          </h2>

          <p className="text-gray-400 mb-7">
            Learn more about our platform and what we are
            trying to build.
          </p>

          <Link
            to="/about"
            className="inline-block bg-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            About Us
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-7">
        <div className="text-center">
          <p>
            © 2026 MyWebsite. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default Home;