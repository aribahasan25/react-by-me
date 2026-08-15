import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// DashboardOverview displays stats and quick summary when the user first logs in
export function DashboardOverview() {
  const stats = [
    { name: "Enrolled Courses", value: "4", icon: "📚", color: "from-blue-600 to-indigo-600" },
    { name: "Average Progress", value: "68%", icon: "📈", color: "from-emerald-600 to-teal-600" },
    { name: "Study Hours", value: "32.5 hrs", icon: "⚡", color: "from-amber-600 to-orange-600" },
    { name: "Certificates", value: "2", icon: "🏆", color: "from-fuchsia-600 to-pink-600" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-20 bottom-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
        <div className="max-w-md">
          <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
            Welcome Back
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-4">
            Hello, Student! 👋
          </h1>
          <p className="text-slate-400 mt-2 leading-relaxed">
            Ready to continue your learning journey? You have completed 2 topics this week. Keep up the great work!
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              to="/dashboard/courses"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium transition shadow-lg shadow-indigo-600/20 text-sm"
            >
              Resume Learning
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 relative group overflow-hidden transition-all duration-300 hover:border-slate-700/80 hover:translate-y-[-2px]"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm font-medium">{stat.name}</p>
                <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Quick Summary Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column: Recent Progress */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Recent Progress</h3>
            <Link to="/dashboard/courses" className="text-indigo-400 hover:text-indigo-300 text-xs font-medium">
              View All Courses &rarr;
            </Link>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">⚛️ React Development</span>
                <span className="text-slate-400">80%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">🧠 Data Structures</span>
                <span className="text-slate-400">65%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">🗄️ Database Management</span>
                <span className="text-slate-400">72%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: "72%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tips & Reminders */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Daily Study Tip</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              "The Pomodoro Technique can boost focus. Study for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break."
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Next Deadline</h4>
              <p className="text-sm text-indigo-400 font-medium">Database Assignment (Tomorrow, 11:59 PM)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Dashboard Layout
export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: "📊" },
    { name: "My Courses", path: "/dashboard/courses", icon: "⚛️" },
    { name: "Profile", path: "/dashboard/profile", icon: "👤" },
    { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800/80 shrink-0">
        {/* Brand */}
        <div className="h-20 flex items-center gap-3 px-6 border-b border-slate-800/50">
          <span className="text-3xl">🎓</span>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            StudentPortal
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1.5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-slate-800/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all duration-200"
          >
            <span className="text-xl">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-slate-900/60 border-b border-slate-800/50 flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-4">
            {/* Hamburger button for mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <span className="text-xl">☰</span>
            </button>
            <h2 className="text-xl font-semibold text-white">
              {menuItems.find((item) => item.path === location.pathname)?.name || "Dashboard"}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-slate-400 font-medium">student@example.com</span>
            <div className="w-10 h-10 rounded-full bg-indigo-600/25 border border-indigo-500/30 flex items-center justify-center text-xl">
              👩‍💻
            </div>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Menu */}
            <div className="relative flex flex-col w-64 bg-slate-900 border-r border-slate-800 h-full p-5 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  StudentPortal
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                        isActive
                          ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
              >
                <span className="text-xl">🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}