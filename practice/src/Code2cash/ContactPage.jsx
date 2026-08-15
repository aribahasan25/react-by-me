import { useState } from "react";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen bg-slate-950 px-6 pb-24 pt-32">
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-16 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight">
              Let's Talk
            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              Have a project idea? Tell us what you're building and
              we'll explore how technology can help.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 text-gray-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">📧</span>
                <span>hello@code2cash.dev</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">📱</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">📍</span>
                <span>Patna, Bihar</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-8">

            {submitted ? (
              <div className="py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-3xl text-white">✓</div>

                <h2 className="mt-6 text-2xl font-bold">
                  Message Sent!
                </h2>

                <p className="mt-3 text-gray-400">
                  Thanks for contacting us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
                />

                <textarea
                  required
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/5 bg-slate-950/80 px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Send Message
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}

export default ContactPage;