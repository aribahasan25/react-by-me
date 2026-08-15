import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 pt-20">

      {/* Background decorative blurs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        <div className="animate-fade-in-up">
          <p className="mb-5 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technology & Innovation
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Build.
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Innovate.</span>
            <br />
            Grow.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            We create modern digital solutions that help businesses turn
            ideas into scalable products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="animate-float animate-pulse-glow flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 md:h-96 md:w-96">
            <div className="text-center">
              <div className="text-7xl font-bold text-cyan-300">{"</>"}</div>
              <p className="mt-4 text-sm font-medium tracking-widest text-cyan-300/80">
                Digital Solutions
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;