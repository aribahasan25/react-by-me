function Nav2() {
  return (
    <nav className="bg-white shadow-md px-6 md:px-10 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          ?
        </div>

        <h2 className="text-xl font-bold text-gray-800">
          React FAQ
        </h2>
      </div>


      {/* Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

        <li className="cursor-pointer hover:text-blue-600 transition duration-300">
          Home
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition duration-300">
          FAQs
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition duration-300">
          Contact
        </li>

      </ul>


      {/* Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Get Started
      </button>

    </nav>
  );
}

export default Nav2;