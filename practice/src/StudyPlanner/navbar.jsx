function Navbar() {
  return (
    <header className="bg-white rounded-xl shadow-sm p-5 flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Good Evening 👋
        </h2>

        <p className="text-gray-500">
          Complete your goals today
        </p>
      </div>


      <div className="flex items-center gap-4">

        <button className="bg-slate-900 text-white px-5 py-2 rounded-lg">
          Profile
        </button>

      </div>

    </header>
  );
}

export default Navbar;