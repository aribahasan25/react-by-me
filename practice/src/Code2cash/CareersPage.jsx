import { useState } from "react";

function CareersPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 px-6 pb-24 pt-32">
      <div className="pointer-events-none absolute -top-40 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Careers
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Start Your Journey
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Learn, build and work on practical technology projects.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-white/5 bg-slate-900/50 p-10">
          <h2 className="text-2xl font-bold">
            Frontend Development Intern
          </h2>

          <p className="mt-4 text-gray-400">
            Work with React, JavaScript, responsive UI and modern
            development practices.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-400">
              React
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-400">
              JavaScript
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-400">
              Tailwind
            </span>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
          >
            Apply Now
          </button>
        </div>

        {showForm && (
          <div className="mt-8 rounded-2xl border border-white/5 bg-slate-900/50 p-10">
            <h2 className="text-2xl font-bold">
              Application Form
            </h2>

            <form className="mt-8 grid gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />

              <input
                type="text"
                placeholder="GitHub / Portfolio URL"
                className="rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Submit Application
              </button>

            </form>
          </div>
        )}

      </div>
    </main>
  );
}

export default CareersPage;