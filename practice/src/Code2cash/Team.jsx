import { team } from "./data";

function Team() {
  return (
    <section className="relative bg-slate-950 px-6 py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Our Team
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Meet the People Behind Code2Cash
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            A passionate team of developers building real-world digital products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl border border-white/5 bg-slate-900/40 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>

              <h3 className="mt-6 text-lg font-bold">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-cyan-400">
                {member.role}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
