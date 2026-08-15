function About() {
  return (
    <section className="relative bg-slate-950 px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Technology with a purpose
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-400">
            We believe technology should solve problems, simplify
            experiences and create measurable value. Our team focuses
            on building practical digital products using modern tools
            and development practices.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/5 bg-slate-900/50 p-5 text-center">
              <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">25+</h3>
              <p className="mt-2 text-sm font-medium text-gray-500">Projects</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-slate-900/50 p-5 text-center">
              <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">15+</h3>
              <p className="mt-2 text-sm font-medium text-gray-500">Clients</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-slate-900/50 p-5 text-center">
              <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10+</h3>
              <p className="mt-2 text-sm font-medium text-gray-500">Technologies</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;