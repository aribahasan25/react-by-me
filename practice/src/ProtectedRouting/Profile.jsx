function Profile() {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <div className="flex items-center gap-5 mb-8">

        <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-3xl">
          👩‍💻
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Student Profile
          </h1>

          <p className="text-slate-400">
            Computer Science Student
          </p>

        </div>

      </div>


      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-slate-800 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Name
          </p>

          <p className="text-white mt-2">
            Student
          </p>

        </div>


        <div className="bg-slate-800 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Email
          </p>

          <p className="text-white mt-2">
            student@example.com
          </p>

        </div>


        <div className="bg-slate-800 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Department
          </p>

          <p className="text-white mt-2">
            Computer Science
          </p>

        </div>


        <div className="bg-slate-800 rounded-xl p-5">

          <p className="text-slate-400 text-sm">
            Status
          </p>

          <p className="text-green-400 mt-2">
            Active
          </p>

        </div>

      </div>

    </div>
  );
}

export default Profile;