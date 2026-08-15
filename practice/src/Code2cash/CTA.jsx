import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-24 text-white">
      <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">

        <h2 className="text-4xl font-extrabold md:text-5xl">
          Have an idea?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          Let's turn your idea into a useful digital product.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-block rounded-xl bg-slate-950 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}

export default CTA;