function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-10 py-4">
      <h1 className="text-2xl font-bold">CodeHub</h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-yellow-300">Home</li>
        <li className="cursor-pointer hover:text-yellow-300">About</li>
        <li className="cursor-pointer hover:text-yellow-300">Services</li>
        <li className="cursor-pointer hover:text-yellow-300">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;