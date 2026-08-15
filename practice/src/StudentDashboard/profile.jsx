function Profile() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <div className="flex items-center gap-6">

        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h1 className="text-3xl font-bold">
            Ariba Hasan
          </h1>

          <p className="text-gray-600">
            B.Tech CSE Student
          </p>

          <p className="text-gray-500">
            Passionate about React & Frontend Development
          </p>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-blue-100 p-5 rounded-lg text-center">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Projects</p>
        </div>

        <div className="bg-green-100 p-5 rounded-lg text-center">
          <h2 className="text-2xl font-bold">25</h2>
          <p>Certificates</p>
        </div>

        <div className="bg-yellow-100 p-5 rounded-lg text-center">
          <h2 className="text-2xl font-bold">8</h2>
          <p>Skills</p>
        </div>

      </div>

    </div>
  );
}

export default Profile;