function Footer2() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">

      <div className="text-center">

        <h3 className="text-lg font-semibold mb-2">
          React FAQ
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          Learn React concepts with simple explanations and examples.
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <span className="cursor-pointer hover:text-white transition">
            Home
          </span>

          <span className="cursor-pointer hover:text-white transition">
            FAQs
          </span>

          <span className="cursor-pointer hover:text-white transition">
            Contact
          </span>
        </div>

        <p className="text-gray-500 text-xs mt-5">
          © 2026 React FAQ. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer2;