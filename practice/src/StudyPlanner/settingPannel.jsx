function SettingsPanel() {

  return (

    <div className="bg-white rounded-xl shadow-sm p-6">


      <h2 className="text-xl font-bold mb-6">
        Settings
      </h2>


      <div className="space-y-5">


        {/* Theme */}

        <div className="flex items-center justify-between">

          <div>
            <h3 className="font-semibold">
              Dark Mode
            </h3>

            <p className="text-sm text-gray-500">
              Change dashboard appearance
            </p>
          </div>


          <button className="w-14 h-7 bg-gray-300 rounded-full relative">

            <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full">
            </span>

          </button>


        </div>




        {/* Notification */}

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">
              Notifications
            </h3>

            <p className="text-sm text-gray-500">
              Get task reminders
            </p>

          </div>


          <input
            type="checkbox"
            className="w-5 h-5"
          />


        </div>





        {/* Profile */}

        <div>

          <h3 className="font-semibold mb-3">
            Profile
          </h3>


          <div className="border rounded-lg p-4">

            <p className="font-medium">
              Student
            </p>

            <p className="text-sm text-gray-500">
              Computer Science
            </p>

          </div>


        </div>



      </div>


    </div>

  );

}


export default SettingsPanel;