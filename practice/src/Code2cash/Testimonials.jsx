import { testimonials } from "./data";

function Testimonials() {
  return (
    <section className="relative bg-slate-900 px-6 py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What People Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/5 bg-slate-950/60 p-8 transition-all duration-300 hover:border-cyan-400/20"
            >
              <div className="text-4xl font-serif text-cyan-400/40">"</div>

              <p className="mt-3 leading-7 text-gray-400">
                {item.text}
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-slate-950">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;