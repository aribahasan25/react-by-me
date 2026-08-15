function Sidebar() {
  return (
    <aside className="w-72 min-h-screen  slate-900  p-6">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Dashboard
      </h2>

      <ul className="space-y-4">

        <li className=" slate-800 p-4 rounded-lg hover: blue-600 cursor-pointer transition">
          🏠 Dashboard
        </li>

        <li className=" slate-800 p-4 rounded-lg hover: blue-600 cursor-pointer transition">
          👨‍🎓 Students
        </li>

        <li className=" slate-800 p-4 rounded-lg hover: blue-600 cursor-pointer transition">
          📚 Courses
        </li>

        <li className=" slate-800 p-4 rounded-lg hover: blue-600 cursor-pointer transition">
          📈 Attendance
        </li>

        <li className=" slate-800 p-4 rounded-lg hover: blue-600 cursor-pointer transition">
          💰 Fees
        </li>

        <li className=" slate-800 p-4 rounded-lg hover: blue-600 cursor-pointer transition">
          ⚙ Settings
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;