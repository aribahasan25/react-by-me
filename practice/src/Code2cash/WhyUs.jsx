function WhyUs() {
  const points = [
    "Modern technology",
    "User-focused development",
    "Scalable architecture",
    "Transparent communication",
  ];

  return (
    <section className="bg-slate-900 px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Built around your goals
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/60 p-6 text-left transition-all duration-300 hover:border-cyan-400/20 hover:bg-slate-950/80"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-sm text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                ✓
              </span>
              <span className="font-medium">{point}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUs;