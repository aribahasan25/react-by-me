import { services } from "./data";

function Services() {
  return (
    <section className="relative bg-slate-900 px-6 py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Technology solutions designed around real business problems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-white/5 bg-slate-950/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;