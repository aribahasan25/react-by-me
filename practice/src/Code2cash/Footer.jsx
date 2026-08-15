import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            Code<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2Cash</span>
          </h2>

          <p className="mt-5 max-w-sm leading-7 text-gray-500">
            Building modern digital experiences with technology and
            creativity.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link to="/about" className="text-gray-500 transition hover:text-cyan-400">
              About
            </Link>

            <Link to="/services" className="text-gray-500 transition hover:text-cyan-400">
              Services
            </Link>

            <Link to="/careers" className="text-gray-500 transition hover:text-cyan-400">
              Careers
            </Link>

            <Link to="/contact" className="text-gray-500 transition hover:text-cyan-400">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">Contact</h3>

          <div className="mt-5 space-y-3 text-gray-500">
            <p>hello@code2cash.dev</p>
            <p>+91 98765 43210</p>
            <p>Patna, Bihar</p>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 pt-8 text-center text-sm text-gray-600">
        © 2026 Code2Cash. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;