import { projects } from "./data";

function Projects() {
  return (
    <section className="bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Our Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-900/40 to-slate-950 text-5xl transition-transform duration-500 group-hover:scale-105">
                {"</>"}
                <img src={project.logo} alt={project.title} className="max-h-full max-w-full object-contain"
                
                />
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 rounded-lg bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400 hover:bg-cyan-400/20">
                    View Project
                  </button>
                </a>
              </div>

              <div className="p-7">
                <p className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;