function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        Study<span className="text-blue-400">Flow</span>
      </h1>

      <nav className="space-y-3">

        <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-500">
          Dashboard
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
          Tasks
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
          Subjects
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
          Calendar
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
          Focus Timer
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800">
          Settings
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;