function Settings() {
  return (
    <div className="max-w-2xl">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your account preferences.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center justify-between border-t border-slate-800 pt-6">

          <div>
            <h3 className="font-semibold">
              Email Notifications
            </h3>

            <p className="text-sm text-slate-400">
              Receive updates about your courses.
            </p>
          </div>

          <input
            type="checkbox"
            className="w-5 h-5 accent-indigo-600"
          />

        </div>

        <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition">
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;