import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 hidden md:block">

        <h1 className="text-2xl font-bold text-blue-400 mb-10">
          MyWebsite
        </h1>

        <nav className="space-y-3">

          <Link
            to="/"
            className="block px-4 py-3 rounded-lg hover:bg-gray-800"
          >
            🏠 Home
          </Link>

          <Link
            to="/about"
            className="block px-4 py-3 rounded-lg hover:bg-gray-800"
          >
            ℹ️ About
          </Link>

          <Link
            to="/dashboard"
            className="block px-4 py-3 rounded-lg bg-blue-600"
          >
            📊 Dashboard
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">

        {/* Top Navbar */}
        <header className="bg-white shadow-sm px-6 py-5 flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 text-sm">
              Welcome back! Here's your overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>

            <span className="font-medium text-gray-700">
              Ariba
            </span>
          </div>

        </header>

        {/* Dashboard Content */}
        <section className="p-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Total Users
              </p>

              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                1,250
              </h3>

              <p className="text-green-600 text-sm mt-2">
                ↑ 12% this month
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Projects
              </p>

              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                48
              </h3>

              <p className="text-green-600 text-sm mt-2">
                ↑ 8% this month
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Completed
              </p>

              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                36
              </h3>

              <p className="text-blue-600 text-sm mt-2">
                75% completion
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Pending
              </p>

              <h3 className="text-3xl font-bold text-gray-800 mt-2">
                12
              </h3>

              <p className="text-orange-500 text-sm mt-2">
                Needs attention
              </p>
            </div>

          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Recent Activity
              </h3>

              <div className="space-y-5">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      New project created
                    </p>

                    <p className="text-sm text-gray-500">
                      10 minutes ago
                    </p>
                  </div>

                  <span className="text-green-600">
                    ✓
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      Profile updated
                    </p>

                    <p className="text-sm text-gray-500">
                      2 hours ago
                    </p>
                  </div>

                  <span className="text-blue-600">
                    ✓
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      Task completed
                    </p>

                    <p className="text-sm text-gray-500">
                      Yesterday
                    </p>
                  </div>

                  <span className="text-green-600">
                    ✓
                  </span>
                </div>

              </div>

            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Project Progress
              </h3>

              <div className="space-y-6">

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">
                      React Project
                    </span>

                    <span className="font-semibold">
                      80%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full w-[80%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">
                      Database
                    </span>

                    <span className="font-semibold">
                      65%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-[65%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">
                      Testing
                    </span>

                    <span className="font-semibold">
                      45%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full w-[45%]"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Quick Actions
            </h3>

            <div className="flex flex-wrap gap-4">

              <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
                + New Project
              </button>

              <button className="bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200">
                View Reports
              </button>

              <button className="bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200">
                Settings
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;