function Nav() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Student Dashboard
      </h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-yellow-300">
          Home
        </li>

        <li className="cursor-pointer hover:text-yellow-300">
          Profile
        </li>

        <li className="cursor-pointer hover:text-yellow-300">
          Courses
        </li>

      </ul>

    </nav>
  );
}

export default Nav;