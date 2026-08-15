import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Our Website
          </h1>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Welcome to our platform. We are building a simple,
            useful and user-friendly experience for everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              Our website is designed to provide users with a
              simple and modern platform where they can easily
              access useful features and information.
            </p>

            <p className="text-gray-600 leading-7">
              We focus on creating a clean interface, smooth
              navigation and a better overall user experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">
              What We Provide
            </h3>

            <div className="space-y-5">

              <div>
                <h4 className="font-semibold text-blue-600">
                  🚀 Fast Experience
                </h4>
                <p className="text-gray-600 mt-1">
                  Simple and fast navigation throughout the website.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">
                  🎨 Modern Design
                </h4>
                <p className="text-gray-600 mt-1">
                  A clean and responsive interface for users.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">
                  🔒 User Friendly
                </h4>
                <p className="text-gray-600 mt-1">
                  Everything is designed to be easy to understand.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Our Mission
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Our mission is to create a platform that is simple,
            accessible and useful while providing a smooth
            experience for every user.
          </p>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              10K+
            </h3>
            <p className="text-gray-600 mt-2">
              Users
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              50+
            </h3>
            <p className="text-gray-600 mt-2">
              Features
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              24/7
            </h3>
            <p className="text-gray-600 mt-2">
              Availability
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="text-center">
          <p>
            © 2026 Our Website. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default About;