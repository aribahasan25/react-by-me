import React from "react";
import StatsCard from "./StatsCard";
import TaskList from "./TaskList";

function Dashboard({ tasks = [], onToggleComplete }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (t) => t.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const progressPercentage =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;


  return (

    <div className="p-6">

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-5 mb-8">

        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          color="text-blue-600"
        />

        <StatsCard
          title="Completed"
          value={completedTasks}
          color="text-green-600"
        />

        <StatsCard
          title="Pending"
          value={pendingTasks}
          color="text-orange-500"
        />

        <StatsCard
          title="Progress"
          value={`${progressPercentage}%`}
          color="text-purple-600"
        />

      </div>


      {/* Main Grid */}

      <div className="grid lg:grid-cols-3 gap-6">


        {/* Tasks */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">


          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-bold text-gray-800">
              Today's Tasks
            </h2>


            <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              {completedTasks}/{totalTasks} Completed
            </span>

          </div>


          <TaskList
            tasks={tasks}
            onToggleComplete={onToggleComplete}
          />


        </div>



        {/* Focus Session */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">

          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Focus Session
          </h2>


          <p className="text-sm text-gray-500 mb-6">
            Use Pomodoro timer to boost productivity.
          </p>


          <div className="text-center">

            <h1 className="text-5xl font-extrabold font-mono text-gray-800">
              25:00
            </h1>


            <button className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition">
              Start Timer
            </button>

          </div>


        </div>


      </div>


    </div>

  );
}


export default Dashboard;